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
        <>
            <main className="flex flex-col  items-center w-[100%] h-[100%] bg-gray-50">

                <section className="lg:flex flex-cols-2 justify-center w-[90%] max-w-[1200px] items-center mt-8 " id="/">
                    <div className="flex flex-col text-justif max-w-[650px]">
                        <h1 className=" text-[33px] lg:text-[53px] text-start text-blue-950 font-bold">Especialistas em Soluções Digitais Sob Medida</h1>
                        <p className="mt-2 text-[18px] lg:text-[22px] text-blue-900 text-start">Da ideia ao lançamento, criamos experiências digitais que conectam, resolvem e impulsionam seu negócio. </p>
                    </div>
                    <div className="flex items-center justify-center">
                        <img src="./Logo.png" alt="Logo" className="hidden lg:block w-[350px]" />
                    </div>
                </section>

                <h1 className="p-5 font-bold text-center text-2xl lg:text-3xl text-blue-950 mb-5 mt-8 lg:mt-0">Landing Pages Profissionais</h1>
                <section className="lg:flex flex-cols-2 gap-10 w-[90%] max-w-[950px] mb-15">
                    <div className="w-[100%] h-[100%] bg-white shadow-lg rounded p-5 ">
                        Uma landing page bem estruturada foca no que realmente importa: transformar visitantes em clientes. Com design estratégico, chamada para ação clara e conteúdo objetivo, sua empresa ganha mais leads qualificados e aumenta as chances de venda.                    </div>
                    <div className="w-[100%] h-[100%] bg-white shadow-lg rounded p-5">
                        Diferente de sites genéricos, uma landing page direciona a atenção do visitante para uma única oferta ou objetivo. Isso melhora o desempenho das suas campanhas de marketing, reduz o custo por conversão e potencializa seus resultados com eficiência.                    </div>
                </section>

                {/* Menu aqui */}
                <h1 className="p-5 font-bold text-center text-2xl lg:text-3xl text-blue-950"id="servicos">Seu tempo é valioso. <br />Cuide do que importa, e a gente resolve o resto. </h1>
                <section className="w-[90%] max-w-[950px] p-2 mb-5">
                    <div className="bg-white rounded shadow-md px-3">
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
                    </div>

                </section>

                <h1 className="p-3 font-bold text-2xl lg:text-3xl  text-blue-950" id="somos"> Quem Somos ? </h1>
                <section className="lg:flex flex-cols-2  justify-center w-[90%] max-w-[950px] rounded-lg bg-blue-950 items-center m-5 shadow-lg  ">
                    <div className="flex items-center justify-center">
                        <img src="./Sobre.png" alt="Logo" className="lg:block w-full h-[300px] rounded-lg object-cover" />
                    </div>
                    <div className="flex flex-col text-justif max-w-[650px]">
                        <p className="mt-2 p-4 text-[19px] lg:text-[24px] text-white text-justify ">Somos uma casa de softwares especializada em criar soluções digitais rápidas, eficientes e sob medida.
                            Atendemos desde pessoas físicas que desejam um portfólio profissional até empresas que buscam landing pages, sites institucionais ou sistemas leves.
                            Nosso foco é tirar a complexidade da tecnologia do seu caminho. </p>
                    </div>

                </section>

                {/* Menu aqui */}
                <h1 className="p-3 font-bold text-2xl lg:text-3xl  text-blue-950" id="contato"> Contato </h1>
                <section className="Contato w-[90%] max-w-[750px] p-2 ">
                    <form className="space-y-4 mb-30">
                        <div>
                            <Input type="text" placeholder="Nome Completo" className="w-full bg-white" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input type="email" placeholder="Email" className="w-full  bg-white" />
                            <Input type="text" placeholder="Telefone" className="w-full  bg-white" />
                        </div>

                        <div className="grid w-full gap-2">
                            <Textarea placeholder="O que podemos te ajudar ?" className="w-full h-25 bg-white" />
                            <Button type="submit">Enviar</Button>
                        </div>
                    </form>
                </section>


            </main>
        </>
    )
}
