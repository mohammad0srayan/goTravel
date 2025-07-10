let gallery = document.createElement('template')

gallery.innerHTML = `
    <link rel="stylesheet" href="/css/style.css">
    <div class="w-full h-80 relative">
        <img class="w-full h-full object-cover rounded-3xl img-gallery" src="public/1.jpg" alt="">   

        <div class="absolute left-0 bottom-0 w-full h-25 flex flex-col text-left px-5">
            <span class="city text-white"></span>
            <span class="country text-white text-3xl font-semibold"></span>
        </div>
    </div>
    
`

class galleryBox extends HTMLElement {
    constructor() {
        super()

        console.log('created')

        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(gallery.content.cloneNode(true))
    }

    connectedCallback() {
        this.shadowRoot.querySelector('img').src = this.getAttribute('img')
        this.shadowRoot.querySelector('.city').innerHTML = this.getAttribute('city')
        this.shadowRoot.querySelector('.country').innerHTML = this.getAttribute('title')
    }
}

export { galleryBox }