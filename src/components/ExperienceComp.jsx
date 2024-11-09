"use client";
import React from "react";
import { Box, Typography, Avatar, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Experience = ({ title }) => {
  const experiences = [
    {
      companyName: "Infosys",
      role: "Product & UI/UX Designer",
      duration: "Apr 2018 - Present",
      location: "Pune, India",
      initials: "ST",
      color: "#4F86F7", // Blue background color for the initials avatar
      description: "Worked on multiple UI/UX projects, improving product design and enhancing user experience.",
    },
    {
      companyName: "Pixel Studio",
      role: "UI/UX Designer",
      duration: "Oct 2016 - July 2016",
      location: "Bengaluru, India",
      initials: "PS",
      color: "#FF66B2", // Pink background color for the initials avatar
      description: "Focused on user research and wireframing, delivering design solutions for web applications.",
    },
    {
      companyName: "Ramotion Studio",
      role: "Web Designer",
      duration: "April 2015 - July 2016",
      location: "Bengaluru, India",
      initials: "RS",
      color: "#FFA500", // Orange background color for the initials avatar
      description: "Designed websites and collaborated with developers to create responsive web layouts.",
    },
  ];

  return (
    <Accordion className="rounded-md mb-2 bg-gray-800 text-white">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
        aria-controls="experience-section-content"
        id="experience-section-header"
      >
        {/* Title for the entire Experience section */}
        <Typography variant="h6" className="font-semibold text-white">
          {title}
        </Typography>
      </AccordionSummary>

      <AccordionDetails>
        {/* Inner Accordion for each experience item */}
        {experiences.map((experience, index) => (
          <Accordion key={index} className="text-white bg-slate-700 mb-2">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              {/* Summary with Company and Role */}
              <Box className="flex items-center">
                {/* Company Initials Avatar */}
                <Avatar
                  className="w-12 h-12 font-semibold mr-2"
                  sx={{
                    bgcolor: experience.color,
                    color: "white",
                    fontSize: 16,
                  }}
                >
                  {experience.initials}
                </Avatar>

                <Box>
                  <Typography variant="body1" className="font-semibold text-blue-400">
                    {experience.companyName}
                  </Typography>
                  <Typography variant="body2" color="gray">
                    {experience.role}
                  </Typography>
                </Box>
              </Box>
            </AccordionSummary>

            <AccordionDetails>
              {/* Detailed Information */}
              <Typography variant="body2" color="gray" mb={1}>
                Duration: {experience.duration} | Location: {experience.location}
              </Typography>
              <Typography variant="body2" color="white">
                {experience.description}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default Experience;