import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

import { useMediaQuery } from "react-responsive"
import { performanceImages, performanceImgPositions } from "../constants"

const Performance = () => {
    const sectionRef = useRef(null);
    const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

    useGSAP(() => {
        gsap.to(".content p", {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: ".content",
                start: "top 80%",
            },
        });

        if (!isMobile) {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ".wrapper",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            });

            performanceImgPositions.forEach(({ id, left, right, bottom, transform }) => {
                if (id === "p5") return;

                const vars = {};
                if (left !== undefined) vars.left = `${left}%`;
                if (right !== undefined) vars.right = `${right}%`;
                if (bottom !== undefined) vars.bottom = `${bottom}%`;
                if (transform !== undefined) vars.transform = transform;

                timeline.to(`#${id}`, vars, 0);
            });
        }
    }, { scope: sectionRef, dependencies: [isMobile] });

  return (
    <section id='performance' ref={sectionRef}>
        <h2>Next-level graphics performance. Game on.</h2>

        <div className='wrapper'>
            {performanceImages.map(({ id, src }) => (
                <img key={id} id={id} className={id} src={src} alt={id} />
            ))}
        </div>

        <div className="content">
            <p>
                Run graphics-intensive workflows with a responsiveness that keeps up with your imagination. 
                The M4 family of chips delivers up to 4x faster HDR rendering performance than M2, {' '} <span className="text-white">So gaming feels more immersive and realistic than ever.</span> {' '}
                Dynamic Caching optimizes fast on-chip memory to deliver high frame rates and low latency, while the new GPU architecture enables
                advanced rendering techniques like ray tracing and mesh shading, driving a huge performance boost for games and pro apps.
            </p>
        </div>
    </section>
  )
}

export default Performance