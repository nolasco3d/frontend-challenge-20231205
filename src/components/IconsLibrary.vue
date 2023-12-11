<template>
  <q-icon :size="props.size" :name="props.name" />
</template>

<script setup lang="ts">

import { IconsLibrary, MaterialIconsStrategy } from 'src/components/utils/iconsStrategy'
interface IconsLibraryProps {
  size?: string
  name: string
}

const context = new IconsLibrary(new MaterialIconsStrategy())

const props = withDefaults(defineProps<IconsLibraryProps>(), {
  size: '1.6rem'
})

console.log(context.getIcon(props.name))
</script>

<style scoped></style>
