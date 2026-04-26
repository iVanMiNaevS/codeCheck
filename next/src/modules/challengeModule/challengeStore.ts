import { ChallengeType } from "@/types/challenges";
import { makeAutoObservable } from "mobx";

export class ChallengeStore {
    challenge: ChallengeType;
    code: string = ''

    constructor (challegneData: ChallengeType){
        this.challenge = challegneData;
        makeAutoObservable(this);
    }

    setCode(value: string){
        this.code = value
    }
}