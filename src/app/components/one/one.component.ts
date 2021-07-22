import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {

  imagewidth: number = 50;
  imageheight: number = 50;
  borderrad: number = 50;
  imgtgl: boolean = false
  txtchck:any = '';
  

  constructor() { }

  ngOnInit(): void {
  }


  students: any[] = [

    {
      "studentname": "Bhargavi",
      "imagepath": "https://www.svgrepo.com/show/190738/learning-student.svg",
      "studentid": 123456789,
      "result": "Fail"
    },
    {
      "studentname": "Madhuri",
      "imagepath": "https://www.svgrepo.com/show/190738/learning-student.svg",
      "studentid": 123456788,
      "result": "Pass"

    },
    {
      "studentname": "Halwa",
      "imagepath": "https://www.svgrepo.com/show/190738/learning-student.svg",
      "studentid": 123456787,
      "result": "Pass"

    },
    {
      "studentname": "Chethana",
      "imagepath": "https://www.svgrepo.com/show/190738/learning-student.svg",
      "studentid": 123456786,
      "result": "Fail"
    },
    {
      "studentname": "Likitha",
      "imagepath": "https://www.svgrepo.com/show/190738/learning-student.svg",
      "studentid": 123456785,
      "result": "Fail"
    },
    {
      "studentname": "Chikitha",
      "imagepath": "https://www.svgrepo.com/show/190738/learning-student.svg",
      "studentid": 123456784,
      "result": "Pass"
    },
    {
      "studentname": "Thakita",
      "imagepath": "https://www.svgrepo.com/show/190738/learning-student.svg",
      "studentid": 123456783,
      "result": "Fail"
    }

  ]

  clicked(): void {
    this.imgtgl = !this.imgtgl
  }

}
