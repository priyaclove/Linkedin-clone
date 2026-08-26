"use client";

import {
  MoreHorizontal,
  ChevronRight,
  BriefcaseBusiness,
} from "lucide-react";

type NotificationPost = {
  id: number;
  name: string;
  text: string;
  time: string;
  image: string;
  premium?: boolean;
  job?: boolean;
};

type Props = {
  post: NotificationPost;
};

    export default function NotificationCard({ post }: Props) {
  return (
    <article className="group relative border-b border-gray-200 px-4 py-4 hover:bg-gray-50">

      {/* Blue unread dot */}
      <span className="absolute left-2 top-7 h-2 w-2 rounded-full bg-[#0a66c2]" />

      <div className="flex gap-3">

        {/* Avatar */}
        <div className="shrink-0">
          <img
            src={post.image}
            alt=""
            className="h-10 w-10 rounded-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">

          {/* Header */}
          <div className="flex items-start justify-between gap-3">

            <div className="min-w-0">
              <p className="truncate text-[13px] font-semibold text-gray-900">
                {post.name}
              </p>

              <p className="text-[12px] text-gray-500">
                {post.time}
              </p>
            </div>

            <button className="shrink-0 rounded-full p-1 hover:bg-gray-200">
              <MoreHorizontal size={19} />
            </button>
          </div>

          {/* Post text */}
          {post.text && (
            <p className="mt-2 line-clamp-2 text-[13px] leading-5 text-gray-800">
              {post.text}
            </p>
          )}

          {/* Premium */}
          {post.premium && (
            <button className="mt-3 rounded-full border border-[#0a66c2] px-3 py-1.5 text-[12px] font-semibold text-[#0a66c2] hover:bg-blue-50">
              Try Premium for ₹0
            </button>
          )}

          {/* Job */}
          {post.job && (
            <div className="mt-2 flex items-center gap-2 text-[11px] text-gray-500">
              <BriefcaseBusiness size={13} />
              Powered by Sales Navigator
            </div>
          )}

          {/* Premium description */}
          {post.premium && (
            <p className="mt-2 text-[11px] leading-4 text-gray-500">
              1-month free trial with 24/7 support. We'll remind you 7 days
              before your trial ends.
            </p>
          )}
        </div>
      </div>
    </article>
  );
}