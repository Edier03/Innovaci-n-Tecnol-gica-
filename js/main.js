let colors=['black','orange','red','violet'];
let button= document.getElementById('button');
button.addEventListener('click', fuction() {
    var randomColor=colors[Math.floor[(Math.random()*colors.length)]
    let  container=document.getElementById('container');
    container.style.background=randomColor;
    
})