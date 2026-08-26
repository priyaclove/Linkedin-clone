"use client";

import Image from "next/image";
import {
  MoreHorizontal,
  Send,
  ThumbsUp,
  MessageCircle,
} from "lucide-react";

type Person = {
  name: string;
  image: string;
  text: string;
  company: string;
  likes: number;
  comments: number;
};

type Props = {
  person: Person;
};

export default function JobChangeCard({ person }: Props) {
  return (
    <article className="border-b border-gray-200 p-6 last:border-b-0">
      <div className="flex items-start gap-4">
        <Image
          src={person.image}
          alt={person.name}
          width={64}
          height={64}
          className="h-16 w-16 rounded-full object-cover"
        />

        <div className="min-w-0 flex-1">
          {/* Name + menu */}
          <div className="flex items-start justify-between">
            <h3 className="text-lg font-semibold text-gray-900">
              {person.name}
            </h3>

            <button className="rounded-full p-1 hover:bg-gray-100">
              <MoreHorizontal size={22} />
            </button>
          </div>

          {/* Job change */}
          <p className="mt-1 text-[17px] leading-6 text-gray-900">
            {person.text}{" "}
            <strong>{person.company}</strong>
          </p>

          {/* Congrats */}
          <button className="mt-3 flex max-w-[360px] items-center gap-2 overflow-hidden rounded-full border border-gray-700 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50">
            <Send size={16} />

            <span className="truncate">
              Congrats on starting your new role...
            </span>
          </button>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-5 flex justify-end gap-8 text-gray-700">
        <button className="flex items-center gap-2">
          <ThumbsUp size={22} />
          <span>{person.likes}</span>
        </button>

        <button className="flex items-center gap-2">
          <MessageCircle size={22} />
          <span>{person.comments}</span>
        </button>
      </div>
    </article>
  );
}