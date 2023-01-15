import parse from "html-react-parser";
export default function Disability(props) {
  return props.rawJsonData["disability"].length > 0
    ? props.rawJsonData["disability"].map((jsonData, index) => (
        <div style={{ marginLeft: "14%", marginRight: "14%" }}>
          <h1>{jsonData["typeOfDisability"]}</h1>
          <pre style={{ whiteSpace: "pre-wrap", fontSize: "20px" }}>
            {parse(jsonData["Description"])}
          </pre>
          <hr style={{ marginTop: "1%", marginBottom: "1%" }} />
        </div>
      ))
    : null;
}
