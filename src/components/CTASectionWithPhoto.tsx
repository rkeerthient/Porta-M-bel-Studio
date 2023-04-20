
export interface CTASectionWithPhotoProps {
  heading?: string;
  subheading?: string;
  paragraph?: string;
  bgImage?: string;
  cta1Label?: string;
  cta1Color?: string;
}

const CTASectionWithPhoto = (props: CTASectionWithPhotoProps) => {
  const { heading, subheading, bgImage, paragraph, cta1Label } =
    props;


  return (
    <>
      <div className="relative bg-gray-900">
        <div className="relative h-80 overflow-hidden bg-indigo-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
          <img
            className="h-full w-full object-cover"
            src={bgImage}
            alt=""
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 926 676"
            aria-hidden="true"
            className="absolute left-24 -bottom-24 w-[57.875rem] transform-gpu blur-[118px]"
          >
            <path
              fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
              fillOpacity=".7"
              d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
            />
            <defs>
              <linearGradient
                id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
                x1="926.392"
                x2="-109.635"
                y1=".176"
                y2="321.024"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#776FFF" />
                <stop offset={1} stopColor="#FF4694" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:py-40 lg:px-8">
          <div className="pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
            <h2 className="text-base font-semibold leading-7 text-indigo-400">
              {heading}
            </h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-white">
              {subheading}
            </p>
            <p className="mt-6 text-base leading-7 text-gray-300">
              {paragraph}
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex rounded-md bg-white/10 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {cta1Label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CTASectionWithPhoto;