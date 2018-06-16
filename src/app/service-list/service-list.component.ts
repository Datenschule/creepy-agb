import { Component, OnInit } from '@angular/core';
import { AgbService } from '../agb.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  services: any;
  agb: any;

  constructor(private agbService: AgbService) { }

  ngOnInit() {
    this.getAgb();
    this.getServices();
  }

  getServices() {
    this.services = this.agbService.getSelectedServices();
  }

  getAgb() {
    this.agbService.getServices()
      .subscribe((data) => {
        this.agb = data[0];
      });
  }

}
