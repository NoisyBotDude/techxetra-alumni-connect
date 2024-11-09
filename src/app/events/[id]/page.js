"use client"

import React, { useState, useEffect } from "react";
import EventBanner from "@/components/EventBanner";
import { useRouter, useParams } from "next/navigation";

export default function EventPage() {

  const params = useParams();
  const [event, setEvent] = useState({});

  useEffect(() => {
    const getEvent = async () => {
      try {
        const response = await fetch(`/api/events/${params?.id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch event");
        }
        const data = await response.json();
        console.log(data)
        setEvent(data);
        return data;
      } catch (error) {
        console.error("API error:", error);
        return null;
      }
    }

    getEvent();
  }, [])

  return (
    <div>
      <EventBanner data={event[0]} />
    </div>
  );
}
