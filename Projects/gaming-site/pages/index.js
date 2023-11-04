import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";
import Footer from "@/components/layout/Footer";
import TournamentsCard from "@/components/layout/TournamentsCard";
export default function Home() {
  return (
    <>
      <section>
        <Navbar />
        <Hero />
        <TournamentsCard heading="Ongoing Tournaments" />
        <Footer />
      </section>
    </>
  );
}
