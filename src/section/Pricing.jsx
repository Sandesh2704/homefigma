import Section from '@/components/section';
import SectionTitle from '@/components/sectiontitle';
import pricingPlans from '@/deta/pricing';
import React from 'react'
import { FaCheck } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';

export default function Pricing() {
  return (
    <>
      <Section>
        <div className="w-full flex justify-center">
          <div className="sm:w-6/12 xl:w-4/12 text-center">
            <SectionTitle title="Find the perfect plan that fits your budget" black={true} balance={true} center={true} />
          </div>
        </div>


        <div className="flex flex-wrap justify-center gap-6 lg:gap-8  xl:px-16 py-8">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="w-full sm:w-[48%] md:w-[48%] xl:w-[30%] flex justify-center">
              <PricingCard plan={plan} />
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}



const PricingCard = ({ plan }) => {
  return (
    <div className={`rounded-3xl   flex flex-col h-full lg:h-fit relative overflow-hidden w-full  px-6 py-8 ${plan.isPopular ? 'bg-[#011627]' : ' bg-white border border-[#011627] '}`}>
      {plan.isPopular && (
        <div className="flex gap-4 ">
          <span className="bg-white text-black px-4 py-2 rounded-full text-base">
            Advance Plan
          </span>
          <span className="bg-[#FF3366] flex-1 w-full text-center text-white px-4 py-2 rounded-full text-base">
            Popular
          </span>
        </div>
      )}
      {!plan.isPopular && (
        <div >
          <span className="bg-[#2EC4B6] text-white px-4 py-2 rounded-full text-base">
            {plan.tag}
          </span>
        </div>
      )}

      <div className="mt-9">
        <div className="text-5xl  flex items-baseline">
          <span className={`font-semibold ${plan.isPopular ? 'text-gray-300' : 'text-gray-600'}`}>${plan.price}</span>
          <span className={` ml-1 ${plan.isPopular ? 'text-gray-300' : 'text-gray-600'}`}>/month</span>
        </div>
        <p className={`text-base lg:text-lg mt-5 ${plan.isPopular ? 'text-gray-300' : 'text-gray-600'}`}>
          {plan.description}
        </p>
      </div>

      <div className="flex-grow mt-9">
        <ul className="space-y-4">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-4 pr-2">
              {feature.included ? (
                <FaCheck className={`  text-3xl p-2 flex-shrink-0 rounded-full ${plan.isPopular ? 'text-black bg-white' : ' bg-[#2EC4B6] text-white '}`} />
              ) : (
                <RxCross2 className="bg-[#FF3366] text-white text-3xl p-2 flex-shrink-0 rounded-full" />
              )}
              <span className={`text-base md:text-lg ${plan.isPopular ? 'text-white' : 'text-gray-700'}`}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <button
        className={`w-full mt-8 py-3 px-6 rounded-full font-medium text-base md:text-xl ${plan.isPopular ? 'text-black bg-white' : ' bg-black text-white '} hover:opacity-90 transition-opacity`}
      >
        {plan.buttonText}
      </button>
    </div>
  );
};


