<template>
    <b-container class="pt-5">
        <b-row>
            <b-col sm="12">
                <h3>En otras partes</h3>
            </b-col>
        </b-row>
        <b-row class="container-images-m">
            <b-col lg="4">
                <b-img height="150px" src="https://picsum.photos/600/300/?image=25"></b-img>
            </b-col>
            <b-col lg="4">
                <b-img  height="150px" src="https://picsum.photos/600/300/?image=25"></b-img>
            </b-col>
            <b-col lg="4">
                <b-img height="150px" src="https://picsum.photos/600/300/?image=25"></b-img>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: "OtherOffer"
}
</script>

<style lang="scss" scoped>

.container-images-m{
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>