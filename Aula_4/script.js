setTimeout(() => {
    console.log('Olá depois de 2 segundos!');
}, 2000);

const contador = () => {
    let counter = 1;
    console.log("Executando a operação.");

    let timer = setInterval(()=>{
        console.log(counter++);
        if(counter > 10) {
            clearInterval(timer);
        }
    }, 1000)
}

console.log("Iniciando tarefa!");
contador();