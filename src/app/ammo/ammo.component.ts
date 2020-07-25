import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AmmoTicket } from '../../assets/interfaces/ammo-ticket';

@Component({
  selector: 'app-ammo',
  templateUrl: './ammo.component.html',
  styleUrls: ['./ammo.component.css']
})
export class AmmoComponent implements OnInit {
  constructor(private router: Router) { }
  reload: boolean;
  ammoTickets: AmmoTicket[];
  
  ngOnInit(): void {
    if (this.router.url == '/reload'){
      console.log(this.router.url);
      this.reload = true;
    }
    else{
      console.log(this.router.url);
      this.reload = false;
    }
  }
  
  saveTicket(){
    
  }
  
  sendTickets(tickets: AmmoTicket[]){
    
  }

}
