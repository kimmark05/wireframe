import Link from "next/link"

export function WireframeNav() {
  return (
    <header className="border-b border-border bg-background sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="text-2xl font-bold text-foreground hover:text-accent transition-colors cursor-pointer">
              Portfolio
            </div>
          </Link>
          <nav className="flex gap-8">
            {[
              { name: "About", href: "/about" },
              { name: "Service", href: "/service" },
              { name: "Portfolio", href: "/portfolio" },
              { name: "Contact", href: "/contact" },
            ].map((item) => (
              <Link key={item.name} href={item.href}>
                <div className="text-sm font-medium text-foreground hover:text-accent transition-colors cursor-pointer">
                  {item.name}
                </div>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
