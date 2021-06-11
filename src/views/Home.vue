<template>
    <div>
        <Nav />
        <Carousel />
        <Popular />
        <Promotion />
        <OtherOffer />
        <Footer />
    </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import Carousel from '../components/Carousel.vue'
import Popular from '../components/Popular.vue'
import Promotion from '../components/Promotion.vue'
import OtherOffer from '../components/OtherOffer.vue'
import Footer from '../components/Footer.vue'
export default {
    name: 'Home',
    components: {
        Nav,Carousel,Popular,Promotion,OtherOffer,Footer
    }
}
</script>