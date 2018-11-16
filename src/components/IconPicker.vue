<template lang="pug">
  v-card(flat tile)
    v-btn-toggle(v-model="icon_index" mandatory)
      v-btn(flat v-for="icon in icons" :key="icon" @click="$emit('input', icon)")
        v-icon {{ icon }}

</template>

<script>
import { randomInt } from '@/helpers'
export default {
  props: ['value', 'defaultIcon'],
  data () {
    return {
      icon_index: 0,
      icons: ['accessible_forward', 'bug_report', 'pets', 'pregnant_woman', 'visibility', 'attach_money', 'attach_file', 'bubble_chart']
    }
  },
  created () {
    const defaultIcon = this.defaultIcon === 'random' ? this.icons[randomInt(0, this.icons.length - 1)] : this.default
    this.icon_index = this.icons.indexOf(defaultIcon)
    this.$emit('input', defaultIcon)
  }
}
</script>
