// A Box simply contains children, and when the box is hovered, there is an animation of boxes behind it.

import React from 'react';
import {animated, useSpring} from "@react-spring/web";
import styles from './box.module.css';

const TRANSLATE_DIST = 10;

/*
Convert CSS vars to JSON
    --fbla-light-blue: "#1D52BC";
    --fbla-dark-blue: "#0A2E7F";
    --fbla-yellow: "#FFA800";
 */

const COLORS = {
  fblaLightBlue: "#1D52BC",
	fblaDarkBlue: "#0A2E7F",
	fblaYellow: "#FFA800",
}

export default function Box({children, className, ...props}) {
	let [hovering, setHovering] = React.useState(false);

	const spring1Props = useSpring({
		from: {
			transform: "translateY(0px) translateX(0px)",
		},
		to: {
			// Up 10, left 10
			transform: (hovering ? `translateY(${TRANSLATE_DIST}px) translateX(${TRANSLATE_DIST}px)` : "translateY(0px) translateX(0px)"),
		},
		config: {
			mass: 1,
			tension: 250,
			friction: 25
		}
	});

	const spring2Props = useSpring({
		from: {
			transform: "translateY(0px) translateX(0px)",
		},
		to: {
			// Up 2x translate dist, left 2x translate dist
			transform: (hovering ? `translateY(${TRANSLATE_DIST * 2}px) translateX(${TRANSLATE_DIST * 2}px)` : "translateY(0px) translateX(0px)"),
		},
		config: {
			mass: 1,
			tension: 250,
			friction: 25
		}
	});

	return (
		<animated.div
			className={(className || "") + " relative " + styles.box}
			onMouseEnter={() => {
				setHovering(true);
			}}
			onMouseLeave={() => {
				setHovering(false);
			}}
		>
			<animated.div
				className={styles.boxBehind1}
				style={{
					transform: spring1Props.transform,
					borderColor: COLORS.fblaLightBlue,
				}}
			/>
			<animated.div
				className={styles.boxBehind2}
				style={{
					transform: spring2Props.transform,
					borderColor: COLORS.fblaDarkBlue,
				}}
			/>
			<div
				className={styles.boxFront}
				style={{
					borderColor: COLORS.fblaYellow,
					}}
			>
				{children}
			</div>
		</animated.div>
	);
}