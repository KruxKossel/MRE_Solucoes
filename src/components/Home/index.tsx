import { AnimatedSection, AnimatedText, AnimatedImage } from "../ui/animated-section"
import { Projects } from "../Projects"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function Home() {
    return (
        <div className="flex flex-col items-center w-full bg-gray-50">
            <AnimatedSection className="min-h-[calc(100vh-60px)] w-full flex flex-col items-center justify-start py-8" id="home">
                <div className="lg:flex justify-center w-[90%] max-w-[1200px] items-center mb-8">
                    <div className="flex flex-col text-justify max-w-[650px]">
                        <AnimatedText className="text-[33px] lg:text-[53px] text-start text-blue-950 font-bold" delay={0.2}>
                            Especialistas em Soluções Digitais Sob Medida
                        </AnimatedText>
                        <AnimatedText className="mt-2 text-[18px] lg:text-[22px] text-blue-900 text-start" delay={0.4}>
                            Da ideia ao lançamento, criamos experiências digitais que conectam, resolvem e impulsionam seu negócio.
                        </AnimatedText>
                    </div>
                    <AnimatedImage className="flex items-center justify-center mt-8 lg:mt-0" delay={0.6}>
                        <img 
                            src="./Logo.png" 
                            alt="Logo da empresa MRE Soluções" 
                            className="w-[250px] lg:w-[350px]"
                            loading="eager"
                        />
                    </AnimatedImage>
                </div>

                <div className="w-full bg-white py-8">
                    <div className="w-[90%] max-w-[1200px] mx-auto">
                        <AnimatedText className="font-bold text-center text-2xl lg:text-3xl text-blue-950 mb-6" delay={0.2}>
                            Landing Pages Profissionais
                        </AnimatedText>
                        <div className="lg:flex gap-8">
                            <AnimatedSection className="w-full bg-white shadow-lg rounded-lg p-6 mb-6 lg:mb-0" delay={0.4}>
                                Uma landing page bem estruturada foca no que realmente importa: transformar visitantes em clientes. Com design estratégico, chamada para ação clara e conteúdo objetivo, sua empresa ganha mais leads qualificados e aumenta as chances de venda.
                            </AnimatedSection>
                            <AnimatedSection className="w-full bg-white shadow-lg rounded-lg p-6" delay={0.6}>
                                Diferente de sites genéricos, uma landing page direciona a atenção do visitante para uma única oferta ou objetivo. Isso melhora o desempenho das suas campanhas de marketing, reduz o custo por conversão e potencializa seus resultados com eficiência.
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection className="min-h-screen w-full flex flex-col items-center justify-center py-20" id="servicos">
                <AnimatedText className="font-bold text-center text-2xl lg:text-3xl text-blue-950 mb-10" delay={0.2}>
                    Seu tempo é valioso. <br />Cuide do que importa, e a gente resolve o resto.
                </AnimatedText>
                <div className="w-[90%] max-w-[950px]">
                    <AnimatedSection className="bg-white rounded-lg shadow-lg p-6" delay={0.4}>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Software sob medida</AccordionTrigger>
                                <AccordionContent>
                                    Soluções personalizadas, do backend à interface.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2">
                                <AccordionTrigger>Agilidade com qualidade</AccordionTrigger>
                                <AccordionContent>
                                    Desenvolvimento ágil, sem abrir mão da excelência.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3">
                                <AccordionTrigger>Suporte contínuo</AccordionTrigger>
                                <AccordionContent>
                                    Manutenção, melhorias e evolução do seu produto.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4">
                                <AccordionTrigger>Infraestrutura escalável</AccordionTrigger>
                                <AccordionContent>
                                    Arquiteturas pensadas para crescer com seu negócio.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-5">
                                <AccordionTrigger>Design funcional</AccordionTrigger>
                                <AccordionContent>
                                    Interfaces intuitivas para usuários e resultados reais.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </AnimatedSection>
                </div>
            </AnimatedSection>

            {/* <AnimatedSection className="min-h-screen w-full flex flex-col items-center justify-center py-20 bg-white" id="somos">
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
            </AnimatedSection> */}

            <Projects />

            <AnimatedSection className="min-h-[calc(100vh-120px)] w-full flex flex-col items-center justify-center py-12 bg-gray-50" id="contato">
                <div className="w-[90%] max-w-[650px]">
                    <AnimatedText className="font-bold text-2xl lg:text-3xl text-blue-950 mb-6 text-center" delay={0.2}>
                        Contato
                    </AnimatedText>
                    <AnimatedSection className="space-y-4 bg-white p-6 rounded-lg shadow-lg" delay={0.4}>
                        <form 
                            onSubmit={(e) => {
                                e.preventDefault()
                                const formData = new FormData(e.currentTarget)
                                const data = Object.fromEntries(formData)
                                console.log('Dados do formulário:', data)
                                alert('Mensagem enviada com sucesso!')
                                e.currentTarget.reset()
                            }}
                            className="space-y-4"
                        >
                            <div className="space-y-1">
                                <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
                                    Nome Completo
                                </label>
                                <Input 
                                    type="text" 
                                    id="nome"
                                    name="nome"
                                    placeholder="Digite seu nome completo" 
                                    className="w-full bg-white" 
                                    required
                                    minLength={3}
                                    aria-label="Nome completo"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <Input 
                                        type="email" 
                                        id="email"
                                        name="email"
                                        placeholder="Digite seu email" 
                                        className="w-full bg-white" 
                                        required
                                        aria-label="Email para contato"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label htmlFor="telefone" className="block text-sm font-medium text-gray-700">
                                        Telefone
                                    </label>
                                    <Input 
                                        type="tel" 
                                        id="telefone"
                                        name="telefone"
                                        placeholder="Digite seu telefone" 
                                        className="w-full bg-white" 
                                        required
                                        pattern="[0-9]{10,11}"
                                        aria-label="Telefone para contato"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700">
                                    Mensagem
                                </label>
                                <Textarea 
                                    id="mensagem"
                                    placeholder="Digite sua mensagem" 
                                    className="w-full h-24 bg-white"
                                    name="mensagem"
                                    required
                                    minLength={10}
                                    aria-label="Mensagem"
                                />
                            </div>

                            <Button 
                                type="submit" 
                                className="w-full"
                                aria-label="Enviar mensagem"
                            >
                                Enviar
                            </Button>
                        </form>
                    </AnimatedSection>
                </div>
            </AnimatedSection>
        </div>
    )
}
