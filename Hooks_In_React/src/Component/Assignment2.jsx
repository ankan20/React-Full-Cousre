import React, { useMemo, useState } from 'react'

let totalLines = 1000;
let k=0;
let words=["random","my","name","hi","is","for","to"];
let allWords = [];
for(let i=0;i<totalLines;i++){
    let sentence= "";
    for(let j =0;j<words.length;j++){
        sentence+=words[Math.floor(Math.random()*words.length)];
        sentence+=" ";
    }
    allWords.push(sentence);
}


const Assignment2 = () => {



    const [searchSentence,setSearchSentence] =useState(" ");
    const [sentences,setSentences]= useState(allWords);
    const [counter,setCounter] = useState(0);

    let resultSentence=useMemo(()=>{
        console.log("re calculated")
        let filterSentences = sentences.filter((sentence)=>sentence.includes(searchSentence));
        return filterSentences;
   },[searchSentence,sentences])



  return (
    <div>
        <button onClick={function(){setCounter(counter+1)}}>Counter {counter}</button>
        <input type="text" placeholder='enter something for search' onChange={function(e){setSearchSentence(e.target.value)}} />
        <br /><br /><br />
      {
        resultSentence.map((sentence)=>{
            return(
                <p key={k++}>{sentence}</p>
            )
        })
      }
    </div>
  )
}

export default Assignment2
