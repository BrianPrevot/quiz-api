import { Question } from "src/question/entities/question.entity";
import { QuestionModule } from "src/question/question.module";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Quiz {

    @PrimaryGeneratedColumn()
    id : number;

    @Column({type : 'varchar', length : 80, nullable : false})
    name : string;

    @Column({type : 'varchar', length : 80, nullable : false})
    category : string;

    @ManyToMany(() => Question)
    @JoinTable({name : 'quiz_question'})
    questions : Question[]

    @ManyToMany(()=> User, (user) => user.ownQuiz)
    owner : User[];
}
