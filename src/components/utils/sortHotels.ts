import HotelEntity from 'src/models/HotelEntity';

export type FilterHoltelType = 'stars' | 'price';
type FilterStrategyType<T> = Record<FilterHoltelType, (arr: T[]) => T[]>;

export const sortByStrategy: FilterStrategyType<HotelEntity> = {
  price: (arr) =>
    arr.toSorted((a, b) => (a!.price as number) - (b!.price as number)),
  stars: (arr) =>
    arr.toSorted(
      (a, b) => parseInt(b.stars as string) - parseInt(a.stars as string)
    ),
};
