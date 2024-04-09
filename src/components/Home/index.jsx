import { useState, useEffect } from "react";
import React from "react";

const Home = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center h-screen w-full m-0 bg-hero-pattern bg-no-repeat bg-cover bg-center">
        <div className="flex justify-center items-center w-full text-center mt-12 mb-5 flex-col gap-6 px-2 md:gap-12">
          <h2 className="font-inter text-center text-white text-2xl font-bold md:text-6xl lg:text-7xl xl:text-8xl">
            Soluções Web para <br />
            <strong className="text-primary drop-shadow-md">
              Gigantes da Estrada
            </strong>
          </h2>
          <p className="text-center text-white text-md w-4/5 text-sm md:text-xl xl:text-3xl">
            A sua frota percorre as estradas com eficiência<br></br> o seu site
            deve navegar pela web com a mesma destreza. <br></br>Oferecemos
            soluções web que expandem seu alcance e aceleram seus resultados.
          </p>
          <div className="flex flex-col gap-1 md:flex-row md:mt-5 md:gap-12">
            <button className="rounded-md bg-primary drop-shadow-md w-40 h-12 text-white text-sm text-center mt-2 transition duration-200 ease-in hover:text-primary hover:cursor-pointer hover:bg-white hover:shadow-xl hover:scale-110 xl:text-3xl xl:w-96 xl:h-20">
              Conheça quem somos
            </button>
            <button className="rounded-md drop-shadow-md w-40 h-12 text-white text-sm text-center mt-2  bg-transparent border-solid border-primary border-1 transition duration-200 ease-in hover:text-primary hover:cursor-pointer hover:bg-white hover:shadow-xl hover:scale-110 xl:text-3xl xl:w-96 xl:h-20">
              Veja os preços
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
