import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsServiceService {
  constructor() {}

  //иконки http://ru.freeflagicons.com/country/
  // https://snipboard.io/X7x8so.jpg Абхазия
  // https://snipboard.io/NDibya.jpg Азербайджан
  // https://snipboard.io/W4awRn.jpg Армения
  // https://snipboard.io/uPTQIh.jpg Россия
  // https://snipboard.io/tYsyAB.jpg Грузия

  getItems(
    id?: number
  ): Array<{
    id: number;
    country: { id: number; name: string; flag: string };
    country2?: { id: number; name: string; flag: string };
    country3?: { id: number; name: string; flag: string };
    region?: { id: number; name: string };
    name: string;
    date: string;
    track: string;
    distance?: number;
    report?: string;
    map?: string;
  }> {
    return [
      {
        id: 1,
        country: {
          id: 1,
          name: 'Россия',
          flag: 'https://snipboard.io/uPTQIh.jpg'
        },
        country2: { id: 1, name: '', flag: '' },
        country3: { id: 1, name: '', flag: '' },
        region: { id: 12, name: 'Нижегородская обл.' },
        name: 'Велопоход 1 к.с. по Нижегородской области',
        date: '16.09-22.09.2017',
        track: 'https://www.gpsies.com/mapFolder.do?id=98189',
        distance: 355.2,
        report:
          'http://tkmgtu.ru/files/velo/otchet/1kc_Averina_Nizhegorodskaya_obl_2017.pdf',
        map:
          '<iframe class="gpsies" src="//www.gpsies.com/mapFolderOnly.do?id=98189" width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>'
      },
      {
        id: 2,
        country: {
          id: 2,
          name: 'Абхазия',
          flag: 'https://snipboard.io/X7x8so.jpg '
        },
        country2: {
          id: 1,
          name: 'Россия',
          flag: 'https://snipboard.io/uPTQIh.jpg'
        },
        country3: { id: 1, name: '', flag: '' },
        name: 'Лазуревые струи',
        date: '28.04-13.05.2018',
        track: 'https://www.gpsies.com/map.do?fileId=jpmzllxfszzjatsv',
        distance: 631.87
      },
      {
        id: 3,
        country: {
          id: 1,
          name: 'Россия',
          flag: 'https://snipboard.io/uPTQIh.jpg'
        },
        country2: { id: 1, name: '', flag: '' },
        country3: { id: 1, name: '', flag: '' },
        region: { id: 51, name: 'Мурманская обл.' },
        name: 'Велопоход 4 к.с. по Кольскому полуострову',
        date: '14.07-29.07.2018',
        track: 'https://www.gpsies.com/map.do?fileId=ghqkvmkegjdrkwbk',
        report:
          'https://drive.google.com/drive/u/0/folders/1-7M09DJhyAeIiVkqZAmAQoh98m3S2peq',
        distance: 623.19
      },
      {
        id: 4,
        country: {
          id: 1,
          name: 'Россия',
          flag: 'https://snipboard.io/uPTQIh.jpg'
        },
        country2: { id: 1, name: '', flag: '' },
        country3: { id: 1, name: '', flag: '' },
        region: { id: 91, name: 'Крым' },
        name: 'Велопутешествие из Кавказа в Крым',
        date: '30.04 - 15.05.2019',
        track: 'https://www.gpsies.com/map.do?fileId=pguhcytgaiqkexrn',
        report:
          'https://zen.yandex.ru/media/id/5d3eca34ae56cc00addf0751/beguscie-za-solncem-velopohod-iz-kavkaza-v-krym-i-5d41c35746f4ff00ad446484',
        distance: 665.75
      },
      {
        id: 5,
        country: {
          id: 3,
          name: 'Армения',
          flag: 'https://snipboard.io/W4awRn.jpg'
        },
        country2: {
          id: 4,
          name: 'Азербайджан',
          flag: 'https://snipboard.io/NDibya.jpg'
        },
        country3: {
          id: 5,
          name: 'Грузия',
          flag: 'https://snipboard.io/tYsyAB.jpg'
        },
        name: 'Кочари',
        date: '14.09 - 28.09.2019',
        track: 'https://www.gpsies.com/map.do?fileId=qtekctbpgrepjjhj',
        distance: 938.52
      },
      {
        id: 6,
        country: {
          id: 1,
          name: 'Россия',
          flag: 'https://snipboard.io/uPTQIh.jpg'
        },
        country2: { id: 1, name: '', flag: '' },
        country3: { id: 1, name: '', flag: '' },
        region: { id: 23, name: 'Краснодарский край' },
        name: 'Маршрут № 30: через горы к Черному морю через приют Фишт',
        date: '13.06 - 17.06.2021',
        track:
          'https://nakarte.me/#m=11/43.96193/39.92157&l=O/J&nktl=qFWWNS3OZpTVRQS3gZG4xg',
        report:
          'https://zen.yandex.ru/media/id/5d3eca34ae56cc00addf0751/cherez-gory-k-moriu-marshrut-30ka-60d58e07c02b5a59e6f9e364',
        distance: 86.1
      }
    ];
  }
}
