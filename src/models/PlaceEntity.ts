export default class PlaceEntity {
  name: string;
  placeId: number;
  state: StateType;

  constructor({ name, placeId, state }: PlaceEntity) {
    this.name = name;
    this.placeId = placeId;
    this.state = state;
  }
}

export type StateType = {
  name: string;
  shortname: string;
};
