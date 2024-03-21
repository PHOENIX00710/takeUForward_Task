import React from "react";
import "./results.css";
import IndividualRow from "../IndividualRow";
import { motion } from "framer-motion";

const results = [
  {
    username: "Swapnil",
    language: "C++",
    stdin: "1 2 3 4",
    stdout: "24",
    source: "sjhaskdbaisvbakjscbaouscbasiucbaisucausicvaisucais",
    timestamp: "12:33:45",
  },
  {
    username: "rishabh",
    language: "Java",
    stdin: "1 2 3 4",
    stdout: "24",
    source: "sjhaskdbaisvbakjscbaouscbasiucbaisucausicvaisucais",
    timestamp: "12:33:45",
  },
  {
    username: "Rishav",
    language: "C++",
    stdin: "1 2 3 4",
    stdout: "21",
    source: "sjhaskdbaisvbakjscbaouscbasiucbaisucausicvaisucais",
    timestamp: "12:33:45",
  },
  {
    username: "Abhinav",
    language: "Javascript",
    stdin: "1 2 3 4",
    stdout: "2",
    source: "sjhaskdbaisvbakjscbaouscbasiucbaisucausicvaisucais",
    timestamp: "12:33:45",
  },
  {
    username: "Hrishi",
    language: "Python",
    stdin: "1 2 5 4",
    stdout: "21",
    source: "sjhaskdbaisvbakjscbaouscbasiucbaisucausicvaisucais",
    timestamp: "12:33:45",
  },
];

function Results() {
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
          {results.map((result, index) => (
            <motion.tr
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 0.65 }}
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
