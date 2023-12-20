type ContactAddress = {
  phoneNumber: string;
  name: string;
};

type DeliveryAddress = {
  postalCode: string;
  prefectures: string;
  municipalities: string;
  streetNumber: string;
};

type PostNewDeliveryAddress = {
  contactAddress: ContactAddress;
  deliveryAddress: DeliveryAddress;
};

export type { PostNewDeliveryAddress };
