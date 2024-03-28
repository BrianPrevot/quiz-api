import { IsNotEmpty, IsString } from "@nestjs/class-validator";
import { Question } from "src/question/entities/question.entity";
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    id :number;
    
    @Column({length : 80, nullable : false})
    @IsNotEmpty()
    @IsString()
    nom : string;

    @OneToMany(() => Question, (question) => question.category)
    questions : Question[];

}
