import Image from "next/image"
export default function Picture({img}){
  return(
    <Image src={`/images/${img}`} width={784} height={490}/>
  );
}