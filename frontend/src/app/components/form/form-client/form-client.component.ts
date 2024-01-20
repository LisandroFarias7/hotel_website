import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClientService } from 'src/app/services/client.service';
import { DataSharingService } from 'src/app/services/data-sharing.service';



@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit{

  constructor(private formBuilder: FormBuilder, 
    public clientService: ClientService,
    private router: Router,
    private toastr: ToastrService,
    private dataSharingService: DataSharingService
  
    ) {
    this.client = this.formBuilder.group({
      name: '',
      lastname: '',
      address: '',
      email: '',
      city: '',
      phone: 0
    })
  }

  ngOnInit(): void {
  }

  client: FormGroup;
  
  sendDataClient() {
    this.dataSharingService.sendDataClient(this.client.value)
  }
  
}
