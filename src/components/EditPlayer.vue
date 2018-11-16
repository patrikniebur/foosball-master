<template lang="pug">
  div
    v-form(@submit.prevent="addPlayer")
      v-text-field.pa-1(v-model.trim="name" required outline :error-messages="nameErrors" @input="$v.name.$touch()" @blur="$v.name.$touch()" label="Who is next?" color="green")
      v-btn.success(type="submit" :disabled="$v.$invalid") Add
      v-btn(@click="randomPlayer" color="yellow") Random
</template>

<script>
import { randomInt } from '../helpers.js'
import { mapGetters } from 'vuex'
import { required, minLength } from 'vuelidate/lib/validators'
export default {
  name: 'EditPlayer',

  data () {
    return {
      name: null
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(3),
      unique: (val, el) => el.playersNames.indexOf(val) === -1
    }
  },
  computed: {
    label () {
      const labels = [
        'You are ...?',
        'Name?!',
        'How do they call you?',
        'Is that you Bob?',
        'Eeehhmm ... Tom?'
      ]
      return labels[randomInt(0, labels.length - 1)]
    },
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.required && errors.push('Put your name in !!')
      !this.$v.name.minLength && errors.push('Too short ..')
      !this.$v.name.unique && errors.push('This one is already in.')
      return errors
    },
    ...mapGetters(['playersNames'])
  },
  methods: {
    addPlayer () {
      this.$store.dispatch('addPlayer', { name: this.name })
      this.name = null
      this.$v.$reset()
    },
    randomPlayer () {
      const names = ['Bob', 'Tom', 'John', 'Dave', 'Tommy', 'Pop']
      const existingPlayers = this.$store.state.players
      this.name = names[(existingPlayers.length % names.length)] + (existingPlayers.length >= names.length ? '' + (parseInt(existingPlayers.length / names.length) + 1) : '')
      this.addPlayer()
    }
  }
}
</script>
