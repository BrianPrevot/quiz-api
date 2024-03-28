import { IsNotEmpty, IsString } from "@nestjs/class-validator";
import { Question } from "src/question/entities/question.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('false-answer')
export class FalseAnswer {

    @PrimaryGeneratedColumn()
    id :number;

    @Column({nullable : false})
    @IsString()
    @IsNotEmpty()
    answer : string;

    @OneToOne(() => Question, (question) => question.falseAnswers)
    @JoinColumn()
    questions : Question[];
}
