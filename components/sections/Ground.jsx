import Pictures from "../ui/Pictures";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Images from "../ui/Pictures";
export default function Ground() {
  return (
    <div className=" flex max-w-main mx-auto px-6 w-full my-40 z-10">
      <div className="w-1/2  my-20 bg-orange-700 text-black flex flex-col relative z-20 -mr-10 ">
        <Card
          title={`"Here I have met a lot of people who are breaking new ground"`}
          subtitle="They form the academic foundation of TUM: Our schools and departments, connected at disciplinary interfaces by integrative research institutes to create an organization that drives innovation."
        />
        <Button styles={"bg-lightblue text-white mx-6 my-3 "}>Read more</Button>
      </div>
      <Pictures img={"christian.webp"} />
    </div>
  );
}
