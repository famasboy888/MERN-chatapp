import React from "react";

function GenderCheckbox({ handleCheckboxChange, selectedGender }){
  return (
    <div className="flex">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text  text-gray-400">Male</span>
          <input
            type="checkbox"
            className="checkbox border-gray-400"
            checked={selectedGender === "male"}
            onChange={() => handleCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "female" ? "selected" : ""
          }`}
        >
          <span className="label-text  text-gray-400">Female</span>
          <input
            type="checkbox"
            className="checkbox border-gray-400"
            checked={selectedGender === "female"}
            onChange={() => handleCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
}

export default GenderCheckbox;
