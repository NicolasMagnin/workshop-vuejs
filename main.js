const app = Vue.createApp({
    data: function () {
        return {
            action: 'Achat de café',
            brand: 'Nespresso',
            link: 'https://www.nespresso.com/fr/fr/',
            cart: 0,
            premium: true,

      };
    },
    methods: {
    },
    computed: {
        title() {
            return this.action + ' ' + this.brand
        },
    }
});