import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private afStore: AngularFirestore,
  ) { }

  getAllUsers() {
    const usersRef = this.afStore.collection('users');
    return usersRef.valueChanges();
  }
}
