import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AmmoTicket } from '../../assets/interfaces/ammo-ticket';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/option-dialog.component';

export interface DialogData {
  name: string;
  option: string;
}

@Component({
  selector: 'app-ammo',
  templateUrl: './ammo.component.html',
  styleUrls: ['./ammo.component.css']
})
export class AmmoComponent implements OnInit {
  constructor(private router: Router, public dialog: MatDialog) { }
  
  reload: boolean;
  ticket: AmmoTicket;
  ammoTickets: AmmoTicket[];
  
  ngOnInit(): void {
    if (this.router.url == '/reload'){
      console.log(this.router.url);
      this.reload = true;
      this.ticket = {
        cal: '',
        bulletWeight: 0,
        bulletType: '',
        powderWeight: 0,
        powderBrand: '',
        primerBrand: '',
        rounds: 0
      }
    }
    else{
      console.log(this.router.url);
      this.reload = false;
      this.ticket = {
        cal: '',
        brand: '',
        bulletWeight: 0,
        bulletType: '',
        rounds: 0
      }
    }
  }
  
  updateTicket(/*ticket, info*/){
    // ticket = info;
    // console.log(ticket);
    console.log("Function is functioning lol")
  }
  
  saveTicket(){
    console.log(this.ticket)
    //this.ammoTickets.push(this.ticket);
  }
  
  addOption(name: string){
    let data;
    Object.keys(this.ticket).forEach(item => {
      if (name == item){
        console.log(item)
        if (!this.ticket[item]) 
          this.ticket[item] = ' ';
        data = this.ticket[item]
      }
    })
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {name: name, option: data}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed. Ticket: ' + this.ticket);
      
    });
  }
  
  sendTickets(){
    
  }

}
