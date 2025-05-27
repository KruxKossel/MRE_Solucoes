
import { AnimatedSection, AnimatedText, AnimatedImage } from "../ui/animated-section"
export default function Sobre() {
    return (
        <AnimatedSection className="mt-10 lg:p-20  w-[90%] flex flex-col items-center justify-center" id="somos">
            <AnimatedText className="font-bold text-2xl lg:text-3xl text-blue-950 mb-10" delay={0.2}>
                Quem Somos?
            </AnimatedText>
            <div className="flex flex-col lg:flex-row w-[100%]">
                <AnimatedImage className="flex items-center justify-center" delay={0.4}>
                    <img
                        src="./human.png"
                        alt="Imagem ilustrativa da equipe ou serviços da MRE Soluções"
                        className="w-[450px] max-w-[650px] rounded-lg object-cover"
                        loading="lazy"
                    />
                </AnimatedImage>
                <AnimatedText className="flex flex-col text-justify max-w-[650px]" delay={0.6}>
                    <p className="mt-5 text-[19px] lg:text-[24px] text-justify">

                        Na MRE, acreditamos que uma landing page eficaz é aquela que combina estética, funcionalidade e estratégia. Por isso, nosso time é formado por profissionais experientes em desenvolvimento web, comprometidos em entregar soluções que realmente geram resultados.
                        <br></br><br></br>Cada projeto é desenvolvido com atenção aos detalhes, desde a escolha das cores e tipografia até a estrutura de conteúdo e otimização para conversão.
                    </p>
                </AnimatedText>
            </div>

        </AnimatedSection>
    )
}