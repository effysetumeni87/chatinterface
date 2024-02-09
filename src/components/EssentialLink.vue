<template>
  <q-item
    clickable
    :style="'background-color:'+background+';'"
    :class="classes"
  >
  <!-- #0d99ff -->

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>

    </q-item-section>
    <q-item-section avatar>
        <q-icon :name="icon" color="grey"/>
    </q-item-section>
  </q-item>
  <q-separator/>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },
    background: {
      type: String,
      default: '#fff'
    },
    classes: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    },
    detail: {
      type: String,
      default: ''
    }
  }
})
</script>
