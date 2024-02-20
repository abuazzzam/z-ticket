// document.getElementById("test").addEventListener("click", function(e){
//     console.log('fireme');
// })

// function handleClick(e){
//     console.log("super");
// }
function handleClick(event){
    console.log(event.target.parentNode.parentNode.childNodes[1].innerText);
}