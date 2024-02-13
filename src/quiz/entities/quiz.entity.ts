import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Quiz {

    @PrimaryGeneratedColumn()
    id : number;

    @Column({type : 'varchar', length : 80, nullable : false})
    name : string;

    /* @ManyToOne(() => Question, (question) => question.quiz)
    questionList : Question[]; */
}
