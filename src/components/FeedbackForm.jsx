import React, { useState } from "react";

const emojiOptions = [
  { label: "😍 Super", value: "super" },
  { label: "😊 Good", value: "good" },
  { label: "😐 Average", value: "average" },
  { label: "😞 Bad", value: "bad" },
];

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

  const renderEmojiRadios = (section, key) => (
    <div className="flex gap-4 mt-2">
      {emojiOptions.map((option) => {
        const isSelected = formData[section][key] === option.value;
        return (
          <button
            type="button"
            key={option.value}
            onClick={() => handleRadioChange(section, key, option.value)}
            className={`flex flex-col items-center justify-center px-4 py-2 rounded-lg border ${
              isSelected ? "border-orange-600 bg-orange-100 ring-2 ring-orange-500" : "border-gray-300"
            } hover:bg-orange-50 transition`}
          >
            <span className="text-2xl">{option.label.split(" ")[0]}</span>
            <span className="text-sm mt-1">{option.label.split(" ")[1]}</span>
          </button>
        );
      })}
    </div>
  );
  

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-6">
      <h2 className="text-center text-2xl font-bold text-orange-600">aryan</h2>
      <p className="text-center text-gray-700">We welcome your feedback</p>

      {/* Food Section */}
        <div className="bg-orange-50 p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-orange-700 mb-4">Rate Our Food</h3>
        <div className="space-y-6">
            {["taste", "quantity", "presentation"].map((key) => (
            <div key={key}>
                <label className="block text-sm font-medium text-gray-700 capitalize">
                {key === "taste" ? "Quality Taste" : key}
                </label>
                {renderEmojiRadios("food", key)}
            </div>
            ))}
        </div>
        </div>
            
        {/* Service Section */}
        <div className="bg-orange-50 p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-orange-700 mb-4">Rate Our Service</h3>
        <div className="space-y-6">
            {["courtesy", "friendliness", "cleanliness", "knowledge"].map((key) => (
            <div key={key}>
                <label className="block text-sm font-medium text-gray-700 capitalize">
                {key === "friendliness" ? "Staff Friendliness" :
                    key === "knowledge" ? "Product Knowledge" : key}
                </label>
                {renderEmojiRadios("service", key)}
            </div>
            ))}
        </div>
        </div>

      {/* Manager Interaction */}
      <div>
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
      <div>
        <label className="block font-medium mb-1">Any additional comments?</label>
        <textarea
          className="w-full p-2 border rounded"
          rows="3"
          value={formData.additionalComments}
          onChange={(e) => handleChange("additionalComments", e.target.value)}
        />
      </div>

      {/* Referral Question */}
      <div>
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
