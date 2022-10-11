import { createContext, PropsWithChildren, useContext, useState } from "react";

interface CepResponse {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

interface CepContextConsumer {
  cep: CepResponse;
  fetchCep: (inputCep: string) => Promise<void>;
}

const cepContext = createContext({} as CepContextConsumer);

export const CepContextProvider = ({ children }: PropsWithChildren) => {
  const [cep, setCep] = useState<CepResponse>({} as CepResponse);

  const fetchCep = async (inputCep: string) => {
    const response = await fetch(`https://viacep.com.br/ws/${inputCep}/json/`);

    const result = await response.json();
    setCep(result);
  };

  const consumer: CepContextConsumer = {
    cep,
    fetchCep,
  };

  return <cepContext.Provider value={consumer}>{children}</cepContext.Provider>;
};

export const useCepContext = (): CepContextConsumer => {
  const ctx = useContext(cepContext);

  return ctx;
};
