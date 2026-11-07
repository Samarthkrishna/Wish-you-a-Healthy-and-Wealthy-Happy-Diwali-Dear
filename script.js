// PERSONALIZE THESE VALUES:
const recipientName = "Someone Special";
const senderName = "Your Well-Wisher";
document.getElementById("recipient").textContent=recipientName;
document.getElementById("recipient2").textContent=recipientName;
document.getElementById("sender").textContent=senderName;
const letter=document.getElementById("letter");
document.getElementById("open").addEventListener("click",()=>{letter.classList.add("show");letter.scrollIntoView({behavior:"smooth",block:"center"});burst(innerWidth/2,innerHeight*.36,100)});
document.getElementById("spark").addEventListener("click",()=>{for(let i=0;i<8;i++)setTimeout(()=>burst(Math.random()*innerWidth,60+Math.random()*innerHeight*.55,70),i*190)});
const canvas=document.getElementById("fireworks"),ctx=canvas.getContext("2d");let particles=[];
function resize(){canvas.width=innerWidth*devicePixelRatio;canvas.height=innerHeight*devicePixelRatio;canvas.style.width=innerWidth+"px";canvas.style.height=innerHeight+"px";ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0)}addEventListener("resize",resize);resize();
function burst(x,y,n=55){const colors=["#ffd77a","#ff8eae","#fff0c2","#c9a2ff","#ffb36b","#ffffff"];for(let i=0;i<n;i++){let a=Math.random()*Math.PI*2,s=1.1+Math.random()*4.4;particles.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,life:65+Math.random()*20,max:85,size:1+Math.random()*2.3,color:colors[Math.floor(Math.random()*colors.length)]})}}
function animate(){ctx.clearRect(0,0,innerWidth,innerHeight);particles=particles.filter(p=>p.life>0);for(const p of particles){p.x+=p.vx;p.y+=p.vy;p.vy+=.025;p.vx*=.985;p.vy*=.985;p.life--;ctx.globalAlpha=Math.max(0,p.life/p.max);ctx.fillStyle=p.color;ctx.beginPath();ctx.arc(p.x,p.y,p.size,0,Math.PI*2);ctx.fill()}ctx.globalAlpha=1;requestAnimationFrame(animate)}animate();
let last=0;function ambient(t){if(t-last>2200){if(Math.random()>.25)burst(Math.random()*innerWidth,55+Math.random()*innerHeight*.45,20);last=t}requestAnimationFrame(ambient)}requestAnimationFrame(ambient);