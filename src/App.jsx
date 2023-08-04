import "./App.css";
import { useState } from "react";
import aniversariantes from "./data/data";
import Lista from "./Lista";

function App() {
    const [people, setPeople] = useState(aniversariantes);
    return (
        <main className="card card-width">
            <h1 className="text-secundary mb-3 display-4 text-left">
                Aniversariantes!
            </h1>
            <hr />
            <Lista people={people} setPeople={setPeople} />
            <div className="d-flex justify-content-center align-items-center">
                <button
                    type="button"
                    className="btn btn-one btn-lg"
                    onClick={() => {
                        setPeople([]);
                    }}
                >
                    Limpar lista
                </button>
                <button
                    type="button"
                    className="btn-sm btn-undo"
                    style={{ height: 35 }}
                    onClick={() => {
                        setPeople(aniversariantes);
                    }}
                >
                    <i className="bi bi-arrow-counterclockwise"></i>
                </button>
            </div>
        </main>
    );
}

export default App;
