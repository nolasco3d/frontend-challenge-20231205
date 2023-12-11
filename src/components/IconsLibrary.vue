<template>
  <q-icon left :size="props.size" :name="context.getIcon(props.name)" />
</template>

<script setup lang="ts">

import { IconsLibrary, IconsMapKeys, MaterialIconsStrategy } from 'src/components/utils/iconsStrategy'
interface IconsLibraryProps {
  size?: string
  name: IconsMapKeys
}

const context = new IconsLibrary(new MaterialIconsStrategy())


const props = withDefaults(defineProps<IconsLibraryProps>(), {
  size: '1.6rem'
})

console.log(context.getIcon(props.name))
</script>

<style scoped></style>
