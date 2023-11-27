const arrows=document.querySelectorAll(".arrow");
const movieLists=document.querySelectorAll(".moovi-list");
arrows.forEach((arrow, i)=>{
    const widthRatio=Math.floor(window.innerWidth/300);
    let clickCounter=0;
    const imageitem=movieLists[i].querySelectorAll("img").length;
    arrow.addEventListener("click",function(){
    clickCounter++;
    
 if(imageitem-(4+clickCounter)+(4-widthRatio)>=0)
  
  
  {
    
    movieLists[i].style.transform=`translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value-300}px)`;
  

}else{
    movieLists[i].style.transform="translateX(0)";
    clickCounter=0;
}

  
});

});


const ball=document.querySelector(".toggle-ball");
const items=document.querySelectorAll(".container,.navbar,.sidebar,.moovi-list-title,.sidebar i,.toggle,.toggle-ball,.movie-list-filter select")

ball.addEventListener("click",function(){
    items.forEach((item)=>item.classList.toggle("active"))
})
