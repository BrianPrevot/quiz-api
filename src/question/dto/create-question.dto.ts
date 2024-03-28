import { IsNotEmpty, IsNumber, IsString } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { PrimaryGeneratedColumn } from "typeorm";

export class CreateQuestionDto {

    @PrimaryGeneratedColumn()
    id : number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    question : string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    answer : string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    ownerId : number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    categoryId : number;
}
