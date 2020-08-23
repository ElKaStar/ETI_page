import Particles from 'react-particles-js';
import React, {useEffect, useState} from "react";
import './App.css'


export function Anime(props) {

    const [params, setParams] = useState(
        {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        area: 800
                    }
                },
                color: {
                    value: "#ff0000",
                    animation: {
                        enable: true,
                        speed: 15,
                        sync: true
                    }
                },
                shape: {
                    type: "circle",
                    options: {
                        polygon: {
                            sides: 5
                        },
                        image: {
                            src: "https://cdn.matteobruni.it/images/particles/github.svg",
                            width: 100,
                            height: 100
                        }
                    }
                },
                stroke: {
                    width: 0
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    animation: {
                        enable: false,
                        speed: 2,
                        minimumValue: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    animation: {
                        enable: false,
                        speed: 5,
                        minimumValue: 0.1,
                        sync: false
                    }
                },
                links: {
                    enable: true,
                    distance: 100,
                    color: "#000000",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 3,
                    direction: "none",
                    random: false,
                    straight: false,
                    outMode: "out",
                    attract: {
                        enable: false,
                        rotateX: window.innerWidth,
                        rotateY: window.innerHeight
                    }
                }
            },
            interactivity: {
                detectsOn: "canvas",
                events: {
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        links: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 30,
                        duration: 2,
                        opacity: 0.8
                    },
                    repulse: {
                        distance: 200
                    },
                    push: {
                        quantity: 4
                    },
                    remove: {
                        quantity: 2
                    }
                }
            },
            detectRetina: true
        }
    )

    useEffect(() => {
        if (props.hasOwnProperty("addParams")) {
            setParams({
                ...props.addParams
            })
        }
    })

    return (
        <div className="wrapper">
            <Particles className="particles"
                       params={params}

            />
            <main>
                {props.children}
            </main>
        </div>
    )
}
