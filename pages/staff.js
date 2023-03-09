import styles from '../styles/Divisions.module.css'
import Meta from "../components/Header/Meta";
import Navigation from "../components/Navigation/Navigation";
import {Text} from "@nextui-org/react";
import HighlightedText from "../components/Design/HighlightedText";
import Hero from "../components/Blocks/Hero";
import MemberCard from "../components/Blocks/MemberCard";
import Box from "../components/Blocks/Box";

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
						Staff page
					</Text>
				</HighlightedText>
				<Hero>
					<Text
					p
					className={"mt-2" + " " + styles.text}
				>
					Here are the members of the StuyFBLA staff.
				</Text>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{members.map((member, index) => {
							// Create a member card for each member
							return (
									<MemberCard
										name={member.name}
										bio={member.bio}
										roles={member.roles}
										avatar={member.avatar}
										gender={member.gender}
										key={index}
									/>
							)
						})}
					</div>
				</Hero>
			</main>
		</div>
	)
}
