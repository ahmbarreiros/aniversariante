import "./App.css";
import { useState } from "react";
import aniversariantes from "./data/data";
import Lista from "./Lista";

function App() {
    const [people, setPeople] = useState(aniversariantes);
    console.log(people);
    return (
        <>
            <h1 className="text-secundary">Aniversariantes do Dia</h1>
            <Lista people={people} />
        </>
    );
}

export default App;
