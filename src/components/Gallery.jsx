// วางไฟล์รูปของคุณไว้ในโฟลเดอร์ public/photos/
// แล้วแก้ path ใน array PHOTOS ด้านล่างให้ตรงกับชื่อไฟล์จริง
// เช่น { src: "/photos/photo1.jpg", caption: "ทริปทะเล" }
const PHOTOS = [
  { src: "/images/IMG_5088.jpg", caption: "สีชัง" },
  { src: "/images/IMG_5112.jpg", caption: "สีชัง" },
  { src: "/images/drawing.PNG", caption: "ไปอเมซอนหลังเที่ยวเกาะสีชัง" },
  { src: "/images/IMG_4052.jpg", caption: "วาดรูป" },
  { src: "/images/IMG_5362.jpg", caption: "สงกรานต์" },
  { src: "/images/IMG_5480.jpg", caption: "วัด" },
  { src: "/images/IMG_5485.jpg", caption: "เที่ยว" },
  { src: "/images/IMG_5506.jpg", caption: "สวนลอยฟ้า" },
  { src: "/images/IMG_1252.PNG", caption: "ซิน" },
  { src: "/images/IMG_1251.PNG", caption: "ชิคเก้น" },
];

export default function Gallery() {
  return (
    <section className="gallery-section">
      <h2 className="section-title">ความทรงจำ</h2>
      <p className="section-lead">
        {/* ใส่รูปของคุณสองคนได้ที่ไฟล์ <code>src/components/Gallery.jsx</code> */}
      </p>
      <div className="gallery-grid">
        {PHOTOS.map((p, i) =>
          p.src ? (
            <img className="gallery-photo" src={p.src} alt={p.caption} key={i} />
          ) : (
            <div className="gallery-placeholder" key={i}>
              <span>{p.caption}</span>
            </div>
          )
        )}
      </div>
    </section>
  );
}
