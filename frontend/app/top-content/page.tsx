"use client";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import TopContent from "../components/top-content/top-content";

export default function TopContentPage() {
  return (
    <div>
      <Navbar />
      <div className="py-24 bg-[#F3F2F0]">
      <TopContent />
      </div>
      <Footer />
    </div>
  );
}