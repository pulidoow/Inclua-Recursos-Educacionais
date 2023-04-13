export default function Cta() {

    let emails = []

    const addEmail = (event) => {
        event.preventDefault() // Stop the browser form submitting

        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let email = document.getElementById('email').value

        if (email.match(mailformat)) {
            if (!emails.includes(email)) {
                // Update emails array
                emails.push(email)

                // Save to local storage
                localStorage.setItem('emailList', JSON.stringify(emails))

            }
            alert("🎯 Email cadastrado, obrigado 🥳");
        } else {
            alert("Formato de email inválido 🥴");
        }
        document.forms[0].reset()
    }


    return <>
        {/* eslint-disable */}
        <div id='contato' className='flex flex-col bg-orange-50 py-10 items-center justify-center px-6 lg:flex-row lg:px-20'>

            {/* Join */}
            <div className='max-w-md mb-8 text-center lg:mr-20 lg:max-w-lg lg:text-left'>
                <h1 className='text-2xl text-sky-500 font-bold mb-4'>Junte-se a nós!</h1>
                <p className='leading-relaxed text-lg'>Deseja receber avisos e notícias periódicas sobre o nosso trabalho? Fique por dentro dos avanços tecnológicos educacionais no Brasil e no mundo.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta aut quis iure molestias impedit voluptate voluptas expedita, sunt molestiae commodi?
                </p>
            </div>

            <div className='md:w-96'>
                {/* Email input */}
                <form>
                    <label className='block'>
                        <span className='after:content-["*"] after:ml-0.5 after:text-red-500 block text-slate-700'>
                            Email
                        </span>
                        <input
                            id="email"
                            type='email'
                            name='email'
                            className='mt-1 px-3 py-2 bg-white border shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
                            placeholder='email@dom.com' />
                    </label>

                    {/* Button */}
                    <div className='mt-10 text-center lg:mt-5 lg:text-left'>
                        <a
                            onClick={addEmail}
                            id="btn"
                            href='#'
                            className='whitespace-nowrap p-3 px-6 bg-orange-400 rounded-full shadow-lg hover:bg-orange-500'>
                            Cadastrar
                        </a>
                    </div>
                </form>
            </div>


        </div>
    </>
}