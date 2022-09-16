import React from "react";
import colorNames from "colornames";
const Color = ({
  color,
  setColor,
  hexvalue,
  setHexvalue,
  isDarkText,
  setIsDarkText,
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <section className="section">
        <div
          className="box"
          style={{
            backgroundColor: color,
            color: isDarkText ? "#000" : "#FFF",
          }}
        >
          {color ? hexvalue : "Empty value"}
        </div>
        <div>
          <input
            className="input"
            type="text"
            required
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
              setHexvalue(colorNames(e.target.value));
            }}
            placeholder="Enter a color"
          />
          <button
            className="button"
            type="button"
            onClick={() => setIsDarkText(!isDarkText)}
          >
            Change Text color
          </button>
        </div>
      </section>
    </form>
  );
};

export default Color;
