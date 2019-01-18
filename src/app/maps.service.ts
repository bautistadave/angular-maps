import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Location {
  latitude: string;
  longitude: string;
  country_name: string;
}
@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private http: HttpClient) { }

  //getLocation(){
    //return this.http.get<Location>('http://api.ipapi.com/api/check?access_key=d1b1678bb3a4450250f86df6ddef2e31')
  //}
}
