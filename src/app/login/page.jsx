import Image from "next/image";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form className="flex flex-col gap-2">
        <h1>Silahkan Login</h1>
        <div className="flex flex-col gap-2">
          <input placeholder="Email" type="text" className="px-4 py-2 text-black rounded-md" />
          <input placeholder="Password" type="password" className="px-4 py-2 text-black rounded-md" />
        </div>
        <button className="px-4 py-2 border-2 rounded-md hover:border-slate-400 hover:text-slate-400">Login</button>
      </form>
      <p className="text-sm p-2">Or</p>
    </div>
  );
};
export default page;
