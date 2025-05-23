import { useState, useEffect } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = 60;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setIsOpen(false);
        }
    };

    const menuItems = [
        { id: 'home', label: 'Home', ariaLabel: 'Ir para a seção inicial' },
        { id: 'servicos', label: 'Serviços', ariaLabel: 'Ir para a seção de serviços' },
        { id: 'somos', label: 'Sobre', ariaLabel: 'Ir para a seção sobre nós' },
        { id: 'projetos', label: 'Projetos', ariaLabel: 'Ir para a seção de projetos' },
        { id: 'contato', label: 'Contato', ariaLabel: 'Ir para a seção de contato' }
    ];

    return (
        <nav 
            className={`fixed top-0 left-0 w-full text-white font-bold z-50 transition-all duration-300 ${
                isScrolled 
                    ? isHovered 
                        ? 'bg-blue-900' 
                        : 'bg-blue-900/80 backdrop-blur-sm'
                    : 'bg-blue-900'
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            role="navigation"
            aria-label="Menu principal"
        >
            <div className="max-w-[1100px] mx-auto px-4 flex items-center justify-between h-[60px]">
                <button 
                    onClick={() => scrollToSection('home')}
                    className="text-2xl hover:text-gray-300 transition-colors"
                    aria-label="Ir para o início da página"
                >
                    MRE Soluções
                </button>

                <div className="lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="focus:outline-none"
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                <ul className="hidden lg:flex space-x-6 text-lg" role="menubar">
                    {menuItems.map((item) => (
                        <li key={item.id} role="none">
                            <button 
                                onClick={() => scrollToSection(item.id)}
                                className="hover:text-gray-300 cursor-pointer transition-colors"
                                role="menuitem"
                                aria-label={item.ariaLabel}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {isOpen && (
                <div 
                    className="lg:hidden px-4 pb-4 bg-blue-900"
                    id="mobile-menu"
                    role="menu"
                >
                    <ul className="flex flex-col space-y-2 text-lg text-center">
                        {menuItems.map((item) => (
                            <li key={item.id} role="none">
                                <button 
                                    onClick={() => scrollToSection(item.id)}
                                    className="w-full py-2 hover:text-white hover:bg-blue-800 cursor-pointer transition-colors"
                                    role="menuitem"
                                    aria-label={item.ariaLabel}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}
