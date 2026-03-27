import { Component } from '@angular/core';
import { MenuFlutuante } from "../../Components/menu-flutuante/menu-flutuante";
import { Home } from "../home/home";
import { Projects } from "../projects/projects";

@Component({
  selector: 'app-landing-page',
  imports: [MenuFlutuante, Home, Projects],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {}
