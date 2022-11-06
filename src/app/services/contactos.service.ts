import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from '../models/Contacto';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {
  private dbPath = 'contactos';
  private contactRef: AngularFirestoreCollection<Contacto>;
  constructor(
    private db: AngularFirestore
  ) { 
    this.contactRef = db.collection(this.dbPath);
  }

  /*getAll(): Observable<Contacto[]> {
    return this.contactRef.valueChanges();
  }*/
  create(contacto: Contacto): Promise<DocumentReference<Contacto>> {
    return this.contactRef.add(contacto);
  }

  /*
  
  getAll(): AngularFirestoreCollection<Tutorial> {
    return this.tutorialsRef;
  }

  create(tutorial: Tutorial): any {
    return this.tutorialsRef.add({ ...tutorial });
  }

  update(id: string, data: any): Promise<void> {
    return this.tutorialsRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.tutorialsRef.doc(id).delete();
  }
  */
}
