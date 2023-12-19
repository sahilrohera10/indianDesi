import React, { useState } from "react";

export default function Details() {
  const [type, setType] = useState("Breakfast");
  const [file, setFile] = useState();
  const [title, setTitle] = useState();

  const handleSubmit = () => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", title);
  };

  return (
    <div>
      <h1 style={{ fontSize: "30px", fontWeight: "600", marginTop: "20px" }}>
        Enter {type} Details
      </h1>
      <div style={{ display: "flex", marginTop: "50px" }}>
        <div>
          <label for="cars">Choose meal type:</label>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            id="meal"
          >
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
          </select>
        </div>
      </div>
      <form action="">
        <label> Add pic: </label>
        <input
          type="file"
          name="image"
          onChange={(e) => setFile(e.target.files[0])}
          size="lg"
        />

        <label>Title: </label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          style={{ border: "1px solid black" }}
        />
      </form>
      <br />
      <button
        onSubmit={() => handleSubmit()}
        style={{
          border: "2px solid black",
          borderRadius: "10px",
          padding: "6px",
        }}
      >
        Submit
      </button>
    </div>
  );
}
