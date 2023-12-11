export enum MaterialIconsMap {
  'WI_FI' = 'wifi',
}

type IconsMapType = { [index: string]: string };

interface Strategy {
  readonly iconsMap: IconsMapType;
  translateIconName(name: keyof IconsMapType): string;
}

export class IconsLibrary {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: Strategy): void {
    this.strategy = strategy;
  }

  getIcon(name: string) {
    return this.strategy.translateIconName(name);
  }
}

export class MaterialIconsStrategy implements Strategy {
  iconsMap: IconsMapType = {
    WI_FI: 'wifi',
    MEETING_ROOM: 'meeting_room',
    RESTAURANT: 'restaurant',
    LAUNDRY: 'laundry',
    ROOM_SERVICE: 'Serviço de quarto',
    AIR_CONDITIONING: 'Ar condicionado',
    SAFE: 'Cofre',
    BREAKFAST: 'Café da manhã',
    PARKING: 'Estacionamento',
    FITNESS_CENTER: 'Academia',
    POOL: 'Piscina',
    STEAM_ROOM: 'Sauna',
    PUB: 'Bar',
    PETS: 'Aceita animais de estimação',
  };

  translateIconName(name: string): string {
    if (name in this.iconsMap) {
      return this.iconsMap[name];
    }
    return '';
  }
}
