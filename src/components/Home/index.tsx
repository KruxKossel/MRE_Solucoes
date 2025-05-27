import { AnimatedSection, AnimatedText, AnimatedImage } from "../ui/animated-section"
import { Projects } from "../Projects"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Sobre from "../Sobre"
import Contato from "../Contato"

export default function Home() {
    return (
        <div className="flex flex-col items-center w-full bg-gray-50">
            <AnimatedSection className=" mt-5 w-full flex flex-col items-center justify-start" id="home">
                <div className="lg:flex justify-center  w-[90%] max-w-[1200px] items-center mb-8">
                    <div className="flex flex-col text-justify lg:max-w-[650px]">
                        <AnimatedText className="text-[33px]  lg:text-start text-center lg:text-[53px] text-blue-950 font-bold" delay={0.2}>
                            Especialistas em Soluções Digitais Sob Medida
                        </AnimatedText>
                        <AnimatedText className="mt-2 text-[18px] lg:text-[22px] text-blue-900 lg:text-start text-center" delay={0.4}>
                            Da ideia ao lançamento, criamos experiências digitais que conectam, resolvem e impulsionam seu negócio.
                        </AnimatedText>
                    </div>
                    <AnimatedImage className="flex items-center justify-center mt-8 lg:mt-0" delay={0.6}>
                        <img
                            src="./Logo.png"
                            alt="Logo da empresa MRE Soluções"
                            className="w-[250px] lg:w-[350px] hidden lg:block"
                            loading="eager"
                        />
                    </AnimatedImage>
                </div>

                <div className="w-full ">
                    <div className="w-[90%] max-w-[1200px] mx-auto">
                        <AnimatedText className="font-bold mt-[-15px] text-center text-2xl lg:text-3xl text-blue-950 mb-6" delay={0.2}>
                            Landing Pages Profissionais
                        </AnimatedText>
                        <div className="lg:flex gap-8 mb-15">
                            <AnimatedSection className="w-full bg-white shadow-lg rounded-lg p-6 mb-6 lg:mb-0" delay={0.4}>
                                Uma landing page bem estruturada foca no que realmente importa: transformar visitantes em clientes. Com design estratégico, chamada para ação clara e conteúdo objetivo, sua empresa ganha mais leads qualificados e aumenta as chances de venda.
                            </AnimatedSection>
                            <AnimatedSection className="w-full bg-white shadow-lg rounded-lg p-6" delay={0.6}>
                                Diferente de sites genéricos, uma landing page direciona a atenção do visitante para uma única oferta ou objetivo. Isso melhora o desempenho das suas campanhas de marketing, reduz o custo por conversão e potencializa seus resultados com eficiência.
                            </AnimatedSection>
                        </div>
                    </div>
                </div>

                <AnimatedSection className="flex flex-col lg:flex-row lg:justify-between items-center w-[90%] max-w-[1200px]" delay={0.6}>
                    <div className="p-5 flex flex-col gap-5 w-[100%]">

                        <div className="p-2 text-center text-[20px] max-w-[600px] h-13 lg:text-2xl font-bold text-white bg-blue-900 rounded">
                            Design 100% personalizado!
                        </div>

                        <div className="p-2 text-center h-13 text-[20px] max-w-[600px] lg:text-2xl font-bold text-white bg-blue-800 rounded">
                            Impulsione sua marca!

                        </div>

                        <div className="p-2 mb-[40px] text-center h-13  text-[20px] max-w-[600px] lg:text-2xl font-bold text-white bg-blue-700 rounded">
                            Paginas 100% responsivas.

                        </div>

                    </div>
                    <div>
                        <img
                            src="./person.png"
                            alt="Imagem da pessoa"
                            className="w-[350px] lg:w-[400px] max-w-[650px] mr-[50px] mb-[-25px] lg:mb-[-30px]"
                            loading="eager"
                        />
                    </div>
                </AnimatedSection>



                <AnimatedText className="mb-[-25px]">
                    <a
                        href="https://wa.me/16993696126?text=Olá,%20gostaria%20de%20fazer%20um%20orçamento!"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="w-[300px] h-[50px] bg-green-500 text-2xl rounded relative hover:bg-green-600 text-white font-bold">
                            Faça seu orçamento!
                        </button>
                    </a>
                </AnimatedText>
            </AnimatedSection>

            <div className=" w-full flex flex-col items-center justify-center bg-blue-800" id="servicos">

                <AnimatedText className="font-bold w-[90%] text-center text-2xl lg:text-3xl text-white py-17" delay={0.2}>
                    Seu tempo é valioso. <br />Cuide do que importa, e a gente resolve o resto.
                </AnimatedText>
                <div className="w-[90%] max-w-[950px] mb-20">
                    <AnimatedSection className="bg-gray-50 rounded-lg p-6" delay={0.4}>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-2xl">Software sob medida</AccordionTrigger>
                                <AccordionContent className="text-[17px] lg:text-[20px]">
                                    Soluções personalizadas, do backend à interface.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-2xl">Agilidade com qualidade</AccordionTrigger>
                                <AccordionContent className="text-[17px] lg:text-[20px]">
                                    Desenvolvimento ágil, sem abrir mão da excelência.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3">
                                <AccordionTrigger className="text-2xl">Suporte contínuo</AccordionTrigger>
                                <AccordionContent className="text-[17px] lg:text-[20px]">
                                    Manutenção, melhorias e evolução do seu produto.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4">
                                <AccordionTrigger className="text-2xl">Infraestrutura escalável</AccordionTrigger>
                                <AccordionContent className="text-[17px] lg:text-[20px]">
                                    Arquiteturas pensadas para crescer com seu negócio.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-5">
                                <AccordionTrigger className="text-2xl">Design funcional</AccordionTrigger>
                                <AccordionContent className="text-[17px] lg:text-[20px]">
                                    Interfaces intuitivas para usuários e resultados reais.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </AnimatedSection>
                </div>
            </div>



            <Projects />
            <Sobre />
           <Contato/>
        </div>
    )
}
