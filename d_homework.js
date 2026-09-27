// d_homework.js - การบ้านคาบ 5 (map / filter / reduce)

// 1. สร้าง object นักเรียน 3 คน แล้วเก็บใน array
const students = [
  { name: "Manee",  age: 19, gpa: 3.75, faculty: "วิศวกรรมศาสตร์" },
  { name: "Mana",   age: 20, gpa: 2.65, faculty: "บริหารธุรกิจ" },
  { name: "Chujai", age: 22, gpa: 3.25, faculty: "วิทยาการคอมพิวเตอร์" },
];

// 2. แสดงชื่อและคณะของนักเรียนทุกคนด้วย for...of
for (const student of students) {
  console.log(student.name, student.faculty);
}

// 3. map: เก็บเฉพาะชื่อนักเรียน
const names = students.map((s) => s.name);
console.log(names);

// 4. filter: หานักเรียนที่ GPA >= 3.00
const goodStudents = students.filter((s) => s.gpa >= 3.0);
console.log(goodStudents);

// 5. reduce: หาผลรวมอายุของนักเรียนทุกคน
const totalAge = students.reduce((total, s) => total + s.age, 0);
console.log(totalAge);

// 6. ฟังก์ชัน arrow สร้างโปรไฟล์
const getProfile = (student) =>
  `ชื่อ: ${student.name}, คณะ: ${student.faculty}, GPA: ${student.gpa}`;

// 7. แสดงโปรไฟล์นักเรียนทุกคนคนละ 1 บรรทัด
for (const student of students) {
  console.log(getProfile(student));
}

// 8. หานักเรียนที่อายุมากที่สุด (reduce เก็บ object คนที่อายุเยอะสุด)
const oldest = students.reduce((max, s) => (s.age > max.age ? s : max));
console.log(oldest.name, oldest.age);