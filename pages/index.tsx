import Accordion from "@/components/Accordion";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Information from "@/components/Information";
import LinkForm from "@/components/LinkForm";
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
      {/* <div className="justify-center w-full bg-slate-100  lg:mx-auto text-center pt-48 font-bold">
        <h1 className="text-3xl xl:text-5xl bg-slate-100">Claim your link</h1>
        <div className="max-w-xl justify-center mx-auto mt-10">
          <LinkForm />
        </div>
      </div> */}

      <div className="w-full h-[500px] bg-slate-100 pt-1">
        <Footer />
      </div>
    </>
  );
}
