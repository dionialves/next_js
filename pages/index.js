import Link from 'next/link'

function Home(){
    return <div>
                <h1>Home</h1>
                <link href="/sobre">
                    <a>Acessar pagina Sobre</a>
                </link>
            </div>
}

export default Home