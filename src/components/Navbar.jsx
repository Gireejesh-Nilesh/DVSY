const Navbar = () => {
  return (
    <div className="w-full h-16 bg-transparent flex items-center justify-around text-white pr-4 fixed">
      <h1 className="w-20 h-10 text-center font-bold text-3xl">DVSY</h1>
      <div className="flex gap-6 text-m font-medium">
        <button>DESIGNERS</button>
        <button>COLLABS</button>
        <button>EVENTS</button>
        <button>BLOG</button>
        <button>CARD</button>
        <button
          style={{ padding: "0.5rem 1rem" }}
          className="bg-orange-500 rounded-md font-semibold active:scale-95 transition-transform duration-150 cursor-pointer"
        >
          GET IN TOUCH
        </button>
      </div>
    </div>
  );
};

export default Navbar;
