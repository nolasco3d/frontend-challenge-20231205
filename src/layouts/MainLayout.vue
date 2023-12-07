<template>
  <q-layout view="hHh lpr lfr">

    <NavbarHeader @handleClick="store.toggleRightDrawer()" />

    <q-drawer v-model="store.rightDrawerOpen" side="right" overlay
      behavior="mobile" elevated>
      <!-- drawer content -->
      <div>Hotel details here...</div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup lang="ts">
import NavbarHeader from 'src/components/NavbarHeader.vue';
import { useUIStore } from 'src/stores/ui-store';

const store = useUIStore()

</script>

<style scoped lang="scss"></style>
