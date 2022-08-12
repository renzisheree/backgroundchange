const button = document.querySelector('.btn');
// console.log(button);
button.addEventListener('click',changeColor);
function changeColor() {
     const background = document.querySelector('.background');
     const colorArray = ['red' , 'white' , 'blue' , 'green' , 'yellow' , 'orange' , 'pink' , 'purple'  ];
     let random =colorArray[randomColor(colorArray)];
     background.style.backgroundColor = random;
     console.log(random);
}
function randomColor(array)  {
return Math.floor(Math.random() * array.length);
}