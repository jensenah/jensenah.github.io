import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return (
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative"
      >
        <RevealOnScroll>
          <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7x; font-bold mb-6 bg-gradient-to-r from-[#C47335] to-[#E4E3D3] bg-clip-text text-transparent leading-right">
              Hi, I'm Jensen Hutchinson
            </h1>
            <p className="text-[#E4E3D3] text-lg mb-8 max-w-lg mx-auto">
              I'm a full-stack developer with a passion for building clean, scalable web applications. My goal is to create
              visually compelling websites that deliver stunning, seamless user experiences.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#projects"
                className="bg-[#510D0A] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(228,227,211,0.4)]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-[#510D0A] text-[#E4E3D3] py-3 px-6 rounded font-medium transition-all duration-200  hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(228,227,211,0.4)] hover:bg-[#E4E3D3]/10 hover:text-[#510D0A]"
              >
                Contact Me
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    );
}