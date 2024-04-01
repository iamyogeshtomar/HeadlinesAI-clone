// import React from 'react'

type step = {
  id: String;
  title: String;
  desc: String;
};

export const StepsSection = () => {
  const steps: step[] = [
    {
      id: "1",
      title: "Select Platform",
      desc: "Select from Youtube, IndieHackers, Medium and Reddit",
    },
    {
      id: "2",
      title: "Describe your Content",
      desc: "Describe the topic you are writing about",
    },
    {
      id: "3",
      title: "That's All",
      desc: "That's it, your output will be ready within seconds",
    },
  ];

  return (
    <section className="flex flex-col gap-6 justify-center items-center my-6">
      <h1 className="text-white text-4xl font-bold">How it wotks?</h1>
      <div className="flex justify-center items-center gap-8 my-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 justify-center items-center text-white w-[25%] text-center px-5"
          >
            <button className="rounded-full bg-[#172554] text-2xl px-6 py-4 font-semibold">
              {step.id}
            </button>
            <h1 className="text-xl font-semibold">{step.title}</h1>
            <h3 className="text-md ">{step.desc}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
