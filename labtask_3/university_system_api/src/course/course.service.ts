import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
    getAllCourse(){
        return {message : 'All course fetched',data: []};
    }
    getCourseById(id:string){
        return{message:'course fetched',id};
    }

    createCourse(name:string,code:string){
        return{message:'Course created',data: {name,code}};
    }
}
