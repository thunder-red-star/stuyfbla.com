import React from 'react';
import {useInView, useSpring, animated} from "@react-spring/web";
import styles from './highlighted-text.module.css';
import {Text, useTheme} from "@nextui-org/react";

function getTheme () {
	const { theme } = useTheme();
	return theme;
}

export default function HighlightedText({children, className, ...props}) {
	// When scrolled into view, the text will be highlighted from the left to the right with a background color
	const [ref, inView] = useInView({
		threshold: 0.5,
		once: true,
	});

	const [currentTheme, setCurrentTheme] = React.useState(getTheme());

	const springProps = useSpring({
		from: {
			width: "0%"
		},
		to: {
			width: inView ? "100%" : "0%",
		},
		config: {
			mass: 1,
			tension: 250,
			friction: 25
		}
	});

	return (
		<
			span
			className={"relative inline-block " + (className || "")}
		>
			<animated.span
				ref={ref}
				className={"absolute inset-0 " + styles.highlightedBackground}
				style={{
					...springProps,
				}}
			>
				<Text
					className={"absolute inset-0 w-full"}
					css={{
						backgroundColor: "$backgroundEmphasis"
					}}
				/>
			</animated.span>
			<
				span
				className={"relative z-10"}
			>
				{children}
			</span>
		</span>
	);
}