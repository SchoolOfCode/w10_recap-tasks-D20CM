import React, { useState } from "react";
import css from "./app.module.css";
import { articles as dataset } from "../../libs/articles";
import Articles from "../Articles/Articles";
import LoginButton from "../Login/Login";
import LogoutButton from "../Logout/Logout";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const [articles] = useState(dataset);
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <main className={css.App}>
      <h1>WikiPigeon</h1>
      <LoginButton />
      <LogoutButton />
      <Articles articles={articles} />
    </main>
  ) : (
    <main className={css.App}>
      <h1>WikiPigeon</h1>
      <p>Please log in to see the best pigeon discussion in town.</p>
      <LoginButton />
      <LogoutButton />
    </main>
  );
}

export default App;
