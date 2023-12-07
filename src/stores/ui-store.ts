import { defineStore } from 'pinia';

interface UIStoreState {
  rightDrawerOpen: boolean;
}

export const useUIStore = defineStore('UI', {
  state: (): UIStoreState => ({
    // counter: 0,
    rightDrawerOpen: false,
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
