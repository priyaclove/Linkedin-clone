"use client";

import Image from "next/image";
import { MoreHorizontal, Star } from "lucide-react";

export default function MessageContent() {
  return (
    <section className="flex min-h-0 flex-1 flex-col bg-white">
      {/* Header */}
      <div className="flex items-center justify-between border-b p-4">
        <div className="flex min-w-0 items-center gap-3">
          <Image
            src="/images/profile-image.jpeg"
            alt="Harsh Agarwal"
            width={50}
            height={50}
            className="h-[50px] w-[50px] shrink-0 rounded-full object-cover"
          />

          <div className="min-w-0">
            <h2 className="text-lg font-semibold">
              Harsh Agarwal
            </h2>

            <p className="truncate text-sm text-gray-500">
              Head of Business Strategy • Coding Ninjas
            </p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-4">
          <button className="rounded-full p-1 hover:bg-gray-100">
            <MoreHorizontal size={22} />
          </button>

          <button className="rounded-full p-1 hover:bg-gray-100">
            <Star size={21} />
          </button>
        </div>
      </div>

      {/* Sponsored Section */}
      <div className="border-b p-5">
        <p className="text-sm text-gray-500">
          Sponsored
        </p>

        <h3 className="mt-2 text-xl font-semibold">
          Data Analytics Bootcamp with Job Assistance
        </h3>

        <button className="mt-4 rounded-full bg-blue-600 px-5 py-2 font-semibold text-white hover:bg-blue-700">
          Book Now!
        </button>
      </div>

      {/* Message */}
      <div className="min-h-0 flex-1 overflow-y-auto p-6">
        <div className="flex items-start gap-4">
          {/* Message Avatar */}
          <Image
            src="/images/profile-image.jpeg"
            alt="Harsh Agarwal"
            width={52}
            height={52}
            className="h-[52px] w-[52px] shrink-0 rounded-full object-cover"
          />

          {/* Message Content */}
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-gray-900">
              Harsh Agarwal
            </h3>

            <div className="mt-3 text-[16px] leading-7 text-gray-700">
              <p>Hi Jaya,</p>

              <p className="mt-6">
                My name is Harsh, and I head the Coding Ninjas
                Job Bootcamp vertical.
              </p>

              <p className="mt-6">
                We are offering:
              </p>

              <ul className="mt-1 space-y-1">
                <li>• 6-month online Data Analytics Bootcamp</li>
                <li>• Live classes</li>
                <li>• AI-powered curriculum</li>
                <li>• 95% placement record</li>
              </ul>

              <p className="mt-6">
                Book a free counselling session to know more.
              </p>
            </div>

            <button className="mt-5 font-semibold text-blue-600 hover:underline">
              Book Now →
            </button>
          </div>
        </div>
      </div>

      {/* Message Input */}
      <div className="border-t p-4">
        <input
          type="text"
          placeholder="Write a message..."
          className="w-full rounded-full border px-4 py-3 outline-none focus:border-blue-600"
        />
      </div>
    </section>
  );
}