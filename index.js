const fs = require('fs')
fs.readFile('Input.txt', (err, data) => { 
    if (err) throw err; 
  
    var mySting = data.toString(); 

function myfun(mySting, word){
var arr = mySting.split('\n\n')
var arr2=[]
var noun = []
for(let i=0; i<arr.length; i++){
 arr2.push(arr[i].split(' '))  
}
//noun
for(let i=0; i<arr2.length; i++){
  for(let j=1; j<arr2[i].length; j++){
    if(/[A-Z]/.test(arr2[i][j])){
      noun.push(arr2[i][j])
    }
  }
}
//
//word repeated length and sentence included;
var sentance_count = 0;
var sentenceMatched=[]
var total_sentance=[]
var sentence = mySting.toLowerCase().split('.')
var sentenceArray=[]
for(let i=0; i<sentence.length; i++){
 sentenceArray.push(sentence[i].split(' '))  
}
for(let i=0; i<sentenceArray.length; i++){
  for(let j=0; j<sentenceArray[i].length; j++){
    if(sentenceArray[i][j] === word.toLowerCase()){
      sentance_count = sentance_count + 1;
      sentenceMatched.push(sentenceArray[i])
    }
  }
}
for(let i=0; i<sentenceMatched.length; i++){
  total_sentance.push(sentenceMatched[i].join(' '))
}

// finding the word in conversations
var convo=[];
var conovo_include=[];
var total_convo=[];
var convo_count=0;
var arr3 = mySting.toLowerCase().split('\n\n')
var convoArray=[];
for(let i=0; i<arr3.length; i++){
  if(arr3[i].includes('"')){
    convo.push(arr3[i])
  }
}
for(let i=0; i<convo.length; i++){
 convoArray.push(convo[i].split(' '))  
}
for(let i=0; i<convoArray.length; i++){
  for(let j=0; j<convoArray[i].length; j++){
    if(convoArray[i][j] === word.toLowerCase()){
      convo_count = convo_count + 1;
      conovo_include.push(convoArray[i])
    }
  }
}
for(let i=0; i<conovo_include.length; i++){
  total_convo.push(conovo_include[i].join(' '))
}


//
console.log('1A-No. of times word occur:-', sentance_count)

console.log('1B-Sentance in which word Appear =')

for(let i=0; i<total_sentance.length; i++){
  console.log(i+1 +'='+total_sentance[i])
}

console.log('1C-conversation in which word mentions:-')

for(let i=0; i<total_convo.length; i++){
  console.log(i+1 +'='+total_convo[i])
}

console.log('1C-No. of times word mention in conversations=', convo_count)

console.log('2- All conversations in the excerpt:-')
for(let i=0; i<convo.length; i++){
  console.log(i+1 +'='+convo[i])
}

console.log('3- Proper Noun', noun)

}
console.log(myfun(mySting, 'Harry'))
}) 
