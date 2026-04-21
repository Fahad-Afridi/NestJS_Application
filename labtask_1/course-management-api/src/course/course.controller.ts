import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CourseService } from './course.service';

@Controller('course')
export class CourseController {
    constructor(private readonly courseservice: CourseService){}
    @Get()
    getAllCourse(): string{
        return this.courseservice.getAllCourse();
    }
    @Get(':id')
    getCourseById(@Param('id')id : string): string{
        return this.courseservice.getCourseByID(id);
    }

    @Post()
    CreateCourse():string{
        return this.courseservice.createCourse();
    }

    @Put(':id')
    UpdateCourse(@Param('id')id: string){
        return this.courseservice.updateCourse(id);
    }
    @Patch(':id')
    patchCourse(@Param('id')id: string):string{
        return this.courseservice.patchCourse(id);
    }

    @Delete(':id')
    deleteCourse(@Param('id')id: string):string{
        return this.courseservice.deleteCourse(id);
    }

}
