import { useState } from "react";
import { technologies } from "../data/technologies";
import type { Technology } from "../types";
import TechnologyCard from "./TechnologyCard";
import StackSidebar from "./StackSidebar";

export default function TechnologiesSection() {
  const [selected, setSelected] = useState<Technology[]>([]);

  const toggleTech = (tech: Technology) => {
    setSelected((prev) =>
      prev.some((t) => t.id === tech.id)
        ? prev.filter((t) => t.id !== tech.id)
        : [...prev, tech]
    );
  };

  const removeTech = (id: string) => {
    setSelected((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <section id="technologies" className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
      <h2 className="text-4xl font-extrabold text-ink">
        Explore the{" "}
        <span className="bg-gradient-to-r from-brandPink to-brandPurple bg-clip-text text-transparent">
          Technologies
        </span>
      </h2>
      <p className="text-slate-500 mt-3 mb-10">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="grid lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {technologies.map((tech) => (
            <TechnologyCard
              key={tech.id}
              tech={tech}
              isSelected={selected.some((t) => t.id === tech.id)}
              onToggle={toggleTech}
            />
          ))}
        </div>

        <StackSidebar
          selected={selected}
          onRemove={removeTech}
          onRemoveAll={() => setSelected([])}
        />
      </div>
    </section>
  );
}
