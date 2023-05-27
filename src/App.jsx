import { useEffect, useState } from "react";
import "./app.css";
import DateDisplay from "./components/dateDisplay/DateDisplay";
import DateInput from "./components/dateInput/DateInput";

export default function App() {
  const [dayInput, setDayInput] = useState("");
  const [monthInput, setMonthInput] = useState("");
  const [yearInput, setYearInput] = useState("");

  const currentDate = new Date().getTime();

  //states for calculated date difference
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  //states for control of input errors
  const [dayError, setDayError] = useState(false);
  const [monthError, setMonthError] = useState(false);
  const [yearError, setYearError] = useState(false);

  //state for display controls
  const [toDisplay, setToDisplay] = useState(false);

  // handle changes in input form
  function handleInput(event) {
    var value = event.target.value;
    var name = event.target.name;
    if (name === "dayInput") setDayInput(value);
    else if (name === "monthInput") setMonthInput(value);
    else setYearInput(value);
  }

  //calculate date difference
  function calculateDiff(event) {
    setYearError(false);
    setMonthError(false);
    setDayError(false);
    //check if inputs are empty or not
    if (yearInput === "") setYearError(true);
    if (monthInput === "") setMonthError(true);
    if (dayInput === "") setDayError(true);

    var tempDay = parseInt(dayInput);
    var tempMonth = parseInt(monthInput);
    var tempYear = parseInt(yearInput);
    //check month validity
    if (tempMonth >= 1 && tempMonth <= 12) setMonthError(false);
    else setMonthError(true);

    //check year validity
    if (yearInput.length > 4 || yearInput > new Date().getFullYear())
      setYearError(true);
    else setYearError(false);

    //check day validity
    if ((tempYear % 4 === 0 && tempYear % 100 !== 0) || tempYear % 400 === 0) {
      //leap year
      if (tempMonth === 2) {
        //for feb
        if (tempDay >= 1 && tempDay <= 29)
          setDayError(false); //if days between 1 and 29
        else setDayError(true);
      } else if (
        //for jan,march, may, jul, aug, oct and dec
        tempMonth === 1 ||
        tempMonth === 3 ||
        tempMonth === 5 ||
        tempMonth === 7 ||
        tempMonth === 8 ||
        tempMonth === 10 ||
        tempMonth === 12
      ) {
        if (tempDay >= 1 && tempDay <= 31)
          setDayError(false); //if days between 1 and 31
        else setDayError(true);
      } else {
        //for rest of the month
        if (tempDay >= 1 && tempDay <= 30)
          setDayError(false); //if days between 1 and 30
        else setDayError(true);
      }
    } else {
      //not a leap year
      if (tempMonth === 2) {
        if (tempDay >= 1 && tempDay <= 28) setDayError(false);
        else setDayError(true);
      } else if (
        tempMonth === 1 ||
        tempMonth === 3 ||
        tempMonth === 5 ||
        tempMonth === 7 ||
        tempMonth === 8 ||
        tempMonth === 10 ||
        tempMonth === 12
      ) {
        if (tempDay >= 1 && tempDay <= 31) setDayError(false);
        else setDayError(true);
      } else {
        if (tempDay >= 1 && tempDay <= 30) setDayError(false);
        else setDayError(true);
      }
    }

    if (dayError || monthError || yearError) {
      //if error exists, dont display
      setToDisplay(false);
      return;
    } //if has error, exit
    else {
      const newDate = new Date(yearInput, monthInput, dayInput);
      var diffInDate = new Date(currentDate - newDate.getTime());
      if (diffInDate < 0) {
        setToDisplay(false); //if the year is in future, return
        return;
      } else {
        setYear(diffInDate.getUTCFullYear() - 1970);
        setMonth(diffInDate.getMonth());
        setDay(diffInDate.getUTCDate());

        setToDisplay(true);
      }
    } //display final difference
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
        <div className="calculation_div">
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
