const btnElement = document.querySelector('button');
const spanElement = document.getElementById('update');

btnElement.onclick = function setName()
{
    const getName =prompt("Enter Your Name: ")
    spanElement.innerText = getName; 
}
