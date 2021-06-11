<template>
    <div>
            <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-container>
            <b-navbar-brand>Cronos for you</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                <b-nav-item><router-link to="/all">Lista de relojes</router-link></b-nav-item>
                <b-nav-item><router-link to="/reloj">Agregar reloj</router-link></b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav>
                    <b-nav-item @click="logout">Salir</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
            </b-container>
            </b-navbar>
    </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    logout() {
      //Firebase.auth().signOut().then(() => {
          this.$router.push('/login')
      //}).catch((error) => {
      //    alert("Ocurrió un error mientras se deslogueaba: " + error)
      //});
      
    }
  },
}
</script>

<style lang="scss" scoped>
a {
    font-weight: bold;
    color: white;
    text-decoration: none;

    &.router-link-active {
      color: #42b983;
    }
  }
</style>
