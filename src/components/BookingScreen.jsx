import React from "react";

const BookingScreen = ({ onSubmit, data, onInputChange, onNumberChange }) => {
  const handleBudgetChange = (event) => {
    const budgetValue = event.target.value.replace(/^\$/, "");
    onInputChange({
      ...event,
      target: { ...event.target, id: "budget", value: budgetValue },
    });
  };
  return (
    <form className="booking-screen" onSubmit={onSubmit}>
      <div className="booking-screen--numbers">
        <h2 className="booking-screen--labels">Number of travellers</h2>
        <div className="booking-screen--qty">
          <button
            type="button"
            className="booking-screen--qty-button"
            onClick={() => onNumberChange(-1)}
          >
            -
          </button>
          <h6 className="booking-screen--amount">{data.numberOfTravellers}</h6>
          <button
            type="button"
            className="booking-screen--qty-button"
            onClick={() => onNumberChange(1)}
          >
            +
          </button>
        </div>
      </div>

      <div className="booking-screen--destination">
        <h2 className="booking-screen--labels">Flying from</h2>
        <input
          type="text"
          className="booking-screen-inputs"
          id="flyingFrom"
          value={data.flyingFrom}
          onChange={onInputChange}
          placeholder="Manila City"
          required
        />

        <h2 className="booking-screen--labels">Flying to</h2>
        <input
          type="text"
          className="booking-screen-inputs"
          id="flyingTo"
          value={data.flyingTo}
          onChange={onInputChange}
          placeholder="New York City"
          required
        />
      </div>

      <div className="booking-screen--date">
        <h2 className="booking-screen--labels">From Date</h2>
        <input
          type="date"
          className="booking-screen--dtpicker"
          id="fromDate"
          value={data.fromDate}
          onChange={onInputChange}
          required
        />

        <h2 className="booking-screen--labels">To Date</h2>
        <input
          type="date"
          className="booking-screen--dtpicker"
          id="toDate"
          value={data.toDate}
          onChange={onInputChange}
          required
        />
      </div>

      <div className="booking-screen--budget">
        <h2 className="booking-screen--labels">Budget</h2>
        <input
          type="text"
          className="booking-screen--value"
          id="budget"
          value={`$${data.budget}`}
          onChange={handleBudgetChange}
          min="1"
          required
        />
      </div>

      <div className="booking-screen--button">
        <button className="booking-screen--plan-button" type="submit">
          Plan my Trip!
        </button>
      </div>
    </form>
  );
};

export default BookingScreen;
