import Pictures from "../ui/Pictures";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Images from "../ui/Pictures";
export default function Research() {
  return (
    <div className=" flex max-w-main mx-auto px-6 w-full my-40 z-10">
      <Pictures img={"Neubau.webp"} />
      <div className="w-1/2  my-20 bg-purple-500 text-black flex flex-col relative z-20 -ml-10 ">
        <Card
          title={`"Schools and Research Centers"`}
          subtitle="They form the academic foundation of TUM: Our schools and departments, connected at disciplinary interfaces by integrative research institutes to create an organization that drives innovation."
        />
        <Button styles={"bg-lightblue text-white mx-6 my-3 "}>Read more</Button>
      </div>
    </div>
  );
}
