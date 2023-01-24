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
              Acts & Rule for the Welfare of Persons with Disabilities from{" "}
              <a href="https://socialwelfare.delhigovt.nic.in/content/acts-rule-welfare-persons-disabilities">
                here
              </a>
              :
              <ul>
                <li style={{ lineHeight: "24px", margin: "10px 20px" }}>
                  Rights of the Persons with Disabilities Act, 2016 Click{" "}
                  <a href="https://socialwelfare.delhigovt.nic.in/sites/default/files/All-PDF/RPWD%20ACT%202016.pdf">
                    here
                  </a>
                  to view.
                </li>
                <li style={{ lineHeight: "24px", margin: "10px 20px" }}>
                  National Trust Act, 1999 Click{" "}
                  <a href="https://socialwelfare.delhigovt.nic.in/sites/default/files/All-PDF/National_Trust_Act1999.pdf">
                    {" "}
                    here
                  </a>{" "}
                  to view.
                </li>
                <li style={{ lineHeight: "24px", margin: "10px 20px" }}>
                  Delhi RPwD Rules, 2018 Click{" "}
                  <a href="https://socialwelfare.delhigovt.nic.in/sites/default/files/All-PDF/Delhi%20RPwD%20Rules2018.pdf">
                    {" "}
                    here{" "}
                  </a>
                  to view.
                </li>
              </ul>
            </li>
            <li style={{ lineHeight: "24px", margin: "10px 20px" }}>
              Grievance Redressal Bodies Click{" "}
              <a href="https://drive.google.com/file/d/1o6zX7x4lVv55O-qgXYeC8uYN9jhNZSXY/view?usp=share_link">
                here
              </a>{" "}
              to know more.
              <ul>
                <li style={{ lineHeight: "24px", margin: "10px 20px" }}>
                  Office of the State Commissioner for Persons with Disabilities
                </li>
                <li style={{ lineHeight: "24px", margin: "10px 20px" }}>
                  Delhi Commission for Protection of Child Rights (DCPCR)
                </li>
              </ul>
            </li>
            <li style={{ lineHeight: "24px", margin: "10px 20px" }}>
              Repository of Institutions for Disabled Persons
              <ul>
                <li style={{ lineHeight: "24px", margin: "10px 20px" }}>
                  <a href="https://drive.google.com/file/d/1vZBlV75VlGn1dL8884PvrNt3K50AY3D-/view?usp=share_link">
                    Institutions
                  </a>{" "}
                  and Special Schools for the Welfare of Persons with
                  Disabilities (Page 43 of Handbook)
                </li>
                <li style={{ lineHeight: "24px", margin: "10px 20px" }}>
                  Disability - wise{" "}
                  <a href="https://drive.google.com/file/d/1CXBzxu4FamL32jk_KkQNQel_sVf6aOxS/view?usp=share_link">
                    Medical Authorities
                  </a>{" "}
                  for issuance of disability certificate (Page 59 of Handbook)
                </li>
                <li style={{ lineHeight: "24px", margin: "10px 20px" }}>
                  List of NGOs Registered under section 52 of PWD Act 1995 (Page
                  85 of Handbook)
                </li>
              </ul>
            </li>
          </ol>
          <a href="https://drive.google.com/file/d/1_NWWldCPV4zDLxbP7fdduoXF2enMbSNB/view">
            Link to handbook
          </a>
        </p>
      </center>
      <div style={{ height: "8%" }}></div>
    </div>
  );
}

export default Resources;
