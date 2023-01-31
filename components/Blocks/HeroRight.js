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

export default function HeroRight({children, className, ...props}) {
	let springs;
	if (typeof children === Array) {
		springs = children.map((child, index) => {
			// eslint-disable-next-line react-hooks/rules-of-hooks
			const [ref, inView] = useInView(
				{
					threshold: 0.5,
					once: true,
				}
			);
			// eslint-disable-next-line react-hooks/rules-of-hooks
			return [useSpring(fadeUp(inView, index)), ref];
		});
	} else {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const [ref, inView] = useInView(
			{
				threshold: 0.5,
				once: true,
			}
		);
		// eslint-disable-next-line react-hooks/rules-of-hooks
		springs = [[useSpring(fadeUp(inView, 0)), ref]];
	}


	// Create a spring for the image container
	const [imgRef, imgInView] = useInView(
		{
			threshold: 0.5,
			once: true,
		}
	);
	const imageContainerSpring = useSpring(fadeUp(imgInView, 0));

	// Left hero: text (children) on the left, image on the right
	return (
		<
			section
			className={(className || "") + styles.heroContainer + " w-full"}
		>
			<div className={styles.hero + "relative grid grid-cols-1 md:grid-cols-2 gap-8 w-full"}>
				<
					animated.div
					ref={imgRef}
					className={"relative flex-1 flex flex-col justify-center items-center md:items-start md:pr-16 basis-1/2"}
					style={{
						...imageContainerSpring
					}}
				>
					<div className={"m-auto"}>
						{props.image}
					</div>
				</animated.div>
			<
				div
				className={"basis-1/2 " + styles.heroChildren}
			>
				<div>
					{typeof children === Array && children.map((child, index) => {
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
					{typeof children !== Array && (
						<
							animated.div
							ref={springs[0][1]}
							style={{
								...springs[0][0]
							}}
						>
							{children}
						</animated.div>
					)}
				</div>
			</div>
		</div>
		</section>
	);
}