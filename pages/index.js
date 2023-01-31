import styles from '../styles/Home.module.css'
import Meta from "../components/Header/Meta";
import ThemeSwitcher from "../components/Theme/ThemeSwitcher";
import Navigation from "../components/Navigation/Navigation";
import {Text} from "@nextui-org/react";
import HighlightedText from "../components/Design/HighlightedText";
import HeroLeft from "../components/Blocks/HeroLeft";
import HeroRight from "../components/Blocks/HeroRight";
import Image from "next/image";
import FBLAHandshake from "../public/img/vector/fbla-handshake.svg";
import FBLADesk from "../public/img/vector/fbla-desk.svg";
import Box from "../components/Blocks/Box";
import Hero from "../components/Blocks/Hero";

let emphasisGradient = {textGradient: "134deg, $emphasis 0%, $emphasisBright 100%"}

export default function Home() {
	return (
		<div className={styles.base}>
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
						<HighlightedText>Wait a sec, this one is highlighted!</HighlightedText>
					</Text>
					<Text h2 className={styles.text}>
						My question is, does HeroRight need to be a separate component? It&apos;s basically the same as HeroLeft,
						but with the image on the right instead of the left.
					</Text>
				</HeroRight>
				<HeroLeft
					image={<FBLAHandshake/>}
				>
					<Text h1 className={styles.large}>
						Yet another hero to test transitions
					</Text>
					<Text h2 className={styles.text}>
						<HighlightedText>You can use highlights in text too</HighlightedText> to make it more interesting.
					</Text>
				</HeroLeft>
				<HeroRight
					image={<FBLADesk/>}
				>
					<Text h1 className={styles.large}>
						Last hero, I promise
					</Text>
					<Text h2 className={styles.text}>
						But what if <HighlightedText>I lied?</HighlightedText> More text more text more hero text! And then a text gradient after this: <Text p b css={emphasisGradient}>Text gradient</Text>
					</Text>
				</HeroRight>
				<HighlightedText>
					<Text h1 className={styles.displayName}>
						Very large highlighted text block
					</Text>
				</HighlightedText>
				<Hero>
					<Box>
						<Text h1 className={styles.largeDisplay}>
							Some text in a custom box
						</Text>
						<Text h2 className={styles.text}>
							Blah blah blah <HighlightedText>blah blah blah blah blah blah</HighlightedText> blah blah blah! Hover over me and see what happens!
						</Text>
					</Box>
				</Hero>
				<HeroLeft
					image={<FBLAHandshake/>}
				>
					<HighlightedText>
						<Text h1 className={styles.large}>
              Lots of elements, testing delay
						</Text>
					</HighlightedText>
					<Text p className={styles.mini + " mb-2"}>Child 1</Text>
					<Text p className={styles.mini + " mb-2"}>Child 2</Text>
					<Text p className={styles.mini + " mb-2"}>Child 3</Text>
					<Text p className={styles.mini + " mb-2"}>Child 4</Text>
					<Text p className={styles.mini + " mb-2"}>Child 5</Text>
					<Text p className={styles.mini + " mb-2"}>Child 6</Text>
					<Text p className={styles.mini + " mb-2"}>Child 7</Text>
					<Text p className={styles.mini + " mb-2"}>Child 8</Text>
					<Text p className={styles.mini + " mb-2"}>Child 9</Text>
					<Text p className={styles.mini + " mb-2"}>Child 10</Text>
					<Text p className={styles.mini + " mb-2"}>Child 11</Text>
					<Text p className={styles.mini + " mb-2"}>Child 12</Text>
					<Text p className={styles.mini + " mb-2"}>Child 13</Text>
					<Text p className={styles.mini + " mb-2"}>Child 14</Text>
					<Text p className={styles.mini + " mb-2"}>Child 15</Text>
					<Text p className={styles.mini + " mb-2"}>Child 16</Text>
					<Text p className={styles.mini + " mb-2"}>Child 17</Text>
					<Text p className={styles.mini + " mb-2"}>Child 18</Text>
					<Text p className={styles.mini + " mb-2"}>Child 19</Text>
					<Text p className={styles.mini + " mb-2"}>Child 20</Text>
					<Text p className={styles.mini + " mb-2"}>Child 21</Text>
					<Text p className={styles.mini + " mb-2"}>Child 22</Text>
					<Text p className={styles.mini + " mb-2"}>Child 23</Text>
					<Text p className={styles.mini + " mb-2"}>Child 24</Text>
					<Text p className={styles.mini + " mb-2"}>Child 25</Text>
				</HeroLeft>
			</main>
		</div>
	)
}
