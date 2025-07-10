let cart = document.createElement('template')

cart.innerHTML = `
    <link rel="stylesheet" href="/css/style.css">
        <div class="w-full h-[25rem] relative rounded-3xl shadow-2xl">
            <img class="w-full h-full object-cover rounded-3xl" src="/public/1.jpg" alt="">

            <div class="modal-items absolute left-0 bottom-0 w-full bg-backDark backdrop-blur-md h-[30%] text-left rounded-3xl p-6 flex flex-col">
                <span class="city-name text-white tracking-wider">Bali</span>
                <span class="country-name text-white text-2xl tracking-wider">ISLAND</span>
                <span class="location text-white tracking-wider"><ion-icon name="location-sharp"></ion-icon>ISLAND</span>
            </div>
        </div>
`

class cartSec extends HTMLElement {
    constructor() {
        super()

        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(cart.content.cloneNode(true))
    }

    connectedCallback() {
        this.shadowRoot.querySelector('img').src = this.getAttribute('img')
        this.shadowRoot.querySelector('.city-name').innerHTML = this.getAttribute('city')
        this.shadowRoot.querySelector('.country-name').innerHTML = this.getAttribute('title')
        this.shadowRoot.querySelector('.location').innerHTML = this.getAttribute('location')
    }
}

export { cartSec }