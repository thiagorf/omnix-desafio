import { useCepContext } from "../context/CepContext";
import net1 from "../../public/net1.jpg";
import net2 from "../../public/net2.jpg";
import net3 from "../../public/net3.jpg";
import { Link, Navigate } from "react-router-dom";

const offers = [
  {
    url: net1,
    offer: "Plano Regional",
    price: "R$ 120 mês + 5GHz de wifi",
  },
  {
    url: net2,
    offer: "Plano Local",
    price: "R$ 120 mês + 5GHz de wifi",
  },
  {
    url: net3,
    offer: "Plano Nacional",
    price: "R$ 120 mês + 5GHz de wifi",
  },
];

export const Offers = () => {
  const { cep } = useCepContext();

  if ("erro" in cep) {
    return <p>Ocorreu um erro ou o cep é invalido, pesquise novamente</p>;
  }

  if (cep.bairro == null) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h1 className="text-3xl pl-36 mb-4">
        Planos encontrados próximos de {cep.bairro}
      </h1>
      <div className="flex justify-evenly pb-10">
        {offers.map((offer, index) => (
          <div className="w-72 h-96 border rounded" key={index}>
            <div className="h-72 w-full">
              <img
                src={offer.url}
                alt="Provedor de internet"
                className="w-full h-full"
              />
            </div>
            <p className="text-lg pl-3 pt-2">{offer.offer}</p>
            <p className="font-light pl-3">{offer.price}</p>
          </div>
        ))}
      </div>
      <Link to="/" className="py-4 px-6 bg-brand rounded ml-36 text-white">
        Ops, errei meu cep!
      </Link>
    </div>
  );
};
