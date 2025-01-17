const readline = require('readline'); 
const fs = require('fs'); 
const path = require('path'); 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const askForInput = (questionText)=>{
  return new Promise((resolve)=> (rl.question(questionText, (choice)=>{
    resolve(choice);
  })));
}


const processString = async (str)=>{
 
  const strArray = str.split('');
  let transformArray = [];
  let shift = 0;
  for(let i=0; i< strArray.length; i++){

    transformArray.push( strArray[i]);
    if(strArray[i]%2 === 0 && (i+1) < strArray.length){
      if(strArray[i+1]%2 === 0){

        transformArray.push('*');

      }
    }else if(strArray[i]%2 === 1 && (i+1) < strArray.length){

      if(strArray[i+1]%2 === 1){
        transformArray.push('-');
      }
    }
  }
  return transformArray.join('');
}

const main = async()=>{
  //99967  
  const str = await askForInput('Enter String ? : ');
  const replacedString = await processString(str);
  console.log(' Replaced String : ', replacedString );

  rl.close();
}


main();
