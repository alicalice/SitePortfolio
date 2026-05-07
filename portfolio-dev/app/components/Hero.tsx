import Image from "next/image";
import imagem from "@/public/Frieren.jpg"

export default function Hero(){

    return(
        <section id="hero" 
        className="flex flex-col md:flex-row items-center justify-between gap-12 px-6 max-w-6xl mx-auto mt-24">
            
            <div className="max-w-xl space-y-6">
                <h3 className="text-brand text-sm uppercase tracking-[0.25em] font-mono">
                    DESENVOLVEDORA FULL STACK
                </h3>

                <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                    Alice Santos
                </h1>

                <p className="text-muted text-lg leading-relaxed max-w-md">
                    Construo produtos web do zero — 
                    desde a API até a interface. 
                    Foco em código limpo, 
                    UX que faz sentido e entregas que não travam.
                </p>

            </div>
            <div className="w-72 sm:w-80 md:w-96">
                <Image
                className="profile-image"
                src={imagem}
                alt="foto perfil"
                priority
                />
            </div>

        </section>
    )
}