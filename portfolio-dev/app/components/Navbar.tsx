import Link from "next/link"

export default function Navbar() {
  return (
    <header className="w-full border-b border-white/10 bg-black">
      <nav className="max-w-900px mx-auto px-6 py-6 flex items-center justify-between">

    
        <span className="font-mono text-[13px] tracking-wide text-purple-300 border-white">
          Alice.Dev
        </span>

     
        <ul className="flex gap-7 text-[13px] font-sans tracking-wide">
          <li>
            <Link
              href="#projetos"
              className="text-zinc-500 hover:text-zinc-200 transition-colors"
            >
              Projetos
            </Link>
          </li>

          <li>
            <Link
              href="#skills"
              className="text-zinc-500 hover:text-zinc-200 transition-colors"
            >
              Habilidades
            </Link>
          </li>

          <li>
            <Link
              href="#experiencia"
              className="text-zinc-500 hover:text-zinc-200 transition-colors"
            >
              Experiência
            </Link>
          </li>

          <li>
            <Link
              href="#contato"
              className="text-zinc-500 hover:text-zinc-200 transition-colors"
            >
              Contato
            </Link>
          </li>
        </ul>

      </nav>
    </header>
  )
}