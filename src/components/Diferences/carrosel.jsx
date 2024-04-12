import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick} = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick} = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      />
    );
  }

function Carrosel() {

    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 5000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
          ]
      };
    return (
        <div className="w-3/4 mx-auto mt-48">
            <Slider {...settings}>
                {data.map((d) => (
                    <div className="text-white flex flex-col items-center justify-center text-center">
                        <div className="flex justify-center mb-9">
                            <img src={d.icon} alt="" />
                        </div>
                        <div className="flex flex-col gap-10 md:mx-10">
                            <h2 className="font-extrabold text-4xl text-primary">{d.title}</h2>
                            <p className="text-3xl">{d.description}</p>
                        </div>
                    </div>
                ))}

            </Slider>
        </div>
    );
}

const data = [
    {
        icon: "/image/caixinhavetor.svg",
        title: "Navegação Perfeita em Qualquer Dispositivo",
        description: "Garantimos uma experiência de usuário fluida e adaptável a todos os dispositivos. Seus clientes acessarão seu site com a mesma facilidade no celular, tablet ou computador."
    },
    {
        icon: "/image/caixinhavetor.svg",
        title: "Soluções que Valorizam seu Investimento",
        description: "Oferecemos planos flexíveis que se ajustam ao orçamento da sua transportadora, assegurando um retorno sobre investimento otimizado sem sacrificar a qualidade."
    },
    {
        icon: "/image/caixinhavetor.svg",
        title: "Parceria Estratégica para o Sucesso",
        description: "Nossa equipe especializada em logística digital se dedica a entender as necessidades únicas da sua transportadora, trabalhando lado a lado com você para impulsionar seus resultados."
    }
]

export default Carrosel;