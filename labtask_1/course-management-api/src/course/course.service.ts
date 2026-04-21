import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {

    getAllCourse(): string{
        return `All Courses.....`;
    }
    getCourseByID(id: string):string{
        return `Course With ID : ${id} `;
    }
    createCourse(): string {
        return 'Course created';
    }
    updateCourse(id: string): string{
        return `Update course : ${id}`;
    }
    patchCourse(id: string): string{
        return `Patch course : ${id}`;
    }
    deleteCourse(id: string):string{
        return `Delete course : ${id}`;
    }
}
