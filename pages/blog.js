import styles from '../styles/Divisions.module.css'
import Meta from "../components/Header/Meta";
import Navigation from "../components/Navigation/Navigation";
import {Text} from "@nextui-org/react";
import HighlightedText from "../components/Design/HighlightedText";
import Hero from "../components/Blocks/Hero";
import MemberCard from "../components/Blocks/MemberCard";
import Box from "../components/Blocks/Box";
import PostSnippet from "../components/Blocks/PostSnippet";

let emphasisGradient = {textGradient: "134deg, $emphasis 0%, $emphasisBright 100%"}

// Load members and roles from respective JSON files
let members = require("../config/staff.json")

export default function Home() {
	return (
		<div className={styles.base}>
			<Meta title="Home"/>
			<Navigation/>
			<main className={"max-w-7xl mx-auto mt-4"}>
				<HighlightedText>
					<Text
						h1
						className={styles.displayName + " w-full"}
					>
						StuyFBLA Blog
					</Text>
				</HighlightedText>
				<Hero className={"mt-4 w-full"}>
					<div className={"grid gap-8 grid-cols-1"}>
						<PostSnippet
							title={"Mock Conference Report"}
							href={"/posts/mock-conference-report"}
							date={"May 13th, 2023"}
							author={"StuyFBLA"}
						/>
						<PostSnippet
							title={"Welcome to the StuyFBLA Blog!"}
							href={"/posts/welcome-to-the-stuyfbla-blog"}
							date={"September 1, 2022"}
							author={"StuyFBLA"}
						/>
					</div>
				</Hero>
			</main>
		</div>
	)
}
