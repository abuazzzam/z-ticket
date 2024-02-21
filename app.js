const allSeats = document.getElementsByClassName("seats");

let count = 20;

for (const seat of allSeats) {
    seat.addEventListener("click", function (e) {
        count = count - 1;
        const seatName = e.target.parentNode.childNodes[1].innerText;
        const category = 'Economy';
        const seatPrice = document.getElementById("price").innerText;
        
        const seatCalculator = document.getElementById("seatCalculation");

        e.target.setAttribute("disabled",false);
        const totalSelect = document.getElementById("totalSelect").innerText;
        const convertedSelect = parseInt(totalSelect);
        // for (let i = convertedSelect; i < 20; i++){
            let nCount = convertedSelect+1;
            document.getElementById("totalSelect").innerText = nCount;
        if(nCount+1 > 5){    
            alert("no more selection")
            return;
        }
        // if(i>4){
        //     
        // } 
        
       

        const div = document.createElement("div");
        // div.classList



        const p = document.createElement("p");
        p.innerText = seatName;
        const p2 = document.createElement("p");
        p.innerText = category;
        const p3 = document.createElement("p");
        p.innerText = seatPrice;
        
        div.appendChild(p);
        div.appendChild(p2);
        div.appendChild(p3);

        seatCalculator.appendChild(div);

       
        ttlCost("totalCost", parseInt(seatPrice));

        gttlCost();


        

        
        setInnerText("seatAvailable", count);


        
    });
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;

}

function ttlCost (id, value){
    const totalCost = document.getElementById(id).innerText;
    const convertedCost = parseInt(totalCost);
    // document.getElementById("totalCost").innerText = convertedCost + parseInt(seatPrice);

    const sum = convertedCost + parseInt(value);
    setInnerText("totalCost", sum);
}

// function gttlCost (id, value){
//     const grandTotalCost = document.getElementById(id).innerText;
//         const convertedGCost = parseInt(grandTotalCost);
//         const sum2 = convertedGCost + parseInt(value);
//         // console.log(grandTotalCost);

//         setInnerText("gtotal", sum2);
// }
function gttlCost (status){ 
    const totalCost = document.getElementById("totalCost").innerText;
    let convertedCost = parseInt(totalCost);
   
    if(status == undefined){
    
        setInnerText("gtotal", convertedCost);
    
        // setInnerText("gtotal", convertedGCost);
        // 
    } else {
        const inputValue = document.getElementById("input-field").value;
        if(inputValue == "New15"){
            setInnerText("gtotal", convertedCost = convertedCost * .85);
        } 
        else if(inputValue == "Couple20"){
            setInnerText("gtotal", convertedCost = convertedCost * .80);
        } 
        
        else {
            alert('input correct coupon value');
        }
    } 
    
    
        // setInnerText("gtotal", convertedGCost);

    //     if(inputText ==='New15'){
    //         setInnerText("gtotal", convertedGCost * .85);
    //     }
        // console.log(grandTotalCost);

       
}

// function btnClick(){
//     const inputValue = document.getElementById("input-field");
//     const inputText = inputValue.value;
//     console.log(inputText);
// }