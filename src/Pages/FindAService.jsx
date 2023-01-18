import React, { useState } from "react";
import Heading from "../components/heading";
import Scheme from "../components/scheme";
import Strip from "../components/strip";
import { regular } from "../Responsive/constants";
import "./FindAService.css";
function FindAService() {
  const [isEducation, setIsEducation] = useState(false);
  const [isSocial, setIsSocial] = useState(false);
  const [isHealth, setIsHealth] = useState(false);
  const [isTravel, setIsTravel] = useState(false);
  const [isSkill, setIsSkill] = useState(false);
  {
    /*
  const [isPhysical, setIsPhyscial] = useState(false);
  const [isIntellectual, setIsIntellectual] = useState(false);
  const [isMental, setIsMental] = useState(false);
  const [isNeurological, setIsNeurological] = useState(false);
  const [isBlood, setIsBlood] = useState(false);
  const [isMultiple, setIsMultiple] = useState(false);
*/
  }
  const [jsonData, setJsonData] = useState({
    schemes: [],
  });
  const [selectedType, setSelectedType] = useState([]);
  const [date, setDate] = useState("");
  const [annualIncome, setAnnualIncome] = useState(0);
  const [minDisabilityPercentage, setMinDisabilityPercentage] = useState(100);
  // React Checkboxes onChange Methods
  const onChangeEducation = () => {
    if (!isEducation) {
      selectedType.push("educational");
      setSelectedType(selectedType);
    } else {
      const index = selectedType.indexOf("educational");
      if (index > -1) {
        selectedType.splice(index, 1);
      }
      setSelectedType(selectedType);
    }
    setIsEducation(!isEducation);
  };
  const onChangeSocial = () => {
    if (!isSocial) {
      selectedType.push("social");
      setSelectedType(selectedType);
    } else {
      const index = selectedType.indexOf("social");
      if (index > -1) {
        selectedType.splice(index, 1);
      }
      setSelectedType(selectedType);
    }
    setIsSocial(!isSocial);
  };
  const onChangeHealth = () => {
    if (!isHealth) {
      selectedType.push("health");
      setSelectedType(selectedType);
    } else {
      const index = selectedType.indexOf("health");
      if (index > -1) {
        selectedType.splice(index, 1);
      }
      setSelectedType(selectedType);
    }
    setIsHealth(!isHealth);
  };

  const onChangeTravel = () => {
    if (!isTravel) {
      selectedType.push("travel");
      setSelectedType(selectedType);
    } else {
      const index = selectedType.indexOf("travel");
      if (index > -1) {
        selectedType.splice(index, 1);
      }
      setSelectedType(selectedType);
    }
    setIsTravel(!isTravel);
  };

  const onChangeSkill = () => {
    if (!isSkill) {
      selectedType.push("skill");
      setSelectedType(selectedType);
    } else {
      const index = selectedType.indexOf("skill");
      if (index > -1) {
        selectedType.splice(index, 1);
      }
      setSelectedType(selectedType);
    }
    setIsSkill(!isSkill);
  };
  // React Checkboxes onChange Methods
  {
    /*
  const onChangePhyscial = () => {
    setIsPhyscial(!isPhysical);
  };
  const onChangeIntellectual = () => {
    setIsIntellectual(!isIntellectual);
  };

  const onChangeMental = () => {
    setIsMental(!isMental);
  };

  const onChangeNeurological = () => {
    setIsNeurological(!isNeurological);
  };

  const onChangeBlood = () => {
    setIsBlood(!isBlood);
  };

  const onChangeMultiple = () => {
    setIsMultiple(!isMultiple);
  };
*/
  }
  // Submit
  const OnSubmit = (e) => {
    e.preventDefault();
    setDate(document.getElementById("DateOfBirth").value);
    if (document.getElementById("FamilyIncome").value > 0)
      setAnnualIncome(document.getElementById("FamilyIncome").value);
    if (document.getElementById("disabilityPercentage").value > 0)
      setMinDisabilityPercentage(
        document.getElementById("disabilityPercentage").value
      );

    getData();
  };

  const getData = () => {
    fetch("schemes.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then(async (response) => {
      var resp = await response.json();
      setJsonData(resp);
    });
  };

  const activeColor = "#04B86B";
  const inActiveColor = "#f2f2f2";
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <center>
        <form className="findAServiceForm" onSubmit={OnSubmit}>
          <div style={{ marginTop: "-5%" }}>
            <p
              style={{
                fontSize: regular.fontSizeText,
                float: "left",
                marginTop: "1%",
              }}
            >
              <strong>Date of birth</strong>
            </p>
            <input
              type="date"
              name="DateOfBirth"
              id="DateOfBirth"
              max={new Date().toISOString().split("T")[0]}
              required={true}
              style={{
                fontSize: regular.fontSizeText,
                width: "32%",
                marginLeft: "6.1%",
              }}
            ></input>
          </div>
          <div style={{ marginTop: "1%" }}>
            <p
              style={{
                fontSize: regular.fontSizeText,
                marginTop: "1%",
                float: "left",
              }}
            >
              <strong>Annual family income</strong>
            </p>
            <input
              type="number"
              name="FamilyIncome"
              id="FamilyIncome"
              style={{
                fontSize: regular.fontSizeText,
                marginLeft: "-1%",
                width: "32%",
              }}
            ></input>
          </div>
          <div style={{ marginTop: "2%" }}>
            <p
              style={{
                fontSize: regular.fontSizeText,
                width: "100%",
                float: "left",
                textAlign: "left",
                display: "block",
              }}
            >
              <strong>
                Any specific category of scheme and services, you are interested
                in
              </strong>
            </p>
          </div>
          <div>
            <span
              className="form-check"
              style={{
                background: isEducation ? activeColor : inActiveColor,
                width: "100%",
                float: "left",
                border:
                  "0.3% solid " + (isEducation ? activeColor : inActiveColor),
                padding: "1%",
                marginLeft: "2%",
                marginTop: "2%",
                borderRadius: "8px",
                boxShadow: "0 0 8px #ddd",
              }}
              onClick={onChangeEducation}
            >
              <label className="form-check-label">
                <input
                  type="checkbox"
                  style={{
                    display: "none",
                  }}
                  checked={isEducation}
                  className="form-check-input"
                />
                <button
                  style={{
                    fontSize: regular.fontSizeScheme,
                    display: "inline",
                    float: "left",
                    padding: "2vw",
                    background: isEducation ? activeColor : inActiveColor,
                    border: "none",
                  }}
                  onClick={onChangeEducation}
                >
                  Educational Schemes
                </button>
                <img
                  src={require("../assets/book.png")}
                  style={{
                    height: "6%",
                    width: "6%",
                    marginTop: "2%",
                    float: "right",
                    marginRight: "2%",
                  }}
                  alt="book"
                />
              </label>
            </span>

            <span
              className="form-check"
              onClick={onChangeHealth}
              style={{
                background: isHealth ? activeColor : inActiveColor,
                float: "left",
                width: "100%",
                marginLeft: "2%",
                marginTop: "2%",
                border:
                  "0.3% solid " + (isHealth ? activeColor : inActiveColor),
                padding: "1%",
                borderRadius: "8px",
                boxShadow: "0 0 8px #ddd",
              }}
            >
              <label className="form-check-label">
                <input
                  style={{
                    display: "none",
                  }}
                  type="checkbox"
                  checked={isHealth}
                  className="form-check-input"
                />
                <button
                  style={{
                    background: isHealth ? activeColor : inActiveColor,
                    border: "none",
                    fontSize: regular.fontSizeScheme,
                    display: "inline",
                    float: "left",
                    padding: "2vw",
                  }}
                  onClick={onChangeHealth}
                >
                  Healthcare scheme
                </button>
                <img
                  src={require("../assets/healthcare.png")}
                  style={{
                    height: "6%",
                    width: "6%",
                    marginTop: "2%",
                    float: "right",
                    marginRight: "2%",
                  }}
                  alt="book"
                />
              </label>
            </span>

            <span
              className="form-check"
              onClick={onChangeSocial}
              style={{
                width: "100%",
                background: isSocial ? activeColor : inActiveColor,
                float: "left",
                marginLeft: "2%",
                marginTop: "2%",
                border:
                  "0.3% solid " + (isSocial ? activeColor : inActiveColor),
                padding: "1%",
                borderRadius: "8px",
                boxShadow: "0 0 8px #ddd",
              }}
            >
              <label className="form-check-label">
                <input
                  type="checkbox"
                  style={{
                    display: "none",
                  }}
                  checked={isSocial}
                  className="form-check-input"
                />
                <button
                  style={{
                    background: isSocial ? activeColor : inActiveColor,
                    border: "none",
                    fontSize: regular.fontSizeScheme,
                    display: "inline",
                    float: "left",
                    padding: "2vw",
                  }}
                  onClick={onChangeSocial}
                >
                  Social scheme
                </button>
                <img
                  src={require("../assets/people.png")}
                  style={{
                    height: "6%",
                    width: "6%",
                    marginTop: "2%",
                    float: "right",
                    marginRight: "2%",
                  }}
                  alt="book"
                />
              </label>
            </span>

            <span
              className="form-check"
              onClick={onChangeTravel}
              style={{
                width: "100%",
                background: isTravel ? activeColor : inActiveColor,
                float: "left",
                marginLeft: "2%",
                marginTop: "2%",
                border:
                  "0.3% solid " + (isTravel ? activeColor : inActiveColor),
                padding: "1%",
                borderRadius: "8px",
                boxShadow: "0 0 8px #ddd",
              }}
            >
              <label className="form-check-label">
                <input
                  type="checkbox"
                  style={{
                    display: "none",
                  }}
                  checked={isTravel}
                  className="form-check-input"
                />
                <button
                  style={{
                    background: isTravel ? activeColor : inActiveColor,
                    border: "none",
                    fontSize: regular.fontSizeScheme,
                    display: "inline",
                    float: "left",
                    padding: "2vw",
                  }}
                  onClick={onChangeTravel}
                >
                  Travel related scheme
                </button>
                <img
                  src={require("../assets/travel-luggage.png")}
                  style={{
                    height: "6%",
                    width: "6%",
                    marginTop: "2%",
                    float: "right",
                    marginRight: "2%",
                  }}
                  alt="book"
                />
              </label>
            </span>

            <span
              className="form-check"
              onClick={onChangeSkill}
              style={{
                width: "100%",
                background: isSkill ? activeColor : inActiveColor,
                float: "left",
                marginLeft: "2%",
                marginTop: "2%",
                border: "0.3% solid " + (isSkill ? activeColor : inActiveColor),
                padding: "1%",
                borderRadius: "8px",
                boxShadow: "0 0 8px #ddd",
              }}
            >
              <label className="form-check-label">
                <input
                  type="checkbox"
                  style={{
                    display: "none",
                  }}
                  checked={isSkill}
                  className="form-check-input"
                />
                <button
                  style={{
                    background: isSkill ? activeColor : inActiveColor,
                    border: "none",
                    fontSize: regular.fontSizeScheme,
                    display: "inline",
                    float: "left",
                    padding: "2vw",
                  }}
                  onClick={onChangeSkill}
                >
                  Skill related scheme
                </button>
                <img
                  src={require("../assets/pencil.png")}
                  style={{
                    height: "6%",
                    width: "6%",
                    marginTop: "2%",
                    float: "right",
                    marginRight: "2%",
                  }}
                  alt="book"
                />
              </label>
            </span>
          </div>
          {/*
          <div>
            <p
              style={{
                fontSize: regular.fontSizeText,
                textAlign: "left",
                marginBottom: "2%",
                marginTop: "8vw",
                width: "50vw",
              }}
            >
              Type of disability
            </p>
          </div>
          <div>
            <span
              className="form-check"
              style={{
                background: isPhysical ? activeColor : inActiveColor,
                float: "left",
                padding: "1%",
                border:
                  "0.3% solid " + (isPhysical ? activeColor : inActiveColor),
                borderRadius: "8px",
                boxShadow: "0 0 8px #ddd",
              }}
            >
              <label className="form-check-label">
                <input
                  type="checkbox"
                  style={{ display: "none" }}
                  checked={isPhysical}
                  onChange={onChangePhyscial}
                  className="form-check-input"
                />
                <p
                  style={{
                    fontSize: regular.fontSizeText,
                    display: "inline",
                  }}
                >
                  Physical Disability
                </p>
              </label>
            </span>
            <span
              className="form-check"
              style={{
                background: isIntellectual ? activeColor : inActiveColor,

                borderRadius: "0.5%",
                marginLeft: "2%",
                float: "left",
                border:
                  "0.3% solid " +
                  (isIntellectual ? activeColor : inActiveColor),
                padding: "1%",

                borderRadius: "8px",
                boxShadow: "0 0 8px #ddd",
              }}
            >
              <label className="form-check-label">
                <input
                  type="checkbox"
                  style={{ display: "none" }}
                  checked={isIntellectual}
                  onChange={onChangeIntellectual}
                  className="form-check-input"
                />
                <p
                  style={{
                    fontSize: regular.fontSizeText,
                    display: "inline",
                  }}
                >
                  Intellecutual Disability
                </p>
              </label>
            </span>

            <span
              className="form-check"
              style={{
                background: isMental ? activeColor : inActiveColor,
                borderRadius: "0.5%",
                marginLeft: "2%",
                float: "left",
                border:
                  "0.3% solid " + (isMental ? activeColor : inActiveColor),
                padding: "1%",

                borderRadius: "8px",
                boxShadow: "0 0 8px #ddd",
              }}
            >
              <label className="form-check-label">
                <input
                  type="checkbox"
                  style={{ display: "none" }}
                  checked={isMental}
                  onChange={onChangeMental}
                  className="form-check-input"
                />
                <p
                  style={{
                    fontSize: regular.fontSizeText,
                    display: "inline",
                  }}
                >
                  Mental Disability
                </p>
              </label>
            </span>
          </div>
          <div>
            <span
              className="form-check"
              style={{
                background: isNeurological ? activeColor : inActiveColor,
                borderRadius: "0.5%",
                float: "left",
                marginTop: "2%",
                border:
                  "0.3% solid " +
                  (isNeurological ? activeColor : inActiveColor),
                padding: "1%",

                borderRadius: "8px",
                boxShadow: "0 0 8px #ddd",
              }}
            >
              <label className="form-check-label">
                <input
                  type="checkbox"
                  style={{ display: "none" }}
                  checked={isNeurological}
                  onChange={onChangeNeurological}
                  className="form-check-input"
                />
                <p
                  style={{
                    fontSize: regular.fontSizeText,
                    display: "inline",
                  }}
                >
                  Neurological Disability
                </p>
              </label>
            </span>
            <span
              className="form-check"
              style={{
                background: isBlood ? activeColor : inActiveColor,
                borderRadius: "0.5%",
                float: "left",
                marginTop: "2%",
                marginLeft: "2%",
                border: "0.3% solid " + (isBlood ? activeColor : inActiveColor),
                padding: "1%",
                borderRadius: "8px",
                boxShadow: "0 0 8px #ddd",
              }}
            >
              <label className="form-check-label">
                <input
                  type="checkbox"
                  style={{ display: "none" }}
                  checked={isBlood}
                  onChange={onChangeBlood}
                  className="form-check-input"
                />
                <p
                  style={{
                    fontSize: regular.fontSizeText,
                    display: "inline",
                  }}
                >
                  Blood disability
                </p>
              </label>
            </span>

            <span
              className="form-check"
              style={{
                background: isMultiple ? activeColor : inActiveColor,
                borderRadius: "0.5%",
                float: "left",
                marginTop: "2%",
                marginLeft: "2%",
                border:
                  "0.3% solid " + (isMultiple ? activeColor : inActiveColor),
                padding: "1%",

                borderRadius: "8px",
                boxShadow: "0 0 8px #ddd",
              }}
            >
              <label className="form-check-label">
                <input
                  type="checkbox"
                  style={{ display: "none" }}
                  checked={isMultiple}
                  onChange={onChangeMultiple}
                  className="form-check-input"
                />
                <p
                  style={{
                    fontSize: regular.fontSizeText,
                    display: "inline",
                  }}
                >
                  Multiple Disability
                </p>
              </label>
            </span>
          </div>
                */}
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-success"
              style={{
                fontSize: regular.fontSizeText,
                marginTop: "2%",
                padding: "1%",
                background: activeColor,
              }}
            >
              Submit
            </button>
          </div>
        </form>
        <Scheme
          rawJsonData={jsonData}
          selectedType={selectedType}
          age={date}
          annualIncome={annualIncome}
          minDisabilityPercentage={minDisabilityPercentage}
        />
      </center>
      <div style={{ height: "8vh" }}></div>
    </div>
  );
}

export default FindAService;
