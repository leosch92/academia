import { Injectable, EventEmitter } from '@angular/core';
import { ArrayUtil } from '../utils/array.util';

@Injectable({
  providedIn: 'root'
})
export class CompletedWeeksService{

  totalWeeks: number[];
  completedWeeks: number[];
  readonly totalWeeksKeyJSON: string = 'totalWeeks';
  readonly completedWeeksKeyJSON: string = 'completedWeeks';
  totalWeeksChanged: EventEmitter<number[]> = new EventEmitter<number[]>();
  completedWeeksChanged: EventEmitter<number[]> = new EventEmitter<number[]>();

  constructor() {
    this.totalWeeks = this.initializeArrayWithLocalStorage(this.totalWeeks, this.totalWeeksKeyJSON);
    this.completedWeeks = this.initializeArrayWithLocalStorage(this.completedWeeks, this.completedWeeksKeyJSON);
  }

  getTotalWeeks(): number[] {
    return this.totalWeeks.slice();
  }

  getCompletedWeeks(): number[] {
    return this.completedWeeks.slice();
  }

  initializeArrayWithLocalStorage(element: any[], keyJSON: string): number[]{
    element = JSON.parse(localStorage.getItem(keyJSON));
    if (!element) return [];
    return element;
  }

  addToTotalWeeks() {
    this.totalWeeks.push(this.totalWeeks.length + 1);
    this.totalWeeksChanged.emit(this.getTotalWeeks());
  }

  removeFromTotalWeeks() {
    ArrayUtil.remove(this.completedWeeks, this.totalWeeks.length);
    this.totalWeeks.pop();
    this.totalWeeksChanged.emit(this.getTotalWeeks());
    this.completedWeeksChanged.emit(this.getCompletedWeeks());
  }

  addToCompletedWeeks(week: number){
    ArrayUtil.remove(this.completedWeeks, week);
    this.completedWeeksChanged.emit(this.getCompletedWeeks());
  }

  removeFromCompletedWeeks(week: number){
    this.completedWeeks.push(week);
    this.completedWeeksChanged.emit(this.getCompletedWeeks());
  }

  save(){
    localStorage.setItem(this.totalWeeksKeyJSON, JSON.stringify(this.totalWeeks));
    localStorage.setItem(this.completedWeeksKeyJSON, JSON.stringify(this.completedWeeks));
  }
}
