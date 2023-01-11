import { regular } from "../Responsive/constants";
import parse from "html-react-parser";

export default function Scheme({ rawJsonData, selectdType }) {
  if (selectdType.includes("educational")) {
    let jsonData = rawJsonData["schemes"][4];
    if (jsonData !== undefined) {
      return (
        <div>
          <h1
            style={{
              textAlign: "left",
              wordWrap: "break-all",
              width: "60%",
              whiteSpace: "normal",
              color: "#1a2c6d",
              marginTop: "2%",
            }}
          >
            {jsonData["nameOfScheme"]}
          </h1>

          <h1
            style={{
              textAlign: "left",
              wordWrap: "break-all",
              width: "62%",
              whiteSpace: "normal",
              color: "#1a2c6d",
              marginTop: "1%",
            }}
          >
            Entitlements
          </h1>
          <p
            style={{
              textAlign: "left",
              wordWrap: "break-all",
              width: "60%",
              marginLeft: "4%",
              fontSize: regular.fontSizeText,
              whiteSpace: "normal",
            }}
          >
            <pre style={{ whiteSpace: "pre-wrap" }}>
              {parse(jsonData["entitlements"])}
            </pre>
          </p>
          <h1
            style={{
              textAlign: "left",
              wordWrap: "break-all",
              width: "62%",
              whiteSpace: "normal",
              color: "#1a2c6d",
              marginTop: "1%",
            }}
          >
            Eligibility Requirments
          </h1>
          <p
            style={{
              textAlign: "left",
              wordWrap: "break-all",
              width: "60%",
              marginLeft: "4%",
              fontSize: regular.fontSizeText,
              whiteSpace: "normal",
            }}
          >
            <pre style={{ whiteSpace: "pre-wrap" }}>
              {parse(jsonData["eligibilityRequirement"])}
            </pre>
          </p>
          <h1
            style={{
              textAlign: "left",
              wordWrap: "break-all",
              width: "62%",
              whiteSpace: "normal",
              color: "#1a2c6d",
              marginTop: "1%",
            }}
          >
            Documents required
          </h1>
          <p
            style={{
              textAlign: "left",
              wordWrap: "break-all",
              width: "60%",
              marginLeft: "4%",
              fontSize: regular.fontSizeText,
              whiteSpace: "normal",
            }}
          >
            <pre style={{ whiteSpace: "pre-wrap" }}>
              {parse(jsonData["documentRequired"])}
            </pre>
          </p>
          <h1
            style={{
              textAlign: "left",
              wordWrap: "break-all",
              width: "62%",
              whiteSpace: "normal",
              color: "#1a2c6d",
              marginTop: "1%",
            }}
          >
            Timelines
          </h1>
          <p>
            <pre
              style={{
                textAlign: "left",
                wordWrap: "break-all",
                width: "60%",
                marginLeft: "4%",
                fontSize: regular.fontSizeText,
                whiteSpace: "normal",
              }}
            >
              {parse(jsonData["timeline"])}
            </pre>
          </p>

          <h1
            style={{
              textAlign: "left",
              wordWrap: "break-all",
              width: "62%",
              whiteSpace: "normal",
              color: "#1a2c6d",
              marginTop: "1%",
            }}
          >
            Grievance redressal board
          </h1>
          <p
            style={{
              textAlign: "left",
              wordWrap: "break-all",
              width: "60%",
              marginLeft: "4%",
              fontSize: regular.fontSizeText,
              whiteSpace: "normal",
            }}
          >
            <pre style={{ whiteSpace: "pre-wrap" }}>
              {parse(jsonData["grievanceRedressalBoard"])}
            </pre>
          </p>
        </div>
      );
    } else {
      return;
    }
  }
}
