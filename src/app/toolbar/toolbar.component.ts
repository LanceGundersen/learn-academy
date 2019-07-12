import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass'],
})
export class ToolbarComponent implements OnInit {
  title = 'Learn Academy'

  constructor() {}

  ngOnInit() {}
}
