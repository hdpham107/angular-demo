import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public name: string = '';
  public email: string = '';
  public gia: number = 5;

  public cities: any[] = [
    {
      cityName: 'Chọn thành phố',
      district: ['Chọn huyện'],
    },
    {
      cityName: 'An Giang',
      district: ['Huyện Tân Châu', 'Huyện Chợ Mới', 'TP Long Xuyên'],
    },
    {
      cityName: 'Đồng Tháp',
      district: ['Huyện Lai Vung', 'Huyện Tháp Mười', 'TP Sa Đéc'],
    },
  ];

  public districts: string[] = [];

  constructor() {}

  ngOnInit() {
    console.log(this.cities);
  }

  public DisplayName(thamso: any): void {
    this.name = thamso.value;
    console.log(thamso);
  }

  public changeCity(event: any): void {
    const city = event.target.value;
    console.log(city);

    if (!city) {
      return;
    }

    // const search = this.cities.filter((item) => item.cityName === city);
    // console.log(search);

    // if (search && search.length > 0) {
    //   this.districts = search[0].district;
    // }

    this.districts =
      this.cities.find((item) => item.cityName === city)?.district || [];
  }
}
