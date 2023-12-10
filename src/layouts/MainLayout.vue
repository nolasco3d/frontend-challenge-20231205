<template>
  <q-layout view="hHh lpr lfr">

    <NavbarHeader @handleClick="ui_store.toggleRightDrawer()" />

    <q-drawer v-model="ui_store.rightDrawerOpen" side="right" overlay
      behavior="mobile" elevated @hide="hotel_store.clearSelectedHotel()"
      :width="Math.floor(screen_width * .8)">
      <!-- drawer content -->
      <hotel-details :hotel="hotel_store.hotelSelected" />
    </q-drawer>

    <q-page-container class="bg-grey-3">
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup lang="ts">
import NavbarHeader from 'src/components/NavbarHeader.vue';
import HotelDetails from 'src/components/HotelDetails.vue';

import { useHotelStore } from 'src/stores/hotel-store';
import { useUIStore } from 'src/stores/ui-store';
import { onMounted, ref } from 'vue';


const ui_store = useUIStore();
const hotel_store = useHotelStore();

const screen_width = ref(0)

onMounted(() => {
  screen_width.value = window.innerWidth
  window.addEventListener('resize', function () {
    screen_width.value = this.window.innerWidth
  })
})

</script>

<style scoped lang="scss"></style>
