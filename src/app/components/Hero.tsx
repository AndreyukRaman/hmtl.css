"use client";

import ReactPlayer from 'react-player'
import { useState } from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

// динамический импорт без типов и без SSR
// const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

interface Props {
    title: string;
    description: string;
    image: string;
    firstColumnIsImage?: boolean;
    videoUrl?: string;
}

export default function Hero({
                                 title,
                                 description,
                                 image,
                                 firstColumnIsImage = true,
                                 videoUrl,
                             }: Props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full bg-white py-10">
            <div className="max-w-[1046px] mx-auto mb-10 px-6 flex flex-col gap-12">
                <div
                    className={`flex flex-col md:flex-row items-center gap-6 ${
                        firstColumnIsImage ? "" : "md:flex-row-reverse"
                    }`}
                >
                    <div className="w-full md:w-1/2 relative">
                        <Image
                            src={image}
                            alt={title}
                            width={600}
                            height={400}
                            className="w-full h-auto cursor-pointer"
                            onClick={() => videoUrl && setIsOpen(true)}
                        />
                    </div>

                    <div className="w-full md:w-1/2 space-y-8">
                        <Image src="/hero-line.svg" alt="hero-line.svg" width={100} height={7} />
                        <h2
                            className={`${montserrat.className} w-full max-w-[385px] font-bold text-[40px] leading-[50px] text-[#252B42]`}
                        >
                            {title}
                        </h2>
                        <p
                            className={`${montserrat.className} w-full max-w-[222px] text-[14px] leading-[20px] text-[#737373]`}
                        >
                            {description}
                        </p>
                        <Image src="/learnmore.svg" alt="learnmore.svg" width={100} height={24} />
                    </div>
                </div>
            </div>

            {/* Модальное видео */}
            {isOpen && videoUrl && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
                    <div className="relative w-[90%] max-w-[800px] aspect-video">

                        <ReactPlayer
                            src={videoUrl}
                            width="100%"
                            height="100%"
                            controls
                            playing
                        />
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-2 right-2 text-white text-2xl font-bold"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
