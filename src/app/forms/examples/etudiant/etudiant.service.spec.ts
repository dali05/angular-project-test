import { TestBed, inject, async } from '@angular/core/testing';

import { EtudiantService } from './etudiant.service';

describe('EtudiantService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created',
    inject([EtudiantService], (service: EtudiantService) => {
      expect(service).toBeTruthy();
    })
  );

  it('should add item',
    async(
      inject([EtudiantService], (service: EtudiantService) => {
        service.addEtudiant({ prop: 'test' });
        service.etudiants$.subscribe(etudiants => expect(etudiants.length).toBe(1));
      })
    )
  );
});
