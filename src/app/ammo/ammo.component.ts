import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AmmoTicket, TicketOpts } from '../../assets/interfaces/ammo-ticket';
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
  shoot: boolean;
  error: boolean;
  ticket: AmmoTicket = {
        cal: '',
        date: '',
        brand: '',
        bulletWeight: undefined,
        bulletType: '',
        powderWeight: undefined,
        powderBrand: '',
        primerBrand: '',
        rounds: undefined,
        price: undefined
      }
  ticketOpts: TicketOpts = {
        cal: ["9MM"],
        brand: [''],
        bulletBrand: [''],
        bulletType: [''],
        powderBrand: [''],
        primerBrand: ['']
      }
  ammoTickets: AmmoTicket[] = [];
  
  ngOnInit(): void {
    if (this.router.url == '/reload'){
      this.shoot = false;
      this.reload = true;
      
    }
    else{
      this.reload = false;
      if (this.router.url == '/shoot')
        {this.shoot = true;}
    }
  }
  
  checkInputs(input){
    if (input == '' || input == undefined)
      this.error = true;
    else
      this.error = false;
  }

  saveTicket(){
    const ammo = this.ticket;
    this.checkInputs(this.ticket.cal)
    this.checkInputs(this.ticket.rounds)
    if (!this.error){
      this.ammoTickets.push(ammo);
      console.log(this.ammoTickets)
      this.ticket = {
        cal: '',
        date: '',
        brand: '',
        bulletWeight: undefined,
        bulletType: '',
        powderWeight: undefined,
        powderBrand: '',
        primerBrand: '',
        rounds: undefined,
        price: undefined
      }
    }
  }
  
  showDate(){
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 
  'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let date = new Date();
    let dateString = months[date.getMonth()] + '/' + date.getDate() + '/' + date.getFullYear();
    console.log("Date: " + date + '\n' + "Date String: " + dateString);
    this.ticket.date = dateString;
    return dateString;
  }
  
  addOption(name: string, id: string){
    let data = '';
    Object.keys(this.ticket).forEach(item => {
      if (id == item){
        if (!this.ticket[item]) 
          this.ticket[item] = ' ';
        data = this.ticket[item];
      }
    });
      
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {name: name, option: data}
    });

    dialogRef.afterClosed().subscribe(result => {
      Object.keys(this.ticket).forEach(item => {
        if (id == item){
          this.ticket[item] = result;
          Object.keys(this.ticketOpts).forEach(item2 => {
            if (item == item2)
              this.ticketOpts[item2].push(result);
          })
        }
      });
    });
  
  }
  
  deleteTicket(t){
    for (let i = 0; i < this.ammoTickets.length; i++){
      if (t == this.ammoTickets[i]){
        this.ammoTickets[i].splice(i, 1);
        return
      }
    }
  }
  
  sendTickets(){
    
  }

}
