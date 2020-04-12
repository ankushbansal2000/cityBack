import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-recieved',
  templateUrl: './service-recieved.component.html',
  styleUrls: ['./service-recieved.component.css']
})
export class ServiceRecievedComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.openModal();
  }

  openModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'block';
  }
  closeModel() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
    this.router.navigate(['/home'])
  }

}
