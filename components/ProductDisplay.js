
app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true,
        },
    },
    emits: ['add-to-cart', 'remove-from-cart'],
    template:
    /*html*/
    `
    <p>{{ description }}</p>
      <img height="200" v-bind:src="image" :class="{imageUnavailable : outOfStock}"/>
      <p v-if="stock > 10">Disponible</p>
      <p v-else-if="stock <= 10 && stock > 0">Peu de stock</p>
      <p v-else>Plus de stock</p>
      <p v-show="onSale">En vente!</p>
      <ul>
        <li
          v-for="detail in details"
          :key="detail.id"
          :style="{ color: detail.color }"
        >
          {{ detail.text }}
        </li>
      </ul>
      <div>
        <span
          v-for="(carouselImage, index) in carouselImages"
          :key="carouselImage.id"
          @mouseover="updateImage(index)"
        >
          <img height="50" alt="carouselImage.text" :src="carouselImage.image" />
        </span>
      </div>
      <product-details :packs="packs"></product-details>
      <p>Shipping: {{ shipping }}</p>
        <button v-on:click="addToCart" :style="styles.roundButton" :disabled="outOfStock" :class="{ disabledButton: outOfStock }">Ajouter au panier</button>
        <button v-on:click="removeFromCart">Retirer du panier</button>

        <div class="col-6 offset-3">
            <review-form @review-submitted="addReview"></review-form>
        </div>
        <div v-if="reviews.length > 0" class="col-6 offset-3">
            <review-list :reviews="reviews"></review-list>
        </div>
    `,
    data() {
        return {
            description: 'Colombia',
            selectedImage: 0,
            stock: 10,
            onSale: false,
            details: [
                {
                    id: 1,
                    text: 'Doux',
                    color: '#6C99C6'
                },
                {
                    id: 2,
                    text: 'Harmonieux',
                    color: '#BF9E74'
                }
            ],
            carouselImages: [
                {
                    id: 1,
                    text: 'Capsule 1',
                    image: 'assets/images/colombia.png',
                },
                {
                    id: 2,
                    text: 'Capsule 2',
                    image: 'assets/images/colombia_de_cote.png',
                },
                {
                    id: 3,
                    text: 'Tasse',
                    image: 'assets/images/colombia_tasse.png',
                },
                {
                    id: 4,
                    text: 'Paquet',
                    image: 'assets/images/colombia_paquet.png'
                }
            ],
            packs: [
                {
                    id: 1,
                    quantity: 10,
                    price: 5,
                },
                {
                    id: 2,
                    quantity: 20,
                    price: 10,
                },
            ],
            styles: {
                roundButton: {
                    borderRadius: '20px',
                    padding: '10px',
                    backgroundColor: 'rgb(0, 114, 180)',
                    color: 'white',
                    cursor: 'pointer'
                },
            },
            reviews: [],
        };
    },
    methods: {
        addToCart: function () {
            this.$emit('add-to-cart', 
                this.carouselImages[this.selectedImage].id
            );
            this.stock -= 1;
        },
        removeFromCart: function() {
            this.$emit('remove-from-cart', 
                this.carouselImages[this.selectedImage].id
            );
            this.stock += 1;
        },
        addReview: function(review) {
            this.reviews.push(review);
        },
        updateImage: function(index) {
            this.selectedImage = index;
        },
    },
    computed: {
        image() {
            return this.carouselImages[this.selectedImage].image;
        },
        outOfStock() {
            return this.stock <= 0;
        },
        shipping() {
            if (this.premium) {
            return 'Free'
            }
            return 2.99
        },
    }
});