class course {
    #price;
    constructor(title, length, price) {
        this.title = title;
        this.length = length;
        this.price = price;
    }

    get getPrice() {
        return this.price;
    }
    set setPrice(value) {
        if(value>0){
            this.price = value;
        }else{
            alert('Price is invalid!');
        }
    }
}
//Task 1
const physics = new course('Physics', '4 months', 5000);
const Maths = new course('Maths', '6 Months', 5000);

console.log(physics);
console.log(Maths);

//Task 3
class practicalCourse extends course {
    constructor(title, length, price, numOfExercises){
        super(title, length, price);
        this.numOfExercises = numOfExercises;
    }
    numOfExercises;
}

class theoreticalCourse extends course {
    publish() {
        console.log('Kuch to publish kar de!!!');
    }
}

const pc = new practicalCourse('Chemistry', '4 Months', 4000, 3);
console.log(pc.getPrice);
pc.setPrice = 3000;
console.log(pc.getPrice);
console.log(pc.title+' '+pc.length+' '+pc.price+' '+pc.numOfExercises);
const tc = new theoreticalCourse();
tc.publish();


