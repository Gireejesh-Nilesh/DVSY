import ImageCard from "./ImageCard";
import TextCard from "./TextCard";
const OurAdvantage = () => {
  const data = [
    {
      t1: "INDEPENDENT DESIGNERS",
      t2: "EXCLUSIVE & UNIQUITY",
      desc1:
        "Our platform celebrates the ingenuity of independent designers, offering a diverse range of fashion-forward garments that reflect the creativity and innovation of the artists behind them. Explore curated collections showcasing unique creations by independent designers.",
      desc2:
        "Indulge in curated collections showcasing exclusive, one-of-a-kind pieces, each with its own story and charm. Experience the allure of unique fashion pieces that radiate sophistication and individuality, curated for those who seek exclusivity.",
    },
    {
      t1: "HIGH QUALITY",
      t2: "ECO-FRIENDLY",
      desc1:
        "Embrace superior craftsmanship with our meticulously curated, enduringly high-quality garments. Discover high-quality garments crafted with utmost attention to detail and finest materials, promising longevity and timeless style.",
      desc2: "Join our commitment to sustainability with eco-friendly fashion options, stylish yet mindful of our planet. Explore guilt-free shopping with our eco-conscious collections, crafted with planet-friendly materials and ethical practices."
    },
  ];

  const img1 =
    "https://images.unsplash.com/photo-1502323777036-f29e3972d82f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const img2 =
    "https://images.unsplash.com/photo-1543762446-67600aab041f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div style={{ padding: "1.5rem" }} className="bg-black text-white ">
      <h1 style={{ marginBottom: "0.7rem" }} className="font-semibold text-2xl">
        OUR ADVANTAGES
      </h1>
      <div className="flex flex-col gap-8">
        <div className="flex gap-6">
          <ImageCard src={img1} />
          <TextCard data={data[0]} />
        </div>
        <div className="flex gap-6">
          <TextCard data={data[1]} />
          <ImageCard src={img2} />
        </div>
      </div>
    </div>
  );
};

export default OurAdvantage;
