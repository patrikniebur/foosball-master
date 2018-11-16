<template lang="pug">
  v-container(text-xs-center wrap)
    v-layout
      v-flex(xs4 )
        app-status-list
      v-flex(xs4 v-if="addPlayers")
        app-edit-player
      v-flex(xs4 v-if="$store.state.newTeams.length > 0")
        app-edit-teams
    v-layout
      v-flex(xs12 v-if="$store.state.tournamentRounds")
        app-tournament

</template>

<script>
import EditPlayer from '../components/EditPlayer'
import EditTeams from '../components/EditTeams'
import StatusList from '../components/StatusList'
import Tournament from '../components/Tournament'

export default {
  components: {
    'appEditPlayer': EditPlayer,
    'appEditTeams': EditTeams,
    'appStatusList': StatusList,
    'appTournament': Tournament
  },
  props: ['editTeams', 'addPlayers'],
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
</style>
