function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
};

// let student1 = new Student('John', 'male', 21);
// let student2 = new Student('Alice', 'female', 20);
// let student3 = new Student('Lev', 'male', 23);

// student1.setSubject('Mathematics');
// student2.setSubject('History');
// student3.setSubject('Chemistry');

// console.log(student1);
// console.log(student2);
// console.log(student3);


Student.prototype.addMarks = function (...marks) {
    if ('marks' in this) {
        this.marks.push(...marks);
    } else {
        console.log(`Студент ${this.name} отчислен`);
    };
};

// student1.addMarks(4, 5, 4, 5);
// console.log(student1);

Student.prototype.getAverage = function () {
    if ('marks' in this) {
        let sum = this.marks.reduce((acc, curr) => acc + curr, 0);
        return sum / Number(this.marks.length);
    } else if (this.marks.length === 0) {
        return 0;
    } else {
        return 0;
    };
};

// console.log(student1.getAverage()); 

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
};

// student2.exclude('плохая учёба');
// console.log(student2);