import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Menu } from "@/components/menu"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <div className="pt-16">
      {" "}
      {/* Add padding-top to account for fixed navbar */}
      <section id="home">
        <Hero />
      </section>
      <section id="about" className="py-20 bg-secondary/5">
        <About />
      </section>
      <section id="menu" className="py-20">
        <Menu />
      </section>
      <section id="contact" className="py-20 bg-secondary/5">
        <Contact />
      </section>
    </div>
  )
}