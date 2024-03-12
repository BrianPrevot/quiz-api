import { IsNotEmpty, IsNumber, IsString } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger";


export class quizDto{

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name : string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    category : string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    userId : number;
    
}