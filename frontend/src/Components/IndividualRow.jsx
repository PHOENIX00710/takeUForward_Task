import React from "react";

function IndividualRow(props) {
  const { username, language, stdin, stdout, source, timestamp } =
    props.details;

  return (
    <>
      <td>{username}</td>
      <td>{language}</td>
      <td>{stdin}</td>
      <td>{stdout}</td>
      <td>{source}</td>
      <td>{timestamp}</td>
    </>
  );
}

export default IndividualRow;
