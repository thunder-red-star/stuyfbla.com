import styles from './navigation.module.css';
import {Navbar, Button, Link} from "@nextui-org/react";
import FBLA128x128 from "../../public/img/logo/fbla-128x128.png";
import Image from "next/image";

import DiscordIcon from "../../public/img/icon/logo-discord.svg";
import ThemeSwitcher from "../Theme/ThemeSwitcher";

export default function Navigation({title, keywords, description}) {
	return (
		<Navbar
			variant={"floating"}
			isBordered={true}
			shouldHideOnScroll
		>
			<
				Navbar.Brand
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
			</Navbar.Brand>
			<Navbar.Content hideIn="sm" variant="underline">
				<Navbar.Link href="#"><span className={styles.navbarLink}>About</span></Navbar.Link>
				<Navbar.Link href="#"><span className={styles.navbarLink}>Staff</span></Navbar.Link>
				<Navbar.Link href="#"><span className={styles.navbarLink}>Divisons</span></Navbar.Link>
				<Navbar.Link href="#"><span className={styles.navbarLink}>Resources</span></Navbar.Link>
				<Navbar.Link href="#"><span className={styles.navbarLink}>Blog</span></Navbar.Link>
				<Navbar.Link href="#"><span className={styles.navbarLink}>Contact</span></Navbar.Link>
			</Navbar.Content>
			<Navbar.Collapse showIn={"sm"} className={styles.navbarCollapse}>
				<Navbar.CollapseItem href="#" className={styles.navbarLink}>About</Navbar.CollapseItem>
				<Navbar.CollapseItem href="#" className={styles.navbarLink}>Staff</Navbar.CollapseItem>
				<Navbar.CollapseItem href="#" className={styles.navbarLink}>Divisons</Navbar.CollapseItem>
				<Navbar.CollapseItem href="#" className={styles.navbarLink}>Resources</Navbar.CollapseItem>
				<Navbar.CollapseItem href="#" className={styles.navbarLink}>Blog</Navbar.CollapseItem>
				<Navbar.CollapseItem href="#" className={styles.navbarLink}>Contact</Navbar.CollapseItem>
			</Navbar.Collapse>
			<Navbar.Content showIn="sm" variant="underline">
				<ThemeSwitcher/>
				<Navbar.Toggle aria-label={"Toggle navigation"} showIn={"sm"}/>
			</Navbar.Content>
			<Navbar.Content hideIn="md" variant="underline">
				<ThemeSwitcher/>
				<Button
					auto flat as={Link}
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