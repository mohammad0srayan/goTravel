// Element
let backSite = document.querySelector('.back-site')
let secItems = document.querySelector('.sec-items')
let boxUset = document.querySelector('.user-box')
let btn = document.querySelector('.btn-form')
let input = document.querySelector('input')
let userList = document.querySelector('.user-list')

let titleHeader = document.createElement('template')

titleHeader.innerHTML = `
    <link rel="stylesheet" href="/css/style.css">
    <h2 class='text-2xl text-white flex justify-center items-center gap-2'><ion-icon name="logo-amplify"></ion-icon>GoTravel</h2>
`

class headerTitle extends HTMLElement {
    constructor() {
        super()

        // console.log('المنت کاستوم ساخته شد')

        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(titleHeader.content.cloneNode(true))
    }
}

let itemsHeader = document.createElement('template')

itemsHeader.innerHTML = `
    <link rel="stylesheet" href="/css/style.css">
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
`

class itemsHeaderWebSite extends HTMLElement {
    constructor() {
        super()

        // console.log('created')

        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(itemsHeader.content.cloneNode(true))
    }

    connectedCallback() {
        let theme = this.shadowRoot.querySelector('#theme')
        let btnSidebar = this.shadowRoot.querySelector('.menu-sidebar')
        let btnCloseSidebar = this.shadowRoot.querySelector('.close')

        btnSidebar.addEventListener('click', () => {
            this.shadowRoot.querySelector('.sidebar').style.display = 'flex'
            this.shadowRoot.querySelector('.sidebar').style.transform = 'translate(0)'
        })

        btnCloseSidebar.addEventListener('click', () => {
            this.shadowRoot.querySelector('.sidebar').style.transform = 'translate(-100%)'
        })

        let istheme = false

        theme.addEventListener('click', () => {
            
            backSite.classList.toggle('dark-mode')
            secItems.classList.toggle('dark-theme')
            boxUset.classList.toggle('dark-box')
            btn.classList.toggle('btn-theme')
            input.classList.toggle('theme-input')
            userList.classList.toggle('dark')
            if (istheme) {
                theme.innerHTML = '<ion-icon name="moon-sharp"></ion-icon>'
                istheme = false
            } else {
                theme.innerHTML = '<ion-icon name="sunny"></ion-icon>'
                istheme = true
            }
        })
    }
}

export { itemsHeaderWebSite, headerTitle }