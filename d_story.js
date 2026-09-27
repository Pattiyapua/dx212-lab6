// d_story.js — จาก User Story ของทีม (คาบ 7) → ฟังก์ชันล้วน

// User Story: "ในฐานะผู้ใช้ ฉันอยากเห็นรายการเมนูที่ราคาไม่เกินงบ"
// ขอบเขต: ฟังก์ชัน JavaScript ล้วน รับ array ของ object (เมนู) → คืนรายการเมนูในงบ

const menus = [
  { name: "ข้าวผัดหมู",   price: 50, category: "ข้าว" },
  { name: "ก๋วยเตี๋ยวเรือ", price: 45, category: "เส้น" },
  { name: "ส้มตำไก่ย่าง", price: 55, category: "ของทานเล่น" },
  { name: "ข้าวมันไก่",   price: 40, category: "ข้าว" },
  { name: "ยำหมูยอ",     price: 35, category: "ของทานเล่น" },
  { name: "ข้าวซอยไก่",   price: 65, category: "ข้าว" },
];

// menuWithinBudget: กรองเมนูราคาไม่เกินงบ เป็น array ใหม่ เรียงราคาน้อย→มาก
// (ไม่แก้ array เดิม — filter คืน object อ้างอิงตัวเดิม แต่ลำดับใน array ใหม่จัดใหม่)
const menuWithinBudget = (menus, budget) =>
  menus
    .filter((m) => m.price <= budget)
    .sort((a, b) => a.price - b.price);

const show = (list) => list.map((m) => `${m.name} ${m.price}฿`);

console.log("1) งบ 55:", show(menuWithinBudget(menus, 55)));
console.log("2) งบ 45 (เท่ากับราคาพอดี):", show(menuWithinBudget(menus, 45)));
console.log("3) งบ 5 (ไม่มีเมนูในงบ):", show(menuWithinBudget(menus, 5)));