const label = document.getElementById('label');
const button = document.getElementById('button');


button.addEventListener('click', () =>{
    const random = Math.floor(100000 + Math.random() * 900000);
    label.innerText = "#"+random;
    document.body.style.backgroundColor = "#"+random;
    console.log(random);
    
})