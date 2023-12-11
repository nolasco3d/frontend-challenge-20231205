<template>
  <div>
    <span class="q-mr-sm">{{ stars }}</span>
    <q-rating :model-value="props.stars" :max="props.stars" size="1.2em"
      color="yellow-14" readonly />
  </div>
</template>

<script setup lang="ts">

interface RatingProps {
  stars: number
}

const props = defineProps<RatingProps>()
</script>

<style scoped></style>
