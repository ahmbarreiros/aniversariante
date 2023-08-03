import { useState } from "react";
import aniversariantes from "./data/data";

const Inserir = ({ people }) => {
    const [peoples, setPeople] = useState(people);
    const [inputVals, setInputVals] = useState({
        id: 0,
        nome: "",
        idade: 0,
    });
    const ultimoId = peoples[peoples.length - 1].id;
    return (
        <form
            type="post"
            onSubmit={() => {
                aniversariantes.push(inputVals);
                setInputVals({
                    id: 0,
                    nome: "",
                    idade: 0,
                });
            }}
        >
            <label htmlFor="nome"></label>
            <input
                type="text"
                placeholder="Insira o nome..."
                id="nome"
                value={inputVals.nome}
            />
            <input
                type="number"
                placeholder="Insira a idade..."
                id="idade"
                value={inputVals.idade}
            />
            <button type="submit" className="btn btn-primary">
                Inserir
            </button>
        </form>
    );
};
export default Inserir;
