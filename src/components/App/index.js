import React, { useState } from "react";
import css from "./app.module.css";
import { articles as dataset } from "../../libs/articles";
import Articles from "../Articles/Articles";

function App() {
  const [articles, setArticles] = useState(dataset);
  return (
    <main className={css.App}>
      <h1>WikiPigeon</h1>
      <Articles articles={articles} />
    </main>
  );
}

export default App;
