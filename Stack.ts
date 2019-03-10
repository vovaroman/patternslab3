

class Stack{
    listOfObjects:Array<any>;

    clearMap(){
        this.listOfObjects = new Array<any>();
    }

    pushObject(object:any){
        this.listOfObjects.push(object);
    }

}