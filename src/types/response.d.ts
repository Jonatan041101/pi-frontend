export interface Breeds {
  heigth: string;
  id: string;
  image: string;
  name: string;
  temperRace: TemperRace[];
  weight: string;
  yearsOfLife: string;
}

export interface TemperRace {
  id: string;
  temper: Temper;
}

export interface Temper {
  id: string;
  name: string;
}
