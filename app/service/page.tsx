import { WireframeNav } from "@/components/wireframe-nav"
import { WireframeFooter } from "@/components/wireframe-footer"

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <WireframeNav />

      {/* Page Header */}
      <section className="border-b border-border bg-secondary/50">
        <div className="container mx-auto px-6 py-20">
          <h1 className="text-5xl font-bold text-foreground mb-4 text-balance">Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            I offer a comprehensive range of design and development services tailored to your needs and business goals.
          </p>
        </div>
      </section>

      {/* Web Development Section */}
      <section className="border-b border-border">
        <div className="container mx-auto px-6 py-24">
          <h2 className="text-4xl font-bold text-foreground mb-16">Web Development</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg h-72 flex items-center justify-center hover:shadow-lg transition-shadow relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-pulse"></div>
              <svg className="w-32 h-32 text-primary/40 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 17H7v-7h2V17zm4-7h-2v7h2v-7zm4 0h-2v7h2v-7z" />
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
              </svg>
            </div>
            <div>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Building responsive, performant web applications using modern technologies and best practices. I focus
                on clean code, scalability, and user experience.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Frontend", "Backend", "Full Stack", "API"].map((item) => (
                  <div
                    key={item}
                    className="border border-border bg-card rounded-lg p-4 text-center hover:bg-accent/10 hover:border-accent transition-all"
                  >
                    <p className="font-semibold text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UI/UX Design Section */}
      <section className="border-b border-border bg-secondary/50">
        <div className="container mx-auto px-6 py-24">
          <h2 className="text-4xl font-bold text-foreground mb-16">UI/UX Design</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Creating intuitive, beautiful user interfaces with a focus on user experience and accessibility. Every
                design decision is driven by research and user feedback.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Wireframes", "Prototypes", "User Research", "Testing"].map((item) => (
                  <div
                    key={item}
                    className="border border-border bg-background rounded-lg p-4 text-center hover:bg-primary/10 hover:border-primary transition-all"
                  >
                    <p className="font-semibold text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg h-72 flex items-center justify-center hover:shadow-lg transition-shadow relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-pulse"></div>
              <svg className="w-32 h-32 text-primary/40 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Section */}
      <section className="border-b border-border">
        <div className="container mx-auto px-6 py-24">
          <h2 className="text-4xl font-bold text-foreground mb-16">Consulting</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Strategy",
                desc: "Define your digital strategy and roadmap for success",
                icon: "📊",
              },
              {
                title: "Architecture",
                desc: "Design scalable and robust system architecture",
                icon: "🏗️",
              },
              {
                title: "Optimization",
                desc: "Improve performance and enhance user experience",
                icon: "⚡",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="border border-border bg-card rounded-lg p-8 text-center hover:shadow-lg hover:border-accent transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg mx-auto mb-6 flex items-center justify-center text-3xl">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WireframeFooter />
    </div>
  )
}
