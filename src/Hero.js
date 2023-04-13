import { useSpring, animated } from '@react-spring/web'
import heroImage from './img/canvas1 - Copy.png'
import heroImageMobile from './img/canvas1-1.png'

export default function Hero() {

    const backgroundImageStyle = {
        backgroundImage: `url("${heroImage}")`,
    }

    const backgroundImageStyleMobile = {
        backgroundImage: `url("${heroImageMobile}")`,
    }

    const mobile = window.innerWidth < 976

    // Animations
    const h1Appear = useSpring({
        from: {
            opacity: 0,
            transform: 'translateY(5em)',
        },
        to: {
            opacity: 1,
            transform: 'translateY(0em)',
        },
        delay: 200
    })

    const buttonAppear = useSpring({
        from: {
            opacity: 0,
            transform: 'translateY(-5em)',
        },
        to: {
            opacity: 1,
            transform: 'translateY(0em)',
        },
    })

    return <>
        {/* eslint-disable */}

        {/* Flex Container */}
        <div className='flex md:flex-row flex-col w-screen md:h-screen'>


            {/* Gradient filter */}
            <div className='hidden absolute top-0 bg-gradient-to-r from-slate-50 w-full h-full opacity-60 md:block'>
            </div>

            {/* Text */}
            <div className='flex flex-col items-center justify-center top-40 text-center px-5 z-10 lg:pl-20 md:h-full md:top-0 md:text-left md:pl-10 md:absolute md:max-w-2xl md:items-start'>

                {/* Label */}
                <animated.div className='drop-shadow-md my-4' style={h1Appear}>
                    <h1 className='text-5xl font-bold text-orange-500 max-w-md'>Recursos Educacionais</h1>
                </animated.div>

                {/* Description */}
                <div className='z-10 text-lg rounded-2xl md:shadow-xl shadow-gray-100 p-4 bg-opacity-90 leading-relaxed bg-white'>
                    <p>Bem-vindo(a) ao Inclua! Somos uma empresa comprometida em desenvolver produtos e soluções inovadoras na metodologia de design universal, com o objetivo de promover a aprendizagem inclusiva para pessoas com ou sem deficiência.</p>
                </div>

                {/* Button */}
                <animated.div className="mt-7 mb-2" style={buttonAppear}>
                    <a
                        href="#products"
                        className="transition duration-300 whitespace-nowrap p-3 px-6 text-white bg-gradient-to-r from-orange-400 to-red-400 rounded-full shadow-lg hover:shadow-xl hover:from-red-400 hover:to-orange-400">
                        Conheça nossos produtos
                    </a>
                </animated.div>
            </div>


            {/* Image */}
            <div className='w-screen h-96 md:h-full'>
                <div className='md:absolute -mt-6 -z-10 w-full h-full rounded-b-3xl bg-no-repeat bg-cover md:top-0 md:mt-0 md:h-full'
                    style={mobile ? backgroundImageStyleMobile : backgroundImageStyle}></div>
            </div>
        </div>
    </>
}