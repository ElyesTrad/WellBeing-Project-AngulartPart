import { achievements } from "./achievements";
import { user } from "./user";

export class Evaluation {
    activitypoints : Number ;
    gamespoints : Number ;
    quizpoints : Number ;
    giftpoints : Number ;
    activitybadge :Badge;
    gamesbadge :Badge ;
    knowledgebadge : Badge ;
    startEvaluation : Date ;
    user : user ;
    achievements : achievements ;
}
enum Badge{
    None,Silver,Gold,Platinum,Diamond,Legendary,
}