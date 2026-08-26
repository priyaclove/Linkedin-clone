"use client";

export default function TopContent() {
  const chips = [
    {
      icon: "📚",
      text: "Tips for Managing Stressors with Mental Toughness",
    },
    {
      icon: "💬",
      text: "How to Navigate Difficult Conversations for Personal Growth",
    },
    {
      icon: "💡",
      text: "Top Emerging AI Use Cases and Their Capabilities",
    },
    {
      icon: "🧠",
      text: " How Leaders Foster Psychological Safety",
    },
    {
      icon: "🚀",
      text: "Tips for Curating a Professional Network",
    },
    {
      icon: "🚀",
      text: "Tips for Strategic Career Planning",
    },
    {
      icon: "🚀",
      text: "How to Find the Right Mentor for Your Career",
    },
    {
      icon: "🚀",
      text: "Tips for Optimizing Your LinkedIn Profile",
    },
    {
      icon: "🧭",
      text: "How to Set Priorities as a Leader",
    },
  ];

  const editorPicks = [
    {
      category: "Career",
      title: "Career Advancement Tips",
      likes: "957K",
      icon: "🚀",
    },
    {
      category: "Training & Development",
      title: "Mindset Development Tips",
      likes: "678K",
      icon: "📚",
    },
    {
      category: "Innovation",
      title: "AI Trends and Innovations",
      likes: "459K",
      icon: "💡",
    },
    {
      category: "Leadership",
      title: "Balancing Leadership Responsibilities",
      likes: "356K",
      icon: "🧭",
    },
    {
      category: "Leadership",
      title: "Team Performance and Morale",
      likes: "263K",
      icon: "🧭",
    },
    {
      category: "Communication",
      title: "Promoting Open Communication",
      likes: "182K",
      icon: "💬",
    },
    {
      category: "Career",
      title: "Networking for Professionals",
      likes: "172K",
      icon: "🚀️",
    },
    {
      category: "Productivity",
      title: "Workday Management Tips",
      likes: "159K",
      icon: "⏱️",
    },
  ];

  const topCategories = [
    {
      icon: "♟️",
      title: "Business Strategy",
      posts: "89K",
    },
    {
      icon: "📣",
      title: "Marketing",
      posts: "79K",
    },
    {
      icon: "🚀",
      title: "Career",
      posts: "70K",
    },
    {
      icon: "💻",
      title: "Technology",
      posts: "67K",
    },
    {
      icon: "💰",
      title: "Finance",
      posts: "58K",
    },
    {
      icon: "🧭",
      title: "Leadership",
      posts: "57K",
    },
    {
      icon: "💡",
      title: "Innovation",
      posts: "57K",
    },
    {
      icon: "🤖️",
      title: "Artificial Intelligence",
      posts: "42K",
    },
    {
      icon: "👥",
      title: "Recruitment & HR",
      posts: "42K",
    },
    {
      icon: "💬",
      title: "Communication",
      posts: "31K",
    },
    {
      icon: "📚",
      title: "Training & Development",
      posts: "30K",
    },
    {
      icon: "🤝",
      title: "Customer Experience",
      posts: "30K",
    },
    {
      icon: "🪢",
      title: "Organizational Culture",
      posts: "30K",
    },
    {
      icon: "🛠",
      title: "Engineering",
      posts: "29K",
    },
    {
      icon: "🔬",
      title: "Science",
      posts: "28K",
    },
    {
      icon: "🔄",
      title: "Supply Chain Management",
      posts: "26K",
    },
    {
      icon: "🔄",
      title: "Change Management",
      posts: "23K",
    },
    {
      icon: "📈",
      title: "Economics",
      posts: "23K",
    },
    {
      icon: "🏨",
      title: "Hospitality & Tourism",
      posts: "23K",
    },
    {
      icon: "🏨",
      title: "Writing",
      posts: "23K",
    },
    {
      icon: "📑",
      title: "Consulting",
      posts: "22K",
    },
    {
      icon: "😊",
      title: "Employee Experience",
      posts: "22K",
    },
    {
      icon: "🔗",
      title: "Networking",
      posts: "21K",
    },
    {
      icon: "🔗",
      title: "Education",
      posts: "20K",
    },
    {
      icon: "🛒",
      title: "Ecommerce",
      posts: "20K",
    },
    {
      icon: "🖌️",
      title: "Design",
      posts: "20K",
    },
    {
      icon: "💞",
      title: "Soft Skills & Emotional Intelligence",
      posts: "20K",
    },
    {
      icon: "🛍️",
      title: "Retail & Merchandising",
      posts: "18K",
    },
    {
      icon: "📊",
      title: "Project Management",
      posts: "18K",
    },
    {
      icon: "🤝",
      title: "Negotiation",
      posts: "16K",
    },
    {
      icon: "🌐",
      title: "Future Of Work",
      posts: "14K",
    },
    {
      icon: "💰",
      title: "Fundraising",
      posts: "12K",
    },
    {
      icon: "🧭",
      title: "Healthcare",
      posts: "9K",
    },
    {
      icon: "🎉",
      title: "Event Planning",
      posts: "9K",
    },
  ];
  return (
    <section className="text-center mx-auto max-w-7xl  mt-18">
      <h1 className="text-5xl font-semibold text-[#191919]">
        What topics do you want to explore?
      </h1>

      <div className="mt-8 flex flex-wrap justify-center gap-3 text-black">
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {chips.map((chip) => (
            <button
              key={chip.text}
              className="rounded-full border bg-white px-5 py-2 text-sm font-semibold hover:bg-gray-300"
            >
              <span className="text-sm font-medium text-black">
                {chip.icon}
              </span>{" "}
              <span className="text-sm font-medium text-black ">
                {chip.text}
              </span>
            </button>
          ))}
        </div>
      </div>

      <section className="mt-20">
        <h2 className="text-4xl font-semibold text-left">Editor's Picks</h2>

        <p className="mt-2 text-gray-500 text-left">
          Handpicked ideas and insights from professionals
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {editorPicks.map((item) => (
            <div
              key={item.title}
              className="relative rounded-3xl bg-white p-6 h-52 hover:shadow-md transition"
            >
              {/* Top Row */}
              <div className="flex items-start justify-between">
                <p className="text-sm font-medium text-gray-400 ">
                  {item.category}
                </p>

                <span className="text-2xl">{item.icon}</span>
              </div>

              {/* Title */}
              <h3 className="mt-8 text-lg font-semibold text-[#191919] leading-snug text-left">
                {item.title}
              </h3>

              {/* Likes */}
              <p className="mt-2 text-sm text-gray-500 text-left">
                {item.likes} likes
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-20 ">
        <h2 className="mb-8 text-5xl font-semibold text-[#191919]">
          Topic Categories
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {topCategories.map((item) => (
            <div
              key={item.title}
              className="h-56 rounded-3xl bg-white p-8 transition hover:shadow-md "
            >
              {/* Icon */}
              <div className="text-xl text-left">{item.icon}</div>

              {/* Title */}
              <h3 className="mt-8 text-lg font-semibold text-[#191919] text-left ">
                {item.title}
              </h3>

              {/* Posts */}
              <p className="mt-2 text-sm text-gray-500 text-left">
                {item.posts} posts
              </p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
