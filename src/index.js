const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    let binaryArray=[] 
    for (let index = 0; index < expr.length/10; index++) {
        
    
        if (index==0){
            console.log(expr.slice(index,index+10),index)
            binaryArray.push( expr.slice(index,index+10))}
        
    else if(index*10+10<=expr.length){
        console.log(expr.slice(index*10,index*10+10),"---",index,"x,")
        binaryArray.push( expr.slice(index*10,index*10+10))}
    
    
        
        
    }
    
    let morseArray=[]
    binaryArray.forEach(x=>{
        if(x=="**********"){
            
            morseArray.push("space")
        }
        else{
            morseArray.push(decodeToMorse(x))
        }
    
        
    })
    
    console.log("binaryArray",binaryArray)
    let finish=[]
    morseArray.forEach(x=>{
    
        if(x=="space"){
            finish.push(" ")
        }
        else{
            finish.push(MORSE_TABLE[x])
        }
        
    
    })
    console.log(finish)
        return finish.join("")
    
        
        function decodeToMorse(x){

            let code=[]
        
            for (let index = 0; index < x.length; index+=2) {
               let symbol=x[index]+x[index+1]
                if(symbol=="10"){
                    code.push(".")
                }
                if(symbol=="11"){
                    code.push("-")
                }
            }
        
            return code.join("")
        }
}

module.exports = {
    decode
}


