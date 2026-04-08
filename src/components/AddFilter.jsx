import React, { useState } from "react";

function AddFilter({ addFilter }) {
  const [category, setCategory] = useState("");
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!category || !value) {
      alert("Enter filter details");
      return;
    }

    addFilter({ category, value });

    setCategory("");
    setValue("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Filter Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <input
        type="text"
        placeholder="Value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button type="submit">Add Filter</button>
    </form>
  );
}

export default AddFilter;
