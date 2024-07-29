let leftbtn=document.querySelector('.leftbtn');
let rightbtn=document.querySelector('.rightbtn');
let images=["images/1.jpg",'images/2.jpg','images/3.jpg','images/4.jpg','images/5.jpg','images/6.jpg'];
let image=document.querySelector('.image');
let index=0;

function updateimg(){
    image.src=images[index]
}
rightbtn.addEventListener('click',()=>{
    index+=1;
    if(index>=0 && index<images.length){
        updateimg()
    }else{
        index=0;
        updateimg()
    }
});

leftbtn.addEventListener('click',()=>{
    index-=1;
    if(index>=0 && index<images.length){
        updateimg()
    }else{
        index=images.length-1;
        updateimg()
    }  
});