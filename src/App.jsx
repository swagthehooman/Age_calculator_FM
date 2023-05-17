import { useState } from "react";
import "./app.css";
import DateDisplay from "./components/dateDisplay/DateDisplay";
import DateInput from "./components/dateInput/DateInput";

export default function App() {
  const [dayInput, setDayInput] = useState("");
  const [monthInput, setMonthInput] = useState("");
  const [yearInput, setYearInput] = useState("");

  const currentDate = new Date().getTime();

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const [dayError, setDayError] = useState(false);
  const [monthError, setMonthError] = useState(false);
  const [yearError, setYearError] = useState(false);

  const [toDisplay, setToDisplay] = useState(false);

  // handle changes
  function handleInput(event) {
    var value = event.target.value;
    var name = event.target.name;
    if (name === "dayInput") {
      if (value.length > 2) setDayError(true);
      setDayInput(value);
    } else if (name === "monthInput") {
      if (value.length > 2) setMonthError(true);
      setMonthInput(value);
    } else {
      if (value.length > 4) setYearError(true);
      setYearInput(value);
    }
  }

  //calculate date difference
  function calculateDiff(event) {
    if (dayInput.length === 0) setDayError(true);
    if (monthInput.length === 0) setMonthError(true);
    if (yearInput.length === 0) setYearError(true);

    if (!dayError || !monthError || !yearError) {
      //if there is any error, don't calculate
      return;
    } else {
      const newDate = new Date(yearInput, monthInput, dayInput);
      var diffInDate = new Date(currentDate - newDate.getTime());
      if (diffInDate < 0) {
        console.log("error");
      }
      setYear(diffInDate.getUTCFullYear() - 1970);
      setMonth(diffInDate.getMonth());
      setDay(diffInDate.getUTCDate());

      setToDisplay(true); //display final difference
    }
  }
  return (
    <main>
      <div className="calculator_div">
        <DateInput
          dayError={dayError}
          monthError={monthError}
          yearError={yearError}
          handleChange={handleInput}
          day={dayInput}
          month={monthInput}
          year={yearInput}
        />
        <div className="middle_div">
          <hr />
          <button onClick={calculateDiff}>
            <img src="./assets/images/icon-arrow.svg" />
          </button>
        </div>
        <DateDisplay
          displayBool={toDisplay}
          day={day}
          month={month}
          year={year}
        />
      </div>
    </main>
  );
}
