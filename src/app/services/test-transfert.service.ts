import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Utilisateur } from '../Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class TestTransfertService {

  public _utilisateur: BehaviorSubject<any> = new BehaviorSubject(null)

  constructor() { }
}
