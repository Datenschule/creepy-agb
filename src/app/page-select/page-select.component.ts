import { Component, OnInit } from '@angular/core';
import { AgbService } from '../agb.service';

@Component({
  selector: 'app-page-select',
  templateUrl: './page-select.component.html',
  styleUrls: ['./page-select.component.css']
})
export class PageSelectComponent implements OnInit {

  agb: any;

  constructor(private agbService: AgbService) { }

  ngOnInit() {
    this.getAgb();
  }

  getAgb() {
    this.agbService.getServices()
      .subscribe((data) => {
        this.agb = data[0];
      });
  }


  selectService(id) {
    if (!id) { return; }
    this.agbService.saveService(id);
  }
}
