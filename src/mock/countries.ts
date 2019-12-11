import {delay} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

export interface ICountry {
  img: string;
  address: string;
  phone: number;
  weather: {
    title: string;
    icon: string;
    water: number;
    temperature: number
  };
  social_info: {
    title: string;
    img: string;
    followers: number;
    following: number
  };
  type: string;
}

export const countries: ICountry[] = [
  {
    img: 'assets/images/countries/1_1.jpg',
    address: 'Gudautskii area, Abhazia',
    phone: 94010345,
    weather: {
      title: 'cloud',
      icon: 'assets/images/cloudy.png',
      water: 16,
      temperature: 18
    },
    social_info: {
      title: 'Lake Rica',
      img: 'assets/images/countries/1_2.jpg',
      followers: 20000,
      following: 100
    },
    type: 'Abkhazia'
  },
  {
    img: 'assets/images/countries/1_3.jpg',
    address: '16, Chanba street, Abhazia',
    phone: 94012346,
    weather: {
      title: 'cloud',
      icon: 'assets/images/cloudy.png',
      water: 15,
      temperature: 6
    },
    social_info: {
      title: 'Novoafonskaya cave',
      img: 'assets/images/countries/1_4.jpg',
      followers: 11000,
      following: 26
    },
    type: 'Abkhazia'
  },
  {
    img: 'assets/images/countries/1_5.jpg',
    address: '9 Kabarda Street, Gagra, Abhazia',
    phone: 94010046,
    weather: {
      title: 'sun',
      icon: 'assets/images/sun.svg',
      water: 13,
      temperature: 5
    },
    social_info: {
      title: 'Gagrskaya kolonnada',
      img: 'assets/images/countries/1_6.jpg',
      followers: 101000,
      following: 109
    },
    type: 'Abkhazia'
  },
  {
    img: 'assets/images/countries/1_7.jpg',
    address: '26, Karlovo Street, Gagra, Abhazia',
    phone: 94014346,
    weather: {
      title: 'sun',
      icon: 'assets/images/sun.svg',
      water: 10,
      temperature: 5
    },
    social_info: {
      title: 'Prince Oldenburg Castle',
      img: 'assets/images/countries/1_8.jpg',
      followers: 145000,
      following: 125
    },
    type: 'Abkhazia'
  },
  {
    img: 'assets/images/countries/1_9.jpg',
    address: 'Sochumi, Abhazia',
    phone: 94014346,
    weather: {
      title: 'sun',
      icon: 'assets/images/sun.svg',
      water: 12,
      temperature: 7
    },
    social_info: {
      title: 'Dioskurov Embankment',
      img: 'assets/images/countries/1_10.jpg',
      followers: 14000,
      following: 1985
    },
    type: 'Abkhazia'
  },
  {
    img: 'assets/images/countries/2_1.jpg',
    address: '1 Sheikh Mohammed bin Rashid Blvd - Dubai',
    phone: 97143661655,
    weather: {
      title: 'sun',
      icon: 'assets/images/sun.svg',
      water: 28,
      temperature: 25
    },
    social_info: {
      title: 'Burj Khalifa',
      img: 'assets/images/countries/2_2.jpg',
      followers: 14000657,
      following: 198568
    },
    type: 'UAE'
  },
  {
    img: 'assets/images/countries/2_3.jpg',
    address: 'Jumeirah Beach Road,Jumeria 1',
    phone: 97143536666,
    weather: {
      title: 'sun',
      icon: 'assets/images/sun.svg',
      water: 28,
      temperature: 26
    },
    social_info: {
      title: 'Jumeirah Mosque',
      img: 'assets/images/countries/2_4.jpg',
      followers: 140006,
      following: 19
    },
    type: 'UAE'
  },
  {
    img: 'assets/images/countries/2_5.jpg',
    address: 'Sheikh Rashid Bin Saeed St - Abu Dhabi',
    phone: 97143536656,
    weather: {
      title: 'sun',
      icon: 'assets/images/sun.svg',
      water: 25,
      temperature: 26
    },
    social_info: {
      title: 'Sheikh Zayed Mosque',
      img: 'assets/images/countries/2_6.jpg',
      followers: 14000676,
      following: 1943
    },
    type: 'UAE'
  },
  {
    img: 'assets/images/countries/2_7.jpg',
    address: 'Dubai',
    phone: 971800382246255,
    weather: {
      title: 'sun',
      icon: 'assets/images/sun.svg',
      water: 27,
      temperature: 29
    },
    social_info: {
      title: 'Dubai Aquarium',
      img: 'assets/images/countries/2_8.jpg',
      followers: 140006763,
      following: 194
    },
    type: 'UAE'
  },
  {
    img: 'assets/images/countries/3_1.jpg',
    address: 'Elizabeth Avenue, Nassau, Bahamas',
    phone: 12426777200,
    weather: {
      title: 'sun',
      icon: 'assets/images/sun.svg',
      water: 17,
      temperature: 18
    },
    social_info: {
      title: 'Royal staircase',
      img: 'assets/images/countries/3_2.jpg',
      followers: 14048,
      following: 13
    },
    type: 'Bahamas'
  },
  {
    img: 'assets/images/countries/3_3.jpg',
    address: 'W Bay St, Nassau',
    phone: 12423632000,
    weather: {
      title: 'cloud',
      icon: 'assets/images/cloudy.png',
      water: 15,
      temperature: 17
    },
    social_info: {
      title: 'Nassau Straw Market',
      img: 'assets/images/countries/3_4.jpg',
      followers: 14048,
      following: 13
    },
    type: 'Bahamas'
  },
  {
    img: 'assets/images/countries/3_5.jpg',
    address: 'Isla Harbour',
    phone: 12423632035,
    weather: {
      title: 'sun',
      icon: 'assets/images/sun.svg',
      water: 19,
      temperature: 22
    },
    social_info: {
      title: 'Pink Sands Beach',
      img: 'assets/images/countries/3_6.jpg',
      followers: 16578,
      following: 132
    },
    type: 'Bahamas'
  },
  {
    img: 'assets/images/countries/4_1.jpg',
    address: 'Espiritu Santo Island, Luganville, Espiritu Santo',
    phone: 6785420957,
    weather: {
      title: 'sun',
      icon: 'assets/images/sun.svg',
      water: 26,
      temperature: 30
    },
    social_info: {
      title: 'SS President Coolidge',
      img: 'assets/images/countries/4_2.jpg',
      followers: 16578,
      following: 132
    },
    type: 'Vanuatu'
  },
  {
    img: 'assets/images/countries/4_3.jpg',
    address: 'Millennium Cave Luganville Santo',
    phone: 6785470957,
    weather: {
      title: 'sun',
      icon: 'assets/images/sun.svg',
      water: 25,
      temperature: 29
    },
    social_info: {
      title: 'Millennium Cave',
      img: 'assets/images/countries/4_4.jpg',
      followers: 1657,
      following: 13
    },
    type: 'Vanuatu'
  },
  {
    img: 'assets/images/countries/5_1.jpg',
    address: 'Libreville',
    phone: 22964548205,
    weather: {
      title: 'sun',
      icon: 'assets/images/sun.svg',
      water: 20,
      temperature: 26
    },
    social_info: {
      title: 'Pointe-Denis Beach',
      img: 'assets/images/countries/5_2.jpg',
      followers: 165,
      following: 101
    },
    type: 'Gabon'
  }
];
export const countries$: Observable<ICountry[]> = of(countries)
  .pipe(
    delay(300)
  );


