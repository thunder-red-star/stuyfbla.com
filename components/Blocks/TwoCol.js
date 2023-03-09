// Hero Left Block, make sure that on mobile the image and text are stacked instead of side by side

import React from 'react';
import {animated, useInView, useSpring} from "@react-spring/web";
import styles from './hero.module.css';

let fadeUp = (inView, index) => {
	return {
		from: {
			opacity: 0,
			transform: "translateY(50px)"
		},
		to: {
			opacity: inView ? 1 : 0,
			transform: inView ? "translateY(0px)" : "translateY(50px)",
		},
		config: {
			mass: 1,
			tension: 250,
			friction: 25
		},
		delay: index * 100
	};
}

// React UseEffect debugging to detect the type of children


export default function Hero({children, className, ...props}) {
	// Create springs for each child, because each child will have a different delay
	let springs;

	// Add a false element to children so that it can be used in the map function
	if (children.length === undefined) {
		children = [children];
	}
	springs = children.map((child, index) => {
			// eslint-disable-next-line react-hooks/rules-of-hooks
			const [ref, inView] = useInView(
				{
					threshold: 0.01,
					once: true,
				}
			);
			// eslint-disable-next-line react-hooks/rules-of-hooks
			return [useSpring(fadeUp(inView, index)), ref];
		});


	return (
		<
			section
			className={className + " w-full"}
		>
			<div className={styles.hero + "relative"}>
				<
					div
					className={"grid grid-cols-1 md:grid-cols-2 gap-4"}
				>

		{children.map((child, index) => {
							return (
								<
									animated.div
									ref={springs[index][1]}
									style={{
										...springs[index][0]
									}}
									key={index}
								>
									{child}
								</animated.div>
							);
						})}
				</div>
			</div>
		</section>
	);
}
