import { defineStore } from 'pinia';
import Hotels from '@/assets/hotel.json';
import Places from '@/assets/place.json';
import PlaceEntity from 'src/models/PlaceEntity';
import HotelEntity from 'src/models/HotelEntity';

interface PlaceStoreState {
  placesList: PlaceEntity[];
}

interface HotelStoreState extends PlaceStoreState {
  rightDrawerOpen: boolean;
  hotelsList: HotelsListType[];
}

export type HotelsListType = {
  placeId: string;
  hotels: HotelEntity[];
};

export const useHotelStore = defineStore('hotel', {
  state: (): HotelStoreState => ({
    rightDrawerOpen: false,
    hotelsList: [...Hotels],
    placesList: [...Places],
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    toggleRightDrawer(): void {
      this.rightDrawerOpen = !this.rightDrawerOpen;
    },
    // increment() {
    //   this.counter++;
    // },
  },
});
