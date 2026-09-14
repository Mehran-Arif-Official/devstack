import { useState } from "react";
import { toast } from "react-toastify";
import { technologies } from "../data/technologies";
import type { Technology } from "../types";
import TechnologyCard from "./TechnologyCard";
import StackSidebar from "./StackSidebar";

export default function TechnologiesSection() {
  const [selected, setSelected] = useState<Technology[]>([]);

  const toggleTech = (tech: Technology) => {
    const alreadySelected = selected.some((t) => t.id === tech.id);

    setSelected((prev) =>
      alreadySelected ? prev.filter((t) => t.id !== tech.id) : [...prev, tech],
    );

    if (alreadySelected) {
      toast.info(`${tech.name} removed from your stack`);
    } else {
      toast.success(`${tech.name} added to your stack`);
    }
  };

  const removeTech = (id: string) => {
    const tech = selected.find((t) => t.id === id);
    setSelected((prev) => prev.filter((t) => t.id !== id));
    if (tech) toast.info(`${tech.name} removed from your stack`);
  };

  const removeAll = () => {
    if (selected.length > 0) toast.info("Stack cleared");
    setSelected([]);
  };

  return (
    <section
      id="technologies"
      className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16"
    >
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
          onRemoveAll={removeAll}
        />
      </div>
    </section>
  );
}
