const calculadora = (Number1,Number2,operaçao) => {
   let result
  switch (operaçao) {
    case "+": 
        result = Number1+Number2
        break;
     case "-": 
        result = Number1-Number2
        break;
    case "*": 
        result = Number1*Number2
        break;
    case "/": 
        result = Number1/Number2
        break;
  
    default: result = Number1+Number2
        break;
  }

  return result


}
console.log(calculadora(29,79,'+'))