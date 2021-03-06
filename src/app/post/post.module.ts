import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ng2-bootstrap/pagination';

import { SharedModule } from '../shared/shared.module';
import { postRouting } from './post.routes';
import { PostlistComponent } from './postlist/postlist.component';
import { PostlistService } from './postlist/services/postlist.service';
import { BooleanPipe } from '../utils/boolean.pipe';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostDetailService } from './post-detail/services/post-detail.service';
import { PostDetailMainComponent } from './post-detail-main/post-detail-main.component';
import { AddCommentComponent } from '../comment/add-comment/add-comment.component';
import { CommentService } from '../comment/services/comment.service';

@NgModule({
  imports: [
    CommonModule,
    postRouting,
    SharedModule,
    PaginationModule.forRoot(),
  ],
  declarations: [PostlistComponent, BooleanPipe, PostDetailComponent, PostDetailMainComponent, AddCommentComponent],
  exports: [],
  providers: [PostlistService, PostDetailService, CommentService]
})
export class PostModule { }
