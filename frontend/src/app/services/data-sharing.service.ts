
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cards } from '../interfaces/cards';
import { Client } from '../interfaces/client';
import { Room } from '../interfaces/rooms';

@Injectable({
  providedIn: 'root',
})
export class DataSharingService {

  private dataSubjectClient = new Subject<Client>();
  private dataSubjectCard = new Subject<Cards>();
  private dataSubjectRoom = new Subject<Room>();

  sendDataClient(client: Client) {
    this.dataSubjectClient.next(client);
  }

  sendDataCard(card: Cards) {
    this.dataSubjectCard.next(card)
  }

  getDataClient() {
    return this.dataSubjectClient.asObservable();
  }

  getDataCard() {
    return this.dataSubjectCard.asObservable()
  }

  sendDataRoom(room: Room) {
    this.dataSubjectRoom.next(room)
  }

  getDataRoom() {
    return this.dataSubjectRoom.asObservable()
  }
}