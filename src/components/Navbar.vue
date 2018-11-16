<template lang="pug">
  v-toolbar(app)
      v-toolbar-title.headline.text-uppercase
        span Something smart
      v-btn(@click="$emit('not')")
        span.mr-2 Click me not
      v-btn(@click="$emit('addPlayersToggle')")
        span.mr-2 Add players
      v-btn(v-if="$store.getters.getUnassignedPlayers.length >= 2" @click="$store.dispatch('randomizeTeams')")
        span.mr-2 Team up !
      v-btn(v-if="$store.state.teams.length >= 2" @click="$store.dispatch('startTournament')")
        span.mr-2 Start
</template>

<script>
export default {

}
</script>
