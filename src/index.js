import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import quoteData from "./quoteData.json";
import IconButton from "@mui/material/IconButton";
import CachedIcon from "@mui/icons-material/Cached";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WebTitle />
    <Quotes />
    <NavMenu />
    <Socials />
  </React.StrictMode>
);

function WebTitle() {
  return (
    <div className="text-is-centered title">
      <h1 className="mont-300-normal text-is-centered gradientText">
        John Jeffrey Jamen
      </h1>
    </div>
  );
}

function Quotes() {
  // Function to get a random quote
  function getQuote() {
    const randomIndex = Math.floor(Math.random() * quoteData.length);
    return quoteData[randomIndex];
  }

  // State to hold the current quote
  const [quote, setQuote] = useState(getQuote());

  // Function to handle button click and get a new quote
  function newQuote() {
    setQuote(getQuote());
  }

  // Render the UI
  return (
    <div className="quote-container">
      <div className="quotes">
        <p className="quoteText">{quote.quote}</p>
      </div>
      <div className="quotes">
        <p>
          <em>- {quote.author} -</em>
        </p>
      </div>
      <div className="quotes">
        <IconButton onClick={newQuote}>
          <CachedIcon className="qoute-button" />
        </IconButton>
      </div>
    </div>
  );
}

function NavMenu() {
  return (
    <div className="navContainer">
      <div className="navItem">Jobs</div>
      <div className="navItem">Skills</div>
      <div className="navItem">Prototypes</div>
      <div className="navItem">Education</div>
    </div>
  );
}

function Socials() {
  return (
    <div className="socialIconsContainer">
      <div className="socialIcons">
        <IconButton
          href="https://github.com/jj-jamen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/jjjamen/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </IconButton>
      </div>
    </div>
  );
}
