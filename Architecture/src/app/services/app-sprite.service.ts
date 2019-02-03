import { Injectable } from '@angular/core';
import {Subject, Observable} from 'rxjs';

@Injectable()
export class AppSpriteService {

  private cachedSpeech: string ="";
  private spriteReady: boolean = false;

  get SpriteReady(): boolean{
    return this.spriteReady;
  }
  set SpriteReady(ready: boolean){
    this.spriteReady = ready;
    if(this.spriteReady && this.cachedSpeech != ""){
      this.speakSource.next(this.cachedSpeech);
      this.cachedSpeech ="";
    }
  }

  private speakSource: Subject<string> = new Subject<string>();
  public SpeakObservable: Observable<string>;

  constructor() {
    this.SpeakObservable = this.speakSource.asObservable();
   }

  public Speak(speech: string, timeout: number = 0){
    if(timeout == 0){
      if(this.SpriteReady){
        this.speakSource.next(speech);
      }
      else{
        this.cachedSpeech = speech;
      }
    }
    else{
      setTimeout(() => {
        if(this.SpriteReady){
          this.speakSource.next(speech);
        }
        else{
          this.cachedSpeech = speech;
        }
      }, timeout);
    }
  }

}
