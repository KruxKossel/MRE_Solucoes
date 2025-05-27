
import { AnimatedSection, AnimatedText, AnimatedImage } from "../ui/animated-section"
export default function Sobre() {
    return (
        <AnimatedSection className="min-h-screen w-full flex flex-col items-center justify-center" id="somos">
            <AnimatedText className="font-bold text-2xl lg:text-3xl text-blue-950 mb-10" delay={0.2}>
                Quem Somos?
            </AnimatedText>
            <div className="lg:flex justify-center w-[90%] max-w-[950px] rounded-lg bg-blue-950 items-center shadow-lg">
                <AnimatedImage className="flex items-center justify-center" delay={0.4}>
                    <img
                        src="./Sobre.png"
                        alt="Imagem ilustrativa da equipe ou serviços da MRE Soluções"
                        className="w-full h-[300px] rounded-lg object-cover"
                        loading="lazy"
                    />
                </AnimatedImage>
                <AnimatedText className="flex flex-col text-justify max-w-[650px] p-6" delay={0.6}>
                    <p className="text-[19px] lg:text-[24px] text-white text-justify">
                        Somos uma casa de softwares especializada em criar soluções digitais rápidas, eficientes e sob medida.
                        Atendemos desde pessoas físicas que desejam um portfólio profissional até empresas que buscam landing pages, sites institucionais ou sistemas leves.
                        Nosso foco é tirar a complexidade da tecnologia do seu caminho.
                    </p>
                </AnimatedText>
            </div>
        </AnimatedSection>
    )
}