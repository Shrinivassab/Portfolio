import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Cursor, useTypewriter} from "react-simple-typewriter/dist";
import BackgroundCircles from "./BackgroundCircles";

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
            <h1>
                <span>{text}</span>
                <Cursor cursorColor="#F7AB0A"/>
            </h1>
        </div>
    )
}
