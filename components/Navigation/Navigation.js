import styles from './navigation.module.css';
import {Navbar, Button, Link} from "@nextui-org/react";
import FBLA128x128 from "../../public/img/logo/fbla-128x128.png";
import Image from "next/image";
import DiscordIcon from "../../public/img/icon/logo-discord.svg";
import ThemeSwitcher from "../Theme/ThemeSwitcher";

export default function Navigation({active }) {
	return (
		<Navbar
			variant={"floating"}
			isBordered={true}
			shouldHideOnScroll
		>
			<
				Navbar.Brand
			>
				<Link
					href="/"  color="text"
				>
					<Image
						src={FBLA128x128}
						alt="FBLA Logo"
						width={48}
						height={48}
					/>
					<
						span
						className={styles.navbarBrandText}
					>
							StuyFBLA
				</span>
				</Link>
			</Navbar.Brand>
			<Navbar.Content hideIn="sm" variant="underline">
				<Navbar.Link href="/about"><span className={styles.navbarLink}>About</span></Navbar.Link>
				<Navbar.Link href="/staff"><span className={styles.navbarLink}>Staff</span></Navbar.Link>
				<Navbar.Link href="/divisions"><span className={styles.navbarLink}>Divisions</span></Navbar.Link>
				<Navbar.Link href="/resources"><span className={styles.navbarLink}>Resources</span></Navbar.Link>
				<Navbar.Link href="/blog"><span className={styles.navbarLink}>Blog</span></Navbar.Link>
				<Navbar.Link href="/contact"><span className={styles.navbarLink}>Contact</span></Navbar.Link>
			</Navbar.Content>
			<Navbar.Collapse showIn={"sm"} className={styles.navbarCollapse}>
				<Navbar.CollapseItem className={styles.navbarLink}><Link href="/about" color="text">About</Link></Navbar.CollapseItem>
				<Navbar.CollapseItem className={styles.navbarLink}><Link href="/staff" color="text">Staff</Link></Navbar.CollapseItem>
				<Navbar.CollapseItem className={styles.navbarLink}><Link href="/divisions" color="text">Divisions</Link></Navbar.CollapseItem>
				<Navbar.CollapseItem className={styles.navbarLink}><Link href="/resources" color="text">Resources</Link></Navbar.CollapseItem>
				<Navbar.CollapseItem className={styles.navbarLink}><Link href="/blog" color="text">Blog</Link></Navbar.CollapseItem>
				<Navbar.CollapseItem className={styles.navbarLink}><Link href="/contact" color="text">Contact</Link></Navbar.CollapseItem>
			</Navbar.Collapse>
			<Navbar.Content showIn="sm" variant="underline">
				<ThemeSwitcher/>
				<Navbar.Toggle aria-label={"Toggle navigation"} showIn={"sm"}/>
			</Navbar.Content>
			<Navbar.Content hideIn="md" variant="underline">
				<ThemeSwitcher/>
				<Button
					auto flat as={Link} href="https://stuyactivities.org/stuyfbla"
				>
					<span className={styles.navbarLink}>StuyActivities</span>
				</Button>
				<Button
					auto flat as={Link} href={"https://discord.gg/H6f8aByhpk"}
				>
					<DiscordIcon
						width={24}
						className={"mr-2"}
					/>
					<span className={styles.navbarLink}>Discord</span>
				</Button>
			</Navbar.Content>
		</Navbar>
	)
}
