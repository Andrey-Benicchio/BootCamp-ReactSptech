var container = document.getElementById("root");

function Participante(props){
    const[numero, setNumero] = React.useState(0);
    function votar(){
       setNumero(numero + 1 );

    }
    
    return(
        <>
        <h1>{props.nome}</h1>
        <h1>{numero}</h1>
        <button onClick={votar}>Votar</button>
        </>
    )
}

function Votacao(){
    return(
        <>
        < Participante nome = "Mac Donald" />
        < Participante nome = "Bk" />
        < Participante nome = "Popeys" />
        </>
    );
}
        

ReactDOM.createRoot(container).render(<Votacao/>);