import { Component, OnInit } from '@angular/core';

import { FeedService } from '../feed.service';
import { Feedback } from '../feed';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Observable } from 'rxjs';
import { HttpResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  temp: Feedback;
  feedbacks: Feedback;
  errorMessage: string;
  feedbackOptions: string[] = ['Great', 'Okay', 'Not Good'];
  showMsg: boolean = false;
  showError: boolean = false;
  feedopt: string;
  httpOptions = {
    headers: new HttpHeaders ({ 'Content-Type': 'application/json' })
  };

  feedbackForm = new FormGroup({
    name_form: new FormControl('', Validators.required),
    email_form: new FormControl('', Validators.compose([
      Validators.required, 
      // Validators.email
    ])),
    feedback_form: new FormControl('', Validators.required),
    comment_form: new FormControl('')
  })


  constructor(private feedService: FeedService ) {}

  ngOnInit() {
    this.getData()
  }
  
  getData() {
    this.showError = false;
    this.showMsg = false;
    this.feedService.getFeedback()
      .subscribe((data) => {
        this.feedbacks = data
        this.feedbackForm.setValue({
          name_form: this.feedbacks.name,
          email_form: this.feedbacks.email,
          feedback_form: this.feedbacks.feedback,
          comment_form: this.feedbacks.comment,
        })
      });
  }

  onSubmit() {
    this.showMsg = false;
    this.showError = false;
    this.feedbacks = {
      name: this.feedbackForm.get('name_form').value,
      email: this.feedbackForm.get('email_form').value,
      feedback: this.feedbackForm.get('feedback_form').value,
      comment: this.feedbackForm.get('comment_form').value
    }
    this.feedService.addFeedback(this.feedbacks as Feedback)
      .subscribe({
        next: data => {
          this.feedbacks = data;
          this.showMsg = true;
        },
        error: error => {
          this.errorMessage = error.message;
          this.showError = true;
          this.showMsg = false;
          // console.error('Error', error);
        }
      })
  }
}

