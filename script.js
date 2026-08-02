/* ===========================
   PREMIUM JAVASCRIPT
=========================== */

// Smooth reveal animation

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:.15
});

document.querySelectorAll("section,.book-card,.trigger-card,.cta-band")
.forEach(el=>observer.observe(el));



// Navbar Shadow

const header=document.querySelector(".header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.style.boxShadow="0 12px 30px rgba(0,0,0,.08)";

}else{

header.style.boxShadow="none";

}

});



// Book 3D Effect

const book=document.querySelector(".book-card");

if(book){

book.addEventListener("mousemove",(e)=>{

const rect=book.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*18;

const rotateX=((rect.height/2-y)/rect.height)*18;

book.style.transform=

`perspective(1200px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.04)`;

});

book.addEventListener("mouseleave",()=>{

book.style.transform=
"perspective(1200px) rotateX(0) rotateY(0) scale(1)";

});

}



// Button Ripple

document.querySelectorAll(".primary-btn,.buy-btn")
.forEach(btn=>{

btn.addEventListener("click",function(e){

const circle=document.createElement("span");

const d=Math.max(this.clientWidth,this.clientHeight);

circle.style.width=d+"px";
circle.style.height=d+"px";

circle.style.position="absolute";
circle.style.borderRadius="50%";
circle.style.background="rgba(255,255,255,.35)";
circle.style.pointerEvents="none";

circle.style.left=e.offsetX-d/2+"px";
circle.style.top=e.offsetY-d/2+"px";

circle.style.animation="ripple .6s linear";

this.appendChild(circle);

setTimeout(()=>{
circle.remove();
},600);

});

});



// Counter Animation

document.querySelectorAll(".hero-stats h3")
.forEach(counter=>{

const target=parseInt(counter.innerText)||0;

let value=0;

const speed=25;

const timer=setInterval(()=>{

value++;

counter.innerText=value;

if(value>=target){

clearInterval(timer);

counter.innerText=target;

}

},speed);

});



// Email Form

const form=document.getElementById("notify-form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

const email=document.getElementById("notify-email").value;

alert("Thank you!\n\n"+email+"\nhas been added.");

form.reset();

});

}



// Scroll Progress

const progress=document.createElement("div");

progress.style.position="fixed";
progress.style.top="0";
progress.style.left="0";
progress.style.height="4px";
progress.style.background="#E8580C";
progress.style.zIndex="99999";
progress.style.width="0%";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const total=document.documentElement.scrollHeight-window.innerHeight;

const percent=(window.scrollY/total)*100;

progress.style.width=percent+"%";

});