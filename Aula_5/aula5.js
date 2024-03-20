function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 20) + 1;
  }
  
  
  function contarFrequenciaNumeros() {
    const frequenciaNumeros = {};
  
   
    for (let i = 0; i < 10000; i++) {
      const numero = gerarNumeroAleatorio();
  
      if (frequenciaNumeros[numero]) {
        frequenciaNumeros[numero]++;
      } else {
        frequenciaNumeros[numero] = 1;
      }
    }
  
    return frequenciaNumeros;
  }
  
  function exibirResultados(frequenciaNumeros) {
    console.log("Número   Frequência");
    console.log("==================");
    for (const numero in frequenciaNumeros) {
      console.log(`${numero}: ${frequenciaNumeros[numero]}`);
    }
  }
  
  const frequenciaNumeros = contarFrequenciaNumeros();
  exibirResultados(frequenciaNumeros);