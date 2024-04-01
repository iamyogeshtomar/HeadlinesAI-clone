import { CircleCheckBig } from "lucide-react";
import { useState } from "react";

export const PricingSection = () => {
  const [monthly, setMonthly] = useState(true);

  return (
    <section className="flex flex-col justify-center items-center gap-8 my-16">
      <h1 className="text-white text-4xl font-bold">Pricing</h1>
      <h3 className="text-lg text-center text-zinc-300">
        Join 8000+ satisfied users to generate Engaging, Attention Grabbing, and
        High Converting Headlines for your Content
      </h3>
      <div className="flex border rounded-md text-white">
        <p
          onClick={() => setMonthly(true)}
          className={
            monthly
              ? "px-4 py-2 bg-white text-black cursor-pointer"
              : "px-4 py-2 cursor-pointer"
          }
        >
          Monthly
        </p>
        <p
          onClick={() => setMonthly(false)}
          className={
            !monthly
              ? "px-4 py-2 bg-white text-black cursor-pointer"
              : "px-4 py-2 cursor-pointer"
          }
        >
          Annual
        </p>
      </div>

      <div className="w-[30%] border rounded-md p-6 flex flex-col gap-2 justify-center items-center text-white">
        {monthly ? (
          <>
            <h3 className="text-md text-zinc-500 font-semibold mt-2">
              Monthly
            </h3>
            <h1 className="text-4xl font-bold my-2">$9/month</h1>
          </>
        ) : (
          <>
            <h3 className="text-md text-zinc-500 font-semibold mt-2">Annual</h3>
            <h1 className="text-4xl font-bold my-2">$99/year</h1>
          </>
        )}
        <div className="flex flex-col justify-start">
          <div className="flex items-center gap-2 text-lg">
            <CircleCheckBig size={15} />
            <h3 className="font-semibold">Generate Unlimited Headlines</h3>
          </div>
          <div className="flex items-center gap-2">
            <CircleCheckBig size={15} />
            <h3 className="font-semibold">Access your History</h3>
          </div>
          <div className="flex items-center gap-2">
            <CircleCheckBig size={15} />
            <h3 className="font-semibold">Commerical Use</h3>
          </div>
          <div className="flex items-center gap-2">
            <CircleCheckBig size={15} />
            <h3 className="font-semibold">Priority Support</h3>
          </div>
        </div>
        <button className="w-full py-2 mt-4 rounded-md bg-white text-[#01011D] text-xl">
          Get Started
        </button>
      </div>
    </section>
  );
};
