<template>
  <div class="column q-pa-md">
    <div>
      <span>{{ stars_number }}</span>
      <q-rating size="1.3em" :max="stars_number" color="warning" readonly
        :model-value="stars_number" />
    </div>
    <div class="text-h4">{{ props.hotel?.name }}</div>
    <div>
      {{ props.hotel?.address?.fullAddress }},
      {{ props.hotel?.address?.city }} - {{ props.hotel?.address?.state }}
    </div>

    <!-- CAROUSEL -->
    <div>
      <q-carousel animated v-model="actual_slide" arrows infinite
        class="rounded-borders">
        <q-carousel-slide v-for="(item, idx) in props.hotel?.images"
          :key="`${idx}-item`" :name="idx + 1" :img-src="item" />

        <template #control>
          <q-carousel-control position="bottom" :offset="[30, 0]">
            <span>{{ actual_slide }}/{{ props.hotel?.images?.length }}</span>
          </q-carousel-control>
        </template>
      </q-carousel>
    </div>

    <!-- FACILIDADES -->
    <div class="row">
      <div class="col-12">
        <div class="text-h5">Facilidades do hotel</div>
        <q-separator class="q-my-md" />

        <div class="">

          <p v-for="(amenity, idx_amen) in props.hotel?.amenities"
            :key="`${idx_amen}-item`">
            {{ amenity.key }} - {{ amenity.label }}
          </p>
        </div>

        <q-btn label="Mostrar todas as facilidades" color="primary" outline
          rounded />

        <q-separator class="q-my-md" />
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="text-h5">Conheça um pouco mais</div>
        <p>{{ props.hotel?.description }}</p>
      </div>
    </div>


    <div>

    </div>

  </div>
</template>

<script setup lang="ts">
import HotelEntity from 'src/models/HotelEntity';
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
