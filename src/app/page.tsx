import About from "@/components/sections/About/About";
import Hero from "@/components/sections/Hero/Hero";
import Navbar from "@/components/shared/Navbar/Navbar";
import React from "react";
import Projects from "../components/sections/Projects/Projects";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <About />
        <Projects />
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
