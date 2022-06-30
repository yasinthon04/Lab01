const app = Vue.createApp({
    data() {
        return {
           product : 'Shoes',
           info : 'Welcome to our store.',
           image: './assets/images/socks_green.jpg',
           web: 'https://www.camt.cmu.ac.th/index.php/th/',
           inStock: true,
           inventory: 100
        }
    }
})