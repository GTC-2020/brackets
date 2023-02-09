module.exports = function check(str, bracketsConfig) {
  let stack = [];

  for(let i = 0; i < str.length; i++){
    let currentSymbol = str[i];
    for(let j = 0; j < bracketsConfig.length; j++){
      if(currentSymbol == bracketsConfig[j][0]){
        stack.push(currentSymbol);
      }
    }
    let top = stack[stack.length - 1];
    
    for(let j = 0; j < bracketsConfig.length; j++){
      if((top == bracketsConfig[j][0]) && (currentSymbol == bracketsConfig[j][1] )){
        stack.pop();
      } 
    }
  }
  return stack.length == 0;
}
