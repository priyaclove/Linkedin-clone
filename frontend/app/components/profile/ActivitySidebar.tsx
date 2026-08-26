import Image from "next/image";
import { BadgeCheck } from "lucide-react";

export default function ActivitySidebar() {
  return (
    <aside className="overflow-hidden rounded-lg border border-gray-200 bg-white">
      {/* Cover */}
      <div className="relative h-[90px] bg-gradient-to-r from-[#075985] to-[#1769c2]">
        <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2">
          <Image
            src="/images/profile-image.jpeg"
            alt="Jaya Kumari"
            width={82}
            height={82}
            className="h-[82px] w-[82px] rounded-full border-4 border-white object-cover"
          />
        </div>
      </div>

      {/* Profile */}
      <div className="px-5 pb-5 pt-12 text-center">
        <h2 className="flex items-center justify-center gap-1 text-lg font-semibold">
          jaya kumari
          <BadgeCheck size={18} className="text-gray-500" />
        </h2>

        <p className="mt-1 text-sm leading-5 text-gray-600">
          Software Developer | Expert in Full-Stack Development |
          Specialized in Laravel & WordPress | Passionate About
          Building Scalable Applications | Open for Remote or
          Freelance Opportunities
        </p>
      </div>

      {/* Followers */}
      <div className="border-t px-5 py-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-600">
            Followers
          </span>

          <span className="text-sm font-semibold text-blue-600">
            6,448
          </span>
        </div>
      </div>
    </aside>
  );
}