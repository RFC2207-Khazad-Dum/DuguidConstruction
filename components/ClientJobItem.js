import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import JobImage from "../components/JobImage";
import styles from "../styles/Jobs.module.css";

export default function ClientJobList({ job }) {
  return (
    <Accordion className={styles.job}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>
          <span className={styles.jobTitle}>{job.title}</span>
          <br />
          {job.categories.map((category, index) => {
            if (index === 3) {
              return (
                <>
                  <span key={index} className={styles[category]}>
                    {category}
                  </span>
                  <br />
                </>
              );
            } else {
              return (
                <span key={index} className={styles[category]}>
                  {category}
                </span>
              );
            }
          })}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <b>Description</b>: {job.description}
        </Typography>
        <Typography>
          <b>Services</b>:{" "}
          {job.categories.map((category, index) => {
            if (job.categories[index + 1] === undefined) {
              return category;
            } else {
              return category + ", ";
            }
          })}
        </Typography>
        <Typography>
          <b>Location</b>: {job.address1}&nbsp;{job.address2},&nbsp;{job.city}
          ,&nbsp;{job.state}&nbsp;{job.zip}
        </Typography>
        <Typography>
          <b>Assigned Employee</b>:{" "}
          {job.assignedEmployee || "Awaiting assignment"}
        </Typography>
        <Typography>
          <b>Attachments</b>:<br />{" "}
          {job.media.map((url, index) => (
            <>
              <JobImage url={url} />
            </>
          ))}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
