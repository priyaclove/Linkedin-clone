import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const footerLinks = [
  {
    title: "General",
    links: [
      "Sign Up",
      "Help Center",
      "About",
      "Press",
      "Blog",
      "Careers",
      "Developers",
    ],
  },
  {
    title: "Browse LinkedIn",
    links: [
      "Learning",
      "Jobs",
      "Games",
      "Mobile",
      "Services",
      "Products",
      "Top Companies",
      "Top Startups",
      "Top Colleges",
    ],
  },
  {
    title: "Business Solutions",
    links: [
      "Talent",
      "Marketing",
      "Sales",
      "Learning",
    ],
  },
  {
    title: "Directories",
    links: [
      "Members",
      "Jobs",
      "Companies",
      "Featured",
      "Learning",
      "Posts",
      "Articles",
      "Schools",
      "News",
      "News Letters",
      "Services",
      "Products",
      "Advice",
      "People Search",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#f3f2ef]">

      {/* Top Footer */}

      <div className="mx-auto grid max-w-[1128px] grid-cols-1 gap-12 px-6 py-14 md:grid-cols-5">

        {/* Logo */}

        <div>
          <Image
            src="/images/LinkedIn-logo.png"
            alt="LinkedIn"
            width={110}
            height={28}
          />
        </div>

        {/* Footer Columns */}

        {footerLinks.map((section) => (
          <div key={section.title}>

            <h3 className="mb-5 text-lg font-bold leading-6 text-[#191919]">
              {section.title}
            </h3>

            <ul className="space-y-3 leading-6">

              {section.links.map((link) => (
                <li key={link}>
                  <Link
                    href="/"
                    className="text-sm font-semibold text-[#666666] transition hover:text-[#0A66C2]"
                  >
                    {link}
                  </Link>
                </li>
              ))}

            </ul>

          </div>
        ))}

      </div>

      {/* Bottom Footer */}

      <div className="border-t bg-white">

        <div className="mx-auto flex max-w-[1128px] flex-wrap items-center gap-6 px-6 py-5 text-[15px] font-semibold text-[#666666]">

          <Image
            src="/images/LinkedIn-logo.png"
            alt="LinkedIn"
            width={80}
            height={20}
          />

          <span>© 2026</span>

          {[
            "About",
            "Accessibility",
            "User Agreement",
            "Privacy Policy",
            "Cookie Policy",
            "Copyright Policy",
            "Brand Policy",
            "Guest Controls",
            "Community Guidelines",
          ].map((item) => (
            <Link
              href="/"
              key={item}
              className="hover:text-[#0A66C2]"
            >
              {item}
            </Link>
          ))}

          <button className="ml-auto flex items-center gap-1 hover:text-[#0A66C2]">
            Language
            <ChevronDown size={16} />
          </button>

        </div>

      </div>

    </footer>
  );
}