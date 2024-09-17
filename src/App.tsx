import { Hero } from "./sections/hero";
import { Navbar } from "./sections/navbar";

export function App() {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
    </main>
  );
}
