import React from "react";

const NewsLetter = () => {
  return (
    <>
        <section className="flex flex-col items-center min-h-[400px] w-full bg-newsletter-pattern bg-no-repeat bg-cover bg-center lg:justify-center">
            <div className="flex flex-col items-center justify-center gap-10 my-20 lg:flex-row lg:justify-between lg:items-start">
                <div className="lg:flex lg:w-1/3 lg:mx-14">
                    <h2 className="font-inter text-center text-white text-4xl font-bold lg:text-6xl lg:text-left xl:text-7xl">
                    Conquiste Estradas Digitais
                    </h2>
                </div>
                <div className="flex flex-col items-center justify-center gap-10 w-3/4 lg:w-2/4 lg:items-start lg:mx-14">
                    <p className='font-inter text-center text-white text-2xl xl:text-3xl lg:text-left'>
                    Descubra como uma presença online robusta pode revolucionar o alcance da sua transportadora. Inscreva-se para dicas exclusivas e fique por dentro das últimas tendências em logística digital.
                    </p>
                    <div className="flex flex-col items-center justify-center gap-10 w-3/4 lg:w-full lg:flex-row lg:justify-start lg:items-center">
                        <input type="text" placeholder="Digite seu e-mail" class="bg-white border-b border-gray-300 shadow-sm px-3 py-2 w-72 h-14 focus:outline-none focus:border-blue-500 lg:w-2/4" />
                        <button className=" bg-primary drop-shadow-md w-48 h-16 text-white text-lg font-thin text-center mt-2 transition duration-200 ease-in hover:text-primary hover:cursor-pointer hover:bg-white hover:shadow-xl hover:scale-110 xl:text-2xl xl:w-60 xl:h-16 lg:mt-0">
                            Enviar
                        </button>
                    </div>
                    <p className='font-inter text-center text-white text-md xl:text-xl lg:text-left'>
                        Ao inscrever-se, você concorda com nossa Política de Privacidade e Termos de Serviço.
                    </p>
                </div>
            </div>
        </section>
    </>
  );
};

export default NewsLetter;
