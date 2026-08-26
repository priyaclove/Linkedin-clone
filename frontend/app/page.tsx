  import Hero from "@/app/components/landing/Hero";
  import Navbar from "@/app/components/layout/Navbar";
  import CategorySection from "@/app/components/landing/CategorySection";
  import PostJob from "@/app/components/landing/PostJob";
  import SoftwareSection from "@/app/components/landing/SoftwareSection";
  import OpenToWork from "@/app/components/landing/OpenToWork";
  import FeatureCards from "@/app/components/landing/FeatureCards";
  import Footer from "@/app/components/layout/Footer";

  export default function Home() {
    return (
      <>
      <Navbar />
        <Hero />
        <CategorySection />
        <PostJob />
        <SoftwareSection />
        <OpenToWork />
        <FeatureCards />
        <Footer />
      </>
    );
  }