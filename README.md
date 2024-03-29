# PigeonWiki

A site for the fanciest of pigeon fanciers. A live demo of the site can be found at https://sad-hodgkin-394af0.netlify.app/

## Screenshots

<img src='./src/images/Screenshot Login 2022-01-31 093223.png' alt="home-screen" width="200"/>
<img src='./src/images/Screenshot auth 2022-01-31 093322.png' alt="auth-screen" width="180" height="230"/>
<img src='./src/images/Screenshot 2022-01-31 093112.png' alt="blog-screen" width="200"/>

## Usage

If you'd like to fork and run this locally, you will need to create an app at [Auth0](https://auth0.com/docs/quickstarts) to manage your authentication- choose a single page app with React, and copy the provided **domain** and **client ID** details into your local .env file.
These should be prefixed with `REACT_APP_` so that React will be able to get them from `process.env` - e.g.

    REACT_APP_DOMAIN=********************
    REACT_APP_CLIENT_ID=******************

In this demo, the 'like' buttons and 'rate this article' star raters are purely decorative, and ratings will not persist from session to session.

## Why???

The site was part of a weekend recap task for the [School Of Code](https://www.schoolofcode.co.uk/) bootcamp in January 2022.

![A fancy pigeon](./src/images/pigeon.png)
