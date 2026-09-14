import logo from "../assets/logo.png";

const COLUMNS: { title: string; links: string[] }[] = [
  { title: "Product", links: ["Home", "Technologies", "Projects"] },
  { title: "Company", links: ["About", "Contact", "Careers"] },
  { title: "Legal", links: ["Privacy Policy", "Terms of Service"] },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 mt-8">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-14 grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
        <div>
          <img src={logo} alt="Dev Stack" className="h-7 w-auto mb-4" />
          <p className="text-sm text-slate-500 max-w-xs leading-relaxed">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="flex gap-5 mt-5 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-ink">GitHub</a>
            <a href="#" className="hover:text-ink">Twitter</a>
            <a href="#" className="hover:text-ink">LinkedIn</a>
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h4 className="text-xs font-bold tracking-wide text-ink mb-4">
              {col.title.toUpperCase()}
            </h4>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-slate-500 hover:text-ink transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ink">Privacy</a>
            <a href="#" className="hover:text-ink">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
