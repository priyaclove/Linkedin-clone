"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getUser } from "@/lib/auth";

// /profile just forwards to the logged-in user's public profile at /in/<username>.
export default function ProfileRedirect() {
  const router = useRouter();

  useEffect(() => {
    const user = getUser();
    router.replace(user ? `/in/${user.username}` : "/auth/login");
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center text-gray-500">
      Loading your profile…
    </div>
  );
}
