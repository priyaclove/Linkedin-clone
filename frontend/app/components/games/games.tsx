import Image from "next/image";

const games = [
  {
    title: "Wend",
    subtitle: "Weave through words",
    image: "/images/games/wend.svg",
    bg: "#FCEEB8",
  },
  {
    title: "Patches",
    subtitle: "Piece it together",
    image: "/images/games/patch.svg",
    bg: "#FBD4D4",
  },
  {
    title: "Mini Sudoku",
    subtitle: "The classic game, made mini",
    image: "/images/games/minisudoku.svg",
    bg: "#C9F0E7",
  },
  {
    title: "Zip",
    subtitle: "Complete the path",
    image: "/images/games/zip.svg",
    bg: "#FFD8C5",
  },
  {
    title: "Tango",
    subtitle: "Harmonize the grid",
    image: "/images/games/tango.svg",
    bg: "#E2E7ED",
  },
  {
    title: "Queens",
    subtitle: "Crown each region",
    image: "/images/games/queen.svg",
    bg: "#E8DDFC",
  },
  {
    title: "PinPoint",
    subtitle: "Guess the category",
    image: "/images/games/pinpoint.svg",
    bg: "#e0efff",
  },
  {
    title: "Crossclimb",
    subtitle: "Unlock a trivia ladder",
    image: "/images/games/crossclimb.svg",
    bg: "#def9fc",
  },
];

export default function Games() {
  return (
    <section className="mx-auto max-w-xs rounded-2xl border border-gray-200 bg-white p-6 mt-24 mb-12">
      <h2 className="text-xl font-semibold leading-tight text-[#191919]">
        Connect over fun, daily games
      </h2>

      <p className="mt-2 text-xs text-[#666666]">
        Prep your mind for the workday and compare results.
      </p>

      <div className="mt-8 space-y-4">
        {games.map((game) => (
          <button
            key={game.title}
            className="flex w-full overflow-hidden rounded-md border border-gray-200 bg-white transition-all hover:shadow-md"
          >
            <div className="flex flex-1 flex-col justify-center px-4 py-4 text-left">
              <p className="text-sm text-[#666666]">
                {game.subtitle}
              </p>

              <h3 className="mt-5 text-md font-semibold text-[#191919]">
                {game.title}
              </h3>
            </div>

            <div
              className="flex w-[90px] items-center justify-center"
              style={{ backgroundColor: game.bg }}
            >
              <Image
                src={game.image}
                alt={game.title}
                width={44}
                height={44}
              />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}