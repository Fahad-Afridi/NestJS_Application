import { Inject, Injectable,forwardRef } from '@nestjs/common';
import { EnrollmentService } from 'src/enrollment/enrollment.service';

@Injectable()
export class NotificationService {
    constructor(
        @Inject(forwardRef(()=>EnrollmentService))
        private enrollmentService: EnrollmentService,
    ){}
    sendNotification(studentName: string,message: string){
        return{
            message:'Notification sent',
            student: studentName,
            messageText: message,
        };
    }
    checkEnrollmentAndNotify (studentName:string,courseId:string){
        const enrollments = this.enrollmentService.getEnrollments();
        return{
            message: 'check enrollment and notify',
            student: studentName,
            courseId,
            enrollments,
        };
    }   
}
