import React, { useState } from "react";
import { json } from "react-router-dom";
import Scheme from "../components/scheme";
import Strip from "../components/strip";
import { regular } from "../Responsive/constants";
function Home() {
  const [json, SetJson] = useState([]);

  const OnSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    fetch("schemes.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then(async (response) => {
      var resp = await response.json();
      checkIfContains(e.target[0].value, resp["schemes"]);
    });
  };

  function checkIfContains(key, JsonData) {
    console.log(key);
    console.log(JsonData);
    const jsonArray = [];
    for (let i = 0; i < JsonData.length; i++) {
      const jsonElement = JsonData[i];
      if (
        JSON.stringify(jsonElement["heading"]).includes(key) ||
        JSON.stringify(jsonElement["entitlements"]).includes(key) ||
        JSON.stringify(jsonElement["eligibilityRequirement"]).includes(key)
      ) {
        jsonArray.push(jsonElement);
      }
    }
    SetJson(jsonArray);
    console.log(jsonArray);
  }

  return (
    <div style={{ height: "100%" }}>
      <Strip />
      <center>
        <img
          src={require("../assets/landingPageLogo.jpg")}
          alt="Landing page Logo"
          style={{ width: "50%", height: "64%", marginTop: "-3%" }}
        />
        <div
          style={{
            backgroundColor: "#F2F2F2",
            marginTop: "-8%",
            width: "40%",
            height: "32%",
            float: "bottom",
            position: "relative",
          }}
        >
          <p
            style={{
              fontSize: regular.fontSizeHeader,
              marginTop: "-16%",
              paddingTop: "4%",
              paddingBottom: "2%",
              color: "#1A2C6D",
              marginLeft: "-40%",
            }}
          >
            The right guide
          </p>
          <p
            style={{
              fontSize: regular.fontSizeText,
              color: "#1A2C6D",
              marginLeft: "4%",
              textAlign: "left",
              marginRight: "4%",
            }}
          >
            The Right Guide is for anyone seeking information on Rights &
            Entitlement, Resources & Support for Person(s) with disability in
            Delhi. Start your search by clicking below on 'Get Started' and fill
            in a few details for us to customize relevant information for you.
          </p>
        </div>
        <form onSubmit={OnSubmit}>
          <input type="text" placeholder="Search.." name="search" />
          <button type="submit">Submit</button>
        </form>
        <button
          style={{
            background: "#1A2C6D",
            color: "#FFF",
            padding: "2%",
            margin: "1%",
            fontSize: regular.fontSizeText,
          }}
        >
          Click to know your right and entitlement
        </button>
        <Scheme rawJsonData={json} />
      </center>
    </div>
  );
}

export default Home;
