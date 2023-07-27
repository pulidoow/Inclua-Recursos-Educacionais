import table from './img/canvas1-1.png'

export default function Products() {

    return <>
        {/* eslint-disable */}

        {/* Flex Container */}
        <div id='products' className="flex flex-col items-center py-6 lg:py-10 lg:min-h-screen">

            {/* Title */}
            <div className="text-5xl font-bold text-emerald-400">
                <h1>Produtos</h1>
            </div>

            {/* Products */}
            <div className='flex flex-wrap justify-center my-auto'>

                {/* Product */}
                <a
                    className='transition duration-200 m-10 hover:drop-shadow-[-20px_-20px_15px_rgba(255,255,255,1)]' href="https://tabela-show-v2.vercel.app/"
                    target='_blank'
                >
                    <div className='transition duration-200 bg-white max-w-xl rounded-3xl shadow-xl hover:drop-shadow-[15px_15px_20px_rgba(0,0,0,0.10)]'>

                        {/* Image */}
                        <div className='relative flex'>
                            <img className='rounded-3xl' src={table} alt="" />
                            <div className='absolute bottom-0 bg-gradient-to-t from-white w-full h-1/6'></div>
                        </div>

                        {/* Description */}
                        <div className='p-8 max-w-full'>
                            <h1 className='font-bold text-2xl text-orange-400 mb-3'>E-Table 🧪</h1>
                            <p className='leading-relaxed text-slate-900'>Tabela periódica em 3 dimensões, desenolvida em Design Universal para o ensino da química para todos</p>
                        </div>

                    </div>
                </a>

            </div>
        </div>
    </>
}