import React, { useState } from "react";

const CycleButton = ({ labels: initialLabels }) => {
  const [labels, setLabels] = useState(initialLabels);
  const [index, setIndex] = useState(0);
  const [adding, setAdding] = useState(false);
  const [newLabel, setNewLabel] = useState("");

  const handleClick = () => {
    if (labels[index] === "+ Add New") {
      setAdding(true);
    } else {
      setIndex((prev) => (prev + 1) % labels.length);
    }
  };

  const handleAddLabel = () => {
    if (!newLabel.trim()) return;
    const updated = [...labels];
    updated.splice(labels.length - 1, 0, newLabel);
    setLabels(updated);
    setIndex(updated.length - 2);
    setNewLabel("");
    setAdding(false);
  };

  const handleCancel = () => {
    setAdding(false);
    setNewLabel("");
    setIndex(0);
  }

  return (
    <div>
      <button
        onClick={handleClick}
        className="w-full h-12 px-3 py-2 rounded-lg bg-pink-500 text-white hover:bg-pink-600 text-sm:text-base font-semibold text-center break-words"
      >
        {labels[index]}
      </button>

      {adding && (
        <div className="mt-2 flex items-center gap-2">
          <input
            type="text"
            value={newLabel}
            onChange={(e) => setNewLabel(e.target.value)}
            placeholder="Enter New"
            className="flex-1 px-3 py-1 rounded bg-gray-800 text-white focus:ring-2 focus:ring-pink-500"
          />
          <button
            onClick={handleAddLabel}
            className="px-3 py-1 bg-pink-500 rounded text-white hover:bg-pink-600"
          >
            Add
          </button>
          <button onClick={handleCancel} className="px-3 py-1 bg-gray-600 rounded text-white hover:bg-gray-700"
          >Cancel</button>
        </div>
      )}
    </div>
  );
};

export default CycleButton;
