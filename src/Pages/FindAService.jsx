import React, { useState } from "react";
import Heading from "../components/heading";
import Scheme from "../components/scheme";
import Strip from "../components/strip";
import { regular } from "../Responsive/constants";

function FindAService() {
  const [isEducation, setIsEducation] = useState(false);
  const [isFinancial, setIsFinancial] = useState(false);
  const [isHealth, setIsHealth] = useState(false);
  const [isTravel, setIsTravel] = useState(false);
  const [isSkill, setIsSkill] = useState(false);
  const [isPhysical, setIsPhyscial] = useState(false);
  const [isIntellectual, setIsIntellectual] = useState(false);
  const [isMental, setIsMental] = useState(false);
  const [isNeurological, setIsNeurological] = useState(false);
  const [isBlood, setIsBlood] = useState(false);
  const [isMultiple, setIsMultiple] = useState(false);
  const [jsonData, setJsonData] = useState({ schemes: [] });
  const [selectedType, setSelectedType] = useState([]);
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
  const onChangeFinancial = () => {
    setIsFinancial(!isFinancial);
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
  // Submit
  const OnSubmit = (e) => {
    e.preventDefault();

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
  const inActiveColor = "#fff";
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Strip />
      <center>
        <Heading title="Find a service" />
        <form
          style={{
            borderRadius: "1%",
            marginTop: "3%",
            backgroundColor: "#f2f2f2",
            paddingLeft: "12%",
            paddingRight: "12%",
            paddingTop: "4%",
            paddingBottom: "4%",
            display: "inline-block",
          }}
          onSubmit={OnSubmit}
        >
          <div>
            <p
              style={{
                fontSize: regular.fontSizeText,
                float: "left",
              }}
            >
              Date of birth
            </p>
            <input
              type="date"
              name="DateOfBirth"
              required={true}
              style={{
                fontSize: regular.fontSizeText,
              }}
            ></input>
          </div>
          <div style={{ marginTop: "2%" }}>
            <p
              style={{
                fontSize: regular.fontSizeText,
                marginTop: "1%",
                float: "left",
              }}
            >
              Annual family income
            </p>
            <input
              type="number"
              name="FamilyIncome"
              style={{
                fontSize: regular.fontSizeText,
                marginLeft: "-6%",
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
              Any specific category of scheme and services, you are interested
              in
            </p>
          </div>

          <div>
            <span
              className="form-check"
              style={{
                background: isEducation ? activeColor : inActiveColor,
                borderRadius: "0.5%",
                float: "left",
                border:
                  "0.3% solid " + (isEducation ? activeColor : inActiveColor),
                padding: "1%",
                marginTop: "2%",
              }}
            >
              <label className="form-check-label">
                <input
                  type="checkbox"
                  style={{
                    display: "none",
                  }}
                  checked={isEducation}
                  onChange={onChangeEducation}
                  className="form-check-input"
                />
                <p
                  style={{ fontSize: regular.fontSizeText, display: "inline" }}
                >
                  Education
                </p>
              </label>
            </span>

            <span
              className="form-check"
              style={{
                background: isHealth ? activeColor : inActiveColor,
                borderRadius: "0.5%",
                float: "left",
                marginLeft: "2%",
                marginTop: "2%",
                border:
                  "0.3% solid " + (isHealth ? activeColor : inActiveColor),
                padding: "1%",
              }}
            >
              <label className="form-check-label">
                <input
                  style={{
                    display: "none",
                  }}
                  type="checkbox"
                  checked={isHealth}
                  onChange={onChangeHealth}
                  className="form-check-input"
                />
                <p
                  style={{ fontSize: regular.fontSizeText, display: "inline" }}
                >
                  Health
                </p>
              </label>
            </span>

            <span
              className="form-check"
              style={{
                width: "18%",
                background: isFinancial ? activeColor : inActiveColor,
                borderRadius: "0.5%",
                float: "left",
                marginLeft: "2%",
                marginTop: "2%",
                border:
                  "0.3% solid " + (isFinancial ? activeColor : inActiveColor),
                padding: "1%",
              }}
            >
              <label className="form-check-label">
                <input
                  type="checkbox"
                  style={{
                    display: "none",
                  }}
                  checked={isFinancial}
                  onChange={onChangeFinancial}
                  className="form-check-input"
                />
                <p
                  style={{ fontSize: regular.fontSizeText, display: "inline" }}
                >
                  Financial
                </p>
              </label>
            </span>

            <span
              className="form-check"
              style={{
                width: "18%",
                background: isTravel ? activeColor : inActiveColor,
                borderRadius: "0.5%",
                float: "left",
                marginLeft: "2%",
                marginTop: "2%",
                border:
                  "0.3% solid " + (isTravel ? activeColor : inActiveColor),
                padding: "1%",
              }}
            >
              <label className="form-check-label">
                <input
                  type="checkbox"
                  style={{
                    display: "none",
                  }}
                  checked={isTravel}
                  onChange={onChangeTravel}
                  className="form-check-input"
                />
                <p
                  style={{ fontSize: regular.fontSizeText, display: "inline" }}
                >
                  Travel
                </p>
              </label>
            </span>

            <span
              className="form-check"
              style={{
                width: "18%",
                background: isSkill ? activeColor : inActiveColor,
                borderRadius: "0.5%",
                float: "left",
                marginLeft: "2%",
                marginTop: "2%",
                border: "0.3% solid " + (isSkill ? activeColor : inActiveColor),
                padding: "1%",
              }}
            >
              <label className="form-check-label">
                <input
                  type="checkbox"
                  style={{
                    display: "none",
                  }}
                  checked={isSkill}
                  onChange={onChangeSkill}
                  className="form-check-input"
                />
                <p
                  style={{ fontSize: regular.fontSizeText, display: "inline" }}
                >
                  Skill
                </p>
              </label>
            </span>
          </div>

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

          <div style={{ height: "4%" }}></div>

          <label>
            <p
              style={{
                fontSize: regular.fontSizeText,
                float: "left",
                marginTop: "2%",
                marginLeft: "8%",
              }}
            >
              Disability Percentage
            </p>
            <input
              type="number"
              min="0"
              max="100"
              style={{ marginTop: "2%", width: "48%", height: "3%" }}
            ></input>
          </label>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-success"
              style={{
                fontSize: regular.fontSizeText,
                marginLeft: "-32%",
                marginTop: "2%",
              }}
            >
              Save
            </button>
          </div>
        </form>
        <Scheme rawJsonData={jsonData} selectedType={selectedType} />
      </center>
    </div>
  );
}

export default FindAService;
