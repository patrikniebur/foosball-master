<template lang="pug">
  v-flex(xs4)
    v-card(v-for="(round, i) in tournamentRounds" :key="i")
      v-toolbar.heading(color="red" dark)
        v-flex(xs4) Round {{ i+1 }}:
        v-spacer
        v-flex(xs4) {{ finishedMatchesCount[i] }} / {{ round.length }}
      app-match(v-for="(match, ii) in round" :matchId="ii" :roundId="i" :key="ii" @finishMatch="finishMatch")

</template>

<script>
import Match from '@/components/Match'
export default {
  components: { 'app-match': Match },
  computed: {
    tournamentRounds () {
      return this.$store.state.tournamentRounds
    },
    finishedMatchesCount () {
      const finishedMatchesCount = []
      this.tournamentRounds.forEach(round => {
        finishedMatchesCount.push(round.reduce((count, match) => count + (match.finished ? 1 : 0), 0))
      })
      return finishedMatchesCount
    }
  },
  methods: {
    finishMatch ({ roundId, matchId, scores }) {
      this.$store.dispatch('finishMatch', { roundId, matchId, scores })
      // Is round finished?
      if (this.finishedMatchesCount[roundId] === this.tournamentRounds[roundId].length) {
        this.$store.dispatch('startNextRound')
      }
    }
  }
}
</script>
<style lang="scss">
.heading {
  font-size: 20px;
  font-weight: bold;
}
</style>
