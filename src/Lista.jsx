import Aniversariante from "./Aniversariante";

const Lista = ({ people, setPeople }) => {
    return (
        <section>
            {people.map((aniversariante) => (
                <Aniversariante
                    key={aniversariante.id}
                    {...aniversariante}
                    people={people}
                    setPeople={setPeople}
                />
            ))}
        </section>
    );
};
export default Lista;
