import { Category } from "src/category/entities/category.entity";
import { FalseAnswer } from "src/false-answer/entities/false-answer.entity";
import { Quiz } from "src/quiz/entities/quiz.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Question {


    @PrimaryGeneratedColumn()
    id : number;

    @Column({length : 255,nullable : false})
    question : string

    @Column({name : "answer",length : 255, nullable : false})
    answer : String;

    ///  RELATIONS
    @ManyToMany(() => Quiz)
    questions : Question[]

    @ManyToOne(()=> User, (user) => user.questions)
    @JoinColumn({name : "owner_id" })
    owner : User[];

    @ManyToOne(()=> Category, (category) => category.questions)
    @JoinColumn({name : "category_id" })
    category : Category;

    @OneToOne(() => FalseAnswer, (falseAnswer) => falseAnswer.questions)
    falseAnswers : FalseAnswer[];
}
