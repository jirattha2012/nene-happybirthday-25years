# ne-happybirthday-25y 🎂

เว็บอวยพรวันเกิดอินเทอร์แอกทีฟให้เนเน่ อายุ 25 ปี สร้างด้วย React + Vite

## วิธีรันโปรเจกต์

```bash
npm install
npm run dev
```

แล้วเปิดลิงก์ที่ขึ้นในเทอร์มินัล (ปกติคือ http://localhost:5173)

## วิธี build เป็นเว็บจริงเพื่อ deploy

```bash
npm run build
```

ไฟล์ที่ build แล้วจะอยู่ในโฟลเดอร์ `dist/` เอาไปวางบน Netlify, Vercel, GitHub Pages ได้เลย

## แก้ไขเนื้อหา

- ข้อความและอายุ: `src/components/Hero.jsx`
- ข้อความอวยพร: `src/components/WishCards.jsx`
- รูปความทรงจำ: `src/components/Gallery.jsx` (ใส่ไฟล์รูปไว้ที่ `public/photos/`)
- ข้อความปิดท้าย: `src/components/Footer.jsx`
- สี/ฟอนต์: ตัวแปรใน `src/App.css` (ส่วน `:root`)
