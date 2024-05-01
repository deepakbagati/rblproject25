
import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import axios from "axios";


export default function Home() {
  axios.get("https://sepm.onrender.com/").then((res) => {
    console.log(res.data);
  }
  );
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      {/* <FeaturedCourses /> */}
      {/* <WhyChooseUs />
      <MusicSchoolTestimonials />
      <UpcomingWebinars /> */}
      <Instructors /> 
      <Footer />
    </main>
  );
}
