const container=document.getElementById("container");
let array = [];

function generateArray(){
    container.innerHTML="";
    array=[];
    for(let i=0;i<30;i++){
        let value = Math.floor(Math.random()*100)+10;
        array.push(value);

        let bar=document.createElement("div");
        bar.classList.add("bar");
        bar.style.height=`${value*3}px`;
        container.appendChild(bar);
    }
}

const sleep =(ms) => new Promise(resolve=>setTimeout(resolve,ms));

async function bubbleSort(){
    let bars=document.getElementsByClassName("bar");

    for(let i=0;i<array.length-1;i++){
        for(let j=0;j<array.length-i-1;j++){
            bars[j].style.bakgroundColor="red";
            bars[j+1].style.backgroundColor="red";

            await sleep(50);
            if(array[j]>arr[j+1]){
                let temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
                bars[j].style.height=`${array[j]*3}px`;
                bars[j+1].style.height=`${array[j+1]*3}px`;
            }
            bars[j].style.backgroundColor="#3498db";
            bars[j+1].style.backgroundColor="#3498db";
        }
        bars[array.length-1-i].style.backgroundColor="#2ecc71";
    }
    bars[0].style.backgroundColor="#2ecc71";
}
generateArray();