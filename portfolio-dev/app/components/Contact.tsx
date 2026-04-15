export default function Contact(){
    return(
        <div className="max-w-5x1 mx-auto px-3 py-20">


        <div className=" bg-zinc-200 border border-white/10 rounded-2xl p-10 grid md:grid-cols-2 gap-10 itens-center">

            

            {/*LEFT*/}
            <div className="space-y-4">
                <h2 className="text-4xl italic text-black font-light">Vamos trabalhar juntos?</h2>
                <p className="text-zinc-400">Aberto a projetos freelance e oportunidades CLT.</p>
            </div>

            {/*RIGHT*/}
            <div className="space-t-4 text-zinc-300">
                <p className="hover:text-gray-400 transition text-black">sofialice.ds@gmail.com</p>
                <p className="hover:text-gray-400 transition text-black">Github.com/alicalice</p>
                <p className="hover:text-gray-400 transition text-black">Linkedin.com/</p>
            </div>

        </div>

        </div>
    )
}