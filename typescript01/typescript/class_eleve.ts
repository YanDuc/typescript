import {NS_Lang} from "./exercice";
import {TheAddress} from "./exercice"


export class Eleve {
  _prenom:string;
  _age:number;
  _adresse:TheAddress;
  _note:Array<number> = [];
  languageList;

  constructor(prenom, age, adresse:TheAddress, note){
    this.languageList = new NS_Lang.languages();
    this.prenom = prenom;
    this.age = age;
    this.adresse = adresse;
    this.note = note;
  }
  listeLangues(){
    return this.languageList.list();
  }

  set prenom(prenom){
    this._prenom = prenom;
  }
  get prenom(){
    return this._prenom;
  }
  set age(age){
    this._age = age;
  }
  get age(){
    return this._age;
  }
  set adresse(adresse){
    this._adresse = adresse;
  }
  get adresse(){
    return this._adresse
  }

  /**
   * [note description]
   * @param  noteList [description]
   * @return          [description]
   */
  set note(noteList){
    for(let note of noteList){
      if(note >=0 && note <= 20){
        this._note.push(note);
      }
    }
  }
  get note(){
    return this._note;
  }
  eleve_info(){
    return `Eleve ${this._prenom} agé de ${this._age} ans habite au ${this._adresse.rue} ${this._adresse.cp} ${this._adresse.ville}.`
  }

  /**
   * [calc_moyenne calcul de la moyenne]
   * @return [description]
   */
  calc_moyenne(){
    let nbNote:number = this._note.length;
    let sumNote:number = 0;
    for(let note of this._note){
        sumNote += note;
    }
    return sumNote/nbNote;
  }
  notes(){
    let listeDesNotes:string = '';
    for(let note of this._note){
      listeDesNotes += note+', '
    }
    return listeDesNotes
  }
}
