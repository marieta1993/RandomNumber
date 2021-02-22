let fullArray = [1,2,3,4,5,6,7,8,9,10],
 newArr=[],
 randNumberVal = document.getElementById('randomNum'),
 randomBtn = document.getElementById('getRandomNum'),
 retryBtn  =  document.getElementById("btnRetry");


function randomNumber(array) {
    let  randomElem = array[Math.floor(Math.random() * array.length)];
    randNumberVal.innerHTML = randomElem;
    newArr.push(randomElem);   
    return randomElem;
}

function buttonClick(isReset = false){
   
    if(isReset){
        randomBtn.removeAttribute("data-toggle");
        randomBtn.removeAttribute("data-target");
        fullArray =[...newArr];
        newArr=[];
        randNumberVal.innerHTML="";
    }else{
        if(fullArray.length !==0){
            let  index = fullArray.indexOf(randomNumber(fullArray));
            if (index > -1) {
                fullArray.splice(index, 1);
            }
        }else{
            randomBtn.setAttribute("data-toggle","modal");
            randomBtn.setAttribute("data-target","#myModal");
        }
    }
 
}
if(randomBtn){
    randomBtn.addEventListener("click", function() {
        buttonClick(false);
      });
}
if(retryBtn){
  document.getElementById("btnRetry").addEventListener("click", function() {
    buttonClick(true);
  });
}