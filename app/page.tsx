import { WireframeNav } from "@/components/wireframe-nav"
import { WireframeFooter } from "@/components/wireframe-footer"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <WireframeNav />

      {/* Hero Section */}
      <section className="flex-1 border-b border-border">
        <div className="container mx-auto px-6 py-32">
          <div className="flex items-center justify-between gap-12">
            <div className="hidden lg:flex flex-1 items-center justify-center">
              <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 flex items-center justify-center relative overflow-hidden">
                <div className="absolute w-48 h-48 rounded-full bg-gradient-to-r from-accent/40 to-primary/40 blur-3xl"></div>
                <svg
                  className="w-32 h-32 relative z-10 text-primary opacity-50"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                </svg>
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-7xl font-bold text-foreground mb-6 leading-tight text-balance">Kim Mark J. Biene</h1>
              <p className="text-2xl text-primary font-semibold mb-4">Information Systems Developer & Web Developer</p>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl">
                Crafting beautiful digital experiences with modern design and cutting-edge technology. Passionate about
                building innovative solutions and creating exceptional user experiences.
              </p>
              <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
                <Link href="/portfolio">
                  <button className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-md hover:shadow-lg">
                    View Portfolio
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all">
                    Contact Me
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="border-b border-border bg-secondary/50">
        <div className="container mx-auto px-6 py-24">
          <h2 className="text-4xl font-bold text-foreground mb-16 text-center">Explore My Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                name: "About",
                href: "/about",
                desc: "Learn about my background, skills, and experience",
                icon: "👤",
              },
              {
                name: "Services",
                href: "/service",
                desc: "Discover what I offer and how I can help",
                icon: "⚙️",
              },
              {
                name: "Portfolio",
                href: "/portfolio",
                desc: "View my recent projects and case studies",
                icon: "📁",
              },
              {
                name: "Contact",
                href: "/contact",
                desc: "Get in touch and start a conversation",
                icon: "💬",
              },
            ].map((item) => (
              <Link key={item.name} href={item.href}>
                <div className="border border-border bg-background rounded-lg p-6 cursor-pointer hover:shadow-lg hover:border-accent transition-all hover:scale-105 transform">
                  <div className="h-32 w-full bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-pulse"></div>
                    <span className="text-5xl relative z-10">{item.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <WireframeFooter />
    </div>
  )
}
