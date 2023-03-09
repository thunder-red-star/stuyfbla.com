// A member card contains a picture, name, bio, and list of roles (chips)

import React from 'react';
import {Card, Col, Row, Button, Text, Badge, Avatar} from "@nextui-org/react";
import Box from "./Box";
import styles from './membercard.module.css';
import Image from 'next/image';

const rolesList = require('../../config/roles.json');

const TRANSLATE_DIST = 10;
let URL_TO_MALE_DEFAULT_AVATAR = "/img/staff/male-default-avatar.png";
let URL_TO_FEMALE_DEFAULT_AVATAR = "/img/staff/female-default-avatar.png";

export default function MemberCard({name, bio, roles, avatar, gender, className, ...props}) {
	return (
		<Box>
				<div
					className={"flex flex-row items-left justify-start p-8 " + styles.card}
				>
					<
						div
						className={styles.memberCard}
					>
						<Avatar
							src={avatar || (gender === "female" ? URL_TO_FEMALE_DEFAULT_AVATAR : URL_TO_MALE_DEFAULT_AVATAR )}
							alt={name}
							className={"w-64 h-64 " + styles.memberCard}
							css={{
								size: "128px",
							}}
						/>
					</div>
					<div
						className={styles.memberCard + " mx-8"}
					>
						<Text h3
							className={"font-bold text-2xl my-1 " + styles.name}
						>{name}</Text>
						<Text p
							className={"text-lg my-1 " + styles.text}
						>{bio}</Text>
						<div className={styles.roles + " my-2"}>
							{roles.map((role) => {
								return (
									<Badge
										key={role}
										color={rolesList[role].type}
									        className={"mr-2 " + styles.text}
									>
										{rolesList[role].displayName}
									</Badge>
								);
							})}
						</div>
					</div>
				</div>
		</Box>
	);
};
