<template lang="pug">
  div
    app-edit-team(v-for="team in teams" :team="team" :key="team.teamId")
</template>

<script>
import EditTeam from '@/components/EditTeam'
export default {
  name: 'EditTeams',
  components: {
    'appEditTeam': EditTeam
  },
  data () {
    return {}
  },
  computed: {
    teams () {
      return this.$store.state.newTeams
    }
  }
}
</script>
