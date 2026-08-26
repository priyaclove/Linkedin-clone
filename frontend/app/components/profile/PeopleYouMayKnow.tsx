"use client";

import Image from "next/image";
import { UserRoundPlus, BadgeCheck } from "lucide-react";
import { useEffect, useState } from "react";

type User = {
  id: number;
  username: string;
  about?: string | null;
  profileImage?: string | null;
};

export default function PeopleYouMayKnow() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/users`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();

        setUsers(data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  return (
    <section className="rounded-lg border border-gray-200 bg-white p-5">
      <h2 className="text-lg font-semibold text-gray-900">
        People you may know
      </h2>

      <p className="mt-1 text-sm text-gray-500">
        From your job title
      </p>

      <div className="mt-4">
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
              key={user.id}
              className={`flex gap-3 py-4 ${
                index !== users.length - 1
                  ? "border-b border-gray-200"
                  : ""
              }`}
            >
              <Image
                src={
                  user.profileImage ||
                  "/images/profile-image.jpeg"
                }
                alt={user.username}
                width={52}
                height={52}
                className="h-[52px] w-[52px] rounded-full object-cover"
              />

              <div className="min-w-0 flex-1">
                <h3 className="flex items-center gap-1 text-sm font-semibold">
                  {user.username}

                  {index < 3 && (
                    <BadgeCheck
                      size={14}
                      className="text-gray-500"
                    />
                  )}
                </h3>

                <p className="mt-1 line-clamp-2 text-xs leading-4 text-gray-600">
                  {user.about || "LinkedIn Member"}
                </p>

                <button className="mt-3 flex items-center gap-1 rounded-full border border-gray-600 px-4 py-1.5 text-sm font-semibold text-gray-700 hover:bg-gray-100">
                  <UserRoundPlus size={15} />
                  Connect
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}