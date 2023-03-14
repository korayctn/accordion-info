import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  console.log(data);
  return (
    <main>
      <div className="container">
        <h3>Questions and answers about log</h3>
        <section className="info">
          {data.map((val, index) => {
            return <SingleQuestion {...val} key={index} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
