import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Role } from '../Role';
import { Utilisateur } from '../Utilisateur';


@Component({
  selector: 'app-carte-utilisateur',
  templateUrl: './carte-utilisateur.component.html',
  styleUrls: ['./carte-utilisateur.component.scss']
})
export class CarteUtilisateurComponent implements OnInit, OnChanges {

  @Input()
  public utilisateur: Utilisateur | undefined;

  @Output()
  public delete: EventEmitter<Utilisateur> = new EventEmitter()

  @Output()
  public edit: EventEmitter<Utilisateur> = new EventEmitter()

  public admin: boolean = false;

  constructor() { }


  ngOnChanges(changes: SimpleChanges): void {

    this.admin = changes['utilisateur']
      .currentValue
      .listeRole
      .filter((role: Role) => role.nom == "ROLE_ADMIN").length > 0

  }

  ngOnInit(): void {
  
  }

  OnDelete() {
    this.delete.emit(this.utilisateur);
  }
  onEdit() {
    this.edit.emit(this.utilisateur);

  }

}
