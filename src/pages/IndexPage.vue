<template>
  <q-page padding class="row">
    <div class="container col-12 col-md-10 q-mx-auto">
      <!-- SEARCH BY PLACE -->
      <div class="row">
        <div class="col-12">
          <form-search @action="ui_store.toggleRightDrawer()">
            <!-- INPUT -->
            <q-select label-slot v-model="place" :options="hotel_store.placesList"
              :option-label="getLabelInput"
              :display-value="`${place ? `${place?.name}, ${place?.state?.shortname}` : ''}`">

              <!-- INPUT LABEL -->
              <template #label>
                Destino <span class="text-negative">*</span>
              </template>
            </q-select>

            <!-- ACTION -->
            <template #action>
              <q-btn class="q-px-xl" unelevated rounded color="primary"
                :label="actionButtonLabel" @click="message" />
            </template>
          </form-search>
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


      <!-- HOTELS LIST -->
      <div class="row">
        <template v-if="!listHotelsByPlace.length && !place">
          Selecione um destino!
        </template>

        <template v-else-if="listHotelsByPlace.length && place">
          <hotel-list-item
            v-for="( hotel, item_idx ) in  listHotelsByPlace.slice(0, 5) "
            :key="`${item_idx}-id`" :hotel="hotel"
            @action="handleActionListItem(hotel)">
          </hotel-list-item>
        </template>

        <template v-else>
          Nenhum hotel localizado..
        </template>

      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import FormSearch from 'components/Form/FormSearch.vue'
import HotelListItem from 'src/components/HotelListItem.vue';
import { useHotelStore } from 'src/stores/hotel-store';
import { useUIStore } from 'src/stores/ui-store';
import PlaceEntity from 'src/models/PlaceEntity';
import HotelEntity from 'src/models/HotelEntity';

type FilterHoltelType = 'stars' | 'price'
type FilterStrategyType<T> = Record<FilterHoltelType, (arr: T[]) => T[]>

const hotel_store = useHotelStore()
const ui_store = useUIStore()
const place = ref<PlaceEntity | null>(null)
const currentFilter = ref<FilterHoltelType>('price')
const listHotelLimiter = ref(5)

const actionButtonLabel = computed(() => place.value ? 'Alterar Busca' : 'Buscar')

const sortByStrategy: FilterStrategyType<HotelEntity> = {
  price: (arr) => arr.toSorted((a, b) => (a!.price as number) - (b!.price as number)),
  stars: (arr) => arr.toSorted((a, b) => parseInt(b.stars as string) - parseInt(a.stars as string))
}

const listHotelsByPlace = computed(() => {
  if (!place.value) return []
  const res = hotel_store.getHotelsByPlaceId(place.value.placeId as number)
  console.log(res)
  return sortByStrategy[currentFilter.value](res)
})

function handleActionListItem(hotel: HotelEntity): void {
  hotel_store.setSelectHotel(hotel)
  ui_store.toggleRightDrawer()
}

function message(): void {
  alert('Hello!')
  handleSubmitForm()
}

function handleSubmitForm(): void {
  console.log('Update state with correct placeId');
  console.log('Filter results');
}

function getLabelInput(option: PlaceEntity): string {
  return `${option.name}, ${option.state?.name}`
}

function searchForHotels(): void {
  console.log('Called!')

}


</script>

<style lang="scss" scoped></style>
