function Carrosel() {
    return (
        <div className="w-3/4 mx-auto">
            <div className="mt-40 flex">
                {data.map((d) => (
                    <div className="text-white flex flex-col gap-10 items-center justify-center text-center">
                        <div className="">
                            <img src={d.icon} alt="" />
                        </div>
                        <div className="flex flex-col gap-10">
                            <h2 className="font-extrabold text-4xl text-primary">{d.title}</h2>
                            <p className="text-3xl">{d.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const data = [
    {
        icon: "/image/caixinhavetor.svg",
        title: "Navegação Perfeita em Qualquer Dispositivo",
        description: "Garantimos uma experiência de usuário fluida e adaptável a todos os dispositivos. Seus clientes acessarão seu site com a mesma facilidade no celular, tablet ou computador."
    },
    /*{
        icon: "/image/caixinhavetor.svg",
        title: "Soluções que Valorizam seu Investimento",
        description: "Oferecemos planos flexíveis que se ajustam ao orçamento da sua transportadora, assegurando um retorno sobre investimento otimizado sem sacrificar a qualidade."
    },
    {
        icon: "/image/caixinhavetor.svg",
        title: "Parceria Estratégica para o Sucesso",
        description: "Nossa equipe especializada em logística digital se dedica a entender as necessidades únicas da sua transportadora, trabalhando lado a lado com você para impulsionar seus resultados."
    }*/
]

export default Carrosel;