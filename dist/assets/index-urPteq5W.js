(function () { const t = document.createElement("link").relList; if (t && t.supports && t.supports("modulepreload")) return; for (const e of document.querySelectorAll('link[rel="modulepreload"]')) l(e); new MutationObserver(e => { for (const o of e) if (o.type === "childList") for (const a of o.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && l(a) }).observe(document, { childList: !0, subtree: !0 }); function c(e) { const o = {}; return e.integrity && (o.integrity = e.integrity), e.referrerPolicy && (o.referrerPolicy = e.referrerPolicy), e.crossOrigin === "use-credentials" ? o.credentials = "include" : e.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o } function l(e) { if (e.ep) return; e.ep = !0; const o = c(e); fetch(e.href, o) } })(); let w = document.querySelector(".back-site"), y = document.querySelector(".sec-items"), g = document.querySelector(".user-box"), v = document.querySelector(".btn-form"), S = document.querySelector("input"), L = document.querySelector(".user-list"), u = document.createElement("template"); u.innerHTML = `
      <link rel="stylesheet" href="assets/index-tJjReJRD.css">
  <link rel="stylesheet" href="assets/index-BgSAnjhS.css">   
    <h2 class='text-2xl text-white flex justify-center items-center gap-2'><ion-icon name="logo-amplify"></ion-icon>GoTravel</h2>
`; class k extends HTMLElement { constructor() { super(), this.attachShadow({ mode: "open" }), this.shadowRoot.appendChild(u.content.cloneNode(!0)) } } let h = document.createElement("template"); h.innerHTML = `
      <link rel="stylesheet" href="assets/index-tJjReJRD.css">
  <link rel="stylesheet" href="assets/index-BgSAnjhS.css">
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

    <div class="min-[999px]:hidden max-[999px]:flex">
        <button class="menu-sidebar flex justify-center items-center text-2xl text-white"><ion-icon name="grid-sharp"></ion-icon></button>
    </div>

    <div class="sidebar hidden flex-col gap-5 w-full h-max p-[2rem] fixed top-0 left-0 bg-black duration-300 ease-in-out">

    <div class="flex justify-between items-center">
        <h2 class='text-2xl text-white flex justify-center items-center gap-2'><ion-icon name="logo-amplify"></ion-icon>GoTravel</h2>

        <div class="flex gap-5">
            <div class="flex justify-center items-center">
                <button id="theme" class="text-2xl flex justify-center items-center cursor-pointer text-white"><ion-icon name="moon-sharp"></ion-icon></button>
            </div>

            <div class="min-[999px]:hidden max-[999px]:flex">
                <button class="close flex justify-center items-center text-3xl text-white"><ion-icon name="close"></ion-icon></button>
            </div>

        </div>
    </div>

        <ul class="flex flex-col justify-center items-center gap-[2rem] menu mt-5">
            <li><a class="text-white" href="#">Home</a></li>
            <li><a class="text-white" href="#">Destination</a></li>
            <li><a class="text-white" href="#">Testimonials</a></li>
            <li><a class="text-white" href="#">Gallery</a></li>
            <li><a class="text-white" href="#">Contact</a></li>
        </ul>

    </div>

    </div>    
`; class E extends HTMLElement { constructor() { super(), this.attachShadow({ mode: "open" }), this.shadowRoot.appendChild(h.content.cloneNode(!0)) } connectedCallback() { let t = this.shadowRoot.querySelector("#theme"), c = this.shadowRoot.querySelector(".menu-sidebar"), l = this.shadowRoot.querySelector(".close"); c.addEventListener("click", () => { this.shadowRoot.querySelector(".sidebar").style.display = "flex", this.shadowRoot.querySelector(".sidebar").style.transform = "translate(0)" }), l.addEventListener("click", () => { this.shadowRoot.querySelector(".sidebar").style.transform = "translate(-100%)" }); let e = !1; t.addEventListener("click", () => { w.classList.toggle("dark-mode"), y.classList.toggle("dark-theme"), g.classList.toggle("dark-box"), v.classList.toggle("btn-theme"), S.classList.toggle("theme-input"), L.classList.toggle("dark"), e ? (t.innerHTML = '<ion-icon name="moon-sharp"></ion-icon>', e = !1) : (t.innerHTML = '<ion-icon name="sunny"></ion-icon>', e = !0) }) } } let n = ["/assets/1.jpg", "/assets/2.jpg", "/assets/3.jpg", "/assets/4.jpg", "/assets/5.jpg"], s = 0, r = document.querySelector(".background-site"), m = document.createElement("template"); m.innerHTML = `
      <link rel="stylesheet" href="assets/index-tJjReJRD.css">
  <link rel="stylesheet" href="assets/index-BgSAnjhS.css">   
    <div class="slider-section relative rounded-2xl min-[850px]:h-[30rem] max-[850px]:h-[20rem] w-[42rem] scale-x-120 max-[1508px]:scale-x-100 max-[680px]:w-full">

    <img class="w-full h-full object-cover rounded-2xl" src="assets/1--ao-5aT9.jpg">

    <div class="absolute right-4 bottom-4 flex justify-center items-center gap-2">
        <button class="back py-[0.5rem] px-3 text-xl bg-btnSlider text-white cursor-pointer flex justify-center items-center hover:bg-white hover:text-black duration-300 ease-in-out"><ion-icon name="arrow-back-outline"></ion-icon></button>
        <button class="next py-[0.5rem] px-3 text-xl bg-btnSlider text-white cursor-pointer flex justify-center items-center hover:bg-white hover:text-black duration-300 ease-in-out"><ion-icon name="arrow-forward-outline"></ion-icon></button>
    </div>

    </div>
`; class T extends HTMLElement { constructor() { super(), this.attachShadow({ mode: "open" }), this.shadowRoot.appendChild(m.content.cloneNode(!0)) } connectedCallback() { let t = this.shadowRoot.querySelector("img"), c = this.shadowRoot.querySelector(".back"), l = this.shadowRoot.querySelector(".next"); c.addEventListener("click", () => { s--, s < 0 && (s = n.length - 1), r.style.background = `url(${n[s]})`, r.style.backgroundSize = "cover", r.style.backgroundPostion = "center", t.setAttribute("src", n[s]) }), l.addEventListener("click", () => { s++, s > n.length - 1 && (s = 0), r.style.background = `url(${n[s]})`, r.style.backgroundSize = "cover", r.style.backgroundPostion = "center", t.setAttribute("src", n[s]) }) } } let f = document.createElement("template"); f.innerHTML = `
      <link rel="stylesheet" href="assets/index-tJjReJRD.css">
  <link rel="stylesheet" href="assets/index-BgSAnjhS.css">   
        <div class="w-full h-[25rem] relative rounded-3xl shadow-2xl">
            <img class="w-full h-full object-cover rounded-3xl" src="/assets/1.jpg" alt="">

            <div class="modal-items absolute left-0 bottom-0 w-full bg-backDark backdrop-blur-md h-[30%] text-left rounded-3xl p-6 flex flex-col">
                <span class="city-name text-white tracking-wider">Bali</span>
                <span class="country-name text-white text-2xl tracking-wider">ISLAND</span>
                <span class="location text-white tracking-wider"><ion-icon name="location-sharp"></ion-icon>ISLAND</span>
            </div>
        </div>
`; class j extends HTMLElement { constructor() { super(), this.attachShadow({ mode: "open" }), this.shadowRoot.appendChild(f.content.cloneNode(!0)) } connectedCallback() { this.shadowRoot.querySelector("img").src = this.getAttribute("img"), this.shadowRoot.querySelector(".city-name").innerHTML = this.getAttribute("city"), this.shadowRoot.querySelector(".country-name").innerHTML = this.getAttribute("title"), this.shadowRoot.querySelector(".location").innerHTML = this.getAttribute("location") } } let x = document.createElement("template"); x.innerHTML = `
      <link rel="stylesheet" href="assets/index-tJjReJRD.css">
  <link rel="stylesheet" href="assets/index-BgSAnjhS.css">   
    <div class="w-full h-80 relative">
        <img class="w-full h-full object-cover rounded-3xl img-gallery" src="/assets/1.jpg" alt="">   

        <div class="absolute left-0 bottom-0 w-full h-25 flex flex-col text-left px-5">
            <span class="city text-white"></span>
            <span class="country text-white text-3xl font-semibold"></span>
        </div>
    </div>
    
`; class q extends HTMLElement { constructor() { super(), console.log("created"), this.attachShadow({ mode: "open" }), this.shadowRoot.appendChild(x.content.cloneNode(!0)) } connectedCallback() { this.shadowRoot.querySelector("img").src = this.getAttribute("img"), this.shadowRoot.querySelector(".city").innerHTML = this.getAttribute("city"), this.shadowRoot.querySelector(".country").innerHTML = this.getAttribute("title") } } let p = document.createElement("template"); p.innerHTML = `
      <link rel="stylesheet" href="assets/index-tJjReJRD.css">
  <link rel="stylesheet" href="assets/index-BgSAnjhS.css">   
    <h2 class='text-2xl text-white flex justify-center items-center gap-2'><ion-icon name="logo-amplify"></ion-icon>GoTravel</h2>
`; class H extends HTMLElement { constructor() { super(), this.attachShadow({ mode: "open" }), this.shadowRoot.appendChild(p.content.cloneNode(!0)) } } let b = document.createElement("template"); b.innerHTML = `

      <link rel="stylesheet" href="assets/index-tJjReJRD.css">
  <link rel="stylesheet" href="assets/index-BgSAnjhS.css">   
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
`
