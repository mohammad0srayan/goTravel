let titleFooter = document.createElement('template')

titleFooter.innerHTML = `
    <link rel="stylesheet" href="/css/style.css">
    <h2 class='text-2xl text-white flex justify-center items-center gap-2'><ion-icon name="logo-amplify"></ion-icon>GoTravel</h2>
`

class titleFooterWebSite extends HTMLElement {
    constructor() {
        super()

        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(titleFooter.content.cloneNode(true))
    }
}

let itemsFooter = document.createElement('template')

itemsFooter.innerHTML = `

    <link rel="stylesheet" href="css/style.css">
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

class itemsFooterWeb extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(itemsFooter.content.cloneNode(true))
    }
}

export { titleFooterWebSite, itemsFooterWeb }

