import FontSizeChanger from "react-font-size-changer";
export default function DisabilityBar() {
  return (
    <div style={{ height: "5vh" }}>
      <span style={{ float: "right", marginRight: "20vw" }}>
        <FontSizeChanger
          targets={["p"]}
          onChange={(element, newValue, oldValue) => {
            console.log(element, newValue, oldValue);
          }}
          options={{
            stepSize: 1,
            range: 0.5,
          }}
          customButtons={{
            up: <span style={{ fontSize: "2vh" }}>A</span>,
            down: <span style={{ fontSize: "1vh" }}>A</span>,
            style: {
              backgroundColor: "red",
              color: "white",
              WebkitBoxSizing: "border-box",
              WebkitBorderRadius: "5px",
              width: "60px",
            },
            buttonsMargin: 10,
          }}
        />
      </span>
    </div>
  );
}
