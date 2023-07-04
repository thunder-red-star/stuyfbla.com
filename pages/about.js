import styles from '../styles/Divisions.module.css'
import Meta from "../components/Header/Meta";
import Navigation from "../components/Navigation/Navigation";
import {Text} from "@nextui-org/react";
import HighlightedText from "../components/Design/HighlightedText";
import Hero from "../components/Blocks/Hero";
import MemberCard from "../components/Blocks/MemberCard";
import Box from "../components/Blocks/Box";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Link from "next/link";

let emphasisGradient = {textGradient: "134deg, $emphasis 0%, $emphasisBright 100%"}

// Load members and roles from respective JSON files
let members = require("../config/staff.json")

export default function Home() {
	return (
		<div className={styles.base}>
			<Meta title="Home"/>
			<Navigation/>
			<main className={"mx-auto w-full max-w-7xl"}>
					<HighlightedText
						className={"my-8"}
					>
						<Text
							h1
							className={styles.displayName}
						>
							About us
						</Text>
					</HighlightedText>
				<Hero
				>
						<Text
							h2
							className={styles.largeDisplay}
						>
							Our Mission
						</Text>
						<Text
							p
							className={styles.text}
						>
							Our goal is to foster a community of future leaders and teach them real-life business skills through FBLA conferences and other events.</Text>
						<Text
							h2
							className={styles.largeDisplay}
						>
							Our purpose
						</Text>
						<Text
							p
							className={styles.text}
						>
							The purpose of Stuyvesant High School FBLA as a school chapter of the Future Business Leaders of America organization is to prepare its members to compete successfully in various divisions and conferences. At the beginning of the school year, students will have the opportunity to explore different divisions of FBLA through student-led workshops on each topic. As competition season arrives, members will choose a few divisions to focus on where they will work with other members with similar interests to improve at their chosen skill. Our club will help create teams or groups for members who wish to compete in team divisions and provide opportunities to attend conferences with other talented high school students from all across the country. As students are preparing for FBLA competitions, they are also able to learn important business skills that will help them in the future and meet people with similar interests as them.
						</Text>
						<Text
							h2
							className={styles.largeDisplay}
						>
							How we benefit Stuyvesant
						</Text>
						<Text
							p
							className={styles.text}
						>
							Stuy FBLA allows students to participate in events offered by the organization FBLA, which “helps high school students prepare for careers in business through academic competitions, leadership development, and educational programs.” The organization is focused on giving students a taste of what it is like to work in the business sector as an adult. This club can educate the Stuyvesant community about important business related skills that can also be helpful in daily life. FBLA hopes to give students exposure to multiple career pathways so that they can be prepared for the future. Students also have the opportunity to gain experience in business careers through provided resources and can learn to appreciate the importance of understanding business. Furthermore, Stuy FBLA helps its members to distinguish themselves from their peers by immersing them in a competitive environment where they can demonstrate their abilities. By joining this club, students will learn and develop skills that will aid them in their careers and lives, such as leadership, money management, personal finance, and more. FBLA is a great resource for high school students interested in learning business concepts, and it is one of the few ways they can gain experience as most internships and other opportunities are exclusively available to those who already have experience. Stuy FBLA has no prior experience requirements, so it is the perfect place for students with any amount of previous knowledge to develop their interest in business and demonstrate their passions through competitions and leadership.
						</Text>
						<Text
							h2
							className={styles.largeDisplay}
						>
							Continue reading our charter on our StuyActivities and join today!
						</Text>
				</Hero>
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
