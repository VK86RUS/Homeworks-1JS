function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (!this.marks) {
        console.log("Студент отчислен и не имеет массива оценок.");
        return;
      }
    this.marks = this.marks.concat(marksToAdd);  
}

Student.prototype.getAverage = function () {
    if (!this.marks || this.marks.length === 0) {
        console.log("У студента нет оценок");
        return 0;
    }
    // Вычисление среднего арифметического
  let sum = this.marks.reduce(function(acc, mark) {
    return acc + mark;
  }, 0);
  return sum / this.marks.length;  
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
  
    this.excluded = reason;  
}

let student1 = new Student("Иван", 'Mужской', 19);
let student2 = new Student("Виктор", 'Mужской', 23);
let student3 = new Student("Максим", 'Mужской', 22);