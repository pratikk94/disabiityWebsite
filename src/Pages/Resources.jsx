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
            <li>Disability Handbook</li>
            <li>
              Acts & Rule for the Welfare of Persons with Disabilities:
              <ul>
                <li>
                  Rights of the Persons with Disabilities Act, 2016 Click here
                  to view.
                </li>
                <li>National Trust Act, 1999 Click here to view.</li>
                <li>Delhi RPwD Rules, 2018 Click here to view.</li>
              </ul>
            </li>
            <li>
              Grievance Redressal Bodies
              <ul>
                <li>
                  Office of the State Commissioner for Persons with Disabilities
                  (Page 40 of Handbook)
                </li>
                <li>
                  Delhi Commission for Protection of Child Rights (DCPCR) (Page
                  41 of Handbook)
                </li>
              </ul>
            </li>
            <li>
              Repository of Institutions for Disabled Persons
              <ul>
                <li>
                  Institutions and Special Schools for the Welfare of Persons
                  with Disabilities (Page 43 of Handbook)
                </li>
                <li>
                  Disability - wise Medical Authorities for issuance of
                  disability certificate (Page 59 of Handbook)
                </li>
                <li>
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
