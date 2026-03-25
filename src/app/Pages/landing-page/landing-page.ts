import { Component } from '@angular/core';
import { MenuFlutuante } from "../../Components/menu-flutuante/menu-flutuante";
import { Home } from "../home/home";

@Component({
  selector: 'app-landing-page',
  imports: [MenuFlutuante, Home],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {}
