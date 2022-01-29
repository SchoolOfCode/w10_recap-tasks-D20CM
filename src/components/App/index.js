import React, { useState } from "react";
import "./App.css";
import { articles as dataset } from "../../libs/articles";
import Articles from "../Articles/Articles";

function App() {
  const [articles, setArticles] = useState(dataset);
  return (
    <main className="App">
      <h1>WikiPigeon</h1>
      <Articles articles={articles} />
    </main>
  );
}

export default App;
