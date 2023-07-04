import styles from '../styles/Contact.module.css'
import Meta from "../components/Header/Meta";
import Navigation from "../components/Navigation/Navigation";
import {Text} from "@nextui-org/react";
import HighlightedText from "../components/Design/HighlightedText";
import Hero from "../components/Blocks/Hero";
import MemberCard from "../components/Blocks/MemberCard";
import Box from "../components/Blocks/Box";
import TwoCol from "../components/Blocks/TwoCol";
import Link from "next/link";

let emphasisGradient = {textGradient: "134deg, $emphasis 0%, $emphasisBright 100%"}

// Load members and roles from respective JSON files
let members = require("../config/staff.json")

export default function Home() {
	return (
		<div className={styles.base}>
			<Meta title="Home"/>
			<Navigation/>
			<main className={"max-w-7xl mx-auto"}>
				<HighlightedText>
					<Text
						h1
						className={styles.displayName + " mt-4"}
					>
						Contact us
					</Text>
				</HighlightedText>
					<TwoCol>
						<div className={"flex flex-col justify-center"}>
							<Text
								h2
								className={styles.largeDisplay}
							>
								For Stuyvesant students
							</Text>
							<Text
								p
								className={styles.text}
							>
								Join our <a href={"https://stuyactivities.org/stuyfbla"}>StuyActivities page</a> to get updates on meetings and events. We can also be contacted there through any one of the email addresses listed on the members page. Remember that it is mandatory to be in our Discord server, as we use it to send important updates and announcements, and it&apos;s also a great way to get to know your fellow members.
							</Text>
						</div>
						<div className={"flex flex-col justify-center"}>
							<Text
								h2
								className={styles.largeDisplay}
							>
								For everyone else
							</Text>
							<Text
								p
								className={styles.text}
							>
								We will publish contact information here soon. For now, please use our <a href={"https://linktr.ee/stuyfbla"}>Linktree</a> and choose a suitable method to reach us through social media, we will respond as soon as possible.
							</Text>
						</div>
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
