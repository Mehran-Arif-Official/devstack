import type { Technology } from "../types";

const TAG_STYLES: Record<Technology["tagColor"], string> = {
  blue: "bg-sky-50 text-sky-600",
  green: "bg-emerald-50 text-emerald-600",
  orange: "bg-orange-50 text-orange-600",
  pink: "bg-pink-50 text-pink-600",
  yellow: "bg-amber-50 text-amber-600",
  purple: "bg-violet-50 text-violet-600",
};

interface Props {
  tech: Technology;
  isSelected: boolean;
  onToggle: (tech: Technology) => void;
}

export default function TechnologyCard({ tech, isSelected, onToggle }: Props) {
  return (
    <article className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div
          className={`h-11 w-11 rounded-xl flex items-center justify-center text-xl font-bold ${tech.iconBg}`}
        >
          {tech.icon}
        </div>
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full ${TAG_STYLES[tech.tagColor]}`}
        >
          {tech.tag}
        </span>
      </div>

      <h3 className="text-lg font-bold text-ink mb-1.5">{tech.name}</h3>
      <p className="text-sm text-slate-500 leading-relaxed mb-5 flex-1">
        {tech.description}
      </p>

      <div className="flex items-center gap-2 text-xs mb-5">
        <span className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md font-medium">
          {tech.category}
        </span>
        <span className="text-slate-400">{tech.difficulty}</span>
        <span className="ml-auto flex items-center gap-1 text-amber-500 font-semibold">
          ★ {tech.rating.toFixed(1)}
        </span>
      </div>

      <button
        onClick={() => onToggle(tech)}
        className={`w-full py-3 rounded-xl font-semibold text-sm transition-colors ${
          isSelected
            ? "bg-slate-100 text-slate-400"
            : "bg-ink text-white hover:bg-slate-800"
        }`}
      >
        {isSelected ? "Added" : "Add to Stack"}
      </button>
    </article>
  );
}
