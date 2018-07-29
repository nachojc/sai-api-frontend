import { Component, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { CourseDialogComponent } from '.././course-dialog/course-dialog.component';
import { TopicsService } from '../../services/topics.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnDestroy {
  title: String = 'Courses by Topic';
  topics: any = [];
  private obs$: Subscription = null;
  imgUrl: String = 'https://source.unsplash.com/800x600/?';

  constructor(private dialog: MatDialog, private topicsService: TopicsService) {
    this.obs$ = topicsService.getTopics()
      // Nos suscribimos en el componente y manejamos el objeto que nos llega
      // y que ya está en JSON, la app está pendiente de los cambios...
      // El subscribe tendría más sentido en el Servicio si lo llamáramos a este
      // desde 3 sitios distinto o así, pero en este caso es solo desde la app
      .subscribe((topicsData: Response) => {
        this.topics = topicsData;
      });
  }

  ngOnDestroy(): void {
    this.obs$.unsubscribe();
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true; // Dialog not closed when clicking outside
    dialogConfig.autoFocus = true; // Autofocus on first form field of Dialog
    dialogConfig.width = '50%';

    this.dialog.open(CourseDialogComponent, dialogConfig);
  }
}