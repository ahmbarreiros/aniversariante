const Aniversariante = ({ id, nome, idade }) => {
    return (
        <section className="container-fluid  d-flex justify-content-between">
            <h4 className="d-inline">{nome}</h4>
            <h4 className="d-inline"> está fazendo {idade} anos!</h4>
        </section>
    );
};
export default Aniversariante;
