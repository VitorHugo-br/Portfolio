import { Component, ElementRef, viewChild } from '@angular/core';
import { MenuFlutuante } from "../../Components/menu-flutuante/menu-flutuante";
import { Home } from "../home/home";
import { Projects } from "../projects/projects";
import { Contact } from "../contact/contact";

@Component({
  selector: 'app-landing-page',
  imports: [
    MenuFlutuante,
    Home,
    Projects,
    Contact
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {

  homeRef = viewChild(Home, { read: ElementRef });
  projectsRef = viewChild(Projects, { read: ElementRef });
  contactRef = viewChild(Contact, { read: ElementRef });

  executeScroll(section: string): void {
    let element: ElementRef | undefined;

    switch (section) {
      case 'home':
        element = this.homeRef();
        break;
      case 'projects':
        element = this.projectsRef();
        break;
      case 'contact':
        element = this.contactRef();
        break;
    }

    if (element && element.nativeElement) {
      element.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

  }

}
