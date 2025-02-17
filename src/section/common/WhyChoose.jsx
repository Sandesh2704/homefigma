import Section from '@/components/section'
import SectionTitle from '@/components/sectiontitle'
import whychoose from '@/deta/whychoose';
import Image from 'next/image';

export default function WhyChoose() {
    return (
        <>
            <Section color='#F5F5F5'>
                <div className="flex justify-center overflow-hidden">
                    <div className="md:w-6/12 text-center">
                        <SectionTitle title="Why you should choose our online Platform" black={true} balance={true} />
                    </div>
                </div>

                <div className="grid xl:grid-cols-2 xl:pb-10 mt-10 gap-6 items-center">
                    <div className="grid grid-cols-2 ">
                        {whychoose.images.map((img, index) => (
                            <Image
                                src={img.src}
                                width={300}
                                height={200}
                                key={index}
                                alt="Learning Image"
                                className={`rounded-3xl w-full h-[198px] object-cover border border-[#011627] ${img.imageStyles}`}
                            />
                        ))}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-y-6 gap-x-6 lg:gap-x-12 px-4  lg:px-6 py-2.5">
                        {whychoose.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-x-3">
                                <span className={`text-xl p-4 text-white rounded-full ${feature.iconbg}`}>{feature.icon}</span>
                                <span className=" text-xl  font-normal">{feature.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </>
    )
}
