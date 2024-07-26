import Image from "next/image"
import ctaImage from "../../../public/cta-image.jpg"
import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"

const CTA = () => {
    return (
        <SectionWrapper id="cta" className="pb-0">
            <div className="custom-screen">
                <div className="items-center gap-x-12 lg:flex">
                    <div className="flex-1 sm:hidden lg:block">
                        <Image src={ctaImage} className="rounded-lg md:max-w-lg" alt="Create Successful Business Models with Our IT Features" />
                    </div>
                    <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
                        <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Welcome to the cutting-edge technology of tomorrow.
                        </h2>
                        <p className="mt-3 text-gray-600">
                        Our team is exploring burgeoning research areas and creating revolutionary technology that will not only power the mission but also pioneering a vision for the future. We value close transparent cooperation and encourage our clients to participate actively in the project development life cycle.
                        </p>
                        <NavLink
                            href="/get-started"
                            className="inline-block mt-4 font-medium text-sm text-white bg-pink-600 hover:bg-indigo-700 active:bg-indigo-800"
                        >
                            Get started
                        </NavLink>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default CTA