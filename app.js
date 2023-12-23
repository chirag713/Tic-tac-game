let boxs = document.querySelectorAll(".box");
let resetbutton = document.querySelector("#reset");

let turn = true;



const pattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

var x = 0;
var count=0;
function checkwinner() {
    pattern.forEach(element => {
        if (x === 0) {
            let current = document.getElementById(element[0]).innerText;
            let current1 = document.getElementById(element[1]).innerText;
            let current2 = document.getElementById(element[2]).innerText;
            if (current === current1 && current1 === current2 && (current==='O'||current==='X')) {
                x = 1;
                document.getElementById("winner").innerText=`winned by ${current}`;
            }


        }
    });
}

boxs.forEach((box) => {
    box.addEventListener("click", () => {
        
        count++;
        if(x===0){
            if (turn === true) {
                box.innerHTML = "O";
                turn = false;
            }
            else {
                box.innerHTML = "X";
                turn = true;
            }
            box.disabled = true;
            checkwinner();
            if(count===9 && x==0){
                document.getElementById("winner").innerText="game Over";
            }
        }
    })
})

resetbutton.addEventListener("click",()=>{
    boxs.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
        turn =true;
        x=0;
        count=0;
        document.getElementById("winner").innerText="";
    })
})