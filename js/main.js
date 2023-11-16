const { createApp } = Vue;

const opzioni = {
    data: function () {
        return {
            slides: [
                {
                    immagine: 'https://img.freepik.com/free-vector/welcome-pattern-different-languages_23-2147870141.jpg',
                    titolo: 'Benvenuti nel nostro sito',
                    testo: 'Esplora la nostra vasta gamma di prodotti e scopri offerte speciali.'
                },
                {
                    immagine: 'https://img.freepik.com/free-vector/spring-sale-instagram-post_23-2148849921.jpg',
                    titolo: 'Nuova collezione primavera',
                    testo: 'Scopri le ultime tendenze della moda con la nostra collezione primavera.'
                },
                {
                    immagine: 'https://img.freepik.com/free-vector/special-offer-modern-sale-banner-template_1017-20667.jpg',
                    titolo: 'Offerte speciali',
                    testo: 'Approfitta delle nostre offerte speciali. Sconti incredibili solo per te!'
                }
            ],
            currentSlide: 0,
            timer: null
        }
    },

    methods: {

        prev() {


            if (this.currentSlide > 0) {
                this.currentSlide--;
            }
            else {
                this.currentSlide = this.slides.length - 1
            }
            console.log(this.currentSlide)
        },

        next() {
            if (this.currentSlide < this.slides.length - 1) {
                this.currentSlide++;

            }
            else {
                this.currentSlide = 0;
            }
            console.log(this.currentSlide)
        },

        startTimer() {

            this.timer = setInterval(function () {
                if(this.currentSlide<this.slides.length-1){
                    this.currentSlide++

                }
                else{
                    this.currentSlide=0
                }
            }.bind(this), 3000)

        },

        stopTimer() {
            clearInterval(this.timer);
        }
    }



};

createApp(opzioni).mount('#app')