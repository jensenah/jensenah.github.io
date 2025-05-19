import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen])
    return (
      <nav className="fixed top-0 w-full z-40 bg-[#466362] backdrop-blur-lg border-b border-blue/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* <a
              href="#home"
              className="font-mono text-xl font-bold text-[#E4E3D3]"
            >
              {" "}
              jensenah
            </a> */}
            <div
              className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              &#9776;
            </div>
            <div className="hidden md:flex items-center space-x-65">
              <a
                href="#home"
                className="text-[#E4E3D3] rounded-full hover:w-23 hover:text-center hover:bg-[#510D0A] -transition-colors"
              >
                {" "}
                Home
              </a>
              <a
                href="#about"
                className="text-[#E4E3D3] rounded-full hover:w-23 hover:text-center hover:bg-[#510D0A] -transition-colors"
              >
                {" "}
                About{" "}
              </a>
              <a
                href="#projects"
                className="text-[#E4E3D3] rounded-full hover:w-23 hover:text-center hover:bg-[#510D0A] -transition-colors"
              >
                {" "}
                Projects{" "}
              </a>
              <a
                href="#contact"
                className="text-[#E4E3D3] rounded-full hover:w-23 hover:text-center hover:bg-[#510D0A] -transition-colors"
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