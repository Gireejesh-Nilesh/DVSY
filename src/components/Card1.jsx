import Explore from "./ExploreContainer";

const Card1 = (props) => {
  return (
    <div>
      <div
        style={{ padding: "1.5rem" }}
        className="bg-gray-900 rounded-lg shadow-lg flex flex-col justify-evenly gap-10"
      >
        <h1 className="font-bold text-xl">{props.data.title}</h1>
        <p className="font-medium text-lg">{props.data.desc}</p>
        <Explore icon={<i className="ri-arrow-right-up-long-line"></i>} text="LEARN MORE" />
      </div>
      <div style={{ padding: "1rem" }}>
        <div className="flex flex-col items-center">
          <p className="font-medium text-lg text-gray-500">
            {props.data.specialist}
          </p>
          <h1 className="font-medium text-3xl">{props.data.designers}</h1>
        </div>
      </div>
    </div>
  );
};

export default Card1;
