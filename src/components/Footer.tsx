import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <div className="min-h-20vh bg-[#01011D] flex justify-center items-center">
      <div className="w-[90%] my-12">
        <div className="flex flex-col gap-6">
          <div className="flex gap-4 text-lg text-zinc-300 font-semibold">
            <h3 className="cursor-pointer">Home</h3>
            <h3 className="cursor-pointer">Terms of use</h3>
            <h3 className="cursor-pointer">Privacy</h3>
            <h3 className="cursor-pointer">Join Affiliate Program</h3>
          </div>
          <h1 className="text-white text-xl font-bold">OUR OTHER PRODUCTS</h1>
          <div className="flex gap-2 text-lg text-zinc-300 font-semibold">
            <h3 className="cursor-pointer">Proface</h3>
            <h3 className="cursor-pointer">Avatarize</h3>
            <h3 className="cursor-pointer">VisualizeAI</h3>
            <h3 className="cursor-pointer">Community Hunt</h3>
          </div>
          <Separator />
          <div className="text-sm text-zinc-300">
            © 2023 HeadlinesAI. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};
