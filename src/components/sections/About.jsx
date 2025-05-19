import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const frontendSkills = ["React", "CSS", "TypeScript", "TailwindCSS"];
    const backendSkills = ["NodeJS", "PHP", "MySQL", "MongoDB"];
    return (
      <section
        id="about"
        className="min-h-screen flex items-center justify-center py-20"
      >
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#C47335] to-[#E4E3D3] bg-clip-text text-transparent text-center">
              About Me
            </h2>
            <div className="rounded-xl p-8 border border-[#E4E3D3]/50 hover:-translate-y-1 transition-all">
              <p className="text-[#E4E3D3] mb-6">
                Versatile full-stack web developer with two years of experience designing and building responsive, cross-platform web applications using a broad range of technologies and programming languages
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl text-[#E4E3D3] font-bold mb-4">
                    Frontend
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {frontendSkills.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-[#510D0A] text-[#E4E3D3] py-1 px-3 rounded-full text-sm hover:bg-[#E4E3D3] hover:text-[#510D0A] hover:shadow-[0_2px_8px_rgba(100,8,20,0.2)] transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl text-[#E4E3D3] font-bold mb-4">
                    Backend
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {backendSkills.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-[#510D0A] text-[#E4E3D3] py-1 px-3 rounded-full text-sm hover:bg-[#E4E3D3] hover:text-[#510D0A] hover:shadow-[0_2px_8px_rgba(100,8,20,0.2)] transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
              <div className="p-6 rounded-xl border-[#E4E3D3]/50 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Education</h3>
                <ul className="list-disc list-inside text-[#E4E3D3] space-y-2">
                  <li>
                    <strong>Millennium High School</strong> - 2021-2025 <br /> - Relevant Coursework: AP Language and Composition, AP Literature, AP Precalculus, Graphic Design 1 & 2 <br /> - GPA: 4.0/4.7
                  </li>
                  {/* <li>
                    Relevant Coursework: AP Language and Composition, AP Literature, AP Precalculus, Graphic Design 1 & 2 <br /> GPA: 4.0/4.7
                  </li> */}
                  <li>
                    <strong>West-MEC Coding</strong> - 2023-2025 <br /> - 900-hour hands-on technical training in modern programming and web development building front-end, server-side and full-stack applications
                  </li>
                  {/* <li>
                    900-hour hands-on technical training in modern programming and web development building front-end, server-side and full-stack applications
                  </li> */}
                </ul>
              </div>
              {/* <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h4 className="font-semibold">
                      Software Engineer at ABC Corp (2020 - Present)
                    </h4>
                    <p>
                      Developed and maintained miscroservices for cloud-based
                      applications
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">
                      Intern at DEF Startups (2019)
                    </h4>
                    <p>
                      Assisted in building front-end components and integration
                      REST APIs
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </RevealOnScroll>
      </section>
    );
}