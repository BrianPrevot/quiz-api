import { Question } from "src/question/entities/question.entity";
import { Quiz } from "src/quiz/entities/quiz.entity";
import { PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable, JoinColumn, Entity } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id :number;

    @Column({name : 'twitch_id',type : "varchar",length : 40, nullable : false})
    twitchId : string;

    @Column({name : 'display_name',type : "varchar",length : 40, nullable : false})
    displayName : string;

    @Column({name : 'profile_picture',type : "varchar",length : 155, nullable : false})
    profilePicture : string;

/////// RELATIONS 

    @OneToMany(()=> Quiz, (quiz) => quiz.owner)
    ownQuiz : Quiz[];

    @OneToMany(()=> Question, (question) => question.owner)
    questions : Question[];

    @ManyToMany(() => Quiz)
    @JoinTable({name : "user_saved_quiz"})
    savedQuiz : Quiz[]; 
}
