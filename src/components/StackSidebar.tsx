import type { Technology } from "../types";

interface Props {
  selected: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

export default function StackSidebar({ selected, onRemove, onRemoveAll }: Props) {
  return (
    <aside className="bg-white border border-slate-100 rounded-2xl p-6 h-fit sticky top-24">
      <h3 className="font-bold text-ink text-lg">Your Stack</h3>
      <p className="text-sm text-slate-400 mb-4">
        {selected.length} Technology Selected
      </p>

      <div className="space-y-3 mb-5 min-h-[40px]">
        {selected.length === 0 && (
          <p className="text-sm text-slate-400">
            Add technologies to start building your stack.
          </p>
        )}
        {selected.map((tech) => (
          <div
            key={tech.id}
            className="flex items-center justify-between bg-slate-50 rounded-xl px-3 py-2.5"
          >
            <div className="flex items-center gap-3">
              <span
                className={`h-8 w-8 rounded-lg flex items-center justify-center text-base ${tech.iconBg}`}
              >
                {tech.icon}
              </span>
              <div>
                <p className="text-sm font-semibold text-ink leading-tight">
                  {tech.name}
                </p>
                <p className="text-xs text-slate-400 leading-tight">
                  {tech.category}
                </p>
              </div>
            </div>
            <button
              onClick={() => onRemove(tech.id)}
              aria-label={`Remove ${tech.name} from stack`}
              className="text-slate-300 hover:text-slate-500 transition-colors text-lg leading-none"
            >
              ×
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={onRemoveAll}
        disabled={selected.length === 0}
        className="w-full border border-red-100 text-red-500 font-semibold text-sm py-3 rounded-xl hover:bg-red-50 transition-colors disabled:opacity-40 disabled:hover:bg-transparent"
      >
        Remove All
      </button>
    </aside>
  );
}
