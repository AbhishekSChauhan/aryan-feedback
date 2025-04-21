/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import logo from '../Assets/aryanlogo .png';
import happy from '../Assets/happy.svg';
import sad from '../Assets/sad.svg';
import smile from '../Assets/smiling.svg';
import emo from '../Assets/emoless.svg';
import '../App.css';
import StarRating from "./StarRating"; 

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
    phone: "",
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
    <div className="w-full space-y-4 mt-6 sm:mt-4">
      {/* Header Row: Rating labels and emojis */}
      <div className="flex items-center w-full  mb-9">
      <div className="hidden sm:flex  text-base font-semibold text-[#4A3AFF] mb-2 sm:!w-[37%] flex-shrink-0">{section === 'food' ? '- Rate Our Food' : '- Rate Our Service'}</div>
      <div className="sm:hidden text-sm font-semibold text-[#4A3AFF] !w-[37%] flex-shrink-0 my-3">{section === 'food' ? ' Rate Our Food' : ' Rate Our Service'}</div>

      <div className="flex gap-5 sm:gap-4 ">
        {ratingOptions.map((label, i) => (
          <div key={label} className="flex flex-col items-center w-max sm:w-16">
            <span className="text-xs sm:text-sm font-semibold text-gray-700">{label}</span>
            <img src={svgOptions[i]} alt={label} className="w-6 h-6 mt-1" />
          </div>
        ))}
      </div>

      </div>


      {/* Question Rows */}
      
      {questions.map((key) => (
        <div key={key} className="flex items-center gap-4 mt-7 sm:mt-0 ">
          <div className="w-[37%] text-sm font-medium text-gray-800 capitalize pt-[5px] flex-shrink-0">
            {key === "taste"
              ? "Quality Taste"
              : key === "friendliness"
              ? "Staff"
              : key === "knowledge"
              ? "Overall Service"
              : key}
          </div>

          <div className=" flex gap-5 sm:gap-4  items-center ">
          {ratingOptions.map((option) => (
            <div key={option} className="w-10 sm:w-16 sm:pl-[7px] flex justify-">
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
      // style={{ boxShadow: '1px 4px 104px 0px rgba(20,20,43,0.11)' }}
      className="w-full sm:max-w-[560px] sm:mx-auto p-6 bg-white sm:rounded-[18px] sm:custom-shadow py-10 space-y-8 flex flex-col items-center"
    >
      <img src={logo} alt="Logo" className="w-32 aspect-square" />
      <p className="text-center text-gray-700 text-2xl sm:text-3xl font-semibold font-sans w-[80%]">
        Fill the form to submit your feedback
      </p>

      {/* Rate Our Food */}
      <div className="sm:p-4 border-t-[1px] border-gray-200 w-full sm:w-[95%]">
        {renderRatingGrid("food", ["taste", "quantity", "presentation"])}
      </div>

      {/* Rate Our Service */}
      <div className="sm:p-4 border-t-[1px] border-gray-200 w-full sm:w-[95%]">
        {/* <h3 className="text-lg font-semibold text-orange-700 mb-2">Rate Our Service</h3> */}
        {renderRatingGrid("service", ["courtesy", "friendliness", "cleanliness", "knowledge"])}
      </div>

      {/* Manager Interaction */}
      <div className="w-full sm:w-[95%] !mt-14 sm:mt-0">
        <label className="block font-medium mb-1">Did our manager interact with you?</label>
        <div className="flex gap-4 mt-4">
          {["Yes", "No"].map((val) => {
            const inputId = `managerInteraction-${val}`;
            return (
              <div key={val} className="radio-buttons-container">
                <div className="radio-button">
                  <input
                    type="radio"
                    id={inputId}
                    name="managerInteraction"
                    value={val}
                    checked={formData.managerInteraction === val}
                    onChange={() => handleChange("managerInteraction", val)}
                    className="radio-button__input"
                  />
                  <label htmlFor={inputId} className="radio-button__label">
                    <span className="radio-button__custom"></span>
                    <span className="ml-1 font-semibold">{val}</span>
                  </label>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Additional Comments */}
      <div className="w-full sm:w-[95%]">
        <label className="block font-medium mb-1">Any additional comments?</label>
        <textarea
          className="w-full p-2 border rounded-[4px] mt-4 outline-none focus:ring-4 focus:ring-[#4A3AFF] focus:ring-opacity-20 focus:border-[1px] focus:border-[#4A3AFF]"
          rows="3"
          value={formData.additionalComments}
          onChange={(e) => handleChange("additionalComments", e.target.value)}
        />
      </div>

      {/* Referral Question */}
      <div className="w-full  sm:w-[95%]">
        <label className="block font-medium mb-1">Would you refer us to a friend?</label>
        {/* <div className="flex gap-4">
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
        </div> */}

      <div className="flex gap-4 mt-4">
        {["Yes", "No", "Maybe"].map((val, index) => {
          const inputId = `referToFriend-${val}`;
          return (
            <div key={val} className="radio-buttons-container">
              <div className="radio-button">
                <input
                  type="radio"
                  id={inputId}
                  name="referToFriend"
                  value={val}
                  checked={formData.referToFriend === val}
                  onChange={() => handleChange("referToFriend", val)}
                  className="radio-button__input"
                />
                <label htmlFor={inputId} className="radio-button__label">
                  <span className="radio-button__custom"></span>
                  <span className="ml-1 font-semibold">{val}</span>
                </label>
              </div>
            </div>
          );
        })}
      </div>

      </div>



      <div className="w-full mt-5 sm:mt-0 sm:w-[95%]">
        <label className="block font-medium mb-1">Rate your overall experience</label>
        <StarRating
          name="overallRating"
          onChange={(value) => setFormData((prev) => ({ ...prev, overallRating: value }))}
        />
      </div>


      {/* Personal Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <div className="flex flex-col gap-2 ">
          <div className="font-semibold text-[15px] ml-2">Name</div>
          <div>
            <input
              type="text"
              placeholder="Name"
              className="outline-none  w-full pl-3 placeholder:text-sm h-[45px] border rounded-full focus:ring-4 focus:ring-[#4A3AFF] focus:ring-opacity-20 focus:border-[1.5px] transition-all delay-200 focus:border-[#4A3AFF]"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
        </div>
        </div>
        <div className="flex flex-col gap-2">
        <div className="font-semibold text-[15px] ml-2">Email</div>
        <input
          type="text"
          placeholder="Email"
          className="outline-none pl-3 placeholder:text-sm h-[45px] border rounded-full focus:ring-4 focus:ring-[#4A3AFF] focus:ring-opacity-20 focus:border-[1.5px] transition-all delay-200 focus:border-[#4A3AFF]"
          value={formData.contact}
          onChange={(e) => handleChange("contact", e.target.value)}
        />
        </div>

        <div className="flex flex-col gap-2">
        <div className="font-semibold text-[15px] ml-2">Phone</div>
        <input
          type="text"
          placeholder="Phone number"
          className="outline-none pl-3 placeholder:text-sm h-[45px] border rounded-full focus:ring-4 focus:ring-[#4A3AFF] focus:ring-opacity-20 focus:border-[1.5px] transition-all delay-200 focus:border-[#4A3AFF]"
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
        />
        </div>

        <div className="flex flex-col gap-2 w-full">
        <div className="font-semibold text-[15px] ml-2">Date of Birth</div>
        <input
          type="date"
          placeholder="DOB"
          className="outline-none px-3 w-full placeholder:text-sm h-[45px] border rounded-full focus:ring-4 focus:ring-[#4A3AFF] focus:ring-opacity-20 focus:border-[1.5px] transition-all delay-200 focus:border-[#4A3AFF]"
          value={formData.dob}
          onChange={(e) => handleChange("dob", e.target.value)}
        />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <div className="font-semibold text-[15px] ml-2">Anniversary</div>
          <input
            type="date"
            placeholder="Date of Anniversary"
            className="outline-none px-3 w-full placeholder:text-sm h-[45px] border rounded-full focus:ring-4 focus:ring-[#4A3AFF] focus:ring-opacity-20 focus:border-[1.5px] transition-all delay-200 focus:border-[#4A3AFF]"
            value={formData.anniversary}
            onChange={(e) => handleChange("anniversary", e.target.value)}
          />
          </div>
      </div>

      <button
        type="submit"
        style={{ boxShadow: ' 0px 3px 22px 0px rgba(74,58,255,0.25)'}}
        className="self-start h-[55px] text-white font-semibold px-5 rounded-full text-sm tracking-wide bg-[#4A3AFF] transition-all"
      >
        Submit Feedback
      </button>
    </form>
  );
};

export default FeedbackForm;
