"use client";

import { useEffect, useState } from "react";
import CreatePostModal from "./CreatePostModal";
import { API_URL } from "@/lib/api";
import {
    Pencil,
    Eye,
    Users,
    ChartNoAxesCombined,
    Plus,
    Search,
    ArrowRight,
    X
} from "lucide-react";

type NamedItem = { id: number; name: string };

type ProfileSectionsProps = {
  skills?: NamedItem[];
  interests?: NamedItem[];
  // The profile owner's id + whether the current viewer may edit (their own profile).
  userId?: number;
  editable?: boolean;
};

export default function ProfileSections({
  skills = [],
  interests = [],
  userId,
  editable = false,
}: ProfileSectionsProps) {
  const [openModal, setOpenModal] = useState(false);

  // Local, editable copies so the UI updates without a full page reload.
  const [skillList, setSkillList] = useState<NamedItem[]>(skills);
  const [interestList, setInterestList] = useState<NamedItem[]>(interests);

  // Search text + open/closed state for the two pickers.
  const [skillSearch, setSkillSearch] = useState("");
  const [showSkillPicker, setShowSkillPicker] = useState(false);

  const [interestSearch, setInterestSearch] = useState("");
  const [showInterestPicker, setShowInterestPicker] = useState(false);

  // The catalog options loaded from the Skill / Interest tables.
  const [skillOptions, setSkillOptions] = useState<NamedItem[]>([]);
  const [interestOptions, setInterestOptions] = useState<NamedItem[]>([]);

  const [busy, setBusy] = useState(false);

  // Load matching skills from the catalog whenever the picker opens / search changes.
  useEffect(() => {
    if (!showSkillPicker) return;
    const ctrl = new AbortController();
    fetch(`${API_URL}/api/skills?q=${encodeURIComponent(skillSearch)}`, {
      signal: ctrl.signal,
    })
      .then((r) => r.json())
      .then((d) => setSkillOptions(d.skills || []))
      .catch(() => {});
    return () => ctrl.abort();
  }, [showSkillPicker, skillSearch]);

  useEffect(() => {
    if (!showInterestPicker) return;
    const ctrl = new AbortController();
    fetch(`${API_URL}/api/interests?q=${encodeURIComponent(interestSearch)}`, {
      signal: ctrl.signal,
    })
      .then((r) => r.json())
      .then((d) => setInterestOptions(d.interests || []))
      .catch(() => {});
    return () => ctrl.abort();
  }, [showInterestPicker, interestSearch]);

  const addSkill = async (name: string) => {
    if (!name || !userId) return;
    try {
      setBusy(true);
      const res = await fetch(`${API_URL}/api/users/${userId}/skills`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });
      const data = await res.json();
      if (res.ok) setSkillList(data.skills);
    } catch (error) {
      console.error(error);
    } finally {
      setBusy(false);
    }
  };

  const removeSkill = async (skillId: number) => {
    if (!userId) return;
    try {
      const res = await fetch(
        `${API_URL}/api/users/${userId}/skills/${skillId}`,
        { method: "DELETE" }
      );
      const data = await res.json();
      if (res.ok) setSkillList(data.skills);
    } catch (error) {
      console.error(error);
    }
  };

  const addInterest = async (name: string) => {
    if (!name || !userId) return;
    try {
      setBusy(true);
      const res = await fetch(`${API_URL}/api/users/${userId}/interests`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });
      const data = await res.json();
      if (res.ok) setInterestList(data.interests);
    } catch (error) {
      console.error(error);
    } finally {
      setBusy(false);
    }
  };

  const removeInterest = async (interestId: number) => {
    if (!userId) return;
    try {
      const res = await fetch(
        `${API_URL}/api/users/${userId}/interests/${interestId}`,
        { method: "DELETE" }
      );
      const data = await res.json();
      if (res.ok) setInterestList(data.interests);
    } catch (error) {
      console.error(error);
    }
  };

  // Catalog options the user hasn't already added.
  const availableSkills = skillOptions.filter(
    (o) => !skillList.some((s) => s.id === o.id)
  );
  const availableInterests = interestOptions.filter(
    (o) => !interestList.some((i) => i.id === o.id)
  );

    return (
        <div className="space-y-4 mt-4">
            {/* Suggested for you */}
            <section className="rounded-xl border border-gray-300 bg-white p-6">
                <div className="flex justify-between">
                    <div>
                        <h2 className="mt-1 text-xl font-semibold">Suggested for you</h2>
                        <p className="flex items-center gap-1.5 text-[14px] font-normal text-[#666666]">
                            <Eye size={16}
                                strokeWidth={3}
                                className="text-black"/>
                            <span>Private to you</span>
                        </p>
                    </div>

                    <Pencil className="cursor-pointer"
                        size={20}/>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">
                            Stand out and build your credibility
                        </h3>

                        <p className="mt-2 text-sm text-gray-600">
                            Enhance your profile with personalized AI tips and stand out for
                                          up to 2x as many opportunities.
                        </p>

                        <button className="mt-4 rounded-full bg-[#F9C982] px-4 py-2 text-black font-semibold hover:bg-[#eef6fd]">
                            Try Premium for ₹0
                        </button>
                        <p className="text-xs mt-3">
                            1-month free trial with 24/7 support. We’ll remind you 7 days
                                          before your trial ends.
                        </p>
                    </div>

                    <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">
                            Connect with people in Web Developer roles to achieve your career
                                          goals
                        </h3>

                        <p className="mt-2 text-sm text-gray-600">
                            Find people who can provide guidance and help you find potential
                                          opportunities.
                        </p>

                        <button className="mt-4 rounded-full border border-black px-4 p-1 text-black hover:bg-[#eef6fd]">
                            Search for people
                        </button>
                    </div>
                </div>
            </section>

            {/* Analytics */}
            <section className="rounded-xl border border-gray-300 bg-white p-6">
                <div className="flex justify-between">
                    <div>
                        <h2 className="text-xl font-semibold">Analytics</h2>
                        <p className="flex items-center gap-1.5 text-[14px] font-normal text-[#666666]">
                            <Eye size={16}
                                strokeWidth={3}
                                className="text-black"/>
                            <span>Private to you</span>
                        </p>
                        {" "} </div>

                    <Pencil size={20}/>
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-3">
                    <div className="flex gap-3">
                        <Users className="text-black"/>

                        <div>
                            <h3 className="font-semibold">132 profile views</h3>

                            <p className="text-sm text-gray-600">
                                Discover who's viewed your profile.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <ChartNoAxesCombined className="text-black"/>

                        <div>
                            <h3 className="font-semibold">76 post impressions</h3>

                            <p className="text-sm text-gray-600">
                                See how your content performs.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <Search className="text-black"/>

                        <div>
                            <h3 className="font-semibold">18 search appearances</h3>

                            <p className="text-sm text-gray-600">
                                People found you through LinkedIn Search.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About */}
            <section className="rounded-xl border border-gray-300 bg-white p-6">
                <div className="flex justify-between">
                    <h2 className="text-xl font-semibold">About</h2>

                    <Pencil size={20}/>
                </div>

                <p className="mt-4 leading-7 text-black">
                    Passionate Full Stack Developer with experience in React, Next.js,
                              Tailwind CSS, Node.js, Express, Prisma, MySQL, Laravel and WordPress.
                              I enjoy building scalable web applications, beautiful UI designs and
                              solving challenging backend problems....
                    <span className="text-gray-500">more</span>
                </p>
            </section>

            {/* Activity */}
            <section className="rounded-xl border border-gray-300 bg-white">
                {/* Header */}

                <div className="flex items-start justify-between p-4 ">
                    <div>
                        <h2 className="text-[20px] font-semibold text-[#191919]">
                            Activity
                        </h2>

                        <p className="text-[16px] font-semibold text-[#0a66c2] hover:underline cursor-pointer">
                            6,435 followers
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <button onClick={
                                () => setOpenModal(true)
                            }

                            className="rounded-full border border-[#0a66c2] px-5 py-2 text-[16px] font-semibold text-[#0a66c2] hover:bg-[#eaf4fe]">

                            Create a post

                        </button>

                        <CreatePostModal open={openModal}

                            onClose={
                                () => setOpenModal(false)
                            }/>
                        <button className="rounded-full p-2 hover:bg-gray-100">
                            <Pencil size={20}/>
                        </button>
                    </div>
                </div>

                {/* Empty State */}

                <div className="px-6 pb-8">
                    <h3 className="text- font-semibold text-[#191919]">
                        You haven't posted yet
                    </h3>

                    <p className="text-md text-gray-900">
                        Posts you share will be displayed here.
                    </p>
                </div>

                {/* Footer */}

                <button className="flex w-full items-center justify-center gap-2 border-t border-gray-200 py-4 text-[18px] font-semibold text-[#191919] hover:bg-gray-100">
                    Show all
                    <ArrowRight size={22}/>
                </button>
            </section>

            {/* Experience */}
            <section className="rounded-xl border border-gray-300 bg-white p-6">
                <div className="flex justify-between">
                    <h2 className="text-xl font-semibold">Experience</h2>

                    <Plus size={20}/>
                </div>

                <div className="mt-6 flex gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded bg-gray-200 font-bold">
                        G
                    </div>

                    <div>
                        <h3 className="font-semibold">Full Stack Developer</h3>

                        <p>Gretrix</p>

                        <p className="text-sm text-gray-500">Jan 2025 – Present</p>

                        <p className="mt-3 text-gray-600">
                            Working with React, Next.js, Laravel, WordPress, Tailwind CSS and
                                          REST APIs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Education */}
            <section className="rounded-xl border border-gray-300 bg-white p-6">
                <div className="flex justify-between">
                    <h2 className="text-xl font-semibold">Education</h2>

                    <Plus size={20}/>
                </div>

                <div className="mt-6 flex gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded bg-gray-200 font-bold">
                        CU
                    </div>

                    <div>
                        <h3 className="font-semibold">Chandigarh University</h3>

                        <p>Bachelor of Computer Applications</p>

                        <p className="text-sm text-gray-500">2022 – 2025</p>
                    </div>
                </div>
            </section>

            {/* Skills */}
            <section className="rounded-xl border border-gray-300 bg-white p-6">
                <div className="flex justify-between">
                    <h2 className="text-xl font-semibold">Skills</h2>

                    {editable && (
                        <button
                            onClick={() => setShowSkillPicker((v) => !v)}
                            className="rounded-full p-1 hover:bg-gray-100"
                            aria-label="Add skill"
                        >
                            <Plus size={20} />
                        </button>
                    )}
                </div>

                {editable && showSkillPicker && (
                    <div className="mt-4">
                        <input
                            value={skillSearch}
                            onChange={(e) => setSkillSearch(e.target.value)}
                            placeholder="Search skills…"
                            className="h-10 w-full rounded border border-gray-400 px-3 outline-none focus:border-black"
                        />
                        <div className="mt-2 max-h-56 overflow-y-auto rounded border border-gray-200">
                            {availableSkills.length > 0 ? (
                                availableSkills.map((option) => (
                                    <button
                                        key={option.id}
                                        onClick={() => addSkill(option.name)}
                                        disabled={busy}
                                        className="flex w-full items-center justify-between px-3 py-2 text-left text-sm hover:bg-gray-50 disabled:opacity-50"
                                    >
                                        {option.name}
                                        <Plus size={16} className="text-[#0a66c2]" />
                                    </button>
                                ))
                            ) : (
                                <p className="px-3 py-3 text-sm text-gray-500">
                                    No matching skills.
                                </p>
                            )}
                        </div>
                    </div>
                )}

                {skillList.length > 0 ? (
                    <div className="mt-6 flex flex-wrap gap-3">
                        {skillList.map((skill) => (
                            <span key={skill.id}
                                className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm">
                                {skill.name}
                                {editable && (
                                    <button
                                        onClick={() => removeSkill(skill.id)}
                                        className="text-gray-400 hover:text-red-600"
                                        aria-label={`Remove ${skill.name}`}
                                    >
                                        <X size={14} />
                                    </button>
                                )}
                            </span>
                        ))}
                    </div>
                ) : (
                    <p className="mt-6 text-sm text-gray-500">
                        No skills added yet.
                    </p>
                )}
            </section>

            {/* Interests */}
            <section className="rounded-xl border border-gray-300 bg-white p-6">
                <div className="flex justify-between">
                    <h2 className="text-xl font-semibold">Interests</h2>

                    {editable && (
                        <button
                            onClick={() => setShowInterestPicker((v) => !v)}
                            className="rounded-full p-1 hover:bg-gray-100"
                            aria-label="Add interest"
                        >
                            <Plus size={20} />
                        </button>
                    )}
                </div>

                {editable && showInterestPicker && (
                    <div className="mt-4">
                        <input
                            value={interestSearch}
                            onChange={(e) => setInterestSearch(e.target.value)}
                            placeholder="Search interests…"
                            className="h-10 w-full rounded border border-gray-400 px-3 outline-none focus:border-black"
                        />
                        <div className="mt-2 max-h-56 overflow-y-auto rounded border border-gray-200">
                            {availableInterests.length > 0 ? (
                                availableInterests.map((option) => (
                                    <button
                                        key={option.id}
                                        onClick={() => addInterest(option.name)}
                                        disabled={busy}
                                        className="flex w-full items-center justify-between px-3 py-2 text-left text-sm hover:bg-gray-50 disabled:opacity-50"
                                    >
                                        {option.name}
                                        <Plus size={16} className="text-[#0a66c2]" />
                                    </button>
                                ))
                            ) : (
                                <p className="px-3 py-3 text-sm text-gray-500">
                                    No matching interests.
                                </p>
                            )}
                        </div>
                    </div>
                )}

                {interestList.length > 0 ? (
                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                        {interestList.map((item) => (
                            <div key={item.id}
                                className="flex items-center justify-between rounded-lg border p-4">
                                <span className="font-medium">
                                    {item.name}</span>

                                {editable ? (
                                    <button
                                        onClick={() => removeInterest(item.id)}
                                        className="rounded-full border px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 hover:text-red-600"
                                    >
                                        Remove
                                    </button>
                                ) : (
                                    <button className="rounded-full border px-4 py-1 text-sm hover:bg-gray-100">
                                        Following
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="mt-6 text-sm text-gray-500">
                        No interests added yet.
                    </p>
                )}
            </section>
        </div>
    );
}
