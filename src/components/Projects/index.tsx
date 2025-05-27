import { AnimatedSection, AnimatedText } from "../ui/animated-section"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const projects = [
    {
        title: "Página do Hortifruti",
        description: "Landing page de apresentação dos produtos frescos, informações sobre a localização, video demonstrativo.",
        image: "./projeto1.png"
    },
    {
        title: "Catálogo de Produtos",
        description: "Landing page com todos os produtos cadastrados para facilitar a visualização, navegação e escolha do cliente.",
        image: "./projeto2.png"
    },
    {
        title: "Plantech",
        description: "Software de gerenciamento de fazendas urbanas, desenvolvido para facilitar o controle e organização das atividades agrícolas em um ambiente urbano. ",
        image: "./projeto3.png"
    }
]

export function Projects() {
    return (
        <>
            <img src="./Vector.png" alt="" className="w-[100%]" />
            <AnimatedSection className="mt-5 w-full flex flex-col items-center justify-cente" id="projetos">
                <AnimatedText className="font-bold text-2xl lg:text-3xl text-blue-950 mb-10 text-center" delay={0.2}>
                    Nossos Projetos
                </AnimatedText>
                <div className="w-[90%] max-w-[1200px]">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            }
                        }}
                        className="w-full pb-12"
                    >
                        {projects.map((project, index) => (
                            <SwiperSlide key={index}>
                                <motion.div
                                    className="bg-white rounded-lg shadow-lg overflow-hidden h-full"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="relative h-48">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="p-4 md:p-6">
                                        <h3 className="text-lg md:text-xl font-semibold text-blue-950 mb-2">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm md:text-base text-gray-600">
                                            {project.description}
                                        </p>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </AnimatedSection>
        </>

    )
} 