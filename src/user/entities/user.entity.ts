import { Quiz } from "src/quiz/entities/quiz.entity";
import { PrimaryGeneratedColumn, Column, OneToMany, ManyToMany } from "typeorm";

export class User {


    @PrimaryGeneratedColumn()
    id :number;

    @Column({name : 'twitch_id',type : "varchar",length : 40, nullable : false})
    twitchId : string;

    @Column({name : 'display_name',type : "varchar",length : 40, nullable : false})
    displayName : string;

    @Column({name : 'profile_picture',type : "varchar",length : 155, nullable : false})
    profilePicture : string;


   /*  @OneToMany(()=> Quiz, (quiz) => quiz.user)
    ownQuiz : Quiz[];

    @ManyToMany(() => Quiz, (quiz) => quiz.userSaved)
    savedQuiz : Quiz[]; */
}
