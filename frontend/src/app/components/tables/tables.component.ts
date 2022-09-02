import { Component, OnInit } from '@angular/core';
import { TablesService } from '../../services/tables.service'
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  constructor(public tablesservice: TablesService) { }

  ngOnInit(): void {
    this.getTables();
  }

  getTables(){
    this.tablesservice.getTables().subscribe(
      (res) => {
        this.tablesservice.tables = res;
      },
      (err) => console.error(err)
    )
  }
}
