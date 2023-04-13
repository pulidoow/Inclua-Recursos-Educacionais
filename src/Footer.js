import image from './img/canvas3.png'
import { ReactComponent as FacebookLogo } from './img/facebook.svg'
import { ReactComponent as InstagramLogo } from './img/instagram.svg'
import { ReactComponent as EmailLogo } from './img/envelope-regular.svg'
import { ReactComponent as LinkedinLogo } from './img/linkedin-in.svg'

export default function Footer() {
    return <>
        <div className='pt-20 bg-orange-50'>
            {/* Social */}
            <div className='flex flex-col items-center'>
                <h1 className='text-3xl text-orange-400'>Entre em contato 📬</h1>
                <div className='flex mt-8 h-20'>
                    <FacebookLogo className='fill-sky-400 w-8 mx-8' />
                    <InstagramLogo className='fill-sky-400 w-8 mx-8' />
                    <LinkedinLogo className='fill-sky-400 w-8 mx-8' />
                    <EmailLogo className='fill-sky-400 w-8 mx-8' />
                </div>
            </div>

            <img className='relative opacity-80' src={image} alt="" />

            <div className="hidden relative -my-8 justify-center text-slate-600 lg:-my-12 md:flex">
                Copyright &copy; 2023, Todos os direitos reservados
            </div>
        </div>
    </>
}