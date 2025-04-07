const left= document.querySelector(".left");
const right=document.querySelector(".right");
const imags=document.querySelectorAll(".imag");
const heroemg=document.querySelector(".hero-img");

let slidecount=0;

imags.forEach(
    (imag,index)=>{
        imag.style.left=`${index*100}%`;
    }
)

const slideimage =()=>{
    imags.forEach((imag)=>{   
        imag.style.transform=`translatex(-${slidecount*100}%)`;
    })
};

right.addEventListener('click',()=>{
    if(imags.length-1>slidecount){
        slidecount++;
        slideimage();
    }
    // else{
    //     slidecount=0;
    //     slideimage();
    // }

})
left.addEventListener("click", () => {
    if(slidecount>0){
        slidecount--;
        slideimage();
    }
    // else{
    //     slidecount++;
    //     slideimage();
    // }
});