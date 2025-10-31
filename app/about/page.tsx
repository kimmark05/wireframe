import { WireframeNav } from "@/components/wireframe-nav"
import { WireframeFooter } from "@/components/wireframe-footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <WireframeNav />

      {/* Page Header */}
      <section className="border-b border-border bg-secondary/50">
        <div className="container mx-auto px-6 py-20">
          <h1 className="text-5xl font-bold text-foreground mb-4 text-balance">About Kim Mark J. Biene</h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            I'm a passionate developer and designer currently pursuing a Bachelor of Science in Information Systems at
            Carlos Hilado Memorial State University. With strong fundamentals in computer programming and a keen eye for
            web development, I'm dedicated to creating exceptional digital experiences.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="border-b border-border">
        <div className="container mx-auto px-6 py-24">
          <h2 className="text-4xl font-bold text-foreground mb-16">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "UI Design",
              "Web Development",
              "Frontend Dev",
              "Backend Dev",
              "React",
              "TypeScript",
              "JavaScript",
              "Responsive Design",
            ].map((skill) => (
              <div
                key={skill}
                className="border border-border bg-card rounded-lg p-6 text-center hover:shadow-md hover:border-accent transition-all"
              >
                <p className="font-semibold text-foreground">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="border-b border-border bg-secondary/50">
        <div className="container mx-auto px-6 py-24">
          <h2 className="text-4xl font-bold text-foreground mb-16">Experience</h2>
          <div className="space-y-6 max-w-3xl">
            {[
              {
                title: "Web Development Intern",
                company: "Carlos Hilado Memorial State University",
                date: "2024 - Present",
                desc: "Developing web applications and learning best practices in full-stack development.",
              },
              {
                title: "Student Developer",
                company: "CHMSU Computer Lab",
                date: "2023 - 2024",
                desc: "Worked on academic projects and assisted with technical support.",
              },
              {
                title: "Computer Programmer (High School Strand)",
                company: "Saint Roch Academy",
                date: "2016 - 2022",
                desc: "Completed specialized computer programming curriculum with focus on software development fundamentals.",
              },
            ].map((exp, idx) => (
              <div
                key={idx}
                className="border border-border bg-background rounded-lg p-8 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                  <span className="text-sm font-medium text-accent whitespace-nowrap ml-4">{exp.date}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="border-b border-border">
        <div className="container mx-auto px-6 py-24">
          <h2 className="text-4xl font-bold text-foreground mb-16">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <div className="border border-border bg-card rounded-lg p-8 hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-foreground mb-2">Bachelor of Science in Information Systems</h3>
              <p className="text-muted-foreground mb-3">Carlos Hilado Memorial State University</p>
              <p className="text-sm text-muted-foreground mb-2">Currently Pursuing</p>
              <p className="text-sm font-medium text-accent">2022 - 2026</p>
            </div>
            <div className="border border-border bg-card rounded-lg p-8 hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-foreground mb-2">High School Diploma - Computer Programmer</h3>
              <p className="text-muted-foreground mb-3">Saint Roch Academy (SRA)</p>
              <p className="text-sm text-muted-foreground mb-2">Specialized Strand: Computer Programmer</p>
              <p className="text-sm font-medium text-accent">2016 - 2022</p>
            </div>
          </div>
        </div>
      </section>

      <WireframeFooter />
    </div>
  )
}
