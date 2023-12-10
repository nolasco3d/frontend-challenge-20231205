<template>
  <q-page padding class="row">
    <div class="container col-12 col-sm-11 col-md-10 q-mx-auto">
      <!-- SEARCH BY PLACE -->
      <div class="row">
        <div class="col-12">
          <q-form ref="searchForm" @submit="handleSubmitForm">
            <form-search>
              <!-- INPUT -->
              <q-select label-slot lazy-rules
                :rules="[val => val || 'Selecione um destino']" v-model="place"
                :options="hotel_store.placesList" :option-label="getLabelInput"
                :display-value="`${place ? `${place?.name}, ${place?.state?.shortname}` : ''}`">

                <!-- INPUT LABEL -->
                <template #label>
                  Destino <span class="text-negative">*</span>
                </template>
              </q-select>

              <!-- ACTION -->
              <template #action>
                <q-btn class="q-px-xl" type="submit" unelevated rounded
                  color="primary" :label="actionButtonLabel" />
              </template>
            </form-search>
          </q-form>
        </div>
      </div>


      <div class="row">
        <!-- BREADCRUMBS -->
        <div class="col-12 col-md-8">
          <q-breadcrumbs class="q-my-md text-grey-8">
            <!-- BREADCRUM ICON SEPARATOR -->
            <template #separator>
              <q-icon size="1.5em" name="chevron_right" color="primary" />
            </template>
            <!-- BREADCRUM ICON SEPARATOR -->

            <q-breadcrumbs-el label="Início" />
            <q-breadcrumbs-el label="Hotéis" />
            <q-breadcrumbs-el v-if="place"
              :label="`Hospedagem em ${place.name}`" />
          </q-breadcrumbs>
        </div>

        <!-- FILTER  -->
        <div class="col-12 col-md-4 flex items-center justify-end text-grey-8">
          Organizar por
          <q-select color="primary" borderless v-model="currentFilter"
            style="min-width: 130px;" class="q-ml-sm" map-options emit-value
            options-label="label" :options="[
              { label: 'Recomendados', value: 'price' },
              { label: 'Melhor Avaliados', value: 'stars' },
            ]
              ">

            <template #selected-item="scope">
              <span class="text-primary text-bold text-italic">{{ scope.opt.label
              }}</span>
            </template>
          </q-select>
        </div>
      </div>

      <template
        v-if="hotel_store.searchResults && hotel_store.searchResults?.length === 0">
        <NoResultCard />
      </template>

      <template
        v-else-if="hotel_store.searchResults && hotel_store.searchResults?.length > 0">
        <q-infinite-scroll class="" @load="scrollHandler" :offset="100">
          <hotel-list-item v-for="hotel in  listHotelsByPlace "
            :key="`hotel-card-${hotel.id}`" :hotel="hotel"
            @action="handleActionListItem(hotel)">
          </hotel-list-item>

          <template #loading>
            <div class="row justify-center items-center q-my-md">
              <q-spinner-dots color="primary" size="40px" />
            </div>
          </template>
        </q-infinite-scroll>
      </template>

    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import FormSearch from 'components/Form/FormSearch.vue'
import NoResultCard from 'src/components/NoResultCard.vue';
import HotelListItem from 'src/components/HotelListItem.vue';
import { useHotelStore } from 'src/stores/hotel-store';
import { useUIStore } from 'src/stores/ui-store';
import PlaceEntity from 'src/models/PlaceEntity';
import HotelEntity from 'src/models/HotelEntity';
import { FilterHoltelType, sortByStrategy } from 'components/utils/sortHotels'


const hotel_store = useHotelStore()
const ui_store = useUIStore()
const place = ref<PlaceEntity | null>(null)
const currentFilter = ref<FilterHoltelType>('price')
const listHotelLimiter = ref(5)
const searchForm = ref(null)
const actionButtonLabel = computed(() => hotel_store.searchResults?.length ? 'Alterar Busca' : 'Buscar')

const listHotelsByPlace = computed(() => {
  return sortByStrategy[currentFilter.value](hotel_store.searchResults ?? [])
    .slice(0, listHotelLimiter.value)
})


function handleSubmitForm(): void {
  if (!place.value) return
  hotel_store.getHotelsByPlaceId(place.value.placeId as number)
}

function scrollHandler(index: number, done: any) {

  // Usei setTimeout para simular uma requisição
  setTimeout(() => {
    console.log(listHotelLimiter.value, 'Limiter')
    listHotelLimiter.value += 5
    listHotelLimiter.value >= (hotel_store.searchResults ?? []).length
      ? done(true)
      : done()
  }, 1000)

}

function handleActionListItem(hotel: HotelEntity): void {
  hotel_store.setSelectHotel(hotel)
  ui_store.toggleRightDrawer()
}


function getLabelInput(option: PlaceEntity): string {
  return `${option.name}, ${option.state?.name}`
}

</script>

<style lang="scss" scoped></style>
