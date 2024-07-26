import Image from "next/image"
import nextjs from "../../../public/icons/AI.png"
import wordpress from "../../../public/icons/Blockchain.png"
import tailwind from "../../../public/icons/cyber.png"
import SectionWrapper from "../../SectionWrapper"

const ToolKit = () => {

    const features = [
        {
            icon: wordpress,
            title: "Blockchain",
            desc: "Designing and Developing cutting-edge blockchain technology, prototypes and products w/ enterprise-grade security for assets."
        },
        {
            icon: nextjs,
            title: "A.I.",
            desc: "Creating intuitive A.I. interfaces that combine workflows, RAG pipelines, agent capabilities, model management, observability and more."
        },
        {
            icon: tailwind,
            title: "Cyber Security",
            desc: "Engineering full-spectrum innovation by creating security innovations and raising the standard for cloud & software security"
        },
    ]

    return (
        <SectionWrapper>
            <div id="toolkit" className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-2xl mx-auto space-y-3 sm:text-center">
                    <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Our Innovative Technology
                    </h2>
                    <p>
                       We specialize in developing innovative solutions in the following technology groups
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="flex gap-x-4">
                                    <div className="flex-none w-12 h-12 gradient-border rounded-full flex items-center justify-center">
                                        <Image src={item.icon} alt={item.title} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg text-gray-800 font-semibold">
                                            {item.title}
                                        </h4>
                                        <p className="mt-3">
                                            {item.desc}
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default ToolKit