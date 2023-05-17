import "./datedisplay.css";

export default function DateDisplay(props) {
  return (
    <div>
      <div className="date_diff">
        <h2 className="numbers">{props.displayBool ? props.year : "_ _"}</h2>
        <h2>years</h2>
      </div>
      <div className="date_diff">
        <h2 className="numbers">{props.displayBool ? props.month : "_ _"}</h2>
        <h2>months</h2>
      </div>
      <div className="date_diff">
        <h2 className="numbers">{props.displayBool ? props.day : "_ _"}</h2>
        <h2>days</h2>
      </div>
    </div>
  );
}
