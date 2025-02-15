class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort((a,b) => {
      return a - b;
    });

  }

  get(pos) {
    if( pos > this.items.length ){
      return new Error("OutOfBounds");
    }
    return this.items[this.items.length -1 ]
  }

  max() {
    if(this.items.length === 0 ){
      return new Error("EmptySortedList");
    }else {
      return this.items[this.items.length -1];
    }
  }

  min() {
    if(this.items.length === 0 ){
      return new Error("EmptySortedList");
    }else {
      return this.items[0]; //ultimo elemento 
    }
  }

  sum() {
    if(this.items.length === 0){
      return 0
    }
    return this.items.reduce((acc,cur) => {
      return acc + cur;
    });
  }

  avg() {
    if(this.items.length === 0 ){
      return new Error("EmptySortedList");
    }else {
      return this.sum() / this.items.length;
    }
  }
}

module.exports = SortedList
