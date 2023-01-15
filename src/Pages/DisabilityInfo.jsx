import React, { useEffect } from "react";
import { useState } from "react";
import { json } from "react-router-dom";
import Disability from "../components/disability";
import Heading from "../components/heading";
import Strip from "../components/strip";
function DisabilityInfo() {
  const [jsonData, setJsonData] = useState({ disability: [] });

  useEffect(() => {
    function getData() {
      fetch("disabilityInfo.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }).then(async (response) => {
        let tempJsonData = await response.json();
        setJsonData(tempJsonData);
        console.log(tempJsonData);
      });
    }
    getData();
  }, []);

  return (
    <div style={{ height: "100vh" }}>
      <Strip />
      <center>
        <Heading title="Disability Info" />
      </center>
      <Disability rawJsonData={jsonData} />
    </div>
  );
}

export default DisabilityInfo;
