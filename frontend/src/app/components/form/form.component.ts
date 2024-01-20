import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  roomId: string | null;
  roomTitle: string | null;
  roomPrice: number | null;

  constructor(
    private route: ActivatedRoute) {
    this.roomId = null;
    this.roomTitle = null;
    this.roomPrice = null;
  }

  ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
          this.roomId = params['roomId'];
          this.roomTitle = params['roomTitle'];
          this.roomPrice = params['roomPrice'];
      });
  }
}
