const app = Vue.createApp({
    data() {
        return {
           product : 'Shoes',
           info : 'Welcome to our store.',
           image: './assets/images/socks_green.jpg',
           inStock: true,
           inventory: 100
        }
    }
})