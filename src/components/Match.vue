<template lang="pug">
  div.matchbox
    v-list(two line)
        v-list-tile(v-for="(team, teamId) in teamsData" :key="teamId")
          v-list-tile-avatar
            v-icon {{ team.icon }}
          v-list-tile-content
            v-list-tile-title
              b {{ team.name }}
              //- template(v-for="(player, playerId) in teamsData[teamId].players")
              //-   span.mx-2 {{ player.name }}
              input.score(type="number" min="0" max="10" :value="matchData.teamsScores[teamId]" @input="score[teamId] = parseInt($event.target.value)" :disabled="matchData.finished")
        v-list-tile(v-if="!matchData.finished")
          v-list-tile-content.flex-center
            v-btn.primary(@click="finishMatch") Finished
</template>

<script>
export default {
  name: 'Match',
  props: ['matchId', 'roundId'],
  data () {
    return {
      score: {}
    }
  },
  computed: {
    teamsData () {
      return this.$store.getters.teamDetails(this.matchData.teamsScores)
    },
    matchData () {
      return this.$store.state.tournamentRounds[this.roundId][this.matchId]
    }
  },
  methods: {
    finishMatch () {
      this.$emit('finishMatch', { roundId: this.roundId, matchId: this.matchId, score: this.score })
    }
    // Hmm .. this does not work .. but how the hell would I get those two names into one string to put them into the title of <b>TeamName</b> ???...
    // teamNames (teamId) {
    //   const names = []
    //   this.teamsData[teamId].players.forEach(player => names.push(player.name))

    //   return names.join(' ')
    // }
  }

}
</script>

<style lang="scss">
input.score {
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
  width: 40px;
  text-align: center;
  float: right;
  margin-right: 80px;

  &:disabled{
    background-color: rgba(175,175,175,0.3)
  }
}
.matchbox{
  padding-top: 5px;
  border-bottom: 1px solid rgba(0,0,0,0.2)
}
</style>
