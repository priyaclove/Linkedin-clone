"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // TODO: API Call

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      {/* Header */}
      <header className="bg-white">
        <div className="mx-auto flex h-16 max-w-[1128px] items-center justify-between px-6">
          {/* Logo */}
          <Link href="/">
            <h1 className="text-3xl font-bold text-[#0A66C2]">
              Linked
              <span className="rounded bg-[#0A66C2] px-1 text-white">in</span>
            </h1>
          </Link>

          <div className="flex items-center gap-6">
            <Link
              href="/login"
              className="text-lg font-bold text-[#191919] hover:text-[#0A66C2]"
            >
              Sign in
            </Link>

            <Link
              href="/register"
              className="rounded-full border border-[#0A66C2] px-6 py-2 text-lg font-bold text-[#0A66C2] transition hover:bg-[#eaf4fe]"
            >
              Join now
            </Link>
          </div>
        </div>
      </header>

      {/* Center Card */}
      <main className="flex flex-1 items-center justify-center px-4">
        <div className="w-full max-w-[420px] rounded-lg bg-white p-7 shadow-xl">
          <h2 className="mb-8 text-3xl font-semibold leading-none text-[#191919]">
            Forgot password
          </h2>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email or Phone"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-13 w-full rounded border border-gray-500 px-4 text-sm outline-none focus:border-2 focus:border-[#0A66C2]"
            />

            <p className="mt-6 text-sm text-gray-700 font-medium">
              We'll send a verification code to this email or phone number if
              it matches an existing LinkedIn account.
            </p>

            <button
              type="submit"
              className="mt-8 h-12 w-full rounded-full bg-[#0A66C2] text-sm font-semibold text-white transition hover:bg-[#004182]"
            >
              {loading ? "Sending..." : "Next"}
            </button>

            <Link
              href="/login"
              className="mt-6 block text-center text-sm font-semibold text-gray-600 hover:underline"
            >
              Back
            </Link>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-5">
        <div className="mx-auto flex max-w-[1128px] flex-wrap items-center justify-center gap-5 text-sm text-gray-600 font-medium ">
          <span className="font-semibold">LinkedIn © 2026</span>
          <span>User Agreement</span>
          <span>Privacy Policy</span>
          <span>Community Guidelines</span>
          <span>Cookie Policy</span>
          <span>Copyright Policy</span>
          <span>Send Feedback</span>
          <span>Language ▼</span>
        </div>
      </footer>
    </div>
  );
}