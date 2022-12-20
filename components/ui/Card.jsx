import Button from "./Button";

export default function Card({ image, color, title,subtitle , styles}) {
  return (
        <div className={`px-6 py-3 space-y-6 ${styles}`}>
          <h1 className="text-[23px] font-bold">{title}</h1>
          <p className="text-base">{subtitle}</p>
        </div>
  );
}
