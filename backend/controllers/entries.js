import { con } from "../index.js";
import axios from 'axios'

export const getAllEntriesHelper = (req, res) => {
    let sql = 'SELECT * FROM entries';
    con.query(sql, (err, result) => {
        if (err)
            return res.status(400).json({ success: false, message: "Error in retrieving data" });
        res
            .status(200)
            .json({
                success: true,
                result
            })
    })
}

export const addNewEntry = async(req, res) => {

    const { username, language, stdin, source } = req.body
    let stdout=""
    //Fetch the details for stdout
    const options = {
        method: 'POST',
        url: 'https://judge0-ce.p.rapidapi.com/submissions',
        params: {
            base64_encoded: 'true',
            fields: '*'
        },
        headers: {
            'content-type': 'application/json',
            'Content-Type': 'application/json',
            'X-RapidAPI-Key': 'e841e887d3msh3ae83f4ff4ba043p166aecjsn6eb1a91f3892',
            'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
        },
        data: {
            language_id: Number(language),
            source_code: source,
            stdin: stdin
        }
    };

    try {
        const response = await axios.request(options);
        let token=response.data.token
        const finalData= await axios.request({
            method: 'GET',
            url:`https://ce.judge0.com/submissions/${token}?base64_encoded=false&fields=stdout,stderr,status_id,language_id`
        })
        const tempRes= await finalData.data;
        stdout=tempRes
    } catch (error) {
        console.error(error);
    }

    // Format date for timestamp
    let date = new Date().toISOString().split('T')[0]
    if(stdout !== "")
        stdout="Could not fetch result"
    //Write and Run query
    let sql = 'INSERT INTO entries (username,language,stdin,stdout,source,timestamp) values (?,?,?,?,?,?)'
    con.query(sql, [username, language, stdin, stdout, source, date], (err, result) => {
        if (err)
            return res.status(400).json({ success: false, message: "Error in adding data" });
        res
            .status(200)
            .json({
                success: true,
                message: "New entry added Successfully"
            })
    })
}
