import { Quiz } from "src/quiz/entities/quiz.entity";
import { PrimaryGeneratedColumn, Column, OneToMany, ManyToMany } from "typeorm";

export class User {


    @PrimaryGeneratedColumn()
    id :number;

    @Column({type : "varchar",length : 28, nullable : false})
    username : string;

    @Column({type : "varchar", nullable : false})
    password : string;

    @OneToMany(()=> Quiz, (quiz) => quiz.user)
    ownQuiz : Quiz[];

    @ManyToMany(() => Quiz, (quiz) => quiz.userSaved)
    savedQuiz : Quiz[];
}
