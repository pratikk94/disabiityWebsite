import { regular } from "../Responsive/constants";

export default function Heading({ title }) {
  return (
    <div
      style={{
        backgroundColor: "#F2F2F2",
        marginTop: "-8vh",
        width: "100%",
        height: "18vh",
        float: "bottom",
        position: "relative",
      }}
    >
      <p
        style={{
          fontSize: regular.fontSizeHeader,
          color: "#1A2C6D",
          paddingTop: "4vh",
        }}
      >
        {title}
      </p>
    </div>
  );
}
