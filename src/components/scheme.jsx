import { regular } from "../Responsive/constants";
import parse from "html-react-parser";

export default function Scheme(props) {
  var today = new Date();
  var age = -1;
  if (props.age !== undefined) {
    var birthDate = new Date(props.age);
    age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  }
  if (age === -1) {
    return props.rawJsonData.map((jsonData, index) => (
      <div>
        <h1
          style={{
            textAlign: "left",
            wordWrap: "break-all",
            width: "62%",
            whiteSpace: "normal",
            color: "#1a2c6d",
            marginTop: "2%",
          }}
        >
          <u>{jsonData["heading"]}</u>
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
          Application Process
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
            {parse(jsonData["applicationProcess"])}
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
    ));
  } else {
    return props.rawJsonData["schemes"].map((jsonData, index) =>
      props.selectedType.indexOf(jsonData["type"]) > -1 &&
      props.annualIncome <= jsonData["maxFamilyIncome"] &&
      props.minDisabilityPercentage > jsonData["minDisabilityPercentage"] &&
      age >= jsonData["minAge"] &&
      age <= jsonData["maxAge"] ? (
        <div>
          <h1
            style={{
              textAlign: "left",
              wordWrap: "break-all",
              width: "62%",
              whiteSpace: "normal",
              color: "#1a2c6d",
              marginTop: "2%",
            }}
          >
            <u>{jsonData["heading"]}</u>
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
            Application Process
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
              {parse(jsonData["applicationProcess"])}
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
      ) : null
    );
  }
}
