<template>
  <q-card flat class="col-12 text-grey-8 q-mb-sm">
    <q-card-section :style="{ 'height': $q.screen.gt.sm ? '255px' : 'auto' }"
      :horizontal="$q.screen.gt.sm">
      <!-- Carousel -->
      <q-card-section class="col-12 col-sm-4 col-lg-3 q-pa-none"
        style="height: fit-content; box-sizing: border-box;">

        <q-carousel control-type="unelevated" control-color="white"
          control-text-color="grey-6" :height="$q.screen.gt.sm ? '255px' : ''"
          v-model="slide" animated arrows infinite
          class="border-radius-inherit g-colgutter">
          <q-carousel-slide v-for="(image, image_idx) in props.hotel.images"
            :key="`${image_idx}-item`" :name="image_idx + 1" :img-src="image" />
        </q-carousel>
      </q-card-section>

      <!-- Details -->
      <q-card-section class="col">
        <div class="text-h6">{{ props.hotel.name }}</div>
        <div class="text-body1">{{ props.hotel.address?.city }}, {{
          props.hotel.address?.district }}</div>

        <div class="flex items-center q-mt-md q-mb-sm">
          <span class="q-mr-sm">{{ props.hotel.stars }}</span>
          <q-rating v-model="stars" :max="stars" size="1.2em" color="yellow-14"
            readonly />
        </div>

        <q-chip square color="grey"
          class="text-white q-ma-none">Reembolsável</q-chip>
      </q-card-section>

      <!-- Line Separator -->
      <q-separator :vertical="$q.screen.gt.sm" />

      <!-- Actions -->
      <q-card-section class="col-12 col-sm-3 text-grey-8">
        <div class="text-caption">A partir de</div>
        <div class="text-body1">
          <span class="text-h4">{{ formatCurrency((props.hotel.price as number)
            * 3)
          }}</span>
        </div>
        <div class="">{{ formatCurrency(props.hotel.price!) }}/noite</div>
        <div class=" text-weight-medium">Impostos inclusos
        </div>

        <q-btn unelevated color="primary" size="md" label="Selecionar" rounded
          class="q-px-xl q-mt-md" @click="$emit('action')" />
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import HotelEntity from 'src/models/HotelEntity';
import { computed, ref } from 'vue';
import { useQuasar } from 'quasar';

import { formatCurrency } from 'components/utils/currency';

interface HotelListItemProps {
  hotel: HotelEntity
}

const $q = useQuasar();
const props = defineProps<HotelListItemProps>();
const stars = computed(() => parseInt(props.hotel.stars as string));
const slide = ref(1);

</script>

<style scoped>
/* .q-card {
  height: 300px;
} */
</style>
