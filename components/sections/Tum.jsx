import Pictures from "../ui/Pictures";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Images from "../ui/Pictures";
export default function tum (){
return (
  <div className=" flex max-w-main mx-auto px-6 w-full my-40 z-10">
    <Pictures img={"presidential.webp"} />
    <div className="w-1/2  my-20 bg-lightblue text-white flex flex-col relative z-20 -ml-10 ">
      <Card
        title={`"What drives us: President Thomas F. Hofmann about TUM"`}
        subtitle="Research and innovations for society, innovative teaching and
    continuing education: This is how we shape a sustainable future, relying on
    the intelligence of the entire university and working closely with global
    partners to do so."
      />
      <Button styles={"bg-white text-lightBlue text-black mx-6 my-3 "}>
        Read more
      </Button>
    </div>
  </div>
);
}