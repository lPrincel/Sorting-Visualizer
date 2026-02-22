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
            bars[j].style.backgroundColor="red";
            bars[j+1].style.backgroundColor="red";

            await sleep(50);
            if(array[j]>array[j+1]){
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

async function selectionSort(){
    let bars=document.getElementsByClassName("bar");

    for(let i=0;i<array.length;i++){
        let index=i;
        bars[index].style.backgroundColor="yellow";
        for(let j=i+1;j<array.length;j++){
            bars[j].style.backgroundColor="red";
            await sleep(50);
            if(array[j]<array[index]){
                bars[index].style.backgroundColor="#3498db";
                index=j;
                bars[index].style.backgroundColor="yellow";
            }
            if(index!=j) bars[j].style.backgroundColor="#3498db";
        }
        if(index!=i){
            let temp=array[i];
            array[i]=array[index];
            array[index]=temp;

            bars[i].style.height=`${array[i]*3}px`;
            bars[index].style.height=`${array[index]*3}px`;

            bars[index].style.backgroundColor="#3498db";
        }
        bars[i].style.backgroundColor="#2ecc71";
    }
}

async function insertionSort(){
    let bars=document.getElementsByClassName("bar");
    bars[0].style.backgroundColor = "#2ecc71";
    
    for(let i=1;i<array.length;i++){
        let key=array[i];
        let j=i-1;

        bars[i].style.backgroundColor = "yellow";
        await sleep(50);

        while(j>=0 && array[j]>key){
            bars[j].style.backgroundColor = "red";

            array[j+1]=array[j];
            bars[j + 1].style.height = `${array[j] * 3}px`;

            await sleep(50);

            bars[j].style.backgroundColor = "#2ecc71";
            j--;
        }

        array[j+1]=key;
        bars[j + 1].style.height = `${key * 3}px`;

        bars[j+1].style.backgroundColor="#2ecc71";
        
        bars[i].style.backgroundColor = "#2ecc71";
    }
}
generateArray();
