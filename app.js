'use strict';



let leftImageElement = document.getElementById('left-image');
let rightImageElement = document.getElementById('right-image');
let middleImageElement = document.getElementById('middle-image');

let maxAttempts = 25;
let userAttemptsCounter = 0;
let mainDiv = document.getElementById('images-div');
let continer= document.getElementById('images-div');

let leftImageIndex;
let rightImageIndex;
let middleImageIndex;
BusMall.img = [];

let namesArr=[];
let votesArr=[];
let shownArr=[];







function BusMall(NameOfTheProduct, FilePathOfImage) {
    this.NameOfTheProduct = NameOfTheProduct;
    this.FilePathOfImage = FilePathOfImage;
    this.Shown = 0;
   
    this.votes = 0;
    BusMall.img.push(this);
    namesArr.push(this.NameOfTheProduct);
    BusMall.arr.push(this);

    

}

 BusMall.arr=[];







new BusMall('bag', 'img/bag.jpg');
new BusMall('banana', 'img/banana.jpg');
new BusMall('bathroom', 'img/bathroom.jpg');
new BusMall('boots', 'img/boots.jpg');
new BusMall('breakfast', 'img/breakfast.jpg');
new BusMall('bubblegum', 'img/bubblegum.jpg');
new BusMall('chair', 'img/chair.jpg');
new BusMall('cthulhu', 'img/cthulhu.jpg');
new BusMall('dog-duck', 'img/dog-duck.jpg');
new BusMall('dragon', 'img/dragon.jpg');
new BusMall('pen', 'img/pen.jpg');
new BusMall('pet-sweep', 'img/pet-sweep.jpg');
new BusMall('scissors', 'img/scissors.jpg');
new BusMall('shark', 'img/shark.jpg');
new BusMall('sweep', 'img/sweep.png');
new BusMall('tauntaun', 'img/tauntaun.jpg');
new BusMall('unicorn', 'img/unicorn.jpg');
new BusMall('usb', 'img/usb.gif');
new BusMall('water-can', 'img/water-can.jpg');
new BusMall('wine-glass', 'img/wine-glass.jpg');


console.log(BusMall.img);



function generateRandomIndex() {

    return Math.floor(Math.random() * BusMall.img.length);

}

let str=[];

function render() {

    leftImageIndex = generateRandomIndex();
    rightImageIndex = generateRandomIndex();
    middleImageIndex = generateRandomIndex();

    while (leftImageIndex === rightImageIndex || middleImageIndex === leftImageIndex || rightImageIndex===middleImageIndex||str.includes(leftImageIndex) ||str.includes(rightImageIndex)|| str.includes(middleImageIndex)) {
        
       
        
       rightImageIndex = generateRandomIndex();
        middleImageIndex = generateRandomIndex();
         leftImageIndex = generateRandomIndex();
        
    }
    
    
    str =[leftImageIndex,rightImageIndex,middleImageIndex];


    leftImageElement.src = BusMall.img[leftImageIndex].FilePathOfImage;
    rightImageElement.src = BusMall.img[rightImageIndex].FilePathOfImage;
    middleImageElement.src = BusMall.img[middleImageIndex].FilePathOfImage;

    BusMall.img[leftImageIndex].Shown++;
    BusMall.img[rightImageIndex].Shown++;
    BusMall.img[middleImageIndex].Shown++;


}


render();




// let mainDiv = document.getElementById('mainDiv');

continer.addEventListener('click',UserClick);



function UserClick(event) {
        //   console.log(event.target.id);
        userAttemptsCounter++;
        console.log(userAttemptsCounter);

    if (userAttemptsCounter < maxAttempts) {
        if (event.target.id === 'left-image') {
            // userAttemptsCounter++;
            BusMall.img[leftImageIndex].votes++;
            // console.log(BusMall.img[leftImageIndex].votes++);
        }


        else if (event.target.id === 'middle-image') {
            // userAttemptsCounter++;
            BusMall.img[middleImageIndex].votes++;
            // console.log(BusMall.img[middleImageIndex].votes++);
        }

        else if (event.target.id === 'right-image') {
            // userAttemptsCounter++;
            BusMall.img[rightImageIndex].votes++;
            // console.log(BusMall.img[rightImageIndex].votes++);
        }
        //     else if {BusMall.img[rightImageIndex].votes++ }

        //    console.log(BusMall.img);
      else {alert('please click on the images');
     userAttemptsCounter--; }
     console.log(BusMall.img);
     
     render();

    }


   


     

  else { let button =document.getElementById('button');

         button.addEventListener('click',showing);
         button.hidden=false;
     
        
            for (let i = 0; i < BusMall.img.length; i++){
                votesArr.push(BusMall.img[i].votes);
                shownArr.push(BusMall.img[i].Shown);
      
            }

            console.log(votesArr);
            updateStorage();
            chart();
            continer.removeEventListener('click',UserClick);
            

        }
      }
        // UserClick();


function showing() {
    let list=document.getElementById('results-list');

    let Result;
    for (let i = 0; i < BusMall.img.length; i++){
        Result=document.createElement('li');
        list.appendChild(Result);
        Result.textContent=`${BusMall.img[i].NameOfTheProduct} has ${BusMall.img[i].votes} votes and was seen ${BusMall.img[i].Shown} times`
        
    }

    button.removeEventListener('click',showing);   
    
    
}

function chart() {
    let ctx = document.getElementById('myChart').getContext('2d');
    
    let chart= new Chart(ctx,{
      // what type is the chart
     type: 'bar',
  
    //  the data for showing
     data:{
      //  for the names
        labels: namesArr,
        
        datasets: [
          {
          label: 'votes',
          data: votesArr,
          backgroundColor: [
            'blue',
          ],
    
          borderWidth: 1
        },
  
        {
          label: 'Shown',
          data: shownArr,
          backgroundColor: [
            'red',
          ],
    
          borderWidth: 1
        }
        
      ]
      },
      options: {}
    });
    
  }

  function updateStorage() {
 
    let arrayString1=JSON.stringify( BusMall.img);
    
    //  console.log(BusMall.Shown);
     console.log(arrayString1);
    
    localStorage.setItem('shown and votes',arrayString1);
   
  }
  
  function mall() {
  
    
    let data1 =localStorage.getItem('shown and votes');
    console.log(data1);
  
   
    
  
  
    // BusMall.arr=shownData1;
   if (data1 !==null  ) {
    let shownData1=JSON.parse(data1);
    console.log(shownData1);
    BusMall.img=shownData1;
    
    }
  
    // render();
  
  }
  
 
  mall();
  // BusMall();

    // while (str.includes(leftImageIndex) ||str.includes(rightImageIndex)|| str.includes(middleImageIndex)) {
        //     rightImageIndex = generateRandomIndex();
        // middleImageIndex = generateRandomIndex();
        // leftImageIndex = generateRandomIndex();
       