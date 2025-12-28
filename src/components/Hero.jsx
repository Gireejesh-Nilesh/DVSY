const Hero = () => {
  return (
    <div
      style={{ paddingBottom: "1rem" }}
      className="w-full h-full flex justify-center items-end"
    >
      <div className="w-[95%] h-[90%] rounded-md bg-[url('https://images.unsplash.com/photo-1534008757030-27299c4371b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center flex flex-col justify-center p-10 gap-8">
        <h1
          style={{ padding: "1rem", textShadow: "2px 2px 4px black" }}
          className="font-bold text-9xl"
        >
          DESIGN & FREEDOM
        </h1>
        <div
          style={{ padding: "1rem" }}
          className="flex items-center justify-between w-full"
        >
          <p className="text-xl w-[40%] ">
            Explore Independent Style by Embracing Uniqueness with Our Exclusice
            Designer Apparel
          </p>
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 bg-gray-600 rounded-[50%] flex items-center justify-center text-xl">
              <i className="ri-arrow-down-line text-white"></i>
            </div>
            <h6>LEARN MORE</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
