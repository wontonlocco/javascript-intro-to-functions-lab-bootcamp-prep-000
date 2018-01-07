function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}
function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return "I can't hear you!"
<<<<<<< HEAD
  } else if(string.toUpperCase() === string){
=======
  } else if(string.toUpperCase === string){
>>>>>>> 4bfeb679a2d9cf67adc427340e173dcd213bff9b
    return "YES INDEED!"
  } else if(string === "I love you, Grandma."){
    return "I love you, too."
  }
  
}
