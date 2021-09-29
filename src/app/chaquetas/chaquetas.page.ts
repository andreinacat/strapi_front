import { Component, OnInit } from '@angular/core';
import { ChaquetasService } from './chaquetas.service';

@Component({
  selector: 'app-chaquetas',
  templateUrl: './chaquetas.page.html',
  styleUrls: ['./chaquetas.page.scss'],
})
export class ChaquetasPage implements OnInit {
  private productos = []

  constructor(private servicioProductos: ChaquetasService) { }

  ngOnInit() {
	this.productos = this.servicioProductos.getChaquetas();
  }

}
