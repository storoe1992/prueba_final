<template>
  <section class="home">
    <b-container>
    <h1>Lista de relojes</h1>
    <b-table small responsive="sm" :items="juguetes" :fields="[{key:'name',label:'Nombre'},{key:'stock',label:'Stock'},{key:'price',label:'Precio'},{key:'update',label:''},{key:'delete',label:''}]">
        <template #cell(update)="data">
            <b-button variant="primary" @click="updateJuguete(data.item.id)">Modificar</b-button>
        </template>
        <template #cell(delete)="data">
            <b-button variant="danger" @click="deleteJ(data.item.id)">Eliminar</b-button>
        </template>
    </b-table>
    </b-container>
  </section>
</template>

<script>

export default {
  name: 'Relojes',
  
}
</script>

<style lang="scss" scoped>
table{

   width: 100%;
  
   th, td {
      border: 1px solid black;
   }
}
</style>
