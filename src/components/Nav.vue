<template>
    <div>
            <b-navbar toggleable="sm" type="dark" variant="dark">
            <b-container>
            <b-navbar-brand>Cronos For You</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="search-bar">
                  <b-nav-item><b-form-input size="sm" placeholder="Enter your name"></b-form-input></b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav>
                  <b-nav-item><router-link to="/login">Login</router-link></b-nav-item>
                </b-navbar-nav>
            </b-collapse>
            </b-container>
            </b-navbar>
    </div>
</template>

<script>

import Firebase from 'firebase'


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
.search-bar, .search-bar li{
  width: 100%;
}
a {
    font-weight: bold;
    color: white;
    text-decoration: none;

    &.router-link-active {
      color: #42b983;
    }
  }
</style>
