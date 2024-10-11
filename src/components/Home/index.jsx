import Image from "next/image";

const Home = () => {
  return (
    <div className="flex flex-col items-center p-6">
      <div className="flex flex-row gap-16 p-4">
        <h1>For you</h1>
        <h1>Following</h1>
      </div>
      <div>
        <Image
          src="/assets/st1.png"
          alt="Description"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default Home;
