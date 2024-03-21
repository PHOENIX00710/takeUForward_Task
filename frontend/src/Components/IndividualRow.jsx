import React from "react";

function IndividualRow(props) {
  const { username, language, stdin, stdout, source, timestamp } =
    props.details;
  let langName = "";
  if (language == "54") langName = "C++";
  else if (language == "71") langName = "Python";
  else if (language == "26") langName = "Java";
  else if (language == "29") langName = "Javascript";
  return (
    <>
      <td>{username}</td>
      <td>{langName}</td>
      <td>{stdin}</td>
      <td>{stdout}</td>
      <td>{source}</td>
      <td>{timestamp}</td>
    </>
  );
}

export default IndividualRow;
