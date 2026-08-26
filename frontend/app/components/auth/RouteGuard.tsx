"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";

// Routes that require a logged-in user. Anything starting with one of these
// prefixes is gated; everything else (the landing page and /auth/*) is public.
const PROTECTED_PREFIXES = [
  "/feed",
  "/network",
  "/jobs",
  "/messaging",
  "/notifications",
  "/profile",
  "/in",
  "/games",
  "/top-content",
  "/events",
];

function isProtected(pathname: string): boolean {
  return PROTECTED_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(prefix + "/")
  );
}

export default function RouteGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  const guarded = isProtected(pathname);

  useEffect(() => {
    if (guarded && !isAuthenticated()) {
      router.replace("/auth/login");
    } else {
      setChecked(true);
    }
  }, [pathname, guarded, router]);

  // On a protected route, render nothing until we've confirmed the user is
  // authenticated — this prevents protected content from flashing before the
  // redirect kicks in.
  if (guarded && !checked) {
    return (
      <div className="flex min-h-screen items-center justify-center text-gray-500">
        Loading…
      </div>
    );
  }

  return <>{children}</>;
}
