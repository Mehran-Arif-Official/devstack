import logo from "../assets/logo.png";

const NAV_LINKS = ["Home", "Technologies", "Projects", "About", "Contact"];

export default function Navbar() {
  return (
    <header className="w-full border-b border-slate-100 bg-white/90 backdrop-blur sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 lg:px-10 h-[76px]">
        <a href="#home" className="flex items-center">
          <img src={logo} alt="Dev Stack" className="h-8 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={
                link === "Home"
                  ? "text-brandPink font-medium text-[15px]"
                  : "text-slate-600 hover:text-ink transition-colors text-[15px]"
              }
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <button className="hidden sm:block text-slate-700 font-medium text-[15px] hover:text-ink transition-colors">
            Sign In
          </button>
          <button className="bg-gradient-to-r from-brandPink to-fuchsia-500 text-white font-semibold text-[15px] px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}
