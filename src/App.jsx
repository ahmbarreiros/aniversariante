import "./App.css";
import { useState } from "react";
import aniversariantes from "./data/data";
import Lista from "./Lista";
import Inserir from "./Inserir";

function App() {
    const [people, setPeople] = useState(aniversariantes);
    return (
        <>
            <Inserir people={people} />
            <h1 className="text-secundary mb-4">Aniversariantes do Dia</h1>
            <Lista people={people} />
            <div className="d-flex justify-content-center align-items-center">
                <button
                    type="button"
                    className="btn btn-primary btn-lg mt-4"
                    onClick={() => {
                        setPeople([]);
                    }}
                >
                    Limpar lista
                </button>
                <button
                    type="button"
                    className="btn btn-secondary btn-sm text-center mt-4"
                    style={{ height: 35 }}
                    onClick={() => {
                        setPeople(aniversariantes);
                    }}
                >
                    Desfazer
                </button>
            </div>
        </>
    );
}

export default App;
