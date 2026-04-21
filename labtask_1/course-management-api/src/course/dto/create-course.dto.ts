import { IsString,IsNotEmpty,IsNumber,Min,Max,IsOptional } from "class-validator";
import { Type } from "class-transformer";

export class CreateCourseDto{
    @IsNotEmpty()
    @IsString()
    name:string;

    @IsNotEmpty()
    @IsString()
    code:string;

    @IsString()
    @IsNotEmpty()
    instructor: string;

    @Type(()=>Number)
    @IsNumber()
    @Max(6)
    @Min(1)
    credits:number;

    @IsOptional()
    @IsString()
    description?:string;
    
}