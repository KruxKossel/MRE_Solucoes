import { AnimatedSection, AnimatedText } from "../ui/animated-section"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ToastContainer, toast } from 'react-toastify';


export default function Contato() {
    return (
        <AnimatedSection className="min-h-[calc(100vh-120px)] w-full flex flex-col items-center justify-center py-12 bg-gray-50" id="contato">
            <ToastContainer autoClose={3000} />
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

                            const mensagem = `Novo formulário recebido:
*Nome:* ${data.nome}
*Email:* ${data.email}
*Telefone:* ${data.telefone}
*Mensagem:* ${data.mensagem}`

                            const mensagemCodificada = encodeURIComponent(mensagem)
                            const numero = '5516993696126'
                            const url = `https://wa.me/${numero}?text=${mensagemCodificada}`
                            window.open(url, '_blank')
                            toast.success('Mensagem enviada !')
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
    )
}