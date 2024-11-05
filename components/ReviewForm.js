app.component("review-form", {
    emits: ['review-submitted'],
    template:
      /*html*/
      `
    <form @submit.prevent="onSumbit">
      <h3>Laissez un message</h3>
      
      <div class="form-group">
        <label for="name">Nom</label>
        <input id="name" class="form-control" v-model="name">
      </div>
  
      <div class="form-group">
        <label for="review">Message</label>
        <textarea id="review" class="form-control" v-model="review"></textarea>
      </div>
  
      <div class="form-group">
        <label for="rating">Note</label>
        <select id="rating" class="form-control" v-model.number="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
      </div>
      <div class="form-group">
          <label for="recommend">Recommanderiez-vous ce café ?</label>
          <input type="checkbox" id="recommend" v-model="recommended">
      </div>
  
      <input class="btn btn-primary mb-5" type="submit" value="Envoyer">
    </form>
    `,
    data() {
        return {
            name: '',
            review: '',
            rating: null,
            recommended: null,
      };
    },
    methods: {
        onSumbit() {
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                recommended: this.recommended,
            };
            this.$emit('review-submitted', productReview);
            this.name = '';
            this.review = '';
            this.rating = null;
            this.recommended = null;
        },
    },
  });