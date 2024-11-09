"use client";
import React, { useState, useEffect } from "react";
import EventPage from "@/components/EventCard";
import ContestList from "@/components/PastEvents";

export default function Event() {

  const [events, setEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [featuredContests, setFeaturedContests] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);

  useEffect(() => {
    const getAllEvents = async () => {
      try {
        const response = await fetch("/api/events/all");
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }
        const data = await response.json();
        console.log(data)
        return data;
      } catch (error) {
        console.error("API error:", error);
        return null;
      }
    }

    const getAllUpcomingEvents = async () => {
      try {
        const response = await fetch("/api/events/upcoming");
        if (!response.ok) {
          throw new Error("Failed to fetch upcoming events");
        }
        const data = await response.json();
        console.log(data)
        setUpcomingEvents(data);
        return data;
      } catch (error) {
        console.error("API error:", error);
        return null;
      }
    }

    const getAllFeaturedContests = async () => {
      try {
        const response = await fetch("/api/events/featured");
        if (!response.ok) {
          throw new Error("Failed to fetch featured contests");
        }
        const data = await response.json();
        console.log(data)
        setFeaturedContests(data);
        return data;
      } catch (error) {
        console.error("API error:", error);
        return null;
      }
    }

    const getAllPastEvents = async () => {
      try {
        const response = await fetch("/api/events/past");
        if (!response.ok) {
          throw new Error("Failed to fetch past events");
        }
        const data = await response.json();
        console.log("pasts: ", data)
        setPastEvents(data);
        return data;
      } catch (error) {
        console.error("API error:", error);
        return null;
      }
    }

    getAllEvents();
    getAllUpcomingEvents();
    getAllFeaturedContests();
    getAllPastEvents();
  }, [])

  return (
    <div style={styles.container}>
      <div style={styles.centeredContent}>
        <EventPage 
          upcomingEvents={upcomingEvents}
          featuredContests={featuredContests}
          pastEvents={pastEvents}
        />
        <ContestList 
          pastEvents={pastEvents}
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  centeredContent: {
    textAlign: "center"
  }
};
