export default function Person({ name, picture, text }) {
    return <>
        <div className='flex flex-col items-center max-w-sm text-center rounded-3xl mx-3 my-16 py-10 shadow  transition duration-200 hover:shadow-xl hover:bg-white'>
            <div className='w-28'>
                <img className='rounded-full -mt-20' src={picture} alt="" />
            </div>
            <h1 className='my-3 text-2xl text-emerald-600'>
                {name}
            </h1>
            <p className='leading-loose px-10'>
                {text}
            </p>
        </div>
    </>
}