"use client";

import JobChangeCard from "./JobChangeCard";

const people = [
  {
    name: "Arthur Karapetian",
    image: "/images/profile-image.jpeg",
    text: "Started a new position as Senior Software Engineer at",
    company: "Sendblue",
    likes: 0,
    comments: 0,
  },
  {
    name: "Edward Dumbuya",
    image: "/images/profile-image.jpeg",
    text: "Started a new position as Senior Software Engineer at",
    company: "Illumia",
    likes: 1,
    comments: 0,
  },
  {
    name: "Edward Sung",
    image: "/images/profile-image.jpeg",
    text: "Started a new position as Software Engineer Intern at",
    company: "NASA - National Aeronautics and Space Administration",
    likes: 18,
    comments: 5,
  },
  {
    name: "Arjumand wani",
    image: "/images/profile-image.jpeg",
    text: "Started a new position as Programming Analyst at",
    company: "Cognizant",
    likes: 0,
    comments: 0,
  },
  {
    name: "Mishal Siddique",
    image: "/images/profile-image.jpeg",
    text: "Started a new position as Computer Operator at",
    company: "Islamia College",
    likes: 0,
    comments: 0,
  },
];

export default function CatchUpFeed() {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
      {people.map((person, index) => (
        <JobChangeCard
          key={`${person.name}-${index}`}
          person={person}
        />
      ))}
    </div>
  );
}