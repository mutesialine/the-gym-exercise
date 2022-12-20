import Button from "../ui/Button";

export default function Discover() {
  return (
    <div className="w-full max-w-main px-6 mx-auto my-12">
      <p className="text-base pb-0.5">Customized page</p>

      <h1 className="text-4xl font-bold">Discover what TUM has to offer</h1>
      <div className=" flex gap-8 pt-8 max-w-main items-center">
        <div className="relative box-border border border-gray-300 mx-2 mb-2 -mr-20 -top-10 z-20 bg-white ">
          <p className="px-5 py-3">for :</p>
          <ul className=" flex flex-col  text-base font-bold w-[305px]">
            <li className="bg-lightgray px-5 py-3">Prosective students</li>
            <li className="text-lightblue px-5 py-3">Founder</li>
            <li className=" text-lightblue px-5 py-3">Employes</li>
            <li className="text-lightblue px-5 py-3">Show All</li>
          </ul>
        </div>
        <div className=" bg-yellow w-[688px] h-[445px] py-27.5   px-32.25 -z-10 ">
          <div className=" flex bg-[url('/Images/Heddergott.webp')] bg-center aspect-[249/140] w-full h-full bg-no-repeat bg-cover ">
            <div className="w-[10%] bg-yellow mt-[10%]"></div>
            <div className="w-[10%] bg-transparent mb-[10%]"></div>
            <div className="bg-yellow w-[10%] mt-[10%]"></div>
            <div className="w-[10%] bg-transparent mb-[10%]"></div>
            <div className="bg-yellow w-[10%] mt-[10%]"></div>
            <div className="w-[10%] bg-transparent mb-[10%]"></div>
            <div className="bg-yellow w-[10%] mt-[10%]"></div>
            <div className="w-[10%] bg-transparent mb-[10%]"></div>
            <div className="bg-yellow w-[10%] mt-[10%]"></div>
            <div className="bg-transparent w-[10%] mb-[10%]"></div>
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-darkblue text-large font-bold">
            Prosective students
          </h1>
          <p className="text-xl leading-8">
            Learn to bring ideas to life, discover new possibilities, work in
            teams and build networks.
          </p>
          <Button styles={"text-lightblue border border-lightblue"}>
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
}
