const btns = document.querySelectorAll(".btns");
const inputCell = document.getElementById("inputCell");


btns.forEach(whenclick=>{
  whenclick.addEventListener("click",()=>{
    
    if (whenclick.innerText ==="AC") {
      inputCell.value ="";
    }else if(whenclick.id ==="backSpace"){
     inputCell.value = inputCell.value.slice(0,-1);
    }
    else if(whenclick.id ==="eql"){
      inputCell.value = eval(inputCell.value);
    }
    else {
      inputCell.value += whenclick.innerText;
    }
  })
});
