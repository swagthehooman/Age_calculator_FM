import "./dateinput.css";

export default function DateInput(props) {
  return (
    <div className="date_input">
      <div className="input_field">
        <label style={{ color: props.dayError && "red" }}>DAY</label>
        <input
          type="text"
          placeholder="DD"
          name="dayInput"
          value={props.day}
          onChange={props.handleChange}
        />
        {props.dayError && <p className="errorInput">This field is required</p>}
      </div>
      <div className="input_field">
        <label style={{ color: props.monthError && "red" }}>MONTH</label>
        <input
          type="text"
          placeholder="MM"
          name="monthInput"
          value={props.month}
          onChange={props.handleChange}
        />
        {props.monthError && (
          <p className="errorInput">This field is required</p>
        )}
      </div>
      <div className="input_field">
        <label style={{ color: props.yearError && "red" }}>YEAR</label>
        <input
          type="text"
          placeholder="YYYY"
          name="yearInput"
          value={props.year}
          onChange={props.handleChange}
        />
        {props.yearError && (
          <p className="errorInput">This field is required</p>
        )}
      </div>
    </div>
  );
}
