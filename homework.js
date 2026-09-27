// Homework - Lab 06
// เขียนโค้ดตามโจทย์ด้านล่าง

// 1. สร้าง object นักเรียน 3 คน เก็บชื่อ อายุ GPA คณะ (faculty)
//    แล้วเก็บทั้ง 3 คนไว้ใน array ชื่อ students

// 2. แสดงชื่อและคณะของนักเรียนทุกคนด้วย for...of

// 3. ใช้ map สร้าง array ใหม่ที่มีเฉพาะชื่อนักเรียน เก็บไว้ใน names

// 4. ใช้ filter หานักเรียนที่ GPA >= 3.00 เก็บไว้ใน goodStudents

// 5. ใช้ reduce หาผลรวมอายุ (age) ของนักเรียนทุกคน เก็บไว้ใน totalAge

// 6. สร้างฟังก์ชัน arrow ชื่อ getProfile ที่รับ student แล้วคืนค่า
//    "ชื่อ: <name>, คณะ: <faculty>, GPA: <gpa>"

// 7. ใช้ getProfile แสดงข้อมูลนักเรียนทุกคนคนละ 1 บรรทัด

// 8. หานักเรียนที่อายุมากที่สุด (maxAge) แล้วแสดงชื่อและอายุ

// calcFare: คำนวณค่าโดยสารรถ NGV
// 2 กม.แรก = 10 บาท, กม.ถัดไปคิดกม.ละ 2 บาท, เศษปัดขึ้น
const calcFare = (distanceKm) => {
  if (typeof distanceKm !== "number" || !Number.isFinite(distanceKm) || distanceKm < 0) {
    return 0; // ระยะทางไม่ถูกต้อง
  }
  const distance = Math.ceil(distanceKm);    // ปัดเศษกิโลเมตรขึ้น
  const extraKm = Math.max(distance - 2, 0); // กม.ที่เกิน 2 กม.แรก
  return 10 + extraKm * 2;                   // ค่าแรก 10 + กม.เกิน * 2
};

console.log(calcFare(0));
console.log(calcFare(1.5));
console.log(calcFare(2));
console.log(calcFare(2.1));
console.log(calcFare(5.5));
console.log(calcFare(-3));
console.log(calcFare("abc"));