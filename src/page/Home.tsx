import { ChangeEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCepContext } from "../context/CepContext";

export const Home = () => {
  const { fetchCep } = useCepContext();
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSearchCep = async () => {
    const formatedText = text.replaceAll("-", "");
    console.log(formatedText);

    if (formatedText.length != 8) {
      setError("Formato de cep invalido, é necessário 8 caracteres");
      return;
    }

    await fetchCep(formatedText);
    navigate("/offers");
  };

  return (
    <main className="h-full flex">
      <div className="h-full w-1/2 pt-24 pl-[96px]">
        <h2 className="text-2xl pb-3">Quero conhecer os planos em:</h2>
        <h3 className="pb-2 text-red-500">{error && error}</h3>
        <div className="h-9">
          <input
            type="text"
            className="h-full border rounded-md rounded-r-none pl-1"
            placeholder="Ex: 11111-111"
            ref={inputRef}
            onChange={handleChange}
            value={text}
          />
          <button
            className="h-full w-24 border border-l-0 rounded-md rounded-l-none cursor-pointer"
            onClick={handleSearchCep}
          >
            pesquisar
          </button>
        </div>
      </div>
      <div className="h-full w-1/2 pt-24 pr-[96px]">
        <h1 className="font-bold text-5xl pb-5">
          Quer conhecer os melhores planos disponiveis em sua região?
        </h1>
        <h2 className="text-xl pb-11">
          Utilize nossa ferramenta e descubra as ofertas! É rapido, fácil e
          simples, informe o seu cep e experimente!
        </h2>
        <button
          className="h-12 w-60 ml-96 bg-brand text-xl text-white font-semibold rounded-md"
          onClick={handleFocus}
        >
          Vamos lá!
        </button>
      </div>
    </main>
  );
};
