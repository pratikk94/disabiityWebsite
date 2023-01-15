import parse from "html-react-parser";
export default function FAQ(props) {
  return (
    <div style={{ float: "left" }}>
      <p
        style={{
          float: "left",
          fontSize: "32px",
          width: "80vw",
          textAlign: "left",
        }}
      >
        <strong>{props.question}</strong>
      </p>
      <p
        style={{
          float: "left",
          fontSize: "24px",
          textAlign: "left",
          marginBottom: "20px",
          width: "70vw",
        }}
      >
        <pre>{parse(props.answer)}</pre>
      </p>
      <hr
        style={{
          width: "72vw",

          marginLeft: "-20%",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      />
    </div>
  );
}
