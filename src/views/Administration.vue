<template>
     <div>
        <NavAdmin></NavAdmin>
        <router-view></router-view>
    </div>
</template>

<script>
import NavAdmin from '../components/NavAdmin'

export default {
    name: "Administration",
    components: {
        NavAdmin,
    },
}
</script>