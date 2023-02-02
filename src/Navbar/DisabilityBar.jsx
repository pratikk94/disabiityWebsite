import { textAlign } from "@mui/system";
import FontSizeChanger from "react-font-size-changer";
export default function DisabilityBar() {
  return (
    <div style={{ height: "5vh" }}>
      <span
        style={{
          float: "right",
          marginRight: "20vw",
          justifyContent: "center",
        }}
      >
        <img
          src={require("../assets/audiobook.png")}
          style={{ width: "2vw", paddingTop: "1vw" }}
        ></img>
        <p
          style={{
            display: "inline",
            paddingBottom: "2vw",
            fontSize: "20px",
            justifyContent: "center",
          }}
        >
          <a href="https://drive.google.com/drive/folders/1FhyfR_BivDbBuTBzBUDWAAhemc2cmc12">
            Audio book here
          </a>
        </p>
      </span>
    </div>
  );
}
