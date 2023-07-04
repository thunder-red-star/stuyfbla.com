import styles from '../styles/Divisions.module.css'
import Meta from "../components/Header/Meta";
import Navigation from "../components/Navigation/Navigation";
import {Text} from "@nextui-org/react";
import HighlightedText from "../components/Design/HighlightedText";
import Hero from "../components/Blocks/Hero";
import MemberCard from "../components/Blocks/MemberCard";
import Box from "../components/Blocks/Box";
import ResourceSnippet from "../components/Blocks/ResourceSnippet";
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
						className={styles.displayName}
					>
						Resources
					</Text>
				</HighlightedText>
				<Hero className={"mt-4 w-full"}>
					<ResourceSnippet
						title={"Interest Meeting Slides"}
						href={"https://docs.google.com/presentation/d/16v8YGEuFtVSpbrR-8NVla97gW0yYglWj43scl1ALUwI/edit#slide=id.g206858f13f4_4_3"}
						date={"September 1, 2022"}
						author={"StuyFBLA"}
					/>
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
