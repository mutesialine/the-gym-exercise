import Image from "next/image"
export default function Picture({img}){
  return (
    <Image src={`/Images/${img}`} width={784} height={490} alt="picture" />
  );
}