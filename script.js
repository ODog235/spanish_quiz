const uc_verbs = ['nadar', 'pasar tiempo', 'cambiar', 'tocar', 'comprar', 'practicar', 'entregar', 'escuchar', 'llevar', 'terminar', 'comer', 'leer', 'aprender', 'comprender/entender', 'correr', 'creer', 'deber', 'prometer', 'romper', 'vender', 'escribir', 'abrir', 'compartir', 'subir', 'vivir', 'recibir']
const def_verbs = ['to swim', 'to spend time (pass time)', 'to change', 'to play (instrument); touch', 'to buy', 'to practice', 'to turn in; deliver', 'to listen', 'to wear; take', 'to end; finish', 'to eat', 'to read', 'to learn', 'to understand', 'to run', 'to believe', 'to owe, should; must', 'to promise', 'to break', 'to sell', 'to write', 'to open', 'to share', 'to climb; go up; get on', 'to live', 'to receive']
// Function to generate random number
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
/*alert(uc_verbs.length)
alert(randomNumber(0,uc_verbs.length-1))
alert(uc_verbs[randomNumber(0,uc_verbs.length-1)])*/
word = ""
r_n = ""
streak = 0
total = 0
console.log("Starting question.")
word = randomNumber(0,uc_verbs.length-1)
elem = document.getElementById("question");
q_answer = uc_verbs[word]
elem.innerText = "What is: " + def_verbs[word];

function answer(){
    total += 1
    if(document.getElementById('uinput').value.toLowerCase() == q_answer){
        elem = document.getElementById("para");
        elem.innerText = "Correct";
        streak += 1
    }
    else{elem = document.getElementById("para");elem.innerText = "Incorrect. Answer: " + q_answer;}
    elem = document.getElementById("streak");
    elem.innerText = streak + "/" + total;
    console.log("Answer button pressed.")
    word = randomNumber(0,uc_verbs.length-1)
    elem = document.getElementById("question");
    q_answer = uc_verbs[word]
    elem.innerText = "What is: " + def_verbs[word];
    document.getElementById('uinput').value = ""
    //total += 1
}