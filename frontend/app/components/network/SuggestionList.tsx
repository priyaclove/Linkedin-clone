"use client";

import Image from "next/image";
import { useState } from "react";
import { Check } from "lucide-react";

const suggestions = [
  {
    name: "Aditya Goyal",
    title: "MCA Student at Rama University | Aspiring Software Developer | Learning Python, Java & Web Development",
    mutual: "Saumya and 2 other mutual connections",
  },
  {
    name: "Shreya Katiyar",
    title: "Software Engineer | Frontend Developer | UI Enthusiast",
    mutual: "Saumya and 4 other mutual connections",
  },
  {
    name: "Sakshi Pal",
    title: "Student at Rama University",
    mutual: "Kuldeep Kumar and 1 other mutual connection",
  },
  {
    name: "Atul Sharma",
    title: "Marketing Manager at Shivalik Communication Pvt Ltd",
    mutual: "Amit is a mutual connection",
  },
  {
    name: "Shobhit Pal",
    title: "BCA Graduate | Rama University Kanpur Nagar",
    mutual: "Chandan and 7 other mutual connections",
  },
  {
    name: "VIRENDRA KUSHWAHA",
    title: "Student at Rama University",
    mutual: "Kuldeep Kumar and 10 other mutual connections",
  },
  {
    name: "Lucas Kieffer",
    title: "Software Engineer | Backend & Full Stack | Python · FastAPI · LangGraph",
    mutual: "1 mutual connection",
  },
  {
    name: "Ildar Karachai",
    title: "Sr .NET Software Developer | Developing microservices | DevOps",
    mutual: "Matthew and 6 other mutual connections",
  },
  {
    name: "Ali Zain Malik",
    title: "Software Engineer | AI-Augmented Engineering | Laravel, React, Next.js, Node.js",
    mutual: "Sidiki is a mutual connection",
  },
  {
    name: "Alistair Josephs",
    title: "Backend Software Engineer | Python · FastAPI · AI Applications",
    mutual: "Eran is a mutual connection",
  },
  {
    name: "Umair Jabeen",
    title: "Chat support | Construction Estimation | Email Marketing | B2B B2C",
    mutual: "Siddiki is a mutual connection",
  },
  {
    name: "Pyae Sone Paing",
    title: "Frontend Developer | React · Next.js · TypeScript | Open to Remote Opportunities",
    mutual: "Caleb and 12 other mutual connections",
  },
  {
    name: "Muhammad Shaharyar",
    title: "Contact for custom Services Professional Software Engineer",
    mutual: "Naveed and 1 other mutual connection",
  },
  {
    name: "T Prasad",
    title: "PCB Design Engineer | Hardware Engineer | BMS R&D",
    mutual: "Sidiki is a mutual connection",
  },
  {
    name: "Shivanand Ghevade",
    title: "SAP ABAP Fresher | Web Development Intern | React, JavaScript",
    mutual: "Amit is a mutual connection",
  },
  {
    name: "Emir Borovac",
    title: "Developer",
    mutual: "Mergem and 1 other mutual connection",
  },
  {
    name: "Own Ali",
    title: "Student | C/C++ OOP, HTML | BS. Computer Science",
    mutual: "William and 2 other mutual connections",
  },
  {
    name: "Nandini Katara",
    title: "Full Stack Web Developer",
    mutual: "Sidiki and 4 other mutual connections",
  },
  {
    name: "Suman Kumar",
    title: "Oracle APEX Developer | UI/UX Developer | Website & Web App Developer",
    mutual: "Staci is a mutual connection",
  },
  {
    name: "Samantha Eshke",
    title: "Cybersecurity Student | SOC Operations & Incident Response",
    mutual: "Sidiki is a mutual connection",
  },
];

export default function SuggestionList() {
  const [connected, setConnected] = useState<string[]>([]);

  const handleConnect = (name: string) => {
    setConnected((current) =>
      current.includes(name)
        ? current.filter((item) => item !== name)
        : [...current, name]
    );
  };

  return (
    <section className="mt-3 overflow-hidden rounded-lg border border-gray-200 bg-white">
      <div className="border-b px-5 py-4">
        <h2 className="text-[17px] font-semibold">
          Suggestions for you
        </h2>
      </div>

      <div>
        {suggestions.map((person) => {
          const isConnected = connected.includes(person.name);

          return (
            <div
              key={person.name}
              className="flex items-center gap-4 border-b px-5 py-4 last:border-b-0 hover:bg-gray-50"
            >
              {/* Avatar */}
              <Image
                src="/images/profile-image.jpeg"
                alt={person.name}
                width={56}
                height={56}
                className="h-14 w-14 shrink-0 rounded-full object-cover"
              />

              {/* Information */}
              <div className="min-w-0 flex-1">
                <h3 className="text-[15px] font-semibold text-gray-900">
                  {person.name}
                </h3>

                <p className="mt-0.5 line-clamp-2 text-[12px] leading-4 text-gray-600">
                  {person.title}
                </p>

                <p className="mt-1 text-[11px] text-gray-500">
                  {person.mutual}
                </p>
              </div>

              {/* Connect */}
              <button
                onClick={() => handleConnect(person.name)}
                className={`shrink-0 rounded-full border px-5 py-2 text-sm font-semibold transition ${
                  isConnected
                    ? "border-gray-400 bg-gray-100 text-gray-700"
                    : "border-[#0a66c2] text-[#0a66c2] hover:bg-blue-50"
                }`}
              >
                {isConnected ? (
                  <span className="flex items-center gap-1">
                    <Check size={15} />
                    Connected
                  </span>
                ) : (
                  "Connect"
                )}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}