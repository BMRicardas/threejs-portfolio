import { About } from "./sections/about";
import { Clients } from "./sections/clients";
import { Contact } from "./sections/contact";
import { Footer } from "./sections/footer";
import { Hero } from "./sections/hero";
import { Navbar } from "./sections/navbar";
import { Projects } from "./sections/projects";

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
