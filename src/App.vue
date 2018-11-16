<template lang="pug">
  v-app
    app-navbar(
      @addPlayersToggle="addPlayers=!addPlayers"
      @not="not")
    v-content
      router-view(:editTeams="editTeams", :addPlayers="addPlayers")

</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    'appNavbar': Navbar
  },
  data () {
    return {
      editTeams: false,
      addPlayers: true
    }
  },
  methods: {
    not () {
      alert('I said not!!')
    }
  }
}
</script>
<style lang="scss">
.v-icon.small {
  font-size: 1em;
}
.v-list__tile__title{
  overflow: visible;
}
.flex-center{
  align-items: center;
}
</style>
