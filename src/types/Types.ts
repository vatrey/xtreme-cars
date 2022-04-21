export interface Car {
  id: string;
  name: string;
  price: string;
  image: string;
  type: string;
}

export interface CarDetails {
  cost: string;
  specifications: specifications;
  exterior: exterior;
  interior: interior;
}

export interface specifications {
  name: string;
  fuel_type: string;
  engine_cc: string;
  torque: string;
  acceleration: string;
  top_speed: string;
  variant: string[];
  image: string;
}

export interface exterior {
  length: string;
  width: string;
  color: string;
  image: string;
}

export interface interior {
  text: string[];
  color: string;
  image1: string;
  image2: string;
}

export interface CarList {
  data: Car[];
}

export interface Action {
  type: string;
  payload?: Car[];
}