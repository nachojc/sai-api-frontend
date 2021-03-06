import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

// Custom components
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { TopicDialogComponent } from './topic-dialog/topic-dialog.component';
import { CourseComponent } from './course/course.component';
import { TopicsComponent } from './topics/topics.component';

// Custom services
import { TopicsService } from '../services/topics.service';

const appRoutes: Routes = [
  { path: '', component: TopicsComponent },
  { path: 'courses/:id', component: CourseComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CourseDialogComponent,
    TopicDialogComponent,
    CourseComponent,
    TopicsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    FormBuilder,
    TopicsService,
    HttpClient
  ],
  bootstrap: [AppComponent],
  entryComponents: [CourseDialogComponent, TopicDialogComponent]
})
export class AppModule { }
