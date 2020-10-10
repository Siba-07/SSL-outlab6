import { Component, OnInit } from '@angular/core';

import { FeedService } from '../feed.service';
import { Feedback } from '../feed';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Observable } from 'rxjs';
import { HttpResponse, HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  temp: Feedback;
  feedback: Feedback = {
    name: "",
    email: "",
    feedback: "",
    comment: ""
  }
  feedbackForm = new FormGroup({
    name_form: new FormControl(''),
    email_form: new FormControl(''),
    feedback_form: new FormControl(''),
    comment_form: new FormControl('')
  })

  constructor(private feedService: FeedService) { }

  ngOnInit() {}

  getFeedback(): void {
    this.feedService.getFeedback()
      .subscribe((data) => {
        this.feedback = data
      });
  }

  add(Name: string, Email: string, Feedback: string, Comment: string): void {
    this.temp = {
      name: Name,
      email: Email,
      feedback: Feedback,
      comment: Comment
    }

    this.feedService.addFeedback(this.feedback as Feedback)
  }

  onSubmit() {
    this.feedback = {
      name: this.feedbackForm.get('name_form').value,
      email: this.feedbackForm.get('email_form').value,
      feedback: this.feedbackForm.get('feedback_form').value,
      comment: this.feedbackForm.get('comment_form').value
    }
    this.feedService.addFeedback(this.feedback as Feedback)
  }
}

