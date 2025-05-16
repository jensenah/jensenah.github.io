import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen])
    return (
      <nav className="fixed top-0 w-full z-40 bg-[#466362] backdrop-blur-lg border-b border-blue/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <a
              href="#home"
              className="font-mono text-xl font-bold text-[#E4E3D3]"
            >
              {" "}
              jensen<span className="text-[#6BBAEC]">.tech</span>
            </a>
            <div
              className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              &#9776;
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-[#E4E3D3] hover:text-[#6BBAEC] transition-colors"
              >
                {" "}
                Home{" "}
              </a>
              <a
                href="#about"
                className="text-[#E4E3D3] hover:text-[#6BBAEC] transition-colors"
              >
                {" "}
                About{" "}
              </a>
              <a
                href="#projects"
                className="text-[#E4E3D3] hover:text-[#6BBAEC] transition-colors"
              >
                {" "}
                Projects{" "}
              </a>
              <a
                href="#contact"
                className="text-[#E4E3D3] hover:text-[#6BBAEC] transition-colors"
              >
                {" "}
                Contact{" "}
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
}