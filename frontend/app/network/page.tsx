"use client";
import NetworkSidebar from "../components/network/NetworkSidebar";
import NetworkSection from "../components/network/NetworkSection";
import Navbar from "../components/layout/Navbar-2";
import Footer from "../components/layout/Footer";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { API_URL, getImageUrl } from "@/lib/api";
import { getUser } from "@/lib/auth";

type Person = {
  username?: string;
  name: string;
  role: string;
  location: string;
  mutual: string;
  image: string;
};

type ApiUser = {
  id: number;
  username: string;
  about?: string | null;
  city?: string | null;
  state?: string | null;
  country?: string | null;
  profileImage?: string | null;
};



const javascriptPeople = [
  {
    username: "piyushgarg",
    name: "Piyush Garg",
    role: "Software Engineer | React Developer",
    location: "Noida, India",
    mutual: "5 mutual connections",
    image: "/images/profile-image.jpeg",
  },
  {
    username: "rashmiyadav",
    name: "RASHMI YADAV",
    role: "Frontend Developer | JavaScript",
    location: "Delhi, India",
    mutual: "3 mutual connections",
    image: "/images/profile-image.jpeg",
  },
  {
    username: "ashwiniharie",
    name: "Ashwini Harie",
    role: "Software Developer | Web Developer",
    location: "Mumbai, India",
    mutual: "4 mutual connections",
    image: "/images/profile-image.jpeg",
  },
  {
    username: "hiteshchoudhary",
            name: "Hitesh Choudhary",
    role: "Teacher | YouTuber | Developer",
    location: "India",
    mutual: "7 mutual connections",
    image: "/images/profile-image.jpeg",
  },
  {
    username: "akshaysaini",
    name: "Akshay Saini",
    role: "Founder | Technical Educator",
    location: "Bangalore, India",
    mutual: "6 mutual connections",
    image: "/images/profile-image.jpeg",
  },
  {
    username: "anshikasingh",
    name: "Anshika Singh",
    role: "Software Developer | React",
    location: "Noida, India",
    mutual: "2 mutual connections",
    image: "/images/profile-image.jpeg",
  },
];

const suggestions = [
  {
    username: "adityagoyal",
    name: "Aditya Goyal",
    role: "MCA Student | AI & ML",
    location: "India",
    mutual: "2 mutual connections",
    image: "/images/profile-image.jpeg",
  },
  {
    username: "shreyakatiyar",
    name: "Shreya Katiyar",
    role: "Full Stack Developer",
    location: "Delhi, India",
    mutual: "3 mutual connections",
    image: "/images/profile-image.jpeg",
  },
  {
    username: "sakshipal",
    name: "Sakshi Pal",
    role: "Software Developer",
    location: "India",
    mutual: "1 mutual connection",
    image: "/images/profile-image.jpeg",
  },
  {
    username: "atulsharma",
    name: "Atul Sharma",
    role: "Software Engineer",
    location: "Chandigarh, India",
    mutual: "4 mutual connections",
    image: "/images/profile-image.jpeg",
  },
  {
    username: "virendrakushwaha",
    name: "Virendra Kushwaha",
    role: "Frontend Engineer",
    location: "India",
    mutual: "2 mutual connections",
    image: "/images/profile-image.jpeg",
  },
  {
    username: "lucaskiefer",
    name: "Lucas Kiefer",
    role: "Software Engineer | Full Stack",
    location: "India",
    mutual: "1 mutual connection",
    image: "/images/profile-image.jpeg",
  },
  {
    username: "shobhitpal",
    name: "Shobhit Pal",
    role: "BCA Graduate | Developer",
    location: "India",
    mutual: "3 mutual connections",
    image: "/images/profile-image.jpeg",
  },
  {
    username: "idarkarachai",
    name: "Idar Karachai",
    role: "Software Developer | .NET",
    location: "India",
    mutual: "2 mutual connections",
    image: "/images/profile-image.jpeg",
  },
  {
    username: "samantaehike",
    name: "Samantha Ehike",
    role: "Student & Software Developer",
    location: "India",
    mutual: "1 mutual connection",
    image: "/images/profile-image.jpeg",
  },
  {
    username: "alizainmalik",
    name: "Ali Zain Malik",
    role: "Software Engineer | AI",
    location: "India",
    mutual: "4 mutual connections",
    image: "/images/profile-image.jpeg",
  },
  {
    name: "T Prasad",
    role: "Web Developer | Engineer",
    location: "India",
    mutual: "2 mutual connections",
    image: "/images/profile-image.jpeg",
  },
  {
    name: "Umar Jabeen",
    role: "Chat Support | Customer Experience",
    location: "India",
    mutual: "3 mutual connections",
    image: "/images/profile-image.jpeg",
  },
];

export default function NetworkPage() {
  const router = useRouter();

  // Real users from the backend, mapped into the Person card shape.
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    const me = getUser();
    const url = `${API_URL}/api/users${me ? `?exclude=${me.id}` : ""}`;

    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        const mapped: Person[] = (data.users || []).map((u: ApiUser) => ({
          username: u.username,
          name: u.username,
          role: u.about || "LinkedIn Member",
          location: [u.city, u.state, u.country].filter(Boolean).join(", "),
          mutual: "On LinkedIn",
          image: getImageUrl(u.profileImage, "/images/profile-image.jpeg"),
        }));
        setPeople(mapped);
      })
      .catch((err) => console.error("Failed to load people", err));
  }, []);

  return (
    <>
      <Navbar />
    <main className="min-h-screen bg-[#f4f2ee] pt-[80px]">
      <div className="mx-auto grid max-w-[1128px] grid-cols-[220px_minmax(0,1fr)] gap-5 px-4">

        {/* LEFT */}
        <NetworkSidebar />

        {/* CENTER */}
        <div className="min-w-0">
          {/* Tabs */}
          <div className="mb-3 flex h-14 items-center gap-2 rounded-lg border border-gray-200 bg-white px-5">
            <button className="rounded-full bg-[#057642] px-5 py-2 text-sm font-semibold text-white">
              Grow
            </button>

            <button className="rounded-full px-4 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-100">
              <Link href="/network/catch-up">
                Catch up
              </Link>
            </button>
          </div>

          {/* Premium */}
          <div className="mb-3 rounded-lg border border-gray-200 bg-white p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold">
                  No pending invitations
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Connect with people and grow your network.
                </p>
              </div>

              <button className="text-sm font-semibold text-gray-600 hover:text-black" onClick={() => router.push("/network/invitation-manager/received")}>
                Manage
              </button>
            </div>
          </div>

          <NetworkSection
            title="People you may know"
            people={people}
            buttonText="Connect"
          />

          <NetworkSection
            title="People skilled in JavaScript also follow these people"
            people={people}
            buttonText="Follow"
          />

          <NetworkSection
            title="Suggestions for you"
            people={people}
            buttonText="Connect"
          />

          {/* More suggestions */}
          <NetworkSection
            title="More people you may know"
            people={people}
            buttonText="Connect"
          />
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
}