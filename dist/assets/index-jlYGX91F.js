(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();let b=document.querySelector(".back-site"),g=document.querySelector(".sec-items"),y=document.querySelector(".user-box"),v=document.querySelector(".btn-form"),S=document.querySelector("input"),u=document.createElement("template");u.innerHTML=`
    <link rel="stylesheet" href="/src/style.css">   
    <h2 class='text-2xl text-white flex justify-center items-center gap-2'><ion-icon name="logo-amplify"></ion-icon>GoTravel</h2>
`;class L extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(u.content.cloneNode(!0))}}let h=document.createElement("template");h.innerHTML=`
    <link rel="stylesheet" href="/src/style.css">
    <div class="flex justify-center items-center min-[999px]:gap-x-[4rem] max-[999px]:gap-x-[1.5rem]">
    <ul class="flex justify-center items-center gap-[4rem] menu max-[999px]:hidden">
        <li><a class="text-white" href="#">Home</a></li>
        <li><a class="text-white" href="#">Destination</a></li>
        <li><a class="text-white" href="#">Testimonials</a></li>
        <li><a class="text-white" href="#">Gallery</a></li>
        <li><a class="text-white" href="#">Contact</a></li>
    </ul>
    <div class="flex justify-center items-center">
        <button id="theme" class="text-2xl flex justify-center items-center cursor-pointer text-white"><ion-icon name="moon-sharp"></ion-icon></button>
    </div>
    <div class="navbar min-[999px]:hidden max-[999px]:flex">
        <button class="flex justify-center items-center text-2xl text-white"><ion-icon name="grid-sharp"></ion-icon></button>
    </div>
    </div>    
`;class k extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(h.content.cloneNode(!0))}connectedCallback(){let t=this.shadowRoot.querySelector("#theme"),s=!1;t.addEventListener("click",()=>{b.classList.toggle("dark-mode"),g.classList.toggle("dark-theme"),y.classList.toggle("dark-box"),v.classList.toggle("btn-theme"),S.classList.toggle("theme-input"),s?(t.innerHTML='<ion-icon name="moon-sharp"></ion-icon>',s=!1):(t.innerHTML='<ion-icon name="sunny"></ion-icon>',s=!0)})}}let n=["public/1.jpg","public/2.jpg","public/3.jpg","public/4.jpg","public/5.jpg"],l=0,r=document.querySelector(".background-site"),m=document.createElement("template");m.innerHTML=`
    <link rel="stylesheet" href="/src/style.css">
    <div class="slider-section relative rounded-2xl min-[850px]:h-[30rem] max-[850px]:h-[20rem] w-[42rem] scale-x-120 max-[1508px]:scale-x-100 max-[680px]:w-full">

    <img class="w-full h-full object-cover rounded-2xl" src="/public/1.jpg">

    <div class="absolute right-4 bottom-4 flex justify-center items-center gap-2">
        <button class="back py-[0.5rem] px-3 text-xl bg-btnSlider text-white cursor-pointer flex justify-center items-center hover:bg-white hover:text-black duration-300 ease-in-out"><ion-icon name="arrow-back-outline"></ion-icon></button>
        <button class="next py-[0.5rem] px-3 text-xl bg-btnSlider text-white cursor-pointer flex justify-center items-center hover:bg-white hover:text-black duration-300 ease-in-out"><ion-icon name="arrow-forward-outline"></ion-icon></button>
    </div>

    </div>
`;class E extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(m.content.cloneNode(!0))}connectedCallback(){let t=this.shadowRoot.querySelector("img"),s=this.shadowRoot.querySelector(".back"),c=this.shadowRoot.querySelector(".next");s.addEventListener("click",()=>{l--,l<0&&(l=n.length-1),r.style.background=`url(${n[l]})`,r.style.backgroundSize="cover",r.style.backgroundPostion="center",t.setAttribute("src",n[l])}),c.addEventListener("click",()=>{l++,l>n.length-1&&(l=0),r.style.background=`url(${n[l]})`,r.style.backgroundSize="cover",r.style.backgroundPostion="center",t.setAttribute("src",n[l])})}}let p=document.createElement("template");p.innerHTML=`
    <link rel="stylesheet" href="/src/style.css">
        <div class="w-full h-[25rem] relative rounded-3xl shadow-2xl">
            <img class="w-full h-full object-cover rounded-3xl" src="/public/1.jpg" alt="">

            <div class="modal-items absolute left-0 bottom-0 w-full bg-backDark backdrop-blur-md h-[30%] text-left rounded-3xl p-6 flex flex-col">
                <span class="city-name text-white tracking-wider">Bali</span>
                <span class="country-name text-white text-2xl tracking-wider">ISLAND</span>
                <span class="location text-white tracking-wider"><ion-icon name="location-sharp"></ion-icon>ISLAND</span>
            </div>
        </div>
`;class T extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(p.content.cloneNode(!0))}connectedCallback(){this.shadowRoot.querySelector("img").src=this.getAttribute("img"),this.shadowRoot.querySelector(".city-name").innerHTML=this.getAttribute("city"),this.shadowRoot.querySelector(".country-name").innerHTML=this.getAttribute("title"),this.shadowRoot.querySelector(".location").innerHTML=this.getAttribute("location")}}let H=document.querySelector("template");class M extends HTMLElement{constructor(){super(),console.log("created"),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(H.content.cloneNode(!0))}}let f=document.createElement("template");f.innerHTML=`
    <link rel="stylesheet" href="/src/style.css">
    <div class="w-full h-80 relative">
        <img class="w-full h-full object-cover rounded-3xl img-gallery" src="public/1.jpg" alt="">   

        <div class="absolute left-0 bottom-0 w-full h-25 flex flex-col text-left px-5">
            <span class="city text-white"></span>
            <span class="country text-white text-3xl font-semibold"></span>
        </div>
    </div>
    
`;class j extends HTMLElement{constructor(){super(),console.log("created"),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(f.content.cloneNode(!0))}connectedCallback(){this.shadowRoot.querySelector("img").src=this.getAttribute("img"),this.shadowRoot.querySelector(".city").innerHTML=this.getAttribute("city"),this.shadowRoot.querySelector(".country").innerHTML=this.getAttribute("title")}}let x=document.createElement("template");x.innerHTML=`
    <link rel="stylesheet" href="/src/style.css">   
    <h2 class='text-2xl text-white flex justify-center items-center gap-2'><ion-icon name="logo-amplify"></ion-icon>GoTravel</h2>
`;class q extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(x.content.cloneNode(!0))}}let w=document.createElement("template");w.innerHTML=`

    <link rel="stylesheet" href="/src/style.css">
    <div class="flex gap-[4rem] flex-wrap">
    
        <div>
        <h2 class='text-2xl text-white'>About</h2>
            <ul class="menu-footer">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">News & Biogs</a></li>
            </ul>
        </div>
        
        <div>
           
        <h2 class='text-2xl text-white'>Contact</h2>
            <ul class="menu-footer">
                <li><a href="#">Call Center</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
        
        <div>
        <h2 class='text-2xl text-white'>Support</h2>
            <ul class="menu-footer">
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms & Services</a></li>
                <li><a href="#">Payments</a></li>
            </ul>    
        </div>
        
        <div>
            <h2 class='text-2xl text-white'>Social</h2>
            <ul class="menu-footer-social">
                <li><a href="https://www.facebook.com"><ion-icon name="logo-facebook"></ion-icon></a></li>
                <li><a href="https://github.com/mohammad0srayan/mohammad0srayan"><ion-icon name="logo-github"></ion-icon></a></li>
                <li><a href="https://www.youtueb.com"><ion-icon name="logo-youtube"></ion-icon></a></li>
            </ul>    
        </div>
    </div>
`;class R extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(w.content.cloneNode(!0))}}window.customElements.define("menu-header",k);window.customElements.define("title-header",L);window.customElements.define("main-slider",E);window.customElements.define("cart-item",T);window.customElements.define("user-comment",M);window.customElements.define("gallery-items",j);window.customElements.define("title-footer",q);window.customElements.define("items-footer",R);let d=document.querySelector("header");window.addEventListener("scroll",()=>{document.documentElement.scrollTop?d.classList.add("py-[1.5rem]"):d.classList.remove("py-[1.5rem]")});let C=new IntersectionObserver(function(o){o.forEach(function(t){t.isIntersecting?t.target.classList.add("show"):t.target.classList.remove("show")})}),A=document.querySelectorAll(".hidden-animation");A.forEach(o=>C.observe(o));
