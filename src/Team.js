import paloma from './img/paloma.png'
import eder from './img/eder.png'
import leonardo from './img/leonardo.png'
import pulido from './img/pulido.png'
import borges from './img/borges.png'
import Person from './Person'

export default function Team() {

    const palomaText = 'Professora do Instituto Federal do Paraná e intérprete e tradutora de Libras'
    const pulidoText = 'Engenheiro Mecânico formado pela Universidade Tecnológica Federal do Paraná e aluno de Mestrado no Programa de Pós-Graduação em Engenharia Mecânica e de Materiais'
    const leonardoText = 'Engenheiro Mecânico formado pela Universidade Tecnológica Federal do Paraná'
    const ederText = 'Formando de Engenharia Elétrica na Universidade Federal do Paraná'
    const borgesText = 'Formando de Direito na Universidade Federal do Paraná e futuro aluno de Mestrado no Programa XXX'

    return <>
        <div id='sobre' className="flex flex-col items-center py-6 lg:py-10 lg:min-h-screen">
            <div className="text-5xl font-bold text-emerald-400">
                <h1 className=''>Quem somos</h1>
            </div>

            <div className='flex flex-wrap mx-6 pt-10 justify-center my-auto lg:mx-20'>

                <Person name="Paloma Wiedemann" picture={paloma} text={palomaText} />
                <Person name="Rodrigo Pulido" picture={pulido} text={pulidoText} />
                <Person name="Leonardo Brandt" picture={leonardo} text={leonardoText} />
                <Person name="Éder Hamasaki" picture={eder} text={ederText} />
                <Person name="Gabriel Borges" picture={borges} text={borgesText} />

            </div>
        </div>
    </>
}