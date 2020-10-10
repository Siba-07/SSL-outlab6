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
  feedback: Feedback;

  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.getFeedback();
  }

  getFeedback(): void {
    this.feedService.getFeedback()
      .subscribe((data) => {
        this.feedback = data
      });
  }
}

