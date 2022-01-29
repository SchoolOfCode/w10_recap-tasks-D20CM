import "./App.css";
import articles from "../../libs/articles";
import Articles from "../Articles/Articles";

function App() {
  return (
    <main className="App">
      <h1>WikiPigeon</h1>
      <Articles articles={articles} />
    </main>
  );
}

export default App;
