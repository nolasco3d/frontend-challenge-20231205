export default class PlaceEntity {
  name?: string;
  placeId?: number;
  state?: StateType;

  constructor(this_class?: PlaceEntity) {
    if (this_class) {
      Object.entries(this_class).forEach(([key, value]) => {
        if (key in PlaceEntity) {
          this[key as keyof PlaceEntity] = value;
        }
      });
    }
  }
}

export type StateType = {
  name?: string;
  shortname?: string;
};
