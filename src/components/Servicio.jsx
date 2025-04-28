import webservice  from "..//assets/imagenesweb.webp";
function Servicio() {
    return (
        <section style={{ padding: "4rem", background: "#ffffff", textAlign: "center" }}>

            <img
                src={webservice}
                alt="Servicio Web"
                style={{ width: "400px", height: "auto", marginBottom: "2rem" }}
            />
            <h2>¿Qué ofrecemos?</h2>
            <p> Diseño web moderno, rápido y optimizado para tu negocio.</p>
        </section>
    );
}

export default Servicio;