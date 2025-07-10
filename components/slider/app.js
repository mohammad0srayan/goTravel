let imageArray = ['public/1.jpg', 'public/2.jpg', 'public/3.jpg', 'public/4.jpg', 'public/5.jpg']

let imgIndex = 0

let backSite = document.querySelector('.background-site')
let slider = document.createElement('template')

slider.innerHTML = `
    <link rel="stylesheet" href="/css/style.css">
    <div class="slider-section relative rounded-2xl min-[850px]:h-[30rem] max-[850px]:h-[20rem] w-[42rem] scale-x-120 max-[1508px]:scale-x-100 max-[680px]:w-full">

    <img class="w-full h-full object-cover rounded-2xl" src="/public/1.jpg">

    <div class="absolute right-4 bottom-4 flex justify-center items-center gap-2">
        <button class="back py-[0.5rem] px-3 text-xl bg-btnSlider text-white cursor-pointer flex justify-center items-center hover:bg-white hover:text-black duration-300 ease-in-out"><ion-icon name="arrow-back-outline"></ion-icon></button>
        <button class="next py-[0.5rem] px-3 text-xl bg-btnSlider text-white cursor-pointer flex justify-center items-center hover:bg-white hover:text-black duration-300 ease-in-out"><ion-icon name="arrow-forward-outline"></ion-icon></button>
    </div>

    </div>
`

class sliderMainSection extends HTMLElement {
    constructor() {
        super()

        // console.log('created')

        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(slider.content.cloneNode(true))
    }

    connectedCallback() {
        let image = this.shadowRoot.querySelector('img')
        let back = this.shadowRoot.querySelector('.back')
        let next = this.shadowRoot.querySelector('.next')

        back.addEventListener('click', () => {
            imgIndex--
            if (imgIndex < 0) {
                imgIndex = imageArray.length - 1
            }
            backSite.style.background = `url(${imageArray[imgIndex]})`
            backSite.style.backgroundSize = 'cover'
            backSite.style.backgroundPostion = 'center'
            image.setAttribute('src', imageArray[imgIndex])
            // console.log(imgIndex, imageArray[imageArray]);

        })

        next.addEventListener('click', () => {
            imgIndex++
            if (imgIndex > imageArray.length - 1) {
                imgIndex = 0
            }
            backSite.style.background = `url(${imageArray[imgIndex]})`
            backSite.style.backgroundSize = 'cover'
            backSite.style.backgroundPostion = 'center'
            image.setAttribute('src', imageArray[imgIndex])
            // console.log(imgIndex, imageArray[imageArray]);
        })
    }
}

export { sliderMainSection }