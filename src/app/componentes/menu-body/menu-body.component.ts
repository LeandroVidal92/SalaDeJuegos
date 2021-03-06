import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-menu-body',
  templateUrl: './menu-body.component.html',
  styleUrls: ['./menu-body.component.css']
})
export class MenuBodyComponent implements OnInit {

  constructor(private Route:ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }
  OpcionMenu(Opcion:string)
  {
    switch(Opcion)
   {
      case 'agilidad':
      this.router.navigate(['Juego/agilidad']);
      break;
      case 'adivina':
      this.router.navigate(['Juego/adivina']);     
      break;
      case 'menuBody':
      this.router.navigate(['/menuBody']);     
      break;
    }

 }

}
