import { WireframeNav } from "@/components/wireframe-nav"
import { WireframeFooter } from "@/components/wireframe-footer"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <WireframeNav />

      {/* Page Header */}
      <section className="border-b border-border bg-secondary/50">
        <div className="container mx-auto px-6 py-20">
          <h1 className="text-5xl font-bold text-foreground mb-4 text-balance">Portfolio</h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            A selection of my recent projects and case studies showcasing my design and development expertise.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="border-b border-border">
        <div className="container mx-auto px-6 py-24">
          <h2 className="text-4xl font-bold text-foreground mb-16">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="border border-border bg-card rounded-lg overflow-hidden hover:shadow-lg hover:border-accent transition-all cursor-pointer group"
              >
                <div className="bg-gradient-to-br from-accent/20 to-primary/20 h-48 flex items-center justify-center group-hover:from-accent/30 group-hover:to-primary/30 transition-all">
                  <span className="text-muted-foreground font-semibold">Project {item}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">Project Title {item}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    Brief description of the project and the work involved in its creation.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">Design</span>
                    <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Development</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="border-b border-border bg-secondary/50">
        <div className="container mx-auto px-6 py-24">
          <h2 className="text-4xl font-bold text-foreground mb-16">Case Studies</h2>
          <div className="space-y-8 max-w-4xl">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="border border-border bg-background rounded-lg overflow-hidden hover:shadow-lg hover:border-accent transition-all cursor-pointer"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                  <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg h-56 flex items-center justify-center">
                    <span className="text-muted-foreground font-semibold">Case Study {item}</span>
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Case Study Title {item}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Detailed description of the project, challenges faced, solutions implemented, and results
                      achieved.
                    </p>
                    <button className="w-fit px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="border-b border-border">
        <div className="container mx-auto px-6 py-24">
          <h2 className="text-4xl font-bold text-foreground mb-16">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
              <div
                key={item}
                className="aspect-square border border-border bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center cursor-pointer hover:shadow-lg hover:border-accent transition-all group"
              >
                <span className="text-muted-foreground font-semibold group-hover:scale-110 transition-transform">
                  Image {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WireframeFooter />
    </div>
  )
}
