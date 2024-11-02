import Image from "next/image";
import SamplePic from "@public/assets/samplePhoto.jpg";

const ArticleListItem = () => {
  const randomHue = Math.floor(Math.random() * 360);
  return (
    <div className="flex px-8">
      <div className="min-w-[220px] min-h-[220px] max-w-[220px] max-h-[220px]">
        <Image
          src={SamplePic}
          alt={""}
          className="w-full h-full  object-cover "
        />
      </div>
      <div className="flex flex-col justify-between pl-5 gap-4">
        <div className="flex flex-col gap-4">
          <p className="font-bold text-3xl max-w-[600px] overflow-hidden whitespace-nowrap text-ellipsis">
            Lorem Ipsum is simply dummy text of the printin typesetting
            industry. Lorem Ipsum
          </p>
          <p className="font-medium text-lg max-w-[600px] overflow-hidden  text-ellipsis">
            Lorem Ipsum has been the standard dummysdfgsdfg. Lorem Ipsum has
            been the standard dummysdfgsdfg.Lorem Ipsum has been the standard
            dummysdfgsdfg.Lorem Ipsum has been the standard dummysdfgs.
          </p>
        </div>

        <div className="flex justify-between">
          <div className="flex gap-6">
            <span
              className="w-16 h-16 flex items-center justify-center rounded-full text-white text-2xl font-bold random-bg"
              style={{
                backgroundColor: `hsl(${randomHue}, 70%, 60%)`, // Generates a random HSL color
              }}
            >
              UA
            </span>
            <div className="flex flex-col justify-center">
              <p className="font-bold">Arlette Umugwaneza</p>
              <p className="font-normal">14th August 2024 12:00</p>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <div>
              <span>edit</span>
            </div>
            <div>
              <span>delete</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleListItem;
