import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-result',
  templateUrl: './student-result.component.html',
  styleUrls: ['./student-result.component.css'],
})
export class StudentResultComponent implements OnInit {
  // Define properties to store student result data
  studentName: string = ''; // Student's name
  registrationNumber: string = ''; // Student's registration number
  subjects: SubjectResult[] = []; // Array to store subject-wise result data

  // Constructor for initializing data (you can inject services here)
  constructor() {}

  // Implement the ngOnInit lifecycle hook
  ngOnInit(): void {
    // Simulate fetching student result data from a service or API
    this.fetchStudentResultData();
  }

  // Simulate fetching student result data (replace with actual data retrieval)
  fetchStudentResultData() {
    // Replace this with actual data retrieval logic (e.g., HTTP request)
    // For this example, we'll simulate data retrieval
    setTimeout(() => {
      this.studentName = 'John Doe'; // Set student's name
      this.registrationNumber = '1234567890'; // Set student's registration number

      // Simulated subject-wise result data
      this.subjects = [
        { subject: 'Mathematics', score: 95, grade: 'A+' },
        { subject: 'Science', score: 88, grade: 'A' },
        // Add more subjects with score and grade data
      ];
    }, 1000); // Simulate a 1-second delay
  }
}

class SubjectResult {
  constructor(
    public subject: string = '',
    public score: number = 0,
    public grade: string = ''
  ) {}
}
