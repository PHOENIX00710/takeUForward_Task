import React, { useState } from "react";
import "./submitResponse.css";
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  TextField,
  MenuItem,
  Alert,
} from "@mui/material";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function SubmitResponse() {
  // States for our Component
  const [formData, setFormData] = useState({
    name: "",
    language: "54",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  // Material UI color customizations
  const blue = {
    100: "#DAECFF",
    200: "#b6daff",
    400: "#3399FF",
    500: "#007FFF",
    600: "#0072E5",
    900: "#003A75",
  };

  const grey = {
    50: "#F3F6F9",
    100: "#E5EAF2",
    200: "#DAE2ED",
    300: "#C7D0DD",
    400: "#B0B8C4",
    500: "#9DA8B7",
    600: "#6B7A90",
    700: "#434D5B",
    800: "#303740",
    900: "#1C2025",
  };

  const Textarea = styled(BaseTextareaAutosize)(
    ({ theme }) => `
        box-sizing: border-box;
        width: 320px;
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5;
        padding: 8px 12px;
        border-radius: 8px;
        color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
        background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
        border: 1px solid ${
          theme.palette.mode === "dark" ? grey[700] : grey[200]
        };
        box-shadow: 0px 2px 2px ${
          theme.palette.mode === "dark" ? grey[900] : grey[50]
        };
    
        &:hover {
          border-color: ${blue[400]};
        }
    
        &:focus {
          border-color: ${blue[400]};
          box-shadow: 0 0 0 3px ${
            theme.palette.mode === "dark" ? blue[600] : blue[200]
          };
        }
    
        // firefox
        &:focus-visible {
          outline: 0;
        }
      `
  );

  // Functions

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setLoading(false);
    let stdin = document.getElementById("stdin").value;
    let sourceCode = document.getElementById("sourceCode").value;

    // Check for empty Values
    if (!stdin || !sourceCode) {
      return setError(true);
    }

    // Combine form data with sourceCode and stdin
    const finalData = {
      ...formData,
      ["stdin"]: stdin,
      ["sourceCode"]: sourceCode,
    };
    console.log(finalData);

    // Submit final Form Response
    setLoading(true);
    const res = await fetch("https://takeuforward-task.onrender.com/api/v1/makeNewEntry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(finalData),
    });
    const data = res.json();
    setLoading(false);
    if (res.error) return setError(true);
    navigate("/results");
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.5, ease: [0.04, 0.62, 0.23, 1] }}
      >
        <form
          method="POST"
          className="p-4 flex flex-col gap-7 items-center shadow-bluish rounded-2xl"
          onSubmit={handleSubmit}
        >
          <h1 className="cool-gradient-text text-2xl">Submit Your Response</h1>
          <TextField
            variant="outlined"
            color="primary"
            label="Name"
            id="name"
            name="name"
            fullWidth={true}
            size={"small"}
            required={true}
            onChange={handleChange}
          />
          <FormControl
            sx={{
              width: "100%", // Full width on mobile
              md: { width: "25%" }, // Adjust on larger screens
              backgroundColor: "white",
              border: "1px solid transparent",
              borderRadius: "1.9rem",
              "&:hover": {
                backgroundColor: "white",
                borderColor: "primary.main",
              },
              "&.Mui-focused": {
                backgroundColor: "white",
                borderColor: "primary.main",
              },
              "& .MuiOutlinedInput-root": {
                borderRadius: "1.9rem",
              },
            }}
          >
            <InputLabel id="language">Language</InputLabel>
            <Select
              labelId="language"
              id="language"
              name="language"
              value={formData.language}
              label="Language"
              onChange={handleChange}
              variant="outlined"
              required={true}
            >
              <MenuItem value={54}>C++</MenuItem>
              <MenuItem value={26}>Java</MenuItem>
              <MenuItem value={29}>JavaScript</MenuItem>
              <MenuItem value={71}>Python</MenuItem>
            </Select>
          </FormControl>
          <Textarea
            aria-label="minimum height"
            id="stdin"
            name="stdin"
            placeholder="stdin"
          />

          <Textarea
            aria-label="minimum height"
            minRows={3}
            id="sourceCode"
            name="sourceCode"
            placeholder="Source Code..."
          />

          <Button
            color="primary"
            variant="contained"
            type="submit"
            disabled={loading}
            sx={{
              background: "linear-gradient(to right, #4fd1c5, #3b82f6);",
              boxShadow: "0 8px 20px rgba(99, 179, 237, 0.5)",
            }}
          >
            Submit
          </Button>
        </form>
        <Button
          color="primary"
          variant="contained"
          type="submit"
          sx={{
            background: "linear-gradient(to right, #4fd1c5, #3b82f6);",
            boxShadow: "0 8px 20px rgba(99, 179, 237, 0.5)",
          }}
          onClick={
            (e)=>{
              e.preventDefault()
              navigate("/results")
            }
          }
        >
          See Results
        </Button>
        {error && <Alert color="error">Error in Submission</Alert>}
      </motion.div>
    </div>
  );
}

export default SubmitResponse;
