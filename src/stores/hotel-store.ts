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
  hotelSelected?: HotelEntity | null;
}

export type HotelsListType = {
  placeId: number;
  hotels: HotelEntity[];
};

export const useHotelStore = defineStore('hotel', {
  state: (): HotelStoreState => ({
    rightDrawerOpen: false,
    hotelsList: [...Hotels],
    placesList: [...Places],
    hotelSelected: null,
  }),
  getters: {
    getHotelsByPlaceId: (state) => {
      return (placeId: number): HotelEntity[] => {
        const hotels: HotelEntity[] =
          state.hotelsList.find((item) => item.placeId === placeId)?.hotels ??
          [];

        return hotels;
      };
    },
  },
  actions: {
    toggleRightDrawer(): void {
      this.rightDrawerOpen = !this.rightDrawerOpen;
    },
    setSelectHotel(hotel: HotelEntity): void {
      this.hotelSelected = hotel;
    },
    clearSelectedHotel(): void {
      this.hotelSelected = null;
    },
  },
});
