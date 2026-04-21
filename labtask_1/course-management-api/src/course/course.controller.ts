import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Req, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('course')
export class CourseController {
    constructor(private readonly courseservice: CourseService){}
    @Get()
    getAllCourse(){
        return this.courseservice.getAllCourse();
    }
    @Get(':id')
    getCourseById(@Param('id')id : string){
        return this.courseservice.getCourseByID(id);
    }

    @Post()
    CreateCourse(@Body()dto:CreateCourseDto){
        return this.courseservice.createCourse(dto);
    }

    @Put(':id')
    UpdateCourse(@Param('id')id: string,@Body()dto:UpdateCourseDto){
        return this.courseservice.updateCourse(id,dto);
    }
    @Patch(':id')
    patchCourse(@Param('id')id: string,@Body()dto:UpdateCourseDto){
        return this.courseservice.patchCourse(id,dto);
    }

    @Delete(':id')
    deleteCourse(@Param('id')id: string){
        return this.courseservice.deleteCourse(id);
    }
    @Post(':id/upload')
    @UseInterceptors(
        FileInterceptor('file',{
            storage:diskStorage({
                destination: './uploads',
                filename: (req, file, cb)=>{
                    const uniqueName = Date.now() + '-' + file.originalname;
                    cb(null,uniqueName);
                },
            }),
            fileFilter:(req, file, cb)=>{
                if(!file.originalname.match(/\.(jpg|jpeg|png|pdf)$/)){
                    return cb(new Error('Only image and pdf allowed'),false);
                }
                cb(null,true);
            },
            limits:{
                fileSize:2*1024*1024,
            },
        }),
    )
uploadFile(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
){
    return this.courseservice.uploadCourseMaterial(id,file);
}

}
