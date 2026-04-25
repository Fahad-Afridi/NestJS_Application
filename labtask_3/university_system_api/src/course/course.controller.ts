import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CourseService } from './course.service';

@Controller('course')
export class CourseController {
    constructor(private courseService:CourseService){}

    @Get()
    getAll(){
        return this.courseService.getAllCourse;
    }
    @Get(':id')
    getById(@Param('id')id:string){

        return this.courseService.getCourseById(id);
    }
    @Post()
    create(@Body()body:any){
        return this.courseService.createCourse(body.name, body.code);
    }
}
