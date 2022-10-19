import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-carte-utilisateur',
  templateUrl: './carte-utilisateur.component.html',
  styleUrls: ['./carte-utilisateur.component.scss']
})
export class CarteUtilisateurComponent implements OnInit {

  taille: number = 0;

  @Input()
  public nom: string = ""

  @Input()
  public estHomme: boolean | undefined = false

  @Input()
  public admin?: boolean = false

  @Output()
  public delete: EventEmitter<string> = new EventEmitter()

  @Output()
  public edit: EventEmitter<string> = new EventEmitter()


  constructor() { }

  ngOnInit(): void {
  }

  OnDelete() {
    this.delete.emit(this.nom);
  }
  onEdit() {
    this.edit.emit(this.nom);
  }

}
