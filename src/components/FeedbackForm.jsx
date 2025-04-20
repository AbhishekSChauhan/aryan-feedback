/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import logo from '../Assets/aryanlogo .png';
import happy from '../Assets/happy.svg';
import sad from '../Assets/sad.svg';
import smile from '../Assets/smiling.svg';
import emo from '../Assets/emoless.svg';
import '../App.css';

const ratingOptions = ["Excellent", "Good", "Average", "Bad"];
const svgOptions = [smile, happy, emo, sad];

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    food: {
      taste: "",
      quantity: "",
      presentation: "",
    },
    service: {
      courtesy: "",
      friendliness: "",
      cleanliness: "",
      knowledge: "",
    },
    managerInteraction: "",
    additionalComments: "",
    referToFriend: "",
    name: "",
    contact: "",
    dob: "",
    anniversary: "",
  });

  const handleRadioChange = (section, key, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value,
      },
    }));
  };

  const handleChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Feedback:", formData);
  };

  const renderCustomRadios = (section, key) => (
    <div className="flex gap-4">
      {ratingOptions.map((option, index) => {
        const inputId = `${section}-${key}-${option}`;
        return (
          <div key={option} className="w-20 flex justify-center">
            <div className="radio-buttons-container">
              <div className="radio-button">
                <input
                  type="radio"
                  id={inputId}
                  name={`${section}-${key}`}
                  value={option}
                  checked={formData[section][key] === option}
                  onChange={() => handleRadioChange(section, key, option)}
                  className="radio-button__input"
                />
                <label htmlFor={inputId} className="radio-button__label">
                  <span className="radio-button__custom"></span>
                </label>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  const renderRatingGrid = (section, questions) => (
    <div className="w-full space-y-4 mt-4">
      {/* Header Row: Rating labels and emojis */}
      <div className="flex  w-full  mb-9">
      <div className="text-base font-semibold text-[#4A3AFF] mb-2 !w-[37%] flex-shrink-0">{section === 'food' ? '- Rate Our Food' : '- Rate Our Service'}</div>
      <div className="flex gap-4 ">
        {ratingOptions.map((label, i) => (
          <div key={label} className="flex flex-col items-center w-16">
            <span className="text-sm font-semibold text-gray-700">{label}</span>
            <img src={svgOptions[i]} alt={label} className="w-6 h-6 mt-1" />
          </div>
        ))}
      </div>

      </div>


      {/* Question Rows */}
      
      {questions.map((key) => (
        <div key={key} className="flex items-center gap-4 ">
          <div className="w-[37%] text-sm font-medium text-gray-800 capitalize flex-shrink-0">
            {key === "taste"
              ? "Quality Taste"
              : key === "friendliness"
              ? "Staff"
              : key === "knowledge"
              ? "Overall Service"
              : key}
          </div>

          <div className=" flex gap-4  ">
          {ratingOptions.map((option) => (
            <div key={option} className="w-16 pl-[7px] flex justify-">
              {/* <input
                type="radio"
                name={`${section}-${key}`}
                value={option}
                checked={formData[section][key] === option}
                onChange={() => handleRadioChange(section, key, option)}
                className="accent-orange-600"
              /> */}
              
              <div className="radio-buttons-container">
              <div className="radio-button">
                <input
                  type="radio"
                  id={`${section}-${key}-${option}`}
                  name={`${section}-${key}`}
                  value={option}
                  checked={formData[section][key] === option}
                  onChange={() => handleRadioChange(section, key, option)}
                  className="radio-button__input"
                />
                <label htmlFor={`${section}-${key}-${option}`} className="radio-button__label">
                  <span className="radio-button__custom"></span>
                </label>
              </div>
            </div>
              {/* {renderCustomRadios(section, key)} */}
            </div>
          ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <form
      onSubmit={handleSubmit}
      style={{ boxShadow: '1px 4px 104px 0px rgba(20,20,43,0.11)' }}
      className="sm:max-w-[560px] mx-auto p-6 bg-white rounded-[18px] py-10 space-y-8 flex flex-col items-center"
    >
      <img src={logo} alt="Logo" className="w-32 aspect-square" />
      <p className="text-center text-gray-700 text-3xl font-semibold font-sans w-[80%]">
        Fill the form to submit your feedback
      </p>

      {/* Rate Our Food */}
      <div className="p-4 border-t-[1px] border-gray-200 w-[95%]">
        {renderRatingGrid("food", ["taste", "quantity", "presentation"])}
      </div>

      {/* Rate Our Service */}
      <div className="p-4  border-y-[1px] py-8  w-[95%]">
        {/* <h3 className="text-lg font-semibold text-orange-700 mb-2">Rate Our Service</h3> */}
        {renderRatingGrid("service", ["courtesy", "friendliness", "cleanliness", "knowledge"])}
      </div>

      {/* Manager Interaction */}
      <div className="w-[95%]">
        <label className="block font-medium mb-1">Did our manager interact with you?</label>
        <div className="flex gap-4">
          {["Yes", "No"].map((val) => (
            <label key={val} className="flex items-center gap-1">
              <input
                type="radio"
                name="managerInteraction"
                value={val}
                checked={formData.managerInteraction === val}
                onChange={() => handleChange("managerInteraction", val)}
              />
              {val}
            </label>
          ))}
        </div>
      </div>

      {/* Additional Comments */}
      <div className="w-[95%]">
        <label className="block font-medium mb-1">Any additional comments?</label>
        <textarea
          className="w-full p-2 border rounded"
          rows="3"
          value={formData.additionalComments}
          onChange={(e) => handleChange("additionalComments", e.target.value)}
        />
      </div>

      {/* Referral Question */}
      <div className="w-[95%]">
        <label className="block font-medium mb-1">Would you refer us to a friend?</label>
        <div className="flex gap-4">
          {["Yes", "No", "Maybe"].map((val) => (
            <label key={val} className="flex items-center gap-1">
              <input
                type="radio"
                name="referToFriend"
                value={val}
                checked={formData.referToFriend === val}
                onChange={() => handleChange("referToFriend", val)}
              />
              {val}
            </label>
          ))}
        </div>
      </div>

      {/* Personal Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <input
          type="text"
          placeholder="Name"
          className="p-2 border rounded"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone & Email"
          className="p-2 border rounded"
          value={formData.contact}
          onChange={(e) => handleChange("contact", e.target.value)}
        />
        <input
          type="date"
          placeholder="Date of Birth"
          className="p-2 border rounded"
          value={formData.dob}
          onChange={(e) => handleChange("dob", e.target.value)}
        />
        <input
          type="date"
          placeholder="Date of Anniversary"
          className="p-2 border rounded"
          value={formData.anniversary}
          onChange={(e) => handleChange("anniversary", e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-orange-600 text-white font-semibold py-2 rounded hover:bg-orange-700 transition"
      >
        Submit Feedback
      </button>
    </form>
  );
};

export default FeedbackForm;
