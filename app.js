'use strict';



let leftImageElement = document.getElementById('left-image');
let rightImageElement = document.getElementById('right-image');
let middleImageElement = document.getElementById('middle-image');

let maxAttempts = 10;
let userAttemptsCounter = 0;
let mainDiv = document.getElementById('images-div');
let continer = document.getElementById('continer');

let leftImageIndex;
let rightImageIndex;
let middleImageIndex;
BusMall.img = [];





function BusMall(NameOfTheProduct, FilePathOfImage, TimesTheImageHasBeenShown) {
    this.NameOfTheProduct = NameOfTheProduct;
    this.FilePathOfImage = FilePathOfImage;
    this.TimesTheImageHasBeenShown = TimesTheImageHasBeenShown;
   
    this.votes = 0;
    BusMall.img.push(this);
}


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


function render() {

    leftImageIndex = generateRandomIndex();
    rightImageIndex = generateRandomIndex();
    middleImageIndex = generateRandomIndex();

    while (leftImageIndex == rightImageIndex || middleImageIndex == leftImageIndex) {
        rightImageIndex = generateRandomIndex();
        middleImageIndex = generateRandomIndex();

    }


    leftImageElement.src = BusMall.img[leftImageIndex].FilePathOfImage;
    rightImageElement.src = BusMall.img[rightImageIndex].FilePathOfImage;
    middleImageElement.src = BusMall.img[middleImageIndex].FilePathOfImage;

    BusMall[leftImageIndex].TimesTheImageHasBeenShown++;
    BusMall[rightImageIndex].TimesTheImageHasBeenShown++;
    BusMall[middleImageIndex].TimesTheImageHasBeenShown++;


}

render();




// let mainDiv = document.getElementById('mainDiv');

mainDiv.addEventListener('click',UserClick);



function UserClick(event) {
    //     console.log(event.target.id);
    //    userAttemptsCounter++;
    //     console.log(userAttemptsCounter);

    if (userAttemptsCounter < maxAttempts) {
        if (event.target.id === 'left-image') {
            userAttemptsCounter++;
            BusMall.img[leftImageIndex].votes++;
            console.log(BusMall.img[leftImageIndex].votes++);
        }


        else if (event.target.id === 'middle-image') {
            userAttemptsCounter++;
            BusMall.img[middleImageIndex].votes++;
            console.log(BusMall.img[middleImageIndex].votes++);
        }

        else if (event.target.id === 'right-image') {
            userAttemptsCounter++;
            BusMall.img[rightImageIndex].votes++;
            console.log(BusMall.img[rightImageIndex].votes++);
        }
        //     else if {BusMall.img[rightImageIndex].votes++ }

        //    console.log(BusMall.img);


    }


    else {

        
    }



    //            let list=document.getElementById('results-list');
    //            let Result;

    //            for (let i = 0; i < BusMall.img.length; i++) {
    //            goatResult=document.createElement('li');
    //           list.appendChild(goatResult);
    //              Result.textContent=`${BusMall.img[i].NameOfTheProduct} has ${BusMall.img[i].votes} votes`

    //          }

    //           leftImageElement.removeEventListener('click',Click);

    //          }
    //        }  

    //        if (userAttemptsCounter=maxAttempts){
    //          let parent =document.getElementById('continer');
    //          let btn =document.getElementById('btn');
    //          btn.addEventListener('on click',finish);


    //          function finish() {



    //          }
    //      }



    //      generateRandomIndex()

    //       Click();
    //  BusMall();}
}
UserClick();
BusMall();