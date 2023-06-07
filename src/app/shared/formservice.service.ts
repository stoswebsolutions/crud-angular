import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FormserviceService {

  constructor(public http: HttpClient) { }

  getdata() {
    return this.http.get('http://localhost:4000/getdata')
  }
  postdata(bodydata: any) {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
    return this.http.post('http://localhost:4000/postdata', bodydata, { headers: headers })
  }
  deletedata(_id: any) {
    return this.http.delete(`http://localhost:4000/deletedata/${_id}`)
  }
  modifydata(data: any, _id: any) {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
    return this.http.put(`http://localhost:4000/modifydata/${_id}`, data, { headers: headers })
  }
  getspecificdata(_id: any) {
    return this.http.get(`http://localhost:4000/getspecificdata/${_id}`)
  }
}
