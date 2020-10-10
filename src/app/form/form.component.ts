import { Component, OnInit } from '@angular/core';

import { FeedService } from '../feed.service'
import { Feedback } from '../feed'
import { Observable } from 'rxjs';
import { HttpResponse, HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  feedback: Feedback = {
    name: "",
    email: "",
    feedback: "",
    comment: ""
  }

  constructor(private feedService: FeedService) { }

  ngOnInit() {}

  getFeedback(): void {
    this.feedService.getFeedback()
      .subscribe((data) => {
        this.feedback = data
      });
  }

  add(Name: string, Email: string, Feedback: string, Comment: string): void {
    this.feedback = {
      name: Name,
      email: Email,
      feedback: Feedback,
      comment: Comment
    }
    this.feedService.addFeedback(this.feedback as Feedback)
  }
}

