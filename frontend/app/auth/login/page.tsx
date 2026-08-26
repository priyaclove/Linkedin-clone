"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye } from "lucide-react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { API_URL } from "@/lib/api";
import { setUser } from "@/lib/auth";


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();

  try {
    setLoading(true);

    const response = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: data.message || "Invalid email or password.",
      });
      return;
    }

    // Persist the logged-in user so protected pages become accessible.
    setUser(data.user);

    Swal.fire({
      icon: "success",
      title: "Login Successful",
      text: "Welcome back!",
    });
    router.push("/feed");
  } catch (error) {
    console.error(error);
    Swal.fire({
  icon: "error",
  title: "Login Failed",
  text: "Invalid email or password.",
});

  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Logo */}

      <div className="px-12 py-8">
        <h1 className="text-3xl font-bold text-[#0A66C2]">
          Linked
          <span className="rounded bg-[#0A66C2] px-1 text-white">in</span>
        </h1>
      </div>

      {/* Login Card */}

      <div className="flex justify-center">
        <div className="w-full max-w-[480px] rounded-xl border border-gray-200 bg-white p-9 ">
          <h2 className="text-2xl font-semibold text-[#191919]">
            Sign in
          </h2>

          <p className="mt-2 text-sm text-gray-600 font-medium">
            New to LinkedIn?{" "}
            <Link
              href="/auth/register"
              className="font-semibold text-[#0A66C2]"
            >
              Join now
            </Link>
          </p>

          {/* Google */}

          <button className="mt-7 flex h-10 w-full items-center justify-center gap-3 rounded-full border border-gray-500 text-sm font-medium hover:bg-gray-50">
            Continue with Google
          </button>

          {/* Apple */}

          <button className="mt-4 flex h-10 w-full items-center justify-center gap-3 rounded-full border border-gray-500 text-sm font-medium hover:bg-gray-50">
            <span className="text-2xl"></span>

            Sign in with Apple
          </button>

          {/* Terms */}

          <p className="mt-5 text-sm text-gray-600 font-medium">
            By continuing, you agree to LinkedIn's{" "}
            <Link
              href="#"
              className="font-semibold text-[#0A66C2]"
            >
              User Agreement
            </Link>
            ,{" "}
            <Link
              href="#"
              className="font-semibold text-[#0A66C2]"
            >
              Privacy Policy
            </Link>
            , and{" "}
            <Link
              href="#"
              className="font-semibold text-[#0A66C2]"
            >
              Cookie Policy
            </Link>
            .
          </p>

          {/* Divider */}

          <div className="my-6 flex items-center">
            <div className="h-px flex-1 bg-gray-300"></div>

            <span className="mx-4 text-gray-500 font-medium">or</span>

            <div className="h-px flex-1 bg-gray-300"></div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Email */}

            <div>
              <label className="mb-1 block text-sm text-[#191919] font-medium">
                Email or phone
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-10 w-full rounded border border-gray-600 px-4 outline-none focus:border-2 focus:border-black"
              />
            </div>

            {/* Password */}

            <div className="relative mt-5">
              <label className="mb-1 block text-sm text-[#191919] font-medium">
                Password
              </label>

              <input
                type={show ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-10 w-full rounded border border-gray-600 px-4 pr-12 outline-none focus:border-2 focus:border-black"
              />

              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-4 top-[38px]"
              >
                <Eye size={22} />
              </button>
            </div>

            {/* Forgot */}

            <Link
              href="#"
              className="mt-5 inline-block font-semibold text-[#0A66C2] hover:underline"
            >
              Forgot password?
            </Link>

            {/* Checkbox */}

            <div className="mt-7 flex items-center gap-3">
              <input
                type="checkbox"
                defaultChecked
                className="h-5 w-5 accent-green-700"
              />

              <span className="text-sm text-gray-600 font-medium">
                Keep me signed in
              </span>
            </div>

            {/* Button */}

            <button
              className="mt-8 h-10 w-full rounded-full bg-[#0A66C2] text-sm font-medium text-white hover:bg-[#004182]"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}

      <footer className="mt-16 border-t py-6">
        <div className="flex flex-wrap justify-center gap-5 text-sm text-gray-600">
          <span>LinkedIn Corporation © 2026</span>
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