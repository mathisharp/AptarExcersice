 import exercise from "./exercise";
 class Solution {

    constructor() { }

    public main(): void {
    const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Give Any value to see the Test result :', (answer) => {
  
  //Adding students
  console.log('Adding students');
  const stu = new exercise();
  stu.add(1,"anc");
  stu.add(3,"sowmiya");
  stu.add(2,"miya");
  stu.add(1,"vishnu");
  console.log('Getstudents by grade 1');
  console.log(stu.getByGrades(1));
  console.log('Get Student Detail based on grade and name sort');
  console.log(stu.getAllSortedList());
  rl.close();
});
    }
}

const solution = new Solution();
solution.main(); 
 
