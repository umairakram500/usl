import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'contactus',
    templateUrl: './contactus.component.html'
})
export class ContactusComponent implements OnInit {

    public msg = false;
    public data: any = {};
    public lat: number;
    public lng: number;
    public zoom: number;
    public style: any;

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.zoom = 10;
        this.lat = 31.421664;
        this.lng = 73.0894366;
        this.style = [{ "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "elementType": "labels.text.fill", "stylers": [{ "color": "#616161" }] }, { "elementType": "labels.text.stroke", "stylers": [{ "color": "#f5f5f5" }] }, { "featureType": "administrative.land_parcel", "elementType": "labels.text.fill", "stylers": [{ "color": "#bdbdbd" }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#eeeeee" }] }, { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [{ "color": "#757575" }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#e5e5e5" }] }, { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [{ "color": "#9e9e9e" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "road.arterial", "elementType": "labels.text.fill", "stylers": [{ "color": "#757575" }] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#dadada" }] }, { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [{ "color": "#616161" }] }, { "featureType": "road.local", "elementType": "labels.text.fill", "stylers": [{ "color": "#9e9e9e" }] }, { "featureType": "transit.line", "elementType": "geometry", "stylers": [{ "color": "#e5e5e5" }] }, { "featureType": "transit.station", "elementType": "geometry", "stylers": [{ "color": "#eeeeee" }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#c9c9c9" }] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#9e9e9e" }] }];
    }

    onSubmit(data: any) {
        console.log(data);

        //let dataa = {'title': 'foo',  'body': 'bar', 'userId': 1};
        this.http.post('http://invictussolutions.co/email.php', data)
            .subscribe(
                (res: Response) => {
                    this.msg = true;
                    console.log(res);
                    setTimeout(function () { this.msg = false; }, 2000);
                },
                err => {
                    console.log("Error occured");
                }
            );
    }

}
