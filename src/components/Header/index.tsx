import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-blue-900 text-white font-bold">
            <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between h-[60px]">
                <div className="text-2xl">MRE Soluções</div>

                <div className="lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
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

                <ul className="hidden lg:flex space-x-6 text-lg">
                    <ul className="hidden lg:flex space-x-6 text-lg">
                        <li>
                            <a href="#home" className="hover:text-gray-300 cursor-pointer">Home</a>
                        </li>
                        <li>
                            <a href="#somos" className="hover:text-gray-300 cursor-pointer">Sobre</a>
                        </li>
                        <li>
                            <a href="#servicos" className="hover:text-gray-300 cursor-pointer">Serviços</a>
                        </li>
                        <li>
                            <a href="#contato" className="hover:text-gray-300 cursor-pointer">Contato</a>
                        </li>
                    </ul>

                </ul>
            </div>

            {isOpen && (
                <div className="lg:hidden px-4 pb-4">
                    <ul className="flex flex-col space-y-2 text-lg text-center">
                        <li className="hover:text-gray-50 hover:bg-blue-800 cursor-pointer">Home</li>
                        <li className="hover:text-gray-50 hover:bg-blue-800  cursor-pointer">Sobre</li>
                        <li className="hover:text-gray-50 hover:bg-blue-800  cursor-pointer">Serviços</li>
                        <li className="hover:text-gray-50 hover:bg-blue-800  cursor-pointer">Contato</li>
                    </ul>
                </div>

            )}
        </nav>
    );
}
