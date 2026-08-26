import Link from "next/link";
import PersonCard from "./PersonCard";

type Person = {
  username?: string;
  name: string;
  role: string;
  location: string;
  mutual: string;
  image: string;
};

type Props = {
  title: string;
  people: Person[];
  buttonText?: "Connect" | "Follow";
};

export default function NetworkSection({
  title,
  people,
  buttonText = "Connect",
}: Props) {
  return (
    <section className="mb-3 overflow-hidden rounded-lg border border-gray-200 bg-white">
      {/* Section Header */}
      <div className="flex items-center justify-between border-b px-5 py-4">
        <h2 className="text-[15px] font-semibold text-gray-900">
          {title}
        </h2>

        <button className="text-sm font-semibold text-gray-600 hover:text-black">
          Show all
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 gap-px bg-gray-200 md:grid-cols-4">
        {people.map((person, index) => (
          <Link
            key={`${person.name}-${index}`}
            href={person.username ? `/in/${person.username}` : "#"}
            className="block"
          >
            <PersonCard
              person={person}
              buttonText={buttonText}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}