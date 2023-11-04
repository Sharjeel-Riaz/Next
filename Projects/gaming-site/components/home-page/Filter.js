import React, { useState } from "react";

export default function Filter() {
  const [date, setDate] = useState("");
  const [format, setFormat] = useState("");
  const [bracket, setBracket] = useState("");

  return (
    <div className="pr-0 lg:pr-8  flex justify-end">
      <div className="flex space-x-2">
        {/* Date Input */}
        <input
          placeholder="Select Date"
          type="date"
          className="px-3 py-2 border rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        {/* Format Select */}
        <select
          className="px-3 py-2 border rounded"
          value={format}
          onChange={(e) => setFormat(e.target.value)}
        >
          <option value="">Format</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>

        {/* Bracket Select */}
        <select
          className="px-3 py-2 border rounded"
          value={bracket}
          onChange={(e) => setBracket(e.target.value)}
        >
          <option value="">Bracket</option>
          <option value="optionA">Option A</option>
          <option value="optionB">Option B</option>
          <option value="optionC">Option C</option>
        </select>
      </div>
    </div>
  );
}
