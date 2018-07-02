import { Component, OnInit } from '@angular/core';
import { PlatformService } from '../platform.service';

@Component({
  selector: 'app-result-screen',
  templateUrl: './result-screen.component.html',
  styleUrls: ['./result-screen.component.css']
})
export class ResultScreenComponent implements OnInit {

  services: any;
  selected: any;
  categories: any;

  constructor(private platformService: PlatformService) { }

  ngOnInit() {
    this.platformService.loadData()
      .subscribe((data) => {
        //debugger
        this.services = data[0].services;
        this.categories = data[0].categories;
      });
    this.selected = this.platformService.getSelectedServices();
  }

}
