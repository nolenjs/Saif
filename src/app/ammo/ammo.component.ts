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
  ticket: AmmoTicket;
  ammoTickets: AmmoTicket[];
  selectOpt: boolean;
  
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
  
  addOption(boo: boolean){
    if(boo) 
      this.selectOpt = boo;
    else if(!boo){
      //new comlumn/row in 
      this.selectOpt = boo;
    }
  }
  
  saveTicket(){
    console.log(this.ticket)
    //this.ammoTickets.push(this.ticket);
  }
  
  sendTickets(){
    
  }

}
