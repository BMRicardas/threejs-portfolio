import { Navbar } from "./sections/navbar";
import { Hero } from "./sections/hero";
import { About } from "./sections/about";
import { Projects } from "./sections/projects";
import { Clients } from "./sections/clients";
import { WorkExperience } from "./sections/experience";
import { Contact } from "./sections/contact";
import { Footer } from "./sections/footer";

export function App() {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Clients />
      <Contact />
      <Footer />
    </main>
  );
}
