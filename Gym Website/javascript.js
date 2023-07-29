// function myfunction(name){
//     alert("Thank you " + document.getElementById("contact322").value + ". We will contact you soon...")
// }

function speak() {
    document.getElementById("rada11")
    .addEventListener('click' , ()=>{
    var msg = "Thank you " + document.getElementById("contact322").value + ". We will contact you soon...";
    const utterance = new SpeechSynthesisUtterance(msg);
    speechSynthesis.speak(utterance);
    utterance.pitch = 1;utterance.rate=1;utterance.volume=1;
  })
}