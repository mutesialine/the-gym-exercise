import Newscard from "../ui/Newscard";
import Button from "../ui/Button";
export default function News() {
  return (
    <div className="max-w-main px-6 mx-auto">
      <div className="flex my-32">
        <div className=" space-y-6">
          <h1 className="text-[32px] font-bold">News from TUM</h1>
          <p className=" text-xl">
            News, research results and events: everything that enthuses people
            at our university.
          </p>
          <Button styles={"bg-lightBlue text-white"}>See all</Button>
        </div>
        <div className="w-1/2 flex gap-4">
          <Newscard
            pic={"csm.webp"}
            subtitle="TUM in rankings WirtschaftsWoche rankings"
            title="Germany's strongest university in business sciences"
            paragraph="
TUM in rankings
WirtschaftsWoche rankings

Germany's strongest university in business sciences
TUM has retained its ranking as Germany’s strongest research university in business sciences. The latest issue of the..."
            date="12/9/2020"
            minutes="Reading time 2min"
          />

          <Newscard
            pic={"csm.webp"}
            subtitle="TUM in rankings WirtschaftsWoche rankings"
            title="Germany's strongest university in business sciences"
            paragraph="
TUM in rankings
WirtschaftsWoche rankings

Germany's strongest university in business sciences
TUM has retained its ranking as Germany’s strongest research university in business sciences. The latest issue of the..."
            date="12/9/2020"
            minutes="Reading time 2min"
          />
        </div>
      </div>
      <div className="w-1/2 flex gap-4 ml-96">
        <Newscard
          pic={"csm.webp"}
          subtitle="TUM in rankings WirtschaftsWoche rankings"
          title="Germany's strongest university in business sciences"
          paragraph="
TUM in rankings
WirtschaftsWoche rankings

Germany's strongest university in business sciences
TUM has retained its ranking as Germany’s strongest research university in business sciences. The latest issue of the..."
          date="12/9/2020"
          minutes="Reading time 2min"
        />

        <Newscard
          pic={"csm.webp"}
          subtitle="TUM in rankings WirtschaftsWoche rankings"
          title="Germany's strongest university in business sciences"
          paragraph="
TUM in rankings
WirtschaftsWoche rankings

Germany's strongest university in business sciences
TUM has retained its ranking as Germany’s strongest research university in business sciences. The latest issue of the..."
          date="12/9/2020"
          minutes="Reading time 2min"
        />
      </div>
    </div>
  );
}
