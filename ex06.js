function calculadora (valorinicial, valorAtual, tempo ){

    const juros = (valorAtual - valorinicial ) / (valorinicial * tempo)

    console.log((juros * 100).toFixed(2)+ '%' )
    
}

calculadora(1000, 1200, 10)