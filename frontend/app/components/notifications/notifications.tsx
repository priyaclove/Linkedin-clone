"use client";

import {
  ChevronDown,
  MoreHorizontal,
  Search,
  MessageCircle,
  X,
  Edit3,
  Minus,
} from "lucide-react";
import NotificationCard from "./notificationCard";
import NotificationSidebar from "./notificationSidebar";

const posts = [
  {
    id: 1,
    name: "New from Gorakh Shelke in ABS Global Trade Update",
    text: "How Small Manufacturers Can Start Exporting Internationally",
    time: "3h",
    image: "/images/profile-image.jpeg",
    type: "post",
  },
  {
    id: 2,
    name: "You appeared in 44 searches this week.",
    text: "Join Premium to get seen more often.",
    time: "2d",
    image: "/images/profile-image.jpeg",
    premium: true,
  },
  {
    id: 3,
    name: "Your Monday Jobs Report",
    text: "99 companies increased hiring for Web Developer roles this week. View more career insights.",
    time: "2d",
    image: "/images/profile-image.jpeg",
    job: true,
  },
  {
    id: 4,
    name: "Yadav Om Prakash and 5 other people viewed your profile.",
    text: "See the full list with Premium.",
    time: "3d",
    image: "/images/profile-image.jpeg",
    premium: true,
  },
  {
    id: 5,
    name: "You may be interested in a post from Emmanuel Excellent:",
    text: "When everyone has access to the same models, tools, and coding agents, what separates the builders who create lasting...",
    time: "3d",
    image: "/images/profile-image.jpeg",
  },
  {
    id: 6,
    name: "Naomi Bamidele posted:",
    text: "Something's shifting in remote work right now and a lot of beginners haven't caught on yet.",
    time: "4d",
    image: "/images/profile-image.jpeg",
  },
  {
    id: 7,
    name: "Shreeyaan Seth posted:",
    text: "I recently moved tenant isolation for an AI SQL agent from the prompt to PostgreSQL RLS.",
    time: "4d",
    image: "/images/profile-image.jpeg",
  },
  {
    id: 8,
    name: "New from Gorakh Shelke in ABS Global Trade Update:",
    text: "Top Industrial Products with High Export Demand in 2026",
    time: "1w",
    image: "/images/profile-image.jpeg",
  },
  {
    id: 9,
    name: "Congratulate Justin Springer on a new position",
    text: "Sound Village Entertainment, LLC. View more network updates.",
    time: "1w",
    image: "/images/profile-image.jpeg",
  },
  {
    id: 10,
    name: "Your potential lead Syed Ahmed at DevCache posted:",
    text: "I cancelled the meeting 3 minutes after it started. The agenda looked important.",
    time: "1w",
    image: "/images/profile-image.jpeg",
  },
  {
    id: 11,
    name: "The Future of Export Business",
    text: "How AI and Technology Are Changing Global Trade",
    time: "2w",
    image: "/images/profile-image.jpeg",
  },
  {
    id: 12,
    name: "Your potential lead Syed Ahmed at DevCache posted:",
    text: "Speed is easy. Sustainable speed isn't. I've seen teams ship impressive features every week.",
    time: "2w",
    image: "/images/profile-image.jpeg",
  },
  {
    id: 13,
    name: "You may know Dheerendra K.",
    text: "Add to your network. MCA Student | BCA Graduate | Aspiring Software Developer",
    time: "3w",
    image: "/images/profile-image.jpeg",
  },
  {
    id: 14,
    name: "Here are the top tech stories you may have missed this week.",
    text: "",
    time: "3w",
    image: "/images/profile-image.jpeg",
  },
  {
    id: 15,
    name: "New from Gorakh Shelke in ABS Global Trade Update:",
    text: "Is India the Next Global Manufacturing Powerhouse?",
    time: "3w",
    image: "/images/profile-image.jpeg",
  },
  {
    id: 16,
    name: "Bulbul Drone Delivery Partner | Board | Investor's post",
    text: "A little help from my friends — specialized trucking acquisitions, that is.",
    time: "3w",
    image: "/images/profile-image.jpeg",
  },
  {
    id: 17,
    name: "These are India's top 10 Cities on the Rise.",
    text: "Check out the LinkedIn ranking.",
    time: "4w",
    image: "/images/profile-image.jpeg",
  },
];

export default function Notifications() {
  return (
    <main className="min-h-screen bg-[#f4f2ee] pt-[70px]">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-5 px-4 py-5 lg:grid-cols-[250px_minmax(0,1fr)_205px]">

        {/* LEFT */}
        <NotificationSidebar />

        {/* CENTER */}
        <section className="min-w-0">
          {/* Filter tabs */}
          <div className="mb-4 flex items-center gap-2 rounded-lg border border-gray-200 bg-white p-3 shadow-sm">
            <button className="rounded-full bg-[#057642] px-4 py-2 text-sm font-semibold text-white">
              All
            </button>

            <button className="rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold hover:bg-gray-100">
              Jobs
            </button>

            <button className="rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold hover:bg-gray-100">
              My posts
            </button>

            <button className="rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold hover:bg-gray-100">
              Mentions
            </button>
          </div>

          {/* Feed */}
          <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
            {posts.slice(0, 10).map((post) => (
              <NotificationCard key={post.id} post={post} />
            ))}

            <div className="flex h-16 items-center justify-center border-t">
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-gray-300 border-t-gray-700" />
            </div>
          </div>

          {/* Second batch */}
          <div className="mt-20 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
            {posts.slice(10).map((post) => (
              <NotificationCard key={post.id} post={post} />
            ))}
          </div>
        </section>

        {/* RIGHT */}
        <aside className="hidden lg:block">
          <div className="sticky top-[90px]">
            <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-start justify-between">
                <span className="text-[11px] text-gray-500">Ad</span>

                <MoreHorizontal size={18} />
              </div>

              <div className="flex justify-center">
                <div className="relative">
                  <img
                    src="/images/profile-image.jpeg"
                    alt="Profile"
                    className="h-16 w-16 rounded-full object-cover"
                  />

                  <div className="absolute -right-10 top-0 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-[#f7c873]">
                    <span className="text-2xl">💼</span>
                  </div>
                </div>
              </div>

              <p className="mt-8 text-center text-sm font-medium text-gray-600">
                Explore open roles.
              </p>

              <button className="mx-auto mt-4 block rounded-full border border-[#0a66c2] px-4 py-2 text-sm font-semibold text-[#0a66c2] hover:bg-blue-50">
                See openings
              </button>
            </div>

            {/* Footer */}
            <div className="px-3 py-5 text-center text-[11px] text-gray-500">
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                <span>About</span>
                <span>Accessibility</span>
                <span>Help Center</span>
                <span>Privacy & Terms</span>
                <span>Ad Choices</span>
                <span>Advertising</span>
                <span>Business Services</span>
                <span>Get the LinkedIn app</span>
                <span>More</span>
              </div>

              <p className="mt-4">
                <span className="font-bold text-[#0a66c2]">in</span>{" "}
                LinkedIn Corporation © 2026
              </p>
            </div>
          </div>
        </aside>
      </div>

      {/* Messaging floating box */}
      <div className="fixed bottom-0 right-5 z-50 hidden w-[300px] overflow-hidden rounded-t-xl border border-gray-300 bg-white shadow-xl md:block">
        <div className="flex items-center justify-between bg-white px-4 py-3">
          <div className="flex items-center gap-2">
            <img
              src="/images/profile-image.jpeg"
              alt=""
              className="h-8 w-8 rounded-full object-cover"
            />

            <span className="text-sm font-semibold">Messaging</span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-red-600 px-1 text-[10px] font-bold text-white">
              1
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button className="hover:text-[#0a66c2]">
              <MoreHorizontal size={18} />
            </button>

            <button className="hover:text-[#0a66c2]">
              <Edit3 size={17} />
            </button>

            <button className="hover:text-[#0a66c2]">
              <ChevronDown size={18} />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}