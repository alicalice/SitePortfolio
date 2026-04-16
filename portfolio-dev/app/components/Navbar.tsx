import Link from "next/link"

export default function Navbar() {
  return (
    <header className="w-full border-b border-white/10 bg-black">
      <nav className="max-w-900px mx-auto px-6 py-6 flex items-center justify-between">

    
        <span className="font-mono text-[13px] tracking-wide text-purple-400 border-white">
          Alice.Dev
        </span>

     
        <ul className="flex gap-7 text-[13px] font-sans tracking-wide">
          <li>
            <Link
              href="#projetos"
              className="text-purple-400 hover:text-purple-600 transition-colors hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]"
            >
              Projetos
            </Link>
          </li>

          <li>
            <Link
              href="#skills"
              className="text-purple-400 hover:text-purple-600 transition-colors hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]"
            >
              Habilidades
            </Link>
          </li>

          <li>
            <Link
              href="#experiencia"
              className="text-purple-400 hover:text-purple-600 transition-colors hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]"
            >
              Experiência
            </Link>
          </li>

          <li>
            <Link
              href="#contato"
              className="text-purple-400 hover:text-purple-600 transition-colors hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]"
            >
              Contato
            </Link>
          </li>
        </ul>

      </nav>
    </header>
  )
}