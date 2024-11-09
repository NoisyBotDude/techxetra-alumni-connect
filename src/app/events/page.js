"use client";
import React from "react";
import EventPage from "@/components/EventCard";
import ContestList from "@/components/PastEvents";

export default function Event() {
  return (
    <div style={styles.container}>
      <div style={styles.centeredContent}>
        <EventPage />
        <ContestList />
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
