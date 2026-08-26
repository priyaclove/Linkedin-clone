"use client";

import { CalendarDays, MapPin, Plus, SendHorizontal } from "lucide-react";

type EventItem = {
  title: string;
  date: string;
  soon?: boolean;
  location: string;
  organizer: string;
  attendees: number;
  gradient: string;
};

// Cycling gradient placeholders stand in for the real event banners.
const recommended: EventItem[] = [
  {
    title: "Leading the Shift to SAP Intelligent Enterprises",
    date: "Tomorrow, 5:30 PM - 9:00 PM",
    soon: true,
    location: "Gurugram, IN",
    organizer: "Webtel Electrosoft Ltd",
    attendees: 27,
    gradient: "from-sky-500 to-blue-700",
  },
  {
    title: "VibeForge 1.0",
    date: "Sat, Aug 22, 8:00 AM - 7:00 PM",
    location: "Barasat I, IN",
    organizer: "GameLiminals - Adamas University",
    attendees: 877,
    gradient: "from-rose-600 to-red-900",
  },
  {
    title: "Umbraco India Festival 2026",
    date: "Fri, Aug 28, 4:00 PM - Sat, Aug 29, 9:00 PM",
    location: "Kanayannur, IN",
    organizer: "Umbraco India Festival",
    attendees: 37,
    gradient: "from-amber-400 to-yellow-600",
  },
  {
    title: "Walk-in Drive: Find the best career opportunity | Aug 22, YMCA, Delhi",
    date: "Sat, Aug 22, 10:00 AM - 4:00 PM",
    location: "New Delhi, IN",
    organizer: "TELUS Digital India",
    attendees: 39,
    gradient: "from-fuchsia-600 to-purple-800",
  },
  {
    title: "AI in Testing : Workshop + Hackathon Chennai",
    date: "Sat, Aug 22, 10:00 AM - 12:00 PM",
    location: "Chennai, IN",
    organizer: "BrowserStack",
    attendees: 6,
    gradient: "from-cyan-500 to-sky-700",
  },
  {
    title: "Mulesoft Meetup: Unlocking gRPC and AI with MuleSoft",
    date: "Sat, Aug 22, 9:00 AM - 1:00 PM",
    location: "Chennai, IN",
    organizer: "Mastek",
    attendees: 24,
    gradient: "from-indigo-600 to-violet-900",
  },
  {
    title: "The Test Tribe Mega Meetup - NCR",
    date: "Sat, Aug 22, 10:30 AM - 1:30 PM",
    location: "Dadri, IN",
    organizer: "The Test Tribe",
    attendees: 12,
    gradient: "from-slate-700 to-slate-900",
  },
  {
    title: "UTSAV 2026 - APEX 26.1 Hyderabad",
    date: "Sun, Aug 23, 8:30 AM - 5:30 PM",
    location: "Hyderabad, IN",
    organizer: "India Oracle APEX User Group",
    attendees: 52,
    gradient: "from-blue-700 to-indigo-900",
  },
  {
    title: "AI x Testing Bootcamp",
    date: "Sat, Aug 22, 10:00 AM",
    location: "Sholinganallur, IN",
    organizer: "Aziro (formerly MSys...)",
    attendees: 11,
    gradient: "from-teal-500 to-cyan-800",
  },
  {
    title: "IP in the Boardroom | Inaugural Batch | 22-23 Aug 2026",
    date: "Sat, Aug 22, 9:00 AM - Sun, Aug 23, 5:00 PM",
    location: "South Delhi, IN",
    organizer: "IP in the Boardroom",
    attendees: 20,
    gradient: "from-yellow-500 to-amber-700",
  },
  {
    title: "Entrepreneur's Mixer (Ahmedabad)",
    date: "Today, 5:00 PM - 8:00 PM",
    soon: true,
    location: "Ahmedabad, IN",
    organizer: "Entrepreneurs Arch",
    attendees: 35,
    gradient: "from-orange-400 to-rose-600",
  },
  {
    title: "Transforming Teams from AI-Assisted to AI-Native",
    date: "Sat, Aug 22, 10:30 AM - 1:30 PM",
    location: "Noida, IN",
    organizer: "The AI Native Project",
    attendees: 18,
    gradient: "from-emerald-500 to-green-800",
  },
  {
    title: "AI Marketing Circle – Hyderabad",
    date: "Sat, Aug 22, 3:00 PM - 5:00 PM",
    location: "Shaikpet, IN",
    organizer: "iDoneSEO Founder Growth Circle",
    attendees: 95,
    gradient: "from-violet-500 to-fuchsia-700",
  },
  {
    title: "UTSAV 2026 - APEX 26.1 Bengaluru",
    date: "Sat, Aug 22, 8:30 AM - 5:30 PM",
    location: "Varatur, Bengaluru East, IN",
    organizer: "India Oracle APEX User Group",
    attendees: 18,
    gradient: "from-blue-700 to-indigo-900",
  },
  {
    title: "The Test Tribe Mega Meetup - Mumbai",
    date: "Sat, Aug 22, 10:30 AM - 1:30 PM",
    location: "Mumbai, IN",
    organizer: "Vivek Patil",
    attendees: 157,
    gradient: "from-slate-700 to-slate-900",
  },
];

const premium = [
  {
    title: "How to Create More Career Opportunities with Angel...",
    date: "Mon, Aug 31, 8:30 PM - 9:15 PM",
    attendees: "Sakshi Sharma and 8,643 other attendees",
    gradient: "from-slate-800 to-slate-950",
  },
  {
    title: "Get Hired Hotline: Is AI Costing You the Job?",
    date: "Thu, Sep 17, 9:30 PM - 10:30 PM",
    attendees: "803 attendees",
    gradient: "from-emerald-700 to-emerald-950",
  },
  {
    title: "Get Hired Hotline: How to Land a Job You Enjoy",
    date: "Thu, Aug 13, 8:30 PM - 9:30 PM",
    attendees: "Sakshi Sharma and 12,299 other attendees",
    gradient: "from-teal-700 to-teal-950",
  },
];

function EventCard({ event }: { event: EventItem }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white">
      {/* Banner placeholder */}
      <div
        className={`flex h-40 items-center justify-center bg-gradient-to-br ${event.gradient} p-4 text-center`}
      >
        <span className="text-lg font-bold leading-tight text-white drop-shadow">
          {event.title}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p
          className={`text-xs font-semibold ${
            event.soon ? "text-[#01754f]" : "text-gray-600"
          }`}
        >
          {event.date}
        </p>

        <h3 className="mt-1 line-clamp-2 font-semibold text-gray-900">
          {event.title}
        </h3>

        <div className="mt-1 flex items-center gap-1 text-xs text-gray-600">
          <MapPin size={13} />
          <span className="truncate">
            {event.location} • {event.organizer}
          </span>
        </div>

        <p className="mt-3 text-xs text-gray-500">
          {event.attendees.toLocaleString()} attendees
        </p>

        {/* Actions */}
        <div className="mt-3 flex items-center gap-2 border-t border-gray-200 pt-3">
          <button className="flex-1 rounded-full border border-[#0a66c2] px-4 py-1.5 text-sm font-semibold text-[#0a66c2] transition hover:bg-[#eaf3ff]">
            View event
          </button>
          <button className="rounded-full border border-gray-500 p-2 text-gray-600 transition hover:bg-gray-100">
            <SendHorizontal size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-[#F4F2EE] pt-[80px] pb-10">
      <div className="mx-auto max-w-[1128px] space-y-4 px-4">
        {/* Header */}
        <div className="flex items-center justify-between rounded-lg border border-gray-300 bg-white px-6 py-5">
          <h1 className="text-3xl font-semibold text-gray-900">Events</h1>
          <button className="flex items-center rounded-full border border-[#0a66c2] px-4 py-1.5 text-sm font-semibold text-[#0a66c2] transition hover:bg-[#eaf3ff]">
            Create an event
          </button>
        </div>

        {/* Your events */}
        <div className="rounded-lg border border-gray-300 bg-white p-6">
          <h2 className="mb-4 text-lg font-semibold text-gray-900">
            Your events
          </h2>
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-20 items-center justify-center rounded bg-gradient-to-br from-orange-400 to-red-600 text-center text-[10px] font-bold text-white">
              INDEPENDENCE DAY
            </div>
            <div>
              <p className="flex items-center gap-1 text-xs text-gray-600">
                <CalendarDays size={13} />
                Wed, Jul 2, 11:30 PM - Fri, Aug 1, 11:00 AM
              </p>
              <p className="mt-1 font-semibold text-gray-900">
                25% discount on All type of printing
              </p>
            </div>
          </div>
        </div>

        {/* Exclusive for Premium */}
        <div className="rounded-lg border border-gray-300 bg-white p-6">
          <h2 className="mb-4 text-lg font-semibold text-gray-900">
            Exclusive for Premium
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {premium.map((p) => (
              <div key={p.title} className="flex gap-3">
                <div
                  className={`h-16 w-24 shrink-0 rounded bg-gradient-to-br ${p.gradient} p-1 text-center content-center text-[9px] font-semibold text-white/90`}
                >
                  {p.title.slice(0, 32)}
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-600">{p.date}</p>
                  <p className="line-clamp-2 text-sm font-semibold text-gray-900">
                    {p.title}
                  </p>
                  <p className="mt-1 truncate text-xs text-gray-500">
                    {p.attendees}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 border-t border-gray-200 pt-4 text-center">
            <button className="text-sm font-semibold text-[#0a66c2] hover:underline">
              🔓 Unlock 50+ Premium events
            </button>
          </div>
        </div>

        {/* Recommended for you */}
        <div className="rounded-lg border border-gray-300 bg-white p-6">
          <h2 className="mb-5 text-lg font-semibold text-gray-900">
            Recommended for you
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {recommended.map((event) => (
              <EventCard key={event.title} event={event} />
            ))}
          </div>

          <div className="mt-6 border-t border-gray-200 pt-4 text-center">
            <button className="text-sm font-semibold text-gray-600 hover:text-black hover:underline">
              Show more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
