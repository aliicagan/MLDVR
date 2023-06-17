<template>
    <button @click="onClick()" :class="buttonClass" style>{{ text }}</button>
</template>


<script>
export default {
  name: 'Button',
  props: {
    text: String,
    buttonClass: String,
  },
  methods: {
    onClick() {
      this.$emit('buttonAction')
    },
  },
}
</script>