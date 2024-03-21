import React, { useEffect, useState } from "react";
import "./results.css";
import IndividualRow from "../IndividualRow";
import { motion } from "framer-motion";
import { ClipLoader, PacmanLoader } from "react-spinners";

function Results() {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState([
    {
      username: "Swapnil",
      language: "54",
      stdin: "1 2 3 4",
      stdout: "24",
      source: "sjhaskdbaisvbakjscbaouscbasiucbaisucausicvaisucais",
      timestamp: "12:33:45",
    },
    {
      username: "rishabh",
      language: "54",
      stdin: "1 2 3 4",
      stdout: "24",
      source: "sjhaskdbaisvbakjscbaouscbasiucbaisucausicvaisucais",
      timestamp: "12:33:45",
    },
    {
      username: "Rishav",
      language: "26",
      stdin: "1 2 3 4",
      stdout: "21",
      source: "sjhaskdbaisvbakjscbaouscbasiucbaisucausicvaisucais",
      timestamp: "12:33:45",
    },
    {
      username: "Abhinav",
      language: "29",
      stdin: "1 2 3 4",
      stdout: "2",
      source: "sjhaskdbaisvbakjscbaouscbasiucbaisucausicvaisucais",
      timestamp: "12:33:45",
    },
    {
      username: "Hrishi",
      language: "71",
      stdin: "1 2 5 4",
      stdout: "21",
      source: "sjhaskdbaisvbakjscbaouscbasiucbaisucausicvaisucais",
      timestamp: "12:33:45",
    },
  ]);

  // UseEffect to fetch stored details
  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      let results = await fetch(
        "https://takeuforward-task.onrender.com/api/v1/getAllEntries"
      );
      let data = results.json();
      if (data.error) return console.log("Error is Jain");
      let finalData = data.result;
      finalData.map((data, ind) => {
        if (data.source.length > 100) data.source = data.source.substr(0, 101);
      });
      setResult(finalData);
      setLoading(false);
    };
    fetchDetails();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col gap-3 justify-center items-center ">
        <ClipLoader
          color={"teal"}
          loading={loading}
          size={70}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  return (
    <div className="p-6">
      <table className="w-full">
        <thead>
          <tr>
            <th>UserName</th>
            <th>Language</th>
            <th>Stdin</th>
            <th>Stdout</th>
            <th>Source Code</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {result.map((result, index) => (
            <motion.tr
              key={index}
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 0.35 * index }}
            >
              <IndividualRow key={index} details={result} />
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Results;
