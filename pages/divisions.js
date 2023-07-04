import styles from '../styles/Divisions.module.css'
import Meta from "../components/Header/Meta";
import Navigation from "../components/Navigation/Navigation";
import {Text} from "@nextui-org/react";
import HighlightedText from "../components/Design/HighlightedText";
import TwoCol from "../components/Blocks/TwoCol";
import Box from "../components/Blocks/Box";
import Link from "next/link";

let emphasisGradient = {textGradient: "134deg, $emphasis 0%, $emphasisBright 100%"}

export default function Home() {
	return (
		<div className={styles.base}>
			<Meta title="Home"/>
			<Navigation/>
			<main className={"max-w-7xl mx-auto"}>
				<HighlightedText className={"my-8"}>
					<Text
						h1
						className={styles.displayName}
					>
						Divisions
					</Text>
				</HighlightedText>
					<TwoCol className={"my-8"}>
						<Box>
							<Text h2 className={styles.sectionHeader}>Public Speaking</Text>
							<Text
								p
								className={"mt-2" + " " + styles.text}
							>
								StuyFBLA’s Public Speaking division is a great way to improve your public speaking skills and
								learn how to effectively communicate your ideas. We have a variety of events that will help you
								develop your public speaking skills, including Impromptu Speaking, Prepared Speaking, and
								Extemporaneous Speaking. We also have a variety of events that will help you develop your
								leadership skills, including Chapter Officer Training, Chapter Officer Team Building, and
								Chapter Officer Leadership Training.
							</Text>
						</Box>
						<Box>
							<Text h2 className={styles.sectionHeader}>Business Mathematics</Text>
							<Text
								p
								className={"mt-2" + " " + styles.text}
							>
								StuyFBLA’s Business Mathematics division is a great way to improve your math skills and
								learn how to apply them to real-world situations. We have a variety of events that will help you
								develop your math skills, including Business Calculations, Business Math, and Business Math
								Team. We also have a variety of events that will help you develop your leadership skills,
								including Chapter Officer Training, Chapter Officer Team Building, and Chapter Officer
								Leadership Training.
							</Text>
						</Box>
						<Box>
							<Text h2 className={styles.sectionHeader}>Graphic Design</Text>
							<Text
								p
								className={"mt-2" + " " + styles.text}
							>
								StuyFBLA’s Graphic Design division is a great way to improve your graphic design skills and
								learn how to effectively communicate your ideas. We have a variety of events that will help you
								develop your graphic design skills, including Graphic Design, Graphic Design Team, and
								Interactive Media Design. We also have a variety of events that will help you develop your
								leadership skills, including Chapter Officer Training, Chapter Officer Team Building, and
								Chapter Officer Leadership Training.
							</Text>
						</Box>
						<Box>
							<Text h2 className={styles.sectionHeader}>Personal Finance</Text>
							<Text
								p
								className={"mt-2" + " " + styles.text}
							>
								StuyFBLA’s Personal Finance division is a great way to improve your personal finance skills
								and learn how to effectively communicate your ideas. We have a variety of events that will help
								you develop your personal finance skills, including Personal Finance, Personal Finance Team,
								and Personal Finance Management. We also have a variety of events that will help you develop
								your leadership skills, including Chapter Officer Training, Chapter Officer Team Building, and
								Chapter Officer Leadership Training.
							</Text>
						</Box>
					</TwoCol>
			</main>

			<footer className={styles.footer + " text-center w-full mb-4"}>
				<Link href={"https://hi.williamvongphanith.com"}>
					<p className={styles.smallText + " " + styles.footer}>
						Designed by William Vongphanith
					</p>
				</Link>
			</footer>
		</div>
	)
}
