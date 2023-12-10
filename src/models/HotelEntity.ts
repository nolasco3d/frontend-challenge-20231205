export default class HotelEntity {
  id?: number;
  favorite? = false;
  name?: string;
  description?: string;
  stars?: string;
  thumb?: string;
  amenities?: AmenityType[];
  hasBreakFast? = false;
  hasRefundableRoom? = false;
  hasAgreement? = false;
  nonRefundable?: null | unknown;
  address?: AddressType;
  images?: string[];
  deals?: null | unknown;
  roomQuantity?: number;
  price?: number;

  constructor(this_class?: HotelEntity) {
    if (this_class) {
      Object.entries(this_class).forEach(([key, value]) => {
        if (key in HotelEntity) {
          this[key as keyof HotelEntity] = value;
        }
      });
    }
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
