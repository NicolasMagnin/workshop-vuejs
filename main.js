const app = Vue.createApp({
    data: function () {
        return {
            action: 'Achat de café',
            brand: 'Nespresso',
            link: 'https://www.nespresso.com/fr/fr/',
            cart: [],
            premium: true,

      };
    },
    methods: {
        addToCart(id) {
            this.cart.push(id);
        },
        removeFromCart(id) {
            const index = this.cart.indexOf(id);
            if (index > -1) {
                this.cart.splice(index, 1);
            }
        },
    },
    computed: {
        title() {
            return this.action + ' ' + this.brand
        },
    }
});