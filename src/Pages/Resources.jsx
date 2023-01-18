import React from "react";
import Heading from "../components/heading";
import Strip from "../components/strip";

function Resources() {
  return (
    <div style={{ height: "100vh" }}>
      <Strip />
      <center>
        <Heading title="Resources" />
        <p style={{ textAlign: "left", fontSize: "24px", marginLeft: "13%" }}>
          Important Resources
        </p>
        <p style={{ fontSize: "24px", marginLeft: "16%", textAlign: "left" }}>
          <ol>
            <li style={{ lineHeight: "24px", margin: "10px 20px" }}>
              Disability Handbook
            </li>
            <li style={{ lineHeight: "24px", margin: "10px 20px" }}>
              Acts & Rule for the Welfare of Persons with Disabilities:
              <ul>
                <li style={{ lineHeight: "24px", margin: "10px 20px" }}>
                  Rights of the Persons with Disabilities Act, 2016 Click here
                  to view.
                </li>
                <li style={{ lineHeight: "24px", margin: "10px 20px" }}>
                  National Trust Act, 1999 Click here to view.
                </li>
                <li style={{ lineHeight: "24px", margin: "10px 20px" }}>
                  Delhi RPwD Rules, 2018 Click here to view.
                </li>
              </ul>
            </li>
            <li style={{ lineHeight: "24px", margin: "10px 20px" }}>
              Grievance Redressal Bodies
              <ul>
                <li style={{ lineHeight: "24px", margin: "10px 20px" }}>
                  Office of the State Commissioner for Persons with Disabilities
                  (Page 40 of Handbook)
                </li>
                <li style={{ lineHeight: "24px", margin: "10px 20px" }}>
                  Delhi Commission for Protection of Child Rights (DCPCR) (Page
                  41 of Handbook)
                </li>
              </ul>
            </li>
            <li style={{ lineHeight: "24px", margin: "10px 20px" }}>
              Repository of Institutions for Disabled Persons
              <ul>
                <li style={{ lineHeight: "24px", margin: "10px 20px" }}>
                  Institutions and Special Schools for the Welfare of Persons
                  with Disabilities (Page 43 of Handbook)
                </li>
                <li style={{ lineHeight: "24px", margin: "10px 20px" }}>
                  Disability - wise Medical Authorities for issuance of
                  disability certificate (Page 59 of Handbook)
                </li>
                <li style={{ lineHeight: "24px", margin: "10px 20px" }}>
                  List of NGOs Registered under section 52 of PWD Act 1995 (Page
                  85 of Handbook)
                </li>
              </ul>
            </li>
          </ol>
        </p>
      </center>
      <div style={{ height: "8%" }}></div>
    </div>
  );
}

export default Resources;
