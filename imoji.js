const starsEl = document.querySelectorAll(".btn");
const emojisEl= document.querySelectorAll(".fa-sharp");
starsEl.forEach((starEl,index)=>
{
    starEl.addEventListener("click",()=>
    {
        updateRating(index)
    });
});
function updateRating(index){
    starsEl.forEach((starEl,ind)=>{
        if(ind<index +1){
        starEl.classList.add("active");
}else
{
    starEl.classList.remove("active");
}
});
emojisEl.forEach((emojiEl)=>{
    emojiEl.style.transform=`translateX(-${index*50}px)`;
});
}
