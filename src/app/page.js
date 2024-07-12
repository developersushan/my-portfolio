"use client"
import About from "./components/Home/About";
import Banner from "./components/Home/Banner";
import BrandSlide from "./components/Home/BrandSlide";
import Counter from "./components/Home/Counter";

export default function Home() {
  return (
    <main className="w-[calc(100%_-_12px)] xl:w-[1200px] mx-auto ">
      <Banner/>
      <Counter/>
      <About/>
      <BrandSlide/>
    </main>
  );
}
