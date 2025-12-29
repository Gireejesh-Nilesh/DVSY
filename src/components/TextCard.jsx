import ExploreContainer from "./ExploreContainer";

const TextCard = (props) => {
  return (
    <div className="flex flex-col justify-center gap-6 flex-1">
      <div
        style={{ padding: "1rem" }}
        className="flex flex-col gap-4 bg-gray-900 rounded-xl"
      >
        <h1 className="font-semibold text-xl">{props.data.t1}</h1>
        <div className="flex gap-4">
          <p className="text-sm leading-6 text-gray-300">{props.data.desc1}</p>
          <div className="flex flex-col justify-end">
            <ExploreContainer
              icon={<i className="ri-arrow-right-up-long-line"></i>}
              text="Explore"
            />
          </div>
        </div>
      </div>
      <div
        style={{ padding: "1.5rem" }}
        className="flex flex-col gap-4 bg-gray-900 rounded-xl"
      >
        <h1 className="font-semibold text-xl">{props.data.t2}</h1>
        <div className="flex gap-4">
          <p className="text-sm leading-6 text-gray-300">{props.data.desc2}</p>
          <div className="flex flex-col justify-end">
            <ExploreContainer
              icon={<i className="ri-arrow-right-up-long-line"></i>}
              text="Explore"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextCard;
