import { useState } from "react";
import aniversariantes from "./data/data";

const Inserir = () => {
    const [inputVals, setInputVals] = useState({
        id: 0,
        nome: "",
        idade: 0,
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        aniversariantes.push(inputVals);
        setInputVals({
            id: 0,
            nome: "",
            idade: 0,
        });
    };
    const handleChange = (e) => {
        const { nomme, valor } = e.target;
        setInputVals((prevVals) => ({
            [nomme]: [valor],
            ...prevVals,
        }));
    };
    const ultimoId = aniversariantes[aniversariantes.length - 1].id;
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                hidden
                value={ultimoId + 1}
                onChange={handleChange}
            />
            <label htmlFor="nome"></label>
            <input
                type="text"
                placeholder="Insira o nome..."
                name="nome"
                value={inputVals.nome}
                onChange={handleChange}
            />
            <input
                type="number"
                placeholder="Insira a idade..."
                name="idade"
                value={inputVals.idade}
                onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary">
                Inserir
            </button>
        </form>
    );
};
export default Inserir;
