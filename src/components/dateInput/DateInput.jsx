import "./dateinput.css";

export default function DateInput(props) {
  return (
    <div className="date_input">
      <div className="input_field">
        <label
          style={{
            color:
              (props.monthError || props.dayError || props.yearError) && "red",
          }}
        >
          DAY
        </label>
        <input
          type="text"
          placeholder="DD"
          name="dayInput"
          value={props.day}
          onChange={props.handleChange}
        />
        {props.dayError && props.day === "" && (
          <p className="errorInput">This field is required</p>
        )}
        {props.dayError && props.day !== "" && (
          <p className="errorInput">Mus be a valid day</p>
        )}
      </div>
      <div className="input_field">
        <label
          style={{
            color:
              (props.monthError || props.dayError || props.yearError) && "red",
          }}
        >
          MONTH
        </label>
        <input
          type="text"
          placeholder="MM"
          name="monthInput"
          value={props.month}
          onChange={props.handleChange}
        />
        {props.monthError && props.month === "" && (
          <p className="errorInput">This field is required</p>
        )}
        {props.monthError && props.month !== "" && (
          <p className="errorInput">Must be a valid month</p>
        )}
      </div>
      <div className="input_field">
        <label
          style={{
            color:
              (props.monthError || props.dayError || props.yearError) && "red",
          }}
        >
          YEAR
        </label>
        <input
          type="text"
          placeholder="YYYY"
          name="yearInput"
          value={props.year}
          onChange={props.handleChange}
        />
        {props.yearError && props.year === "" && (
          <p className="errorInput">This field is required</p>
        )}
        {props.yearError && props.year !== "" && (
          <p className="errorInput">Must be in the past</p>
        )}
      </div>
    </div>
  );
}
