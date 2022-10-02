import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Cursor, useTypewriter} from "react-simple-typewriter/dist";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
          "Hi I am Shrinivass",
            "I am a Dancer",
            "I am a Full Stack Developer",
            "I am a Table-Tennis and Tennis Player",
        ],
        loop: true,
        delaySpeed: 2000
    });
    return(
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles/>
            <img
                className="relative rounded-full h-32 w-32 mx-auto object-cover"
                src="https://cdn-images.win.gg/resize/w/620/format/webp/type/progressive/fit/cover/path/wp/uploads/2022/04/Spirit-Blossom-Yasuo.jpg"
                alt="Yasuo"
            />
            <div className="z-20">
                <h2 className="text-sm uppercase text-grey-500 pb-2 tracking-[15px]">
                    Full Stack Engineer
                </h2>
                <h1 className="text-5xl lg:text-6xl font-semibold px-10">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="#F7AB0A"/>
                </h1>
                <div className="pt-5">
                    <Link href="#about">
                        <button className="heroButton">About</button>
                    </Link>
                    <Link href="#experience">
                        <button className="heroButton">Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className="heroButton">Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className="heroButton">Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
