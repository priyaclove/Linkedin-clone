"use client";

import Image from "next/image";
import { useEffect , useState} from "react";
import {
  ChevronRight,
  ExternalLink,
  Bookmark,
} from "lucide-react";
import { API_URL, getImageUrl } from "@/lib/api";
import { getUser } from "@/lib/auth";

type User = {
  id: number;
  username: string;
  about?: string | null;
  profileImage?: string | null;
};

const courses = [
  {
    title: "React Essential Training",
    image: "/images/php.jpeg",
  },
  {
    title: "Next.js Complete Guide",
    image: "/images/laravel_logo.jpeg",
  },
];

export default function RightSidebar() {
  const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const getUsers = async () => {
        try {
          const me = getUser();
          const response = await fetch(
            `${API_URL}/api/users${me ? `?exclude=${me.id}` : ""}`
          );

          if (!response.ok) {
            throw new Error("Failed to fetch users");
          }

          const data = await response.json();

          setUsers(data.users || []);
        } catch (error) {
          console.error("Error fetching users:", error);
        } finally {
          setLoading(false);
        }
      };
  
      getUsers();
    }, []);
  return (
    <aside className="space-y-4">

      {/* Language */}
      <section className="rounded-xl border border-gray-300 bg-white">
        <div className="flex items-center justify-between border-b p-4">
          <div>
            <h3 className="font-semibold">Profile language</h3>
            <p className="text-sm text-gray-500">English</p>
          </div>

          <ChevronRight size={18} />
        </div>

        <div className="flex items-center justify-between p-4">
          <div>
            <h3 className="font-semibold">Public profile & URL</h3>
            <p className="text-sm text-gray-500">
              www.linkedin.com/in/priya
            </p>
          </div>

          <ExternalLink size={18} />
        </div>
      </section>

      {/* People You May Know */}
      <section className="rounded-xl border border-gray-300 bg-white p-5">
        <h2 className="text-lg font-semibold">
          People you may know
        </h2>

        <div className="mt-5 space-y-5">
          {loading ? (
          <p className="py-4 text-sm text-gray-500">
            Loading people...
          </p>
        ) : users.length === 0 ? (
          <p className="py-4 text-sm text-gray-500">
            No people found.
          </p>
        ) : (
          users.map((user, index) => (
            <div
              key={user.username}
              className="flex items-start gap-3"
            >
              <Image
                src={getImageUrl(user.profileImage, "/images/profile-image.jpeg")}
                alt={user.username}
                width={52}
                height={52}
                className="h-[52px] w-[52px] shrink-0 rounded-full object-cover"
              />

              <div className="flex-1">
                <h3 className="font-semibold">
                  {user.username}
                </h3>

                <p className="mt-1 text-xs text-gray-600">
                  {user.about || "LinkedIn Member"}
                </p>

                <button className="mt-3 rounded-full border border-gray-600 px-4 py-1 text-sm font-semibold hover:bg-gray-100">
                  + Connect
                </button>
              </div>
            </div>
          )
          ))}
        </div>

        <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg py-2 font-semibold hover:bg-gray-100">
          Show more
          <ChevronRight size={18} />
        </button>
      </section>

      {/* Learning */}
      <section className="rounded-xl border border-gray-300 bg-white p-5">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">
            Learning
          </h2>

          <Bookmark size={18} />
        </div>

        <div className="mt-5 space-y-5">
          {courses.map((course) => (
            <div
              key={course.title}
              className="flex gap-3"
            >
              <Image
                src={course.image}
                alt={course.title}
                width={52}
                height={22}
                className="rounded-lg object-cover"
              />

              <div>
                <h3 className="font-medium">
                  {course.title}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  LinkedIn Learning
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <section className="rounded-xl border border-gray-300 bg-white p-5">
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-gray-500">
          <span className="cursor-pointer hover:text-[#0a66c2]">
            About
          </span>

          <span className="cursor-pointer hover:text-[#0a66c2]">
            Accessibility
          </span>

          <span className="cursor-pointer hover:text-[#0a66c2]">
            Help Center
          </span>

          <span className="cursor-pointer hover:text-[#0a66c2]">
            Privacy
          </span>

          <span className="cursor-pointer hover:text-[#0a66c2]">
            Terms
          </span>

          <span className="cursor-pointer hover:text-[#0a66c2]">
            Advertising
          </span>

          <span className="cursor-pointer hover:text-[#0a66c2]">
            Business Services
          </span>

          <span className="cursor-pointer hover:text-[#0a66c2]">
            Get the App
          </span>

          <span className="cursor-pointer hover:text-[#0a66c2]">
            More
          </span>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          <Image
            src="/images/Linkdin.png"
            alt="LinkedIn"
            width={20}
            height={20}
          />

          <p className="text-xs text-gray-500">
            LinkedIn Corporation © 2026
          </p>
        </div>
      </section>
    </aside>
  );
}