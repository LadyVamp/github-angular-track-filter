import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
  isSpecial :number = null;

  constructor() { }

  addClassActive(ev) { //добавить класс active нажатой кнопке
    ev.preventDefault();
    // console.log(ev);
    if(ev.target.dataset.number) {
      this.isSpecial = ev.target.dataset.number;
    } else {
      this.isSpecial = ev.target.offsetParent.dataset.number;
    }
   
  }
  
  ngOnInit() {

  }

}

