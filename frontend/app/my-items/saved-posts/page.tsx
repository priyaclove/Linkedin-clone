"use client";

import Navbar from "../../components/layout/Navbar-2";
import MyItemsSidebar from "../../components/my-items/MyItemsSidebar";
import SavedPosts from "../../components/my-items/SavedPosts";
import RightSidebar from "../../components/my-items/RightSidebar";
import Footer from "../../components/layout/Footer";

export default function SavedPostsPage() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#f3f2ef] pt-[80px]">
        <div className="mx-auto flex max-w-[1128px] gap-6 px-4">          
          <MyItemsSidebar />
          <SavedPosts />
          <RightSidebar />
        </div>
      </div>
      <Footer />
    </>
  );
}