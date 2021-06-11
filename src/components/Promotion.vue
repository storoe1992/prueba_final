<template>
    <b-container class="pt-5">
          <b-row class="row-offers">
            <b-col lg="4">
              <b-row>
                <b-col sm="12">
                  <h3>Ofertas del día</h3>
                </b-col>
              </b-row>
            </b-col>



            <b-col lg="8">
              <b-row>
                <b-col lg="3">    
          <b-card
                        title="Card Title"
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2 text-center">
                            <b-card-text>
                            card's content.
                            </b-card-text>
                            <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
            </b-col>
            <b-col lg="3">
            <b-card
                        title="Card Title"
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2">
                            <b-card-text>
                            card's content.
                            </b-card-text>
                            <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
            </b-col>
            <b-col lg="3">
            <b-card
                        title="Card Title"
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2">
                            <b-card-text>
                            card's content.
                            </b-card-text>
                            <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
            </b-col>
                </b-row>
              
            </b-col>
          
            </b-row>
    </b-container>
       
</template>

<script>

export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
}
</script>

<style lang="scss" scoped>

.row-offers{
  display: flex;
  justify-content: center;
  align-items: center;

}

.col-offer-title{
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

</style>