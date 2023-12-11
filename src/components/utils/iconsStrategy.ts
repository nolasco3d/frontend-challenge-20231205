export const IconsMap = {
  WI_FI: 'wifi',
  MEETING_ROOM: 'meeting_room',
  RESTAURANT: 'restaurant',
  LAUNDRY: 'local_laundry_service',
  ROOM_SERVICE: 'room_service',
  AIR_CONDITIONING: 'air',
  SAFE: 'lock',
  BREAKFAST: 'breakfast_dining',
  PARKING: 'local_parking',
  FITNESS_CENTER: 'fitness_center',
  POOL: 'pool',
  STEAM_ROOM: 'hot_tub',
  PUB: 'sports_bar',
  PETS: 'pets',
};

export type IconsMapKeys = keyof typeof IconsMap;

type IconsMapType = Record<IconsMapKeys, string>;

interface Strategy {
  readonly iconsMap: IconsMapType;
  translateIconName(name: IconsMapKeys): string;
}

export class IconsLibrary {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: Strategy): void {
    this.strategy = strategy;
  }

  getIcon(name: IconsMapKeys) {
    return this.strategy.translateIconName(name);
  }
}

export class MaterialIconsStrategy implements Strategy {
  iconsMap = {
    WI_FI: 'wifi',
    MEETING_ROOM: 'meeting_room',
    RESTAURANT: 'restaurant',
    LAUNDRY: 'laundry',
    ROOM_SERVICE: 'room_service',
    AIR_CONDITIONING: 'air',
    SAFE: 'lock',
    BREAKFAST: 'breakfast_dining',
    PARKING: 'local_parking',
    FITNESS_CENTER: 'fitness_center',
    POOL: 'pool',
    STEAM_ROOM: 'hot_tub',
    PUB: 'sports_bar',
    PETS: 'pets',
  };

  translateIconName(name: IconsMapKeys): string {
    if (name in this.iconsMap) {
      return this.iconsMap[name];
    }
    return '';
  }
}
