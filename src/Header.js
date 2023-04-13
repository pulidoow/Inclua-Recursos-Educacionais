import logo from './img/logo.png'

export default function Header() {
    return <>
        {/* eslint-disable */}

        {/* Flex Container */}
        <div className='w-screen z-20 flex py-6 font-sans md:px-28 md:absolute'>
            {/* Logo */}
            <a href='#' className='mx-auto flex items-center lg:m-0'>
                <div className='h-20 w-20 mr-4'>
                    <img src={logo} alt='' />
                </div>
                <h1 className='text-4xl font-bold text-sky-500'>
                    Inclua
                </h1>
            </a>

            <div className='ml-auto hidden lg:flex'>
                <ul className='flex items-center text-lg'>
                    <a href="#infos">
                        <li className='px-4 py-2 rounded-full mx-3 hover:bg-orange-500 hover:text-white hover:shadow-xl'>Início</li>
                    </a>
                    <a href="#products">
                        <li className='px-4 py-2 rounded-full mx-3 hover:bg-orange-500 hover:text-white hover:shadow-xl'>Produtos</li>
                    </a>
                    <a href="#sobre">
                        <li className='px-4 py-2 rounded-full mx-3 hover:bg-orange-500 hover:text-white hover:shadow-xl'>Sobre</li>
                    </a>
                    <a href="#contato">
                        <li className='px-4 py-2 rounded-full mx-3 hover:bg-orange-500 hover:text-white hover:shadow-xl'>Contato</li>
                    </a>
                </ul>
            </div>

        </div>
    </>
}