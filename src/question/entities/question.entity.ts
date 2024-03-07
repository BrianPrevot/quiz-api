import { Quiz } from "src/quiz/entities/quiz.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Question {


    @PrimaryGeneratedColumn()
    id : number;

    @Column({length : 255,nullable : false})
    question : string

    @Column({name : "answer",length : 255, nullable : false})
    answer : String;

    @Column()
    category : string;

    ///  RELATIONS
    @ManyToMany(() => Quiz)
    questions : Question[]

    @ManyToOne(()=> User, (user) => user.questions)
    owner : User[];
}
