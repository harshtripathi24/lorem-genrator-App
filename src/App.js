import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(count);
    let textAmount = parseInt(count);
    if (count <= 0) {
      textAmount = 1;
    }
    if (count > 8) {
      textAmount = 8;
    }

    setText(data.slice(0, textAmount));
  };

  return (
    <>
      <nav className="nav-bar">
        <h2>Lorem-Genrator App</h2>
      </nav>
      <section className="section-center">
        <h3>Bored of normal boring Ipsum Text</h3>
        <form onSubmit={handleSubmit} className="lorem-form">
          <label htmlFor="amount">Paragraph:</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button className="btn" type="submit">
            Generate
          </button>
        </form>
        <article className="lorem-text">
          {text.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </article>
      </section>
    </>
  );
}

export default App;
