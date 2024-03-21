import React from "react";
import "./results.css";
import IndividualRow from "../IndividualRow";
import { motion } from "framer-motion";

const results = [
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
