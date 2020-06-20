import { Injectable } from '@angular/core';
import { Model, ModelFactory } from '@angular-extensions/model';
import { Observable } from 'rxjs';

const initialData: Etudiant[] = [];


@Injectable({
    providedIn: 'root'
})
export class EtudiantService {
  private model: Model<Etudiant[]>;

  etudiants$: Observable<Etudiant[]>;

  constructor(private modelFactory: ModelFactory<Etudiant[]>) {
    this.model = this.modelFactory.create(initialData);
    this.etudiants$ = this.model.data$;
  }

  addEtudiant(etudiant: Etudiant) {
    const etudiants = this.model.get();

    etudiants.push(etudiant);

    this.model.set(etudiants);
  }
}

export interface Etudiant {
  prop: string;
}
