import ImageCard from "./ImageCard";

const About = () => {
  const img =
    "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div style={{ padding: "2rem" }} className="bg-black text-white flex gap-6">
      <div
        style={{ padding: "1rem" }}
        className="bg-gray-900 flex flex-col justify-center gap-4 flex-1 rounded-[5%]"
      >
        <h5 className="text-sm font-medium">ABOUT</h5>
        <h1 className="font-semibold text-3xl">WHERE FASHION MEETS FREEDOM</h1>
        <div className="flex gap-6 text-base text-gray-400">
          <p>
            We believe that fashion should be an expression of individuality. We
            encourage creativity and originality in every item we offer,
            presenting customers with exclusive collections from independent
            designers. With a commitment to fostering a community of creativity
            and innovation,
          </p>
          <p>
            we strive to connect designers with fashion enthusiasts who
            appreciate the artistry and individuality behind each piece. Driven
            by our dedication to authenticity, we curate each collection with a
            keen eye for unique designs that inspire confidence and
            self-expression.
          </p>
        </div>
      </div>
      <ImageCard src={img} />
    </div>
  );
};

export default About;
