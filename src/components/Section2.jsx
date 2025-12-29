import Card1 from "./Card1";
const Section2 = () => {
  const data = [
    {
      title: "INDEPENDENCY",
      desc: "Explore the creativity of independent designers from around the globe.",
      designers: "150+",
      specialist: "DESIGNERS",
    },
    {
      title: "UNIQUITY",
      desc: "Discover the charm of unique pieces that stand out effortlessly.",
      designers: "500+",
      specialist: "CLIENTS",
    },
    {
      title: "QUALITY",
      desc: "Explerience unparalleled craftsmanship and attention to detail.",
      designers: "20K+",
      specialist: "MASTERPIECES",
    },
    {
      title: "SUSTAINABILITY",
      desc: "Embrace eco-friendly fashion choices that make a difference.",
      designers: "50+",
      specialist: "EVENTS",
    },
  ];
  return (
    <div
      style={{ padding: "1.5rem" }}
      className="w-full bg-black flex justify-evenly items-center gap-5"
    >
      <Card1 data={data[0]} />
      <Card1 data={data[1]} />
      <Card1 data={data[2]} />
      <Card1 data={data[3]} />
    </div>
  );
};

export default Section2;
