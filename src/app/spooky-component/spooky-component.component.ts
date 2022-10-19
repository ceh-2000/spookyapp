import { Component, OnInit } from '@angular/core';
import {CallApiEndpointService} from "../call-api-endpoint.service";

@Component({
  selector: 'app-spooky-component',
  templateUrl: './spooky-component.component.html',
  styleUrls: ['./spooky-component.component.css']
})
export class SpookyComponentComponent implements OnInit {
  title: string = "My title";

  constructor(private apiEndpointService: CallApiEndpointService) { }

  ngOnInit(): void {
    this.apiEndpointService.get_data().then((result: string)=>{
      alert("hi");
      this.title = result;
    })
  }

}
