import React, { useState } from "react";
import Scheme from "../components/scheme";
import Strip from "../components/strip";
import { regular } from "../Responsive/constants";
import FindAService from "./FindAService";
import "./Home.modules.css";

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
        JSON.stringify(jsonElement["heading"])
          .toLowerCase()
          .includes(key.toLowerCase()) ||
        JSON.stringify(jsonElement["entitlements"])
          .toLowerCase()
          .includes(key.toLowerCase()) ||
        JSON.stringify(jsonElement["eligibilityRequirement"])
          .toLowerCase()
          .includes(key.toLowerCase())
      ) {
        jsonArray.push(jsonElement);
      }
    }
    SetJson(jsonArray);
  }

  return (
    <div style={{ height: "100%", marginBottom: "10vh" }}>
      <Strip />
      <div className="SearchBar">
        <form onSubmit={OnSubmit}>
          <input
            type="text"
            name="search"
            className="searchBox"
            placeholder="Search by keyword "
            style={{
              fontSize: regular.fontSizeText,
              marginBottom: "4%",
              padding: "1%",
            }}
          />
          <button
            type="submit"
            className="submitButon"
            style={{
              marginLeft: "1%",
              background: "#f2f2f2",
              color: "#1A2C6D",
              padding: "1%",
              borderRadius: "10px",
              fontSize: "2.5vh",
            }}
          >
            Search
          </button>
        </form>
      </div>
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
            The Right Guide
          </p>
          <p
            style={{
              fontSize: regular.fontSizeText,
              color: "#1A2C6D",
              padding: "2%",
              textAlign: "left",
              marginRight: "4%",
            }}
          >
            The Right Guide is for anyone seeking information on Rights &
            Entitlement, Resources & Support for Person(s) with disability in
            Delhi. Start your search by filling few details for us to customize
            relevant information for you.
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
