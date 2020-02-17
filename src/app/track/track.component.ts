import { Component, OnInit, ViewChild } from "@angular/core";
import { ItemsServiceService } from "../services/items-service.service";
import { MatTableDataSource } from "@angular/material";
import { IItem } from "../interfaces";
import { MatPaginator } from "@angular/material/paginator";
import { DatePipe } from "@angular/common";
import { FormControl, FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-track",
  templateUrl: "./track.component.html",
  styleUrls: ["./track.component.less"]
})
export class TrackComponent implements OnInit {
  title = "Треки";

  dataSourceItems: MatTableDataSource<IItem>;
  displayedColumnsItems: string[] = [
    "flag",
    "flag2",
    "flag3",
    "country",
    "country2",
    "country3",
    "name",
    "date",
    "track",
    "report",
    "distance"
  ];

  filterShowCompleted = new FormGroup({
    showCompleted: new FormControl()
  });

  constructor(private itServ: ItemsServiceService) {}

  fillTableItems() {
    const items: Array<IItem> = this.itServ.getItems();
    this.dataSourceItems = new MatTableDataSource(items.slice(-10).reverse()); //10 последних элементов
  }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.fillTableItems();
    this.dataSourceItems.paginator = this.paginator;
  }

  search(filterValue: string) {
    this.dataSourceItems.filter = filterValue.trim().toLowerCase();
    if (this.dataSourceItems.paginator) {
      this.dataSourceItems.paginator.firstPage();
    }
  }

  countries = [
    {
      name: "Все",
      id: 0
    },
    {
      name: "Россия",
      id: 1
    },
    {
      name: "Абхазия",
      id: 2
    },
    {
      name: "Армения",
      id: 3
    }
    // {
    //   name: "Азербайджан",
    //   id: 4
    // },
    // {
    //   name: "Грузия",
    //   id: 5
    // }
  ];

  applyFilter(filterValue: string) {
    this.fillTableItems(); //все треки

    if (filterValue != "Все") {
      //фильтр по странам     
      /* 
        только country
        todo добавить country2, country3
      */
      // console.log(filterValue);
      this.dataSourceItems.filterPredicate = (data: IItem, filter: string) =>
        !filter ||
        data.country.name.toLowerCase().trim() == filter.toLowerCase().trim();
      this.dataSourceItems.filter = filterValue;

      if (this.dataSourceItems.paginator) {
        this.dataSourceItems.paginator.firstPage();
      }
    }
  }
}
