"use client";
import { defineQuery } from "next-sanity";
import { useEffect, useState } from "react";
import Chat from "@/components/chat/Chat";
import { client } from "@/sanity/lib/client";
import SidebarToggle from "../SidebarToggle";

const CHAT_PROFILE_QUERY = defineQuery(`*[_id == "singleton-profile"][0]{
    _id,
    _type,
    _createdAt,
    _updatedAt,
    _rev,
    firstName,
    lastName,
    headline,
    shortBio,
    email,
    phone,
    location,
    availability,
    socialLinks,
    yearsOfExperience,
    profileImage
  }`);

function ChatWrapper() {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    let active = true;
    client
      .fetch(CHAT_PROFILE_QUERY)
      .then((data) => {
        if (active) setProfile(data);
      })
      .catch(() => {
        // fail silently in UI; Chat can handle null profile
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="h-full w-full">
      <div className="md:hidden p-2 sticky top-0 z-10">
        <SidebarToggle />
      </div>

      <Chat profile={profile} />
    </div>
  );
}

export default ChatWrapper;
