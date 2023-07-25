

//1

// const text = document.getElementById('text');
// const btn = document.getElementById('btn');

// function add() {

//     text.textContent = "hello" 

// }




//2



// const text = document.getElementById('text');
// const btn = document.getElementById('btn');

// function add() {

//     text.textContent = "hello" 
//     console.log(text);
// }



///3

// const text = document.getElementById('text');
// const btn = document.getElementById('btn');
// const inp = document.getElementById('inp');

// function add() {

//     text.textContent = inp.value 
//     console.log(text);
// }




// //4

// const text = document.getElementById('text');
// const btn = document.getElementById('btn');
// const inp = document.getElementById('inp');

// function add() {

//     text.textContent = inp.value * 9
//     console.log(text);
// }




// //5

// const text = document.getElementById('text');
// const btn = document.getElementById('btn');
// const inp = document.getElementById('inp');

// // function add() {

// text.textContent = 'hello' + inp.value

// }



// //6

// const text = document.getElementById('text');
// const btns = document.getElementById('btns');
// const inp = document.getElementById('inp');

// btns.addEventListener('add', function(){

//     console.log('added');

// } );





const book = getElementById('book'); 
const newspaper = getElementById('newspaper'); 
const magazine = getElementById('magazine'); 





function all(){

 document.getElementById('book').style.display = "flex";
 document.getElementById('newspaper').style.display = "flex";
 document.getElementById('magazine').style.display = "flex";


}

function book(){

 document.getElementById('book').style.display = "flex";
 document.getElementById('newspaper').style.display = "none";
 document.getElementById('magazine').style.display = "none";


}

function newspaper(){

 document.getElementById('book').style.display = "none";
 document.getElementById('newspaper').style.display = "flex";
 document.getElementById('magazine').style.display = "none";
}

function magazine(){

 document.getElementById('book').style.display = "none";
 document.getElementById('newspaper').style.display = "none";
 document.getElementById('magazine').style.display = "flex";


}










