import styles from '../../styles/Post.module.css'
import Meta from "../../components/Header/Meta";
import Navigation from "../../components/Navigation/Navigation";
import {Text} from "@nextui-org/react";
import HighlightedText from "../../components/Design/HighlightedText";
import Hero from "../../components/Blocks/Hero";
import Link from 'next/link';

let emphasisGradient = {textGradient: "134deg, $emphasis 0%, $emphasisBright 100%"}

// Load members and roles from respective JSON files
let members = require("../../config/staff.json")

export default function Home() {
	return (
		<div className={styles.base}>
			<Meta title="Home"/>
			<Navigation/>
			<main className={"max-w-7xl mx-auto"}>
				<HighlightedText>
					<Text
						h1
						className={styles.displayName}
					>
						Mock Conference Report
					</Text>
				</HighlightedText>
					<Text
						p
						className={"mt-2" + " " + styles.smallText + " font-lg"}
					>
						Written by StuyFBLA · May 13th, 2023
					</Text>
					<Text
						p
						className={"mt-2" + " " + styles.smallText + " font-lg"}
					>
						Read the full report <Link href="https://docs.google.com/document/d/1UllKfimW_tfExh42jt3j61gvQHNnr_R-fWEQ8n7feBU/edit?usp=sharing">here</Link>.
					</Text>
					<Text
						p
						className={"mt-2" + " " + styles.text}
					>
						On May 13th, Stuyvesant Future Business Leaders of America hosted its first ever mock conference. By taking and using this year’s prompts, we simulated what the actual FBLA conference will be like for competitors. Our event featured guest speakers and entrepreneurs, Cynthia Koo and Alexander Woo. They gave attendees great insights on how to start their own businesses and shared their own experiences from their journey exploring the world of finance. Teachers, including Mr. Peng and Mr. Wang, also attended the conference as judges.
					</Text>
					<Text
						p
						className={"mt-2" + " " + styles.text}
					>
						The financial math competition was the first event of the day. In this event, competitors were given 45 minutes to complete a series of 50 questions. Freshman Vincent Chen won, scoring a total of 48 out of 50.
					</Text>
					<Text
						p
						className={"mt-2" + " " + styles.text}
					>
						Then, we moved onto the public speaking event, in which contestants had to give a speech about what their biggest concern for the future was. Freshman and winner Annie Li’s speech addressed the problem surrounding the bystander effect and a “growing culture of complacency and indifference.” The false belief that it is easier to ignore issues that do not directly pertain to us affects all levels of society. Her speech captured the attention of the judges. 					</Text>
					<Text
						p
						className={"mt-2" + " " + styles.text}
					>
						After, we transitioned to the business presentation event, in which participants worked in pairs. This year’s prompt was to convince judges to provide funding for a summer program that would cost $2,000.  The winning team, composed of juniors Mossamad Khanom and Sanjana Alam, presented a summer program that would allow them to transfer the knowledge they gained to the Stuyvesant community through their clubs. Their goal was to give back to our school community.
					</Text>
					<Text
						p
						className={"mt-2" + " " + styles.text}
					>
						The graphic design was the last event of the day. Participants were asked to design a brand for a nonprofit organization aimed to support youth development. They would then present their promotional items, including toys, t-shirts, and baseball caps. Kiran Yesley and Elizabeth Chen presented their winning brand focused on sports and athletic development in children. Their designs and catchy slogan, “Back to Balling,” definitely resonated with the judges.
					</Text>
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
