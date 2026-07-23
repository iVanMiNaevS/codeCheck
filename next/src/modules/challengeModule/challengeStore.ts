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

    async submitCode(){
        try{
            const res = await fetch('/api/sendCode');
            if(!res.ok){
                console.error('Failed senc code: ', res.status)
            }
            const data = await res.json()
            console.log(data)
        }catch(e){
            console.error('Failed senc code, error: ', e)
        }
    }
}