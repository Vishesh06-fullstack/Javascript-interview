const h1 = document.querySelector('.vish');
const btn = document.querySelector('.btn');
const element = document.getElementById("intro");

console.log(element);

const changeName = () => {
    h1.innerHTML = '<p> captain america </p>'
}

const changeNamee = () => {
     h1.innerHTML = '<p> ironman </p>'
}

btn.addEventListener('click' , changeName);
btn.addEventListener('dblclick' , changeNamee);


//document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()
// document.querySelector()
// document.querySelectorAll()

