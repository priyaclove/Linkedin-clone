"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/app/components/layout/Navbar-2";
import LeftProfile from "@/app/components/profile/LeftProfile";
import ProfileSections from "@/app/components/profile/ProfileSections";
import RightSidebar from "@/app/components/profile/RightSidebar";
import { API_URL } from "@/lib/api";
import { getUser } from "@/lib/auth";

type NamedItem = { id: number; name: string };

type ProfileUser = {
  id: number;
  username: string;
  email: string;
  createdAt: string;
  skills: NamedItem[];
  interests: NamedItem[];
  posts: {
    id: number;
    content: string;
    imageUrl: string | null;
    createdAt: string;
  }[];
};

export default function ProfilePage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = use(params);

  const [user, setUser] = useState<ProfileUser | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "notfound">(
    "loading"
  );

  useEffect(() => {
    let active = true;

    (async () => {
      try {
        const res = await fetch(
          `${API_URL}/api/users/${encodeURIComponent(username)}`
        );
        if (!active) return;

        if (res.status === 404) {
          setStatus("notfound");
          return;
        }

        const data = await res.json();
        setUser(data.user);
        setStatus("ready");
      } catch (error) {
        console.error("Failed to load profile", error);
        if (active) setStatus("notfound");
      }
    })();

    return () => {
      active = false;
    };
  }, [username]);

  return (
    <>
      <Navbar />

      {status === "loading" && (
        <div className="flex min-h-[60vh] items-center justify-center text-gray-500">
          Loading profile…
        </div>
      )}

      {status === "notfound" && (
        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-3 text-center">
          <h1 className="text-2xl font-semibold text-gray-900">
            This profile doesn&apos;t exist
          </h1>
          <p className="text-gray-600">
            No member found with the username{" "}
            <span className="font-medium">@{username}</span>.
          </p>
          <Link
            href="/feed"
            className="rounded-full bg-[#0a66c2] px-5 py-2 font-semibold text-white hover:bg-[#004182]"
          >
            Back to feed
          </Link>
        </div>
      )}

      {status === "ready" && user && (
        <main className="mx-auto mt-20 max-w-[1128px]">
          <div className="grid grid-cols-[780px_320px] gap-6">
            <div>
              <LeftProfile user={user} />
              <ProfileSections
                skills={user.skills}
                interests={user.interests}
                userId={user.id}
                editable={getUser()?.id === user.id}
              />
            </div>
            <RightSidebar />
          </div>
        </main>
      )}
    </>
  );
}
