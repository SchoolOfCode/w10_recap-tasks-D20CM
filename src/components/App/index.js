import React, { useState } from "react";
import css from "./app.module.css";
import { articles as dataset } from "../../libs/articles";
import Articles from "../Articles/Articles";
import LoginButton from "../Login/Login";
import LogoutButton from "../Logout/Logout";
import { useAuth0 } from "@auth0/auth0-react";
import pigeon from "../../images/pigeon.png";

function App() {
  const [articles] = useState(dataset);
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <main className={css.App}>
      <header>
        <h1>WikiPigeon</h1>{" "}
        <img src={pigeon} alt="pigeon" className={css.pigeon} />
      </header>
      <LoginButton />
      <LogoutButton />
      <Articles articles={articles} />
    </main>
  ) : (
    <main className={css.App}>
      <header>
        <h1>WikiPigeon</h1>{" "}
      </header>
      <LoginButton />
      <LogoutButton />
      <p>Please log in to see the best pigeon discussion in town.</p>

      <img src={pigeon} alt="pigeon" className={css.pigeonLarge} />
    </main>
  );
}

export default App;
