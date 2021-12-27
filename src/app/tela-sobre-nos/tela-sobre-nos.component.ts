import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-tela-sobre-nos',
  templateUrl: './tela-sobre-nos.component.html',
  styleUrls: ['./tela-sobre-nos.component.css']
})
export class TelaSobreNosComponent implements OnInit {

  constructor(public router:Router){

}

  ngOnInit(): void {
  }


  linkLogin(){
    this.router.navigate([ '/telaloginC']);
  }
}

