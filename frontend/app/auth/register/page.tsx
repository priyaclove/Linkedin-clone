'use client';

import { useState } from 'react';
import Link from 'next/link';
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { API_URL } from "@/lib/api";
import { setUser } from "@/lib/auth";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    // Simple client-side validation
    if (!formData.username || !formData.email || !formData.password) {
      setError('All fields are required.');
      return;
    }

    try {
      const response = await fetch(`${API_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setFormData({ username: '', email: '', password: '' });
        // Log the new user in immediately so protected pages are accessible.
        setUser(data.user);
        Swal.fire({
          icon: "success",
          title: "Account Created",
          text: "Welcome to LinkedIn!",
        });
        router.push("/feed");
      } else {
        setError(data.message || 'Something went wrong.');
      }
    } catch (err) {
          Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Invalid email or password.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f2ef]">
      {/* Logo */}
      <div className="mx-auto w-full max-w-[1128px] px-6 pt-6">
        <h1 className="text-[34px] font-bold text-[#0a66c2]">
          Linked<span className="rounded bg-[#0a66c2] px-1 text-white">in</span>
        </h1>
      </div>
  
      {/* Form */}
      <div className="mt-6 flex justify-center px-4">
        <div className="w-full max-w-[400px]">
          <h2 className="mb-6 text-center text-[34px] font-light text-[#191919]">
            Join LinkedIn now — it's free!
          </h2>
  
          <div className="rounded-lg bg-white p-6">
            {error && (
              <div className="mb-4 rounded bg-red-100 p-2 text-sm text-red-600">
                {error}
              </div>
            )}
  
            {success && (
              <div className="mb-4 rounded bg-green-100 p-2 text-sm text-green-600">
                Registration successful!
              </div>
            )}
  
            <form onSubmit={handleSubmit}>
               <div className="mb-4">
                <label className="mb-1 block text-[15px] font-semibold text-[#555]">
                 Username
                </label>
  
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="h-10 w-full rounded border border-gray-500 px-3 outline-none focus:border-2 focus:border-black"
                />
              </div>
              {/* Email */}
              <div className="mb-4">
                <label className="mb-1 block text-[15px] font-semibold text-[#555]">
                  Email 
                </label>
  
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-10 w-full rounded border border-gray-500 px-3 outline-none focus:border-2 focus:border-black"
                />
              </div>
  
              {/* Password */}
              <div className="mb-4">
                <label className="mb-1 block text-[15px] font-semibold text-[#555]">
                  Password
                </label>
  
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="h-10 w-full rounded border border-gray-500 px-3 outline-none focus:border-2 focus:border-black"
                />
              </div>
  
              {/* Checkbox */}
              <div className="mb-5 flex items-center gap-2">
                <input
                  id="remember"
                  type="checkbox"
                  defaultChecked
                  className="h-5 w-5 accent-green-700"
                />
  
                <label
                  htmlFor="remember"
                  className="text-[16px] text-[#191919]"
                >
                  Remember me
                </label>
              </div>
  
              {/* Terms */}
              <p className="mb-5 text-center text-[13px] text-gray-600">
                By clicking Agree & Join or Continue, you agree to the LinkedIn{" "}
                <Link
                  href="/auth/terms"
                  className="font-semibold text-[#0a66c2]"
                >
                  User Agreement
                </Link>
                ,{" "}
                <Link
                  href="/auth/privacy"
                  className="font-semibold text-[#0a66c2]"
                >
                  Privacy Policy
                </Link>
                , and{" "}
                <Link
                  href="/auth/cookie"
                  className="font-semibold text-[#0a66c2]"
                >
                  Cookie Policy
                </Link>
                .
              </p>
  
              {/* Button */}
              <button
                type="submit"
                className="h-12 w-full rounded-full bg-[#0a66c2] text-lg font-semibold text-white hover:bg-[#004182]"
              >
                Agree & Join
              </button>
            </form>
  
            {/* Divider */}
            <div className="my-6 flex items-center">
              <div className="h-px flex-1 bg-gray-300"></div>
  
              <span className="mx-4 text-sm text-gray-500">or</span>
  
              <div className="h-px flex-1 bg-gray-300"></div>
            </div>
  
            {/* Google */}
            <button className="flex h-12 w-full items-center justify-center gap-3 rounded-full border border-gray-500 bg-white font-semibold text-gray-700 hover:bg-gray-100">
              Continue with Google
            </button>
  
            {/* Sign In */}
            <p className="mt-8 text-center text-sm text-gray-600 font-medium">
              Already on LinkedIn?{" "}
              <Link
                href="/auth/login"
                className="font-semibold text-[#0a66c2]"
              >
                Sign in
              </Link>
            </p>
          </div>
  
          {/* Bottom */}
          <p className="mt-6 text-center text-sm text-gray-600 font-medium">
            Looking to create a page for a business?{" "}
            <Link href="/" className="font-semibold text-[#0a66c2]">
              Get help
            </Link>
          </p>
        </div>
      </div>
  
      {/* Footer */}
      <footer className="mt-16 border-t bg-white py-5">
        <div className="flex flex-wrap justify-center gap-5 text-xs text-gray-600">
          <span><strong>LinkedIn</strong> © 2026</span>
          <span>About</span>
          <span>Accessibility</span>
          <span>User Agreement</span>
          <span>Privacy Policy</span>
          <span>Cookie Policy</span>
          <span>Copyright Policy</span>
          <span>Brand Policy</span>
          <span>Guest Controls</span>
          <span>Community Guidelines</span>
          <span>Language</span>
        </div>
      </footer>
    </div>
  );
}
