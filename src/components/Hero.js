import { Tick } from "../icons";

const outcomes = [
  "How to build this landing page with Next.js",
  "How to create API endpoint and integrate with ConvertKit API",
  "How to use React Hook Form and TailwindCSS",
];

const OutcomesList = () => {
  if (outcomes) {
    return <ul className="mb-6">{outcomes.map(outcomeListItem)}</ul>;
  }
};

const outcomeListItem = (outcome, index) => (
  <li className="flex mb-2 text-gray-700" key={index.toString()}>
    <span className="self-center mr-2">
      <Tick className="h-4" />
    </span>
    <span className="opacity-75">{outcome}</span>
  </li>
);

const ComingSoonBadge = () => (
  <span className="bg-blue-500 text-white text-xs py-1 px-2 rounded-md mb-4 inline-block">
    Comming soon
  </span>
);

export const Hero = () => {
  return (
    <div className="border border-gray-200 md:flex md:flex-row">
      <div className="text-center bg-gray-100 md:w-1/3 flex">
        <img
          className="mx-auto"
          src="/assets/img_nextjs-101-cover.png"
          alt="cover image"
        />
      </div>
      <div className="self-center px-4 py-8 md:px-8 md:w-2/3">
        <h2 className="mb-3 text-2xl font-bold">What you'll learn</h2>
        <OutcomesList />
        <ComingSoonBadge />
      </div>
    </div>
  );
};
