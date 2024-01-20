import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";

import { ClientService } from "../../../services/client.service";
import { ToastrService } from 'ngx-toastr';
import { DataSharingService } from 'src/app/services/data-sharing.service';


@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.scss']
})
export class FormCardComponent implements OnInit{

    constructor(
                private formBuilder: FormBuilder, 
                public clientService: ClientService, 
                private toastr: ToastrService,
                private dataSharingService: DataSharingService) {
      this.card = this.formBuilder.group({
        numberCard: 0,
        dateC: '',
        headline: '',
        segurityCode: 0  
      })
    }

    card: FormGroup;
 
    ngOnInit(): void {
    }

    sendDataCard() {
      this.dataSharingService.sendDataCard(this.card.value)
    }
  }
