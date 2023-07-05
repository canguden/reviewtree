import Accordion from "@/components/Accordion";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Information from "@/components/Information";
import SectionDemo from "@/components/SectionDemo";
import SectionEnd from "@/components/SectionEnd";

export default function Home() {
  return (
    <>
      <div className=" top-10 z-50 sticky">
        <Header />
      </div>
      <div className="absolute top-0 -mt-20 w-full z-0 ">
        <Hero />
      </div>
      <section className="mt-[500px] md:mt-[800px] px-2 pb-20 w-full bg-pink-200">
        <Information />
      </section>
      <section className="bg-green-200 px-4 sm:px-8 h-[750px] ">
        <SectionEnd />
      </section>
      <section className="pt-10 px-2 h-[1250px] xl:[350px]  bg-slate-100">
        <SectionDemo />
      </section>

      <div className="w-full h-[500px] bg-slate-100 pt-24">
        <Footer />
      </div>
    </>
  );
}
