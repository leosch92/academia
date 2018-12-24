export class ArrayUtil {
  static remove(array: any[], element: any): void{
    const index: number = array.indexOf(element);
    if (index !== -1){
      array.splice(index, 1);
    }
  }
}