import { RxArrowTopRight } from "react-icons/rx";
import Link from 'next/link';
import Paragraph from '../paragraph';
import footerData from '@/deta/foterdeta';
import SectionTitle from '../sectiontitle';
import Section from '../section';
import Image from 'next/image';

const FooterLinks = ({ title, links }) => (
  <>
  <div>
  <h3 className="text-lg md:text-xl leading-[2.1rem] font-semibold mb-6">{title}</h3>
    <ul className="space-y-4">
      {links.map((link) => (
        <li key={link.name}>
          <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-base" target={link.newTab ? "_blank" : "_self"}>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
  </>
);


export default function Footer() {
  return (
    <footer className=" relative overflow-hidden bg-black text-white  border-[2px] border-[#2EC4B636]">
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 mb-12">
          <div>
            <Link href="/" className="text-3xl font-semibold">
              {footerData.companyInfo.title}
            </Link>
            <div className="text-gray-400 mt-5 w-[90%]">
              <Paragraph text={footerData.companyInfo.description} black={true} />
            </div>

            <div className='mt-7'>
              <Image
                src="/assests/footer/7dd198174d74c377c1942bd6ef24e745.png"
                alt="img"
                height={1000}
                width={1000}
                className="w-10 rotate-45"
              />

              <div className='flex flex-col md:flex-row items-center gap-x-3 md:gap-x-5 lg:gap-x-10 gap-y-3 mt-5'>
                <Paragraph text={footerData.companyInfo.communityText} black={true} />
                <div className='flex items-center  -space-x-3'>
                  {
                    footerData.companyInfo.Imges.map((items, index) => (
                      <Image
                        src={items}
                        alt={`Image ${index + 1}`}
                        height={1000}
                        width={1000}
                        className="object-cover relative w-10 h-10 rounded-full border-2 border-black overflow-hidden"
                        key={index}
                      />
                    ))
                  }
                </div>
              </div>
            </div>
          </div>

          <div>
            <SectionTitle title="Stay updated by subscribing to our newsletter" />
            <div className="mt-8 flex items-center border border-primary rounded-full px-5 lg:px-7 py-4 ">
              <input
                type="email"
                placeholder="jessicabrown@gmail.com"
                className=" flex-grow tracking-wide bg-transparent outline-none pl-3 text-gray-400 placeholder-gray-400"
              />
              <button className="ml-2 p-3 text-xl md:text-2xl  rounded-full  bg-primary text-black hover:bg-cyan-500 focus:outline-none">
                <RxArrowTopRight />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4  gap-8 md:gap-10 py-12 border-y border-[#FFFFFF26]">
          <FooterLinks title={footerData.navigation.title} links={footerData.navigation.links} />
          <FooterLinks title={footerData.socials.title} links={footerData.socials.links} />
          <FooterLinks title={footerData.legals.title} links={footerData.legals.links} />
          <FooterLinks title={footerData.contact.title} links={footerData.contact.links} />
        </div>
        <div className="text-center pt-8">
          <p className="text-gray-400 text-base">Copyright@Hometutors</p>
        </div>
        <div className=' absolute -top-44 -right-44 w-96 h-96 bg-primary blur-[400px] ' />
        <div className=' absolute -bottom-52 -left-40 w-96 h-96 bg-primary blur-[400px] ' />
      </Section>
    </footer>
  );
}