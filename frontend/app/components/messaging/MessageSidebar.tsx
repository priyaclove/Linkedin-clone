"use client";

import Image from "next/image";
import {
  Search,
  MoreHorizontal,
  SquarePen,
} from "lucide-react";

const chats = [
  {
    name: "Harsh Agarwal",
    message: "Sponsored • Data Analytics Bootcamp...",
    date: "Jul 10",
    active: true,
  },
  {
    name: "LinkedIn",
    message: "Hi there, Jaya!",
    date: "Jul 7",
  },
  {
    name: "Aline Souza",
    message: "Hello, Jaya. Thank you...",
    date: "Jun 24",
  },
  {
    name: "Adam Chamberlain",
    message: "Hey Jaya, thanks for connecting!",
    date: "May 15",
  },
  {
    name: "Shivam Rawat",
    message: "Achi jagah h yrr",
    date: "May 4",
  },
];

export default function MessageSidebar() {
  return (
    <aside className="w-[320px] border-r bg-white">
      <div className="flex items-center justify-between p-4">
        <h2 className="text-xl font-semibold">Messaging</h2>

        <div className="flex gap-3">
          <MoreHorizontal className="cursor-pointer" />
          <SquarePen className="cursor-pointer" />
        </div>
      </div>

      <div className="px-4 pb-3">
        <div className="flex items-center rounded-md bg-gray-100 px-3 py-2">
          <Search size={18} />

          <input
            placeholder="Search messages"
            className="ml-2 w-full bg-transparent outline-none"
          />
        </div>
      </div>

      <div className="flex gap-2 px-4 pb-3 text-sm">
        <button className="rounded-full bg-green-700 px-4 py-1 text-white">
          Focused
        </button>

        <button className="rounded-full border px-4 py-1">
          Unread
        </button>

        <button className="rounded-full border px-4 py-1">
          InMail
        </button>
      </div>

      {chats.map((chat) => (
        <div
          key={chat.name}
          className={`flex cursor-pointer gap-3 border-t p-3 hover:bg-gray-100 ${
            chat.active && "border-l-4 border-l-green-700 bg-gray-50"
          }`}
        >
          <Image
            src="/images/profile-image.jpeg"
            alt=""
            width={52}
            height={52}
            className="rounded-full"
          />

          <div className="flex-1">
            <div className="flex justify-between">
              <h3 className="font-medium">{chat.name}</h3>

              <span className="text-xs text-gray-500">
                {chat.date}
              </span>
            </div>

            <p className="text-sm text-gray-500">
              {chat.message}
            </p>
          </div>
        </div>
      ))}
    </aside>
  );
}