import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CourseService {

    private courses: CreateCourseDto[] = [];

    getAllCourse(){
        return{
            message: "All courses fetched successfully",
            data:this.courses,
        };
    }
    getCourseByID(id: string){
        return {
            message: "Course fetched successfully",
            id,
        };
    }
    createCourse(dto: CreateCourseDto) {
        this.courses.push(dto);
        return {
          message: "Course created successfully",
          data: dto,
        };
      }

    updateCourse(id: string,dto: UpdateCourseDto){
        return {
            message:"Course updated successfully",
            id,
            data:dto,
        };
    }
    patchCourse(id: string, dto:UpdateCourseDto){
        return {
            message:"Course patch successfully",
            id,
            updatedFields:Object.keys(dto), // return field name as keys. -> as key value pairs
        };
    }
    deleteCourse(id: string){
        return {
            message:"Course deleted successfully",
            id,
        };
    }
    uploadCourseMaterial(id:string, file:Express.Multer.File){
        return{
            message:"Materials uploaded successfully",
            courseId: id,
            filename: file.filename,
            path: file.path,
        };
    }
}
