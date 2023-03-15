const buttonsEl = document.querySelectorAll(".btn");
const emojisEl= document.querySelectorAll(".fa-sharp");
const colorsarray=["red","green","lightblue",
"lightgreen","orange"];

updateRating(0);

buttonsEl.forEach((buttonEl,index)=>
{
    buttonEl.addEventListener("click",()=>
    {
        updateRating(index)
    });
});
function updateRating(index){
    buttonsEl.forEach((buttonEl,ind)=>{
        if(ind<index +1){
        buttonEl.classList.add("active");
}else
{
    buttonEl.classList.remove("active");
}
});
emojisEl.forEach((emojiEl)=>{
    emojiEl.style.transform=`translateX(-${index*50}px)`;
    emojiEl.style.color= colorsarray[index]
});
}
