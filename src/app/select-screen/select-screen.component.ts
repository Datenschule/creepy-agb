import { Component, OnInit } from '@angular/core';
import { PlatformService } from '../platform.service';

@Component({
  selector: 'app-select-screen',
  templateUrl: './select-screen.component.html',
  styleUrls: ['./select-screen.component.css']
})
export class SelectScreenComponent implements OnInit {

  services: any;

  constructor(private platformService: PlatformService) { }

  ngOnInit() {
    this.platformService.loadData()
      .subscribe((data) => {
        //debugger
        this.services = data[0].services;
      });
  }

  selectService(id) {
    if (!id) { return; }
    this.platformService.saveService(id);
  }
}
