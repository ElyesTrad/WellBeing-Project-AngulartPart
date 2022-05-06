import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalDirective} from 'ngx-bootstrap/modal';
import {Event} from '../Model/Event';
import {EventService} from '../Service/event.service';

import swal from 'sweetalert';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private eventService: EventService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }
  WeatherData:any;

  event: any;
  listEvent: any;
  newEvent: any;

  ngOnInit(): void {
    this.WeatherData = {
      main : {},
      isDay: true
    };
    this.getWeatherData();
    console.log(this.WeatherData);
    this.event = new Event();
    this.eventService.getEvent().subscribe(data => {
        (this.listEvent = data)
        console.log(data);
      }

    );

  }
  getWeatherData(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=tunisia&appid=4101fdb4e78faf7e12e350725374dd3a')
      .then(response=>response.json())
      .then(data=>{this.setWeatherData(data);})

    // let data = JSON.parse('{"coord":{"lon":72.85,"lat":19.01},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50n"}],"base":"stations","main":{"temp":297.15,"feels_like":297.4,"temp_min":297.15,"temp_max":297.15,"pressure":1013,"humidity":69},"visibility":3500,"wind":{"speed":3.6,"deg":300},"clouds":{"all":20},"dt":1580141589,"sys":{"type":1,"id":9052,"country":"IN","sunrise":1580089441,"sunset":1580129884},"timezone":19800,"id":1275339,"name":"Mumbai","cod":200}');
    // this.setWeatherData(data);
  }
  setWeatherData(data: any){
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
  }

  onSubmit() {
    this.eventService.addEvent(this.event).subscribe(
      (res) => console.log('ress', res),
      (error) => console.log('error', error)
    );
  }

  deleteEvent(event: any) {
    console.log('aaaaaaaaaa' + event.id);
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this Event!',
      icon: 'warning',
      buttons: ['Cancel', 'Confirm'],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        this.eventService.deleteEvent(String(event.id));
        let i = this.listEvent.indexOf(event);

        this.eventService.deleteEvent(event.id).subscribe(
          () => this.listEvent.splice(i, 1)
        )

        swal('Event has been deleted!', {
          icon: 'success',
        });
      }
    });
  }

  @ViewChild('largeModal') public largeModal: ModalDirective;

  refresh(): void {
    window.location.reload();
  }

  upData(id: string) {
    this.eventService.getEventById(id).subscribe(d => {
      this.event = d;
      console.log(this.event);
    });
  }

  updateEvent(event: Event) {
    console.log(this.event.idEvent);
    this.eventService.updateEvent(this.event).subscribe();
  }

  listParticipant(id: any) {
    this.eventService.listParticipant(this.upData(id)).subscribe(
      (res) => console.log('ress', res),
      (error) => console.log('error', error)
    );
  }


  generatePdf(id: any) {
    this.eventService.getPdf(id).subscribe(

      (res) => console.log('ress', res),
      (error) => console.log('error', error)
    );
    console.log(id);
  }


  p: number = 1
  pageOp:number=1
}
