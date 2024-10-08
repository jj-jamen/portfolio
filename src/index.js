import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import quoteData from "./quoteData.json";
import jobsData from "./jobsData.json";
import IconButton from "@mui/material/IconButton";
import CachedIcon from "@mui/icons-material/Cached";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WebTitle />
    <Quotes />
    <Section2Title />
    <JobEXp />
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

function Section2Title() {
  return (
    <div className="workHistoryTitle">
      <h2 className="workHistoryText">Job Summary</h2>
    </div>
  );
}

// function JobEXp() {
//   return jobsData.map((jobs) => <JobExpDetails jobInfo={jobs} key={jobs.id} />);
// }

// function JobExpDetails({ jobInfo }) {
//   return (
//     <div className="companiesContainer">
//       <Card
//         raised
//         className="companies"
//         key={jobInfo.id}
//         sx={{ maxWidth: 550, minWidth: 295, minHeight: 135 }}
//       >
//         <CardHeader
//           avatar={<Avatar src={jobInfo.photo} aria-label="recipe" />}
//           title={jobInfo.company}
//           subheader={jobInfo.client}
//         />
//         <CardContent>
//           <Typography
//             className="jobdetailstxt"
//             variant="title"
//             gutterBottom
//             component="div"
//           >
//             {jobInfo.role}
//           </Typography>
//           <Typography
//             className="jobdetailstxt"
//             gutterBottom
//             variant="subtitle"
//             component="div"
//           >
//             <small>{jobInfo.duration}</small>
//           </Typography>
//           <Typography className="jobdetailstxt-details" variant="body2">
//             <ul>
//               {jobInfo.details.map((detail, index) => (
//                 <li key={index}>{detail.text}</li>
//               ))}
//             </ul>
//           </Typography>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

function JobEXp() {
  return (
    <Grid container spacing={3} justifyContent="space-evenly">
      {jobsData.map((jobs) => (
        <Grid
          item
          display="flex"
          justifyContent="center"
          xs={12}
          sm={12}
          md={12}
          lg={4}
          xl={4}
          key={jobs.id}
        >
          <JobExpDetails jobInfo={jobs} />
        </Grid>
      ))}
    </Grid>
  );
}

function JobExpDetails({ jobInfo }) {
  return (
    <Card
      raised
      className="companies"
      key={jobInfo.id}
      sx={{ maxWidth: 550, minWidth: 295, minHeight: 135 }}
    >
      <CardHeader
        avatar={<Avatar src={jobInfo.photo} aria-label="recipe" />}
        title={jobInfo.company}
        subheader={jobInfo.client}
      />
      <CardContent>
        <Typography
          className="jobdetailstxt"
          variant="title"
          gutterBottom
          component="div"
        >
          {jobInfo.role}
        </Typography>
        <Typography
          className="jobdetailstxt"
          gutterBottom
          variant="subtitle"
          component="div"
        >
          <small>{jobInfo.duration}</small>
        </Typography>
        <Typography className="jobdetailstxt-details" variant="body2">
          <ul>
            {jobInfo.details.map((detail, index) => (
              <li key={index}>{detail.text}</li>
            ))}
          </ul>
        </Typography>
      </CardContent>
    </Card>
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
