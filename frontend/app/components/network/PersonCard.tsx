"use client";

import Image from "next/image";
import { X, UserPlus, Check } from "lucide-react";
import { useState } from "react";

type Person = {
  name: string;
  role: string;
  location: string;
  mutual: string;
  image: string;
};

type Props = {
  person: Person;
  buttonText: "Connect" | "Follow";
};

export default function PersonCard({
  person,
  buttonText,
}: Props) {
  const [connected, setConnected] = useState(false);
  const [hidden, setHidden] = useState(false);

  if (hidden) return null;

  return (
    <div className="group relative bg-white p-3">
      {/* Remove */}
      <button
        onClick={() => setHidden(true)}
        className="absolute right-2 top-2 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-gray-700 text-white opacity-0 transition group-hover:opacity-100"
      >
        <X size={14} />
      </button>

      {/* Cover */}
      <div className="h-14 overflow-hidden rounded-t-md bg-gradient-to-r from-[#d5e5e5] to-[#b8ced1]">
        <div className="h-full w-full bg-[url('/images/profile-image.jpeg')] bg-cover bg-center opacity-60" />
      </div>

      {/* Profile Image */}
      <div className="-mt-8 flex justify-center">
        <Image
          src={person.image}
          alt={person.name}
          width={64}
          height={64}
          className="relative h-16 w-16 rounded-full border-2 border-white object-cover"
        />
      </div>

      {/* Info */}
      <div className="mt-2 text-center">
        <h3 className="truncate text-[14px] font-semibold text-gray-900">
          {person.name}
        </h3>

        <p className="mt-1 line-clamp-2 min-h-[32px] text-[11px] leading-4 text-gray-600">
          {person.role}
        </p>

        <p className="mt-1 truncate text-[10px] text-gray-500">
          {person.location}
        </p>
      </div>

      {/* Mutual */}
      <div className="mt-2 flex items-center justify-center gap-1 text-[10px] text-gray-500">
        <div className="flex -space-x-1">
          <span className="h-4 w-4 rounded-full border border-white bg-gray-400" />
          <span className="h-4 w-4 rounded-full border border-white bg-gray-500" />
        </div>

        <span className="truncate">{person.mutual}</span>
      </div>

      {/* Button */}
      <button
        onClick={() => setConnected(true)}
        disabled={connected}
        className={`mt-3 flex w-full items-center justify-center gap-1 rounded-full border py-1.5 text-xs font-semibold transition ${
          connected
            ? "border-gray-400 text-gray-500"
            : "border-blue-600 text-blue-600 hover:bg-blue-50"
        }`}
      >
        {connected ? (
          <>
            <Check size={14} />
            {buttonText === "Follow" ? "Following" : "Connected"}
          </>
        ) : (
          <>
            <UserPlus size={14} />
            {buttonText}
          </>
        )}
      </button>
    </div>
  );
}