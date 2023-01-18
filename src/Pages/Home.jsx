import React, { useState } from "react";
import Footer from "../components/footer";
import Scheme from "../components/scheme";
import Strip from "../components/strip";
import { regular } from "../Responsive/constants";
import FindAService from "./FindAService";
import "./Home.css";
function Home() {
  const [json, SetJson] = useState([]);
  const [showFindAService, setFindAService] = useState(true);
  const clearFilter = () => {
    setFindAService(true);
  };
  const OnSubmit = (e) => {
    e.preventDefault();
    setFindAService(false);
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
  }

  return (
    <div style={{ height: "100%", marginBottom: "10vh" }}>
      <Strip />
      <form onSubmit={OnSubmit} style={{ marginTop: "-5%", marginLeft: "60%" }}>
        <input
          type="text"
          placeholder="Search.."
          name="search"
          style={{ fontSize: regular.fontSizeText, marginBottom: "4%" }}
        />
        <button
          type="submit"
          style={{
            marginLeft: "1%",
            background: "#1A2C6D",
            color: "#FFF",
            fontSize: regular.fontSizeText,
          }}
        >
          Get started
        </button>
      </form>
      <center>
        <div className="Home">
          <p
            style={{
              fontSize: regular.fontSizeHeader,
              paddingTop: "4%",
              paddingBottom: "2%",
              color: "#1A2C6D",
              width: "100%",
              display: "block",
            }}
          >
            The right guide
          </p>
          <p
            style={{
              fontSize: regular.fontSizeText,
              color: "#1A2C6D",
              padding: "2%",
              textAlign: "left",
              marginRight: "4%",
              background: "transparent",
            }}
          >
            The Right Guide is for anyone seeking information on Rights &
            Entitlement, Resources & Support for Person(s) with disability in
            Delhi. Start your search by clicking below on 'Get Started' and fill
            in a few details for us to customize relevant information for you.
          </p>
        </div>

        {showFindAService ? (
          <div style={{ marginTop: "5%" }}>
            <FindAService />
          </div>
        ) : (
          <div style={{ marginTop: "10%" }}>
            <button
              onClick={clearFilter}
              style={{
                marginLeft: "1%",
                background: "#1A2C6D",
                color: "#FFF",
                fontSize: regular.fontSizeText,
              }}
            >
              Find by filters
            </button>
            <Scheme rawJsonData={json} />
          </div>
        )}
      </center>
      <div style={{ height: "8vh" }}></div>
    </div>
  );
}

export default Home;
