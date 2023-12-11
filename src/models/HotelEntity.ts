export default class HotelEntity {
  id: number;
  favorite = false;
  name: string;
  description: string;
  stars: string;
  thumb: string;
  amenities: AmenityType[];
  hasBreakFast = false;
  hasRefundableRoom? = false;
  hasAgreement = false;
  nonRefundable: null | unknown;
  address: AddressType;
  images: string[];
  deals: null | unknown;
  roomQuantity: number;
  price: number;

  constructor({
    id,
    deals,
    description,
    name,
    price,
    roomQuantity,
    stars,
    thumb,
    address,
    amenities,
    favorite,
    hasAgreement,
    hasBreakFast,
    hasRefundableRoom,
    images,
    nonRefundable,
  }: HotelEntity) {
    this.id = id;
    this.favorite = favorite;
    this.name = name;
    this.description = description;
    this.stars = stars;
    this.thumb = thumb;
    this.amenities = amenities;
    this.hasBreakFast = hasBreakFast;
    this.images = images;
    this.hasAgreement = hasAgreement;
    this.nonRefundable = nonRefundable;
    this.hasRefundableRoom = hasRefundableRoom;
    this.address = address;
    this.deals = deals;
    this.roomQuantity = roomQuantity;
    this.price = price;
  }
}

export type AmenityType = {
  key: string;
  label: string;
};

export type AddressType = {
  street: string;
  number: string;
  district: string;
  city: string;
  state: string;
  country: string;
  zipCode: string | null;
  fullAddress: string;
};
