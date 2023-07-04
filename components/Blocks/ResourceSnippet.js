import Link from "next/link";
import {Text} from "@nextui-org/react";
import styles from './postsnippet.module.css';

export default function ResourceSnippet(props) {

	return (
		<Link href={props.href} className={"w-full"}>

			<Text h1 className={"text-2xl font-bold inline-block " + styles.largeDisplay}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-fit max-h-12 mr-4 inline-block">
				<path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
			</svg>
				{props.title}</Text>
			<Text p className={"text-sm " + styles.smallText}>Written by <span className={"font-bold"}>{props.author}</span> on <span className={"font-bold"}>{props.date}</span></Text>
		</Link>
	)
}