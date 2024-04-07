import React from 'react'
import './style/Ourtime.css'
import OurteamCards from '../OurtimeCard'

const Ourtime = () => {
    return (
        <>
            <section className='container-ourteam' >
                <div className="container-ourteamTitle">
                    <span>Sobre nós</span>
                    <h2>Conheça nosso time</h2>
                    <p>
                        Nossa equipe é formada por jovens talentosos e apaixonados pelo que fazem. Juntos, criam experiências digitais memoráveis e impulsionam negócios para o sucesso. Conheça um pouco sobre nossos colaboradores:
                    </p>
                </div>
                <div className="container-ourteamCards">
                    <OurteamCards
                        nome="Daniel Ferraz"
                        trampo='Desenvolvedor'
                        foto="/image/cardImages/danielFoto.jpg"
                        texto="Daniel, com 20 anos, é um talento versátil no desenvolvimento web, equilibrando com maestria front-end e back-end. Trabalhando junto a Lucas, sua visão técnica e estética eleva cada projeto. Sua capacidade de abraçar rapidamente novas tendências e tecnologias faz dele um inovador nato, sempre à frente em soluções web que são tão funcionais quanto atraentes."
                        instagram="https://www.instagram.com/danielferraz04/"
                        linkedin="https://www.linkedin.com/in/daniel-ferraz-953647152/"
                    />
                    <OurteamCards
                        nome="Lucas Gabriel"
                        trampo='Desenvolvedor'
                        foto="/image/cardImages/lucasFoto.jpg"
                        texto="Lucas, aos 19 anos, é o dinamismo em pessoa. Trabalhando lado a lado com Daniel, ele tem um olhar apurado para o design e um dedo no pulso das últimas tendências de desenvolvimento web. Sua juventude é um ativo valioso, trazendo uma perspectiva fresca e inovadora para as páginas que ganham vida sob seus cuidados."
                        instagram="https://www.instagram.com/lucasrs_13/"
                        linkedin="https://www.linkedin.com/in/lucas-gabriel-rodrigues-silva-9271b2264/"
                    />
                    <OurteamCards
                        nome="Caio"
                        trampo="Desenvolvedor"
                        foto="/image/cardImages/caioFoto.jpg"
                        texto="Caio, 20 anos, é o estrategista por trás de nossas iniciativas de marketing e o as de vendas. Com sua habilidade de se conectar com os clientes e entender suas necessidades, ele não só vende sites; ele fornece soluções. Seu contato direto com o cliente final assegura que estamos sempre alinhados com as expectativas do mercado e entregamos produtos que excedem as demandas."
                        instagram="https://www.instagram.com/caiovinidsouza/"
                        linkedin="https://www.linkedin.com/in/daniel-ferraz-953647152/"
                    />
                </div>
            </section>
        </>
    )
}

export default Ourtime;