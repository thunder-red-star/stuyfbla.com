import styles from '../styles/Home.module.css'
import Meta from "../components/Header/Meta";
import Navigation from "../components/Navigation/Navigation";
import {Text} from "@nextui-org/react";
import HighlightedText from "../components/Design/HighlightedText";
import HeroLeft from "../components/Blocks/HeroLeft";
import HeroRight from "../components/Blocks/HeroRight";
import FBLAHandshake from "../public/img/vector/fbla-handshake.svg";
import FBLADesk from "../public/img/vector/fbla-desk.svg";
import Box from "../components/Blocks/Box";
import Hero from "../components/Blocks/Hero";
import Link from "next/link";
let emphasisGradient = {textGradient: "134deg, $emphasis 0%, $emphasisBright 100%"}

export default function Home() {
	return (
		<div>
			<Meta title="Home"/>
			<Navigation/>
			<main className={"max-w-7xl mx-auto"}>
				<HeroLeft
					image={<FBLAHandshake/>}
				>
					<Text p className={styles.mini + " mb-2"}>
						Stuyvesant&apos;s Official FBLA Chapter
					</Text>
					<Text h1 className={styles.large}>
						<Text p b css={emphasisGradient} className={styles.large}>StuyFBLA</Text> teaches students at <Text p b
																																																								css={emphasisGradient}
																																																								className={styles.large}>Stuyvesant
						High School</Text> about business and leadership through a variety of <Text p b css={emphasisGradient}
																																												className={styles.large}>competitions
						and events</Text>.
					</Text>
					<Text h2 className={styles.text}>
						We are a community of students who are passionate about business and leadership.
					</Text>
				</HeroLeft>
				<HeroRight
					image={<FBLADesk/>}
				>
					<Text h1 className={styles.large}>
						<HighlightedText>About StuyFBLA</HighlightedText>
					</Text>
					<Text
						p
						className={styles.text}
					>
						Our goal is to foster a community of future leaders and teach them real-life business skills through FBLA conferences and other events.</Text>
					<Link href={"/about"}>
							<Text p b css={emphasisGradient} className={styles.text}>
								Learn more about us
							</Text>
					</Link>
				</HeroRight>
				<HeroLeft
					image={<FBLAHandshake/>}
				>
					<Text h1 className={styles.large}>
						<HighlightedText>
							Our divisions
						</HighlightedText>
					</Text>
					<Text h2 className={styles.text}>
						StuyFBLA offers events in <HighlightedText>Public Speaking</HighlightedText>, <HighlightedText>Business Mathematics</HighlightedText>, <HighlightedText>Graphic Design</HighlightedText>, and <HighlightedText>Personal Finance</HighlightedText> to help students improve key skills and develop leadership abilities.
					</Text>
					<Link href={"/divisions"}>
						<Text p b css={emphasisGradient} className={styles.text}>
							Learn more about our divisions
						</Text>
					</Link>
				</HeroLeft>
				<HeroRight
					image={<FBLADesk/>}
				>
					<Text h1 className={styles.large}>
						<HighlightedText>
							We can&apos;t wait to meet you!
						</HighlightedText>
					</Text>
					<Text h2 className={styles.text}>
						In the meantime, we make frequent updates to our blog and social media, with recaps of the latest events and competitions, as well as tips and tricks for success. Follow us to stay up to date and learn more about us!
					</Text>
					<Link href={"/blog"}>
						<Text p b css={emphasisGradient} className={styles.text}>
							Visit our blog
						</Text>
					</Link>
				</HeroRight>
				<Hero>
					<Box>
						<Text h1 className={styles.largeDisplay}>
							Now accepting new members!
						</Text>
						<Text h2 className={styles.text}>
							Join us at our StuyActivities and learn so much more about our club and the fundamentals of business and leadership! All you need to do is join our StuyActivities and our Discord server (see above) to get started!
						</Text>
					</Box>
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
