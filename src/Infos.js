import heroImage from './img/canvas12.png'

export default function Hero() {

    const backgroundImageStyle = {
        backgroundImage: `url("${heroImage}")`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }

    return <>
        <div id='infos' className="flex flex-col-reverse pt-8 px-4 text-center justify-center lg:px-20 lg:pt-0 lg:flex-row lg:text-left lg:h-screen md:px-14">

            {/* Image */}
            <div className='mr-20 w-full h-96 lg:h-full max-w-3xl drop-shadow-xl' style={backgroundImageStyle}>
            </div>

            {/* Text */}
            <div className='flex items-center'>
                <div className='max-w-3xl '>
                    <div className='text-white drop-shadow-sm my-4'>
                        <h1 className='text-5xl font-bold text-amber-400'>Desenho Universal para Aprendizagem - DUA</h1>
                    </div>
                    <div className='text-lg'>
                        <p>O Desenho Universal para Aprendizagem é uma abordagem pedagógica que almeja projetar currículos e ambientes de aprendizagem de forma flexível, considerando a diversidade de alunos. Os seus princípios garantem a igualdade de oportunidades de aprendizagem, promovem a participação ativa de todos os estudantes e permitem que as necessidades individuais sejam atendidas, garantindo uma educação inclusiva e acessível.</p>
                    </div>
                </div>

            </div>
        </div>
    </>
}
