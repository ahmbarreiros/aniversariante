const Aniversariante = ({ id, nome, idade, people, setPeople }) => {
    const handleClick = (id) => {
        let novosAniversariantes = people.filter(
            (aniversariante) => aniversariante.id !== id
        );
        setPeople(novosAniversariantes);
    };
    return (
        <div className="container-fluid d-flex anvs" style={{ maxWidth: 325 }}>
            <div className="d-flex mt-3 w-100 anv-texts">
                <h4 className="" style={{ fontSize: 22 }}>
                    {nome}
                </h4>
                <h6 className="text-secondary" style={{ fontSize: 15 }}>
                    {" "}
                    está fazendo {idade} anos!
                </h6>
                <hr />
            </div>
            <button
                type="button"
                onClick={() => {
                    handleClick(id);
                }}
                className="btn btn-sm btn-one btn-alignment"
            >
                Remover
            </button>
        </div>
    );
};
export default Aniversariante;
