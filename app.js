function Person (name, id, salary, rating){
  this.name = name;
  this.id = id;
  this.salary = salary;
  this.rating = rating;
};

var atticus = new Person("Atticus", "2405", "47000", 3);
var jem = new Person("Jem", "62347", "63500", 4);
var boo = new Person("Boo", "11435", "54000", 3);
var scout = new Person("Scout", "6243", "74750", 5);

var employees = [atticus, jem, boo, scout];

for (var i = 0; i < employees.length; i++) {
    console.log(getEmployee(employees[i]));
}

function getEmployee (employee) {
  var bonusArray = [];
  bonusArray[0] = employee.name;
  var percent = percentage(employee);
  bonusArray[1] = (percent * 100) + '%';
  var bonus = employee.salary * percent;
  bonusArray[2] = parseInt(employee.salary) + bonus;
  bonusArray[3] = parseInt(bonus);
  return bonusArray;
}

function percentage (Person){
  var rating = Person.rating;
  var salary = Person.salary;
  var id = Person.id;
  var precent = 0;

  if (rating <= 2) {
    return percent;
  } else if (rating === 3) {
    percent = 0.04
  } else if (rating === 4) {
    percent = 0.06;
  } else if (rating === 5) {
    percent = .1;
  }

if (id.length <= 4) {
    percent += 0.05;
 }
if (salary > 65000) {
  percent -= 0.01;
}
if (percent > 0.13) {
  percent = 0.13;
}
return percent;
}
