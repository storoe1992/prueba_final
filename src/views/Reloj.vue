<template>
  <b-container class="juguete mt-5">
    <b-row>
      <b-col lg="1" md="12">
        <h2 class="h2">Reloj</h2>
      </b-col>
      <b-col lg="3" md="3">
      <b-form-input v-model="name" placeholder="Nombre"/>
      </b-col>
      <b-col lg="3" md="3">
      <b-form-input type="number" min="0" v-model="stock" placeholder="Stock"/>
      </b-col>
      <b-col lg="3" md="3">
      <b-form-input type="number" min="0" v-model="price" placeholder="Precio"/>
      </b-col>
      <b-col lg="2" md="3">
      <b-button @click="add" v-if="buttonAction" variant="success">Agregar</b-button>
      <b-button @click="update" v-if="!buttonAction" variant="dark">Modificar</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import {mapActions} from 'vuex'
import Reloj from '../classes/Reloj'

export default {
  name: 'Reloj',
  props: {
    jugueteid : {
      type: String,
      require: false,
      default: ''
    }
  },
  data() {
    return {
      name: '',
      stock: '',
      price: ''
    }
  }

}
</script>


<style lang='scss' scoped>
.juguete{
  display: flex;
  align-items: center;
  justify-content: center;

  h2,input {
    margin-right: 10px;
  }
}
</style>

