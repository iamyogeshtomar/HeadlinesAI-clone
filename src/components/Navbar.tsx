import { MoveRight } from "lucide-react";

export const Navbar = () => {
  return (
    <div className="min-h-20vh bg-[#01011D]">
      <div className="w-full flex justify-center text-white bg-gradient-to-r from-[#2B48D7] to-[#7427CF] text-center py-2">
        UPGRADE NOW TO GET 30% OFF <MoveRight className="ml-1 fill-white" />
      </div>
      <div className="flex justify-between items-center px-8 py-6">
        <h1 className="ml-4 font-bold text-white text-2xl">HeadlinesAI</h1>
        <div className="flex gap-4 mr-4">
          <button className="border-none py-2 text-zinc-300 font-semibold">
            Become an Affiliate
          </button>
          <button className="px-6 py-2 cursor-pointer text-white font-semibold bg-gradient-to-r from-[#2B48D7] to-[#7427CF] rounded-full">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
