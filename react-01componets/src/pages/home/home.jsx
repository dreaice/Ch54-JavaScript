

const Home = ( props ) => {

    return (
        <main>
        <h1>Hola { props.name }</h1>
        <h2>Mi casa es: <strong>{props.hogwartsHome} </strong>y es la mejor!</h2>
        <p>Creaste tu primer hechizo</p>
        <button>Avada Kedabra</button>
        <button>Crucio</button>
        <button>Sectusempra</button>
        <button>Imperio</button>
        </main>
    )
};

export {Home};