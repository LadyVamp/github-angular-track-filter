import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsServiceService } from '../services/items-service.service';



@Component({
  selector: 'app-track-details',
  templateUrl: './track-details.component.html',
  styleUrls: ['./track-details.component.less']
})
export class TrackDetailsComponent implements OnInit {
  item: {id:number};
  
  constructor(
    private itServ: ItemsServiceService,
    private route: ActivatedRoute,
     ) {

   }

  ngOnInit() {
    this.getItem();
  }

  getItem() : void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.item = this.itServ.getItems(id).find( (it:{id:number}) =>  it.id === id);
  }

}

