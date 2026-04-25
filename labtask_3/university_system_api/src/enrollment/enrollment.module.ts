import { Module,forwardRef } from '@nestjs/common';
import { EnrollmentController } from './enrollment.controller';
import { EnrollmentService } from './enrollment.service';
import { CourseModule } from 'src/course/course.module';
import { CourseService } from 'src/course/course.service';
import { NotificationModule } from 'src/notification/notification.module';

@Module({
  imports:[
    CourseModule,
    forwardRef(()=>NotificationModule),
  ],
  controllers: [EnrollmentController],
  providers: [EnrollmentService],
  exports:[EnrollmentService],
})
export class EnrollmentModule {}
