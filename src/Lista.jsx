import Aniversariante from "./Aniversariante";

const Lista = ({ people }) => {
    return people.map((aniversariante) => (
        <Aniversariante key={aniversariante.id} {...aniversariante} />
    ));
};
export default Lista;
