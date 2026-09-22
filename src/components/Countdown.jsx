import { useEffect, useState } from "react";

const BIRTH_MONTH = 10; // ตุลาคม
const BIRTH_DAY = 9;
const BIRTH_YEAR = 2001; // พ.ศ. 2544

function getNextBirthday(now) {
  const year =
    now.getMonth() + 1 > BIRTH_MONTH ||
    (now.getMonth() + 1 === BIRTH_MONTH && now.getDate() > BIRTH_DAY)
      ? now.getFullYear() + 1
      : now.getFullYear();
  return new Date(year, BIRTH_MONTH - 1, BIRTH_DAY, 0, 0, 0);
}

function isBirthdayToday(now) {
  return now.getMonth() + 1 === BIRTH_MONTH && now.getDate() === BIRTH_DAY;
}

function getTimeLeft() {
  const now = new Date();
  const next = getNextBirthday(now);
  const diff = Math.max(0, next.getTime() - now.getTime());

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds, today: isBirthdayToday(now), turningAge: next.getFullYear() - BIRTH_YEAR };
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="countdown-section">
      <p className="countdown-label">เกิดวันที่ 9 ตุลาคม 2544</p>

      {time.today ? (
        <h2 className="countdown-today">วันนี้แหละ! สุขสันต์วันเกิดปีที่ {time.turningAge} 🎉</h2>
      ) : (
        <>
          <p className="countdown-lead">
            อีก {time.days} วัน จะครบรอบวันเกิดปีที่ {time.turningAge}
          </p>
          <div className="countdown-grid">
            <div className="countdown-box">
              <span className="countdown-num">{time.days}</span>
              <span className="countdown-unit">วัน</span>
            </div>
            <div className="countdown-box">
              <span className="countdown-num">{time.hours}</span>
              <span className="countdown-unit">ชม.</span>
            </div>
            <div className="countdown-box">
              <span className="countdown-num">{time.minutes}</span>
              <span className="countdown-unit">นาที</span>
            </div>
            <div className="countdown-box">
              <span className="countdown-num">{time.seconds}</span>
              <span className="countdown-unit">วินาที</span>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
