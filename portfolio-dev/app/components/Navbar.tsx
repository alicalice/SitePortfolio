import Link from "next/link"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-purple-500/10 bg-[#0f0f14]/80 backdrop-blur-md">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

    
        <span className="font-mono text-sm tracking-wider text-purple-400">
          <span className="inline-block w-2 h-2 bg-purple-400 rounded-full mr-2 align-middle"></span>
            Alice<span className="text-zinc-400">.Dev</span>
        </span>

     
        <ul className="flex gap-7 text-sm font-medium">
          <li>
            <Link
              href="#projetos"
              className="text-zinc-400 hover:text-purple-400 transition-all duration-300 hover:underline underline-offset-4 decoration-purple-400/60"
            >
              Projetos
            </Link>
          </li>

          <li>
            <Link
              href="#skills"
              className="text-zinc-400 hover:text-purple-400 transition-all duration-300 hover:underline underline-offset-4 decoration-purple-400/60"
            >
              Habilidades
            </Link>
          </li>

          <li>
            <Link
              href="#experiencia"
              className="text-zinc-400 hover:text-purple-400 transition-all duration-300 hover:underline underline-offset-4 decoration-purple-400/60"
            >
              Experiência
            </Link>
          </li>

          <li>
            <Link
              href="#contato"
              className="text-zinc-400 hover:text-purple-400 transition-all duration-300 hover:underline underline-offset-4 decoration-purple-400/60"
            >
              Contato
            </Link>
          </li>
        </ul>

      </nav>
    </header>
  )
}