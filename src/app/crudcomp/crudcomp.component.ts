import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormserviceService } from '../shared/formservice.service';

@Component({
  selector: 'app-crudcomp',
  templateUrl: './crudcomp.component.html',
  styleUrls: ['./crudcomp.component.css']
})
export class CrudcompComponent implements OnInit {
  genders = ['Male', 'Female', 'Others']
  isedit = false
  selecteduserData: any;
  indexselectedToEdit: any;
  listOfData = <any>[]

  public formdata = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    age: new FormControl(''),
    dob: new FormControl(''),
    place: new FormControl(''),
    mobile: new FormControl(''),
    gender: new FormControl(''),
  })

  constructor(public formservice: FormserviceService) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
    this.formservice.getdata().subscribe(res => {
      Object.values(res).forEach(datafromdb => {
        this.listOfData.push(datafromdb)
      })
    })
  }

  onCancel() {
    this.formdata.reset()
  }

  onSubmit() {
    this.listOfData.push(this.formdata.value)
    this.formservice.postdata(this.formdata.value).subscribe(res => {
      this.formdata.reset()
    })
  }

  onEdit(index: any) {
    this.isedit = true;
    this.formdata.patchValue(this.listOfData[index])
    this.indexselectedToEdit = index;
  }

  onSave() {
    this.formservice.modifydata(this.formdata.value, this.listOfData[this.indexselectedToEdit]['_id']).subscribe(res => {
      this.listOfData.push(this.formdata.value)
      this.listOfData.splice(this.indexselectedToEdit, 1)
      this.formdata.reset()
      this.isedit = false
    })
  }

  onDelete(data: any, index: any) {
    this.formservice.deletedata(data._id).subscribe(res => {
    })
    this.listOfData.splice(index, 1)
  }

  onView(data: any) {
    this.selecteduserData = data
  }

}
