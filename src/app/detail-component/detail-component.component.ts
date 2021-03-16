import { Component, Input, OnInit, Output } from '@angular/core';
import { Personne } from '../item-component/model';
import { PersonneService } from '../personne.service';

@Component({
  selector: 'app-detail-component',
  templateUrl: './detail-component.component.html',
  styleUrls: ['./detail-component.component.css']
})
export class DetailComponentComponent implements OnInit {
 @Input() personne;
 @Input() pers1 :Personne;
  public perss:Personne;


  constructor() { 
    this.perss=this.pers1;
    console.log(this.perss);
    console.log(this.personne);
  }

  ngOnInit(): void {
    
   
  }
  
  
    
    // this.per1=new Personne(this.person2);
    
    
  
}
