import { Component, OnInit } from '@angular/core';
import { NavInterface } from 'src/app/interfaces/netflix.interfaces';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  public navInfo: NavInterface;

  constructor() {
    this.navInfo = {
      logo: {
        src: '../../../assets/images/Logo/logo.png',
        alt: 'Netflix',
      },
      links: [
        {
          text: 'Inicio',
          link: '#nav',
        },
        {
          text: 'Series TV',
          link: '#series-tv',
        },
        {
          text: 'Películas',
          link: '#films',
        },
      ],
      search: {
        src: '../../../assets/images/Icons/search.png',
        alt: 'Buscar',
      },
      notifications: {
        src: '../../../assets/images/Icons/notifications.png',
        alt: 'Notificaciones',
      },
    };
  }

  ngOnInit(): void {}

  public changeTheme = () => {
    document.body.classList.toggle('light');
  };
}
