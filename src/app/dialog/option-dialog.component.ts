import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from "@angular/material/dialog";
import { FormBuilder } from '@angular/forms';

export interface DialogData {
  name: string;
  option: string;
}

@Component({
  selector: 'app-option-dialog',
  templateUrl: './option-dialog.component.html',
  styleUrls: ['./option-dialog.component.css']
})
export class DialogComponent implements OnInit {
  
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
    
  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
