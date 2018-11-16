<template lang="pug">
  div
    v-card.mb-3(v-if="players.length")
      v-toolbar(color="green" dark)
        v-toolbar-title Players:
      v-list
        template(v-for="player in players")
          v-chip(close :class="{ red:!isInTeam()(player.playerId) }" @input="removePlayer(player.playerId)")
            span.player-name {{ player.name }}
    v-card.mb-3(v-if="teams.length")
      v-toolbar(color="blue" dark)
        v-toolbar-title Teams:
      v-list(two line)
        v-list-tile.actions-cover(v-for="team in teams" :key="team.name")
          v-list-tile-avatar
            v-icon {{ team.icon?team.icon:'' }}
          v-list-tile-content
            v-list-tile-title
              b {{ team.name }}:
              span.mx-2(v-for="playerId in team.playersIds") {{ getPlayer()(playerId).name }}
              span.actions
                v-icon cancel
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  methods: {
    ...mapActions(['removePlayer', 'removeTeam']),
    ...mapGetters(['isInTeam', 'getPlayer'])
  },
  computed: {
    players () {
      return this.$store.state.players
    },
    teams () {
      return this.$store.state.teams
    }
  }

}
</script>

<style lang="scss">
.players-list {
  li {
    list-style-type: none;
  }
}
.player-name {
  position: relative;
}
.noTeam .player-name::after {
  content: "NO TEAM";
  color: red;
  font-size: 10px;
  position: absolute;
  right: -30px;
  top: -10px;
  font-weight: bold;
}
.actions-cover .actions {
  display: none;
  position: absolute;
  left: 0px;
  top: 50%;
}
.actions-cover:hover .actions {
  display: inherit;
}
</style>
