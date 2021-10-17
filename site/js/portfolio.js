
const introPic = document.getElementById('changePic');
const bottonNewName = document.getElementById('newName');
let spanName = document.getElementById('name');
let pink = document.querySelectorAll('.pink-bg');
const pinkText = document.querySelectorAll('.pink-text');
const links = document.querySelectorAll('a');
let listaModify = document.querySelector('#front-dev-tools');
const bottomModify = document.getElementById('modifyTechnologies');
const moreSkills = document.getElementById('addingToList');//input field;
const buttomSubmitSkills = document.getElementById('listButtom');//boton
const listBackend = document.getElementById("dev-tools-back-list");//backend list

console.log(moreSkills, buttomSubmitSkills);


//ALL EVENT LISTENERS:

//change pic:

introPic.addEventListener('click', () => {
    introPic.style.borderRadius = '50%';

    introPic.src = 'image/logo-wcs.png';
    introPic.style.width = '11.5vw';
});

//change name and color:
bottonNewName.addEventListener('click', () => {

    let newName = prompt("Please enter your name");
    let newColor = prompt("Please enter your favorite color");
    spanName.textContent = newName;
    spanName.style.color = 'white';

   // pink.style.backgroundColor = '#750ff7';
    pink.forEach(el => el.style.backgroundColor = newColor);
    pinkText.forEach(el => el.style.color = newColor);

    //add class to anchor:

    links.forEach(el => el.classList.add('purple-text'))
    

});

bottomModify.addEventListener('click', () => {
    const newContent = ['VSCode', 'Github', 'Terminal'];

    while (listaModify.firstChild) {
        listaModify.removeChild(listaModify.firstChild);
    };

    newContent.forEach(el => {
        // document.createElement('li').innerHTML = el;
        let lista = document.createElement('li');
        lista.innerHTML = el;
        listaModify.appendChild(lista);
    });

   // listaModify



})


//adding skills to backend list:

buttomSubmitSkills.addEventListener('click', () => {

    let adding = moreSkills.value;

    let nuevaLista = document.createElement('li');
    nuevaLista.innerHTML = adding;
    listBackend.appendChild(nuevaLista);

    moreSkills.value = '';


})

