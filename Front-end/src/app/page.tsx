import { Footer } from "@/components/Footer";
import { LandingPage } from "@/components/LandingPage";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="m-0 p-0">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}
