import Link from "next/link";
import {Text} from "@nextui-org/react";
import styles from './postsnippet.module.css';

export default function PostSnippet(props) {

	return (
		<Link href={props.href} className={"w-full"}>

			<Text h1 className={"text-2xl font-bold inline-block " + styles.largeDisplay}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-fit max-h-12 mr-4 inline-block">
				<path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
			</svg>
				{props.title}</Text>
			<Text p className={"text-sm " + styles.smallText}>Written by <span className={"font-bold"}>{props.author}</span> on <span className={"font-bold"}>{props.date}</span></Text>
		</Link>
	)
}