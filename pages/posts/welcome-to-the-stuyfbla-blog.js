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
						Welcome to the StuyFBLA Blog!
					</Text>
				</HighlightedText>
					<Text
						p
						className={"mt-2" + " " + styles.smallText + " font-lg"}
					>
						Written by StuyFBLA · September 1, 2022
					</Text>
					<Text
						p
						className={"mt-2" + " " + styles.text}
					>
						Surely there&apos;s a better way to do a blog but I&apos;m one person and I&apos;m not writing an entire content management system for free :(. So just create pages like this, its not that hard.
					</Text>
			</main>
		</div>
	)
}
