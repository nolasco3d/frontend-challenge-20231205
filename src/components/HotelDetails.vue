<template>
  <div class="column q-pa-md text-grey-8">
    <RatingStars :stars="stars_number" />
    <div class="text-h4">{{ props.hotel?.name }}</div>
    <div class="text-body1 q-mb-md">
      {{ props.hotel?.address?.fullAddress }},
      {{ props.hotel?.address?.city }} - {{ props.hotel?.address?.state }}
    </div>

    <!-- CAROUSEL -->
    <div class="q-mb-lg">
      <q-carousel control-type="unelevated" control-color="white"
        control-text-color="grey-6" animated v-model="actual_slide" arrows
        infinite class="rounded-borders">
        <q-carousel-slide v-for="(item, idx) in props.hotel?.images"
          :key="`${idx}-item`" :name="idx + 1" :img-src="item" />

        <template #control>
          <q-carousel-control style="left:50%;" position="bottom"
            :offset="[0, 15]">
            <span class="bg-grey-2 text-grey-8 q-pa-sm rounded-borders">{{
              actual_slide }}/{{
    props.hotel?.images?.length }}</span>
          </q-carousel-control>
        </template>
      </q-carousel>
    </div>

    <!-- FACILIDADES -->
    <div class="row">
      <div class="col-12 text-center">
        <div class="text-h5">Facilidades do hotel</div>
        <q-separator class="q-my-md" />

        <div class="row">
          <span v-for="(amenity, idx_amen) in props.hotel?.amenities"
            :key="`${idx_amen}-item`" class="col-4 text-left q-mb-md">
            <q-icon size="1.6rem"
              :name="String(amenity.key).toLocaleLowerCase()" />
            {{ amenity.label }}
          </span>
        </div>

        <q-btn no-caps label="Mostrar todas as facilidades" color="primary"
          outline rounded />

        <q-separator class="q-my-md" />
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="text-h5">Conheça um pouco mais</div>
        <div v-html="props.hotel?.description" />
      </div>
    </div>


    <div>

    </div>

  </div>
</template>

<script setup lang="ts">
import HotelEntity from 'src/models/HotelEntity';
import RatingStars from './RatingStars.vue';
import IconsLibrary from './IconsLibrary.vue';
import { computed, ref } from 'vue';

interface HotelDetailsProps {
  hotel: HotelEntity | null
}

const actual_slide = ref(1)

const stars_number = computed(() => {
  return parseInt(props.hotel?.stars as string)
})

const props = withDefaults(defineProps<HotelDetailsProps>(), {
  hotel: null
})


</script>

<style scoped></style>
