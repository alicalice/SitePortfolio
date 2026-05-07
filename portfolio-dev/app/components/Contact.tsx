export default function Contact(){
    return(

        <section id="contact" className="max-w-6xl mx-auto px-6 py-16">

        <div className="content-card rounded-2xl p-10 grid md:grid-cols-2 gap-10 items-center">

            {/*LEFT*/}
            <div className="space-y-4">
                <h2 className="text-4xl italic font-light mt-3 text-white">
                    Vamos trabalhar juntos?
                </h2>
                <p className="text-muted">
                    Aberto a projetos freelance e oportunidades CLT.
                </p>
            </div>

            {/*RIGHT*/}
            <div className="space-y-4 text-white">
                <p className="content-card content-card-interactive p-3">sofialice.ds@gmail.com</p>
                <p className="content-card content-card-interactive p-3">Github.com/alicalice</p>
                <p className="content-card content-card-interactive p-3">Linkedin.com/</p>
            </div>

        </div>

        </section>
    )
}