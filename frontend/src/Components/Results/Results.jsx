import React from "react";
import "./results.css";

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
          <tr>
            <td>Name1</td>
            <td>Lang1</td>
            <td>stdin1</td>
            <td>stdout1</td>
            <td>source1</td>
            <td>timestamps1</td>
          </tr>
          <tr>
            <td>Name1</td>
            <td>Lang1</td>
            <td>stdin1</td>
            <td>stdout1</td>
            <td>source1</td>
            <td>timestamps1</td>
          </tr>
          <tr>
            <td>Name1</td>
            <td>Lang1</td>
            <td>stdin1</td>
            <td>stdout1</td>
            <td>source1</td>
            <td>timestamps1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Results;
