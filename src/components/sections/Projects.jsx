import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {

    return (
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center py-20"
      >
        <RevealOnScroll>
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#C47335] to-[#E4E3D3] bg-clip-text text-transparent text-center">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#E4E3D3]/50 hover:shadow-[0_0_15px_rgba(228,227,211,0.4)] transition-all">
                <h3 className="text-xl font-bold mb-2 text-[#E4E3D3]">Mecazon</h3>
                <p className="text-[#E4E3D3] mb-4">
                  Scalable cloud infrastructure management with real-time
                  monitoring and automated scaling
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-[#510D0A] text-[#E4E3D3] py-1 px-3 rounded-full text-sm hover:bg-[#E4E3D3] hover:text-[#510D0A] hover:shadow-[0_2px_8px_rgba(100,8,20,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="text-[#E4E3D3] underline hover:text-blue-200 transition-colors my-4"
                  >
                    View Project:{" "}
                  </a>
                </div>
                <div class="flex justify-center items-center">
  <div className="bg-[#E4E3D3]/80 rounded-lg shadow-lg w-full md:w-1/2 transform duration-500 hover:translate-x-3 hover:-translate-y-3 pointer-events-none">
    <img className="rounded-lg shadow-lg transform duration-500 hover:-translate-x-5 hover:translate-y-5 pointer-events-auto" src="https://images.unsplash.com/photo-1487338875411-8880f74114a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D" />
  </div>
</div>
              </div>

              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#E4E3D3]/50 hover:shadow-[0_0_15px_rgba(228,227,211,0.4)] transition-all">
                <h3 className="text-xl font-bold mb-2 text-[#E4E3D3]">STYLETEK</h3>
                <p className="text-[#E4E3D3] mb-4">
                  Scalable cloud infrastructure management with real-time
                  monitoring and automated scaling
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-[#510D0A] text-[#E4E3D3] py-1 px-3 rounded-full text-sm hover:bg-[#E4E3D3] hover:text-[#510D0A] hover:shadow-[0_2px_8px_rgba(100,8,20,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="text-[#E4E3D3] underline hover:text-blue-200 transition-colors my-4"
                  >
                    View Project:{" "}
                  </a>
                </div>
                <div class="flex justify-center items-center">
  <div className="bg-[#E4E3D3]/80 rounded-lg shadow-lg w-full md:w-1/2 transform duration-500 hover:translate-x-3 hover:-translate-y-3 pointer-events-none">
    <img className="rounded-lg shadow-lg transform duration-500 hover:-translate-x-5 hover:translate-y-5 pointer-events-auto" src="https://images.unsplash.com/photo-1487338875411-8880f74114a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D" />
  </div>
</div>
              </div>

              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#E4E3D3]/50 hover:shadow-[0_0_15px_rgba(228,227,211,0.4)] transition-all">
                <h3 className="text-xl font-bold mb-2 text-[#E4E3D3]">Task App</h3>
                <p className="text-[#E4E3D3] mb-4">
                  Scalable cloud infrastructure management with real-time
                  monitoring and automated scaling
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-[#510D0A] text-[#E4E3D3] py-1 px-3 rounded-full text-sm hover:bg-[#E4E3D3] hover:text-[#510D0A] hover:shadow-[0_2px_8px_rgba(100,8,20,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="text-[#E4E3D3] underline hover:text-blue-200 transition-colors my-4"
                  >
                    View Project:{" "}
                  </a>
                </div>
                <div class="flex justify-center items-center">
  <div className="bg-[#E4E3D3]/80 rounded-lg shadow-lg w-full md:w-1/2 transform duration-500 hover:translate-x-3 hover:-translate-y-3 pointer-events-none">
    <img className="rounded-lg shadow-lg transform duration-500 hover:-translate-x-5 hover:translate-y-5 pointer-events-auto" src="https://images.unsplash.com/photo-1487338875411-8880f74114a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D" />
  </div>
</div>
              </div>

              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#E4E3D3]/50 hover:shadow-[0_0_15px_rgba(228,227,211,0.4)] transition-all">
                <h3 className="text-xl font-bold mb-2 text-[#E4E3D3]">Flight Match</h3>
                <p className="text-[#E4E3D3] mb-4">
                  Scalable cloud infrastructure management with real-time
                  monitoring and automated scaling
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-[#510D0A] text-[#E4E3D3] py-1 px-3 rounded-full text-sm hover:bg-[#E4E3D3] hover:text-[#510D0A] hover:shadow-[0_2px_8px_rgba(100,8,20,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="text-[#E4E3D3] underline hover:text-blue-200 transition-colors my-4"
                  >
                    View Project:{" "}
                  </a>
                </div>
                <div class="flex justify-center items-center">
  <div className="bg-[#E4E3D3]/80 rounded-lg shadow-lg w-full md:w-1/2 transform duration-500 hover:translate-x-3 hover:-translate-y-3 pointer-events-none">
    <img className="rounded-lg shadow-lg transform duration-500 hover:-translate-x-5 hover:translate-y-5 pointer-events-auto" src="https://images.unsplash.com/photo-1487338875411-8880f74114a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D" />
  </div>
</div>
              </div>

            </div>
          </div>
        </RevealOnScroll>
      </section>
    );
}