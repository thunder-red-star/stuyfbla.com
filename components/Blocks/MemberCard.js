// A member card contains a picture, name, bio, and list of roles (chips)

import React from 'react';
import {Card, Col, Row, Button, Text, Badge} from "@nextui-org/react";
import Box from "./Box";
import styles from './membercard.module.css';

const rolesList = require('../../config/roles.json');

const TRANSLATE_DIST = 10;
let URL_TO_MALE_DEFAULT_AVATAR = "/img/staff/male-default-avatar.png";
let URL_TO_FEMALE_DEFAULT_AVATAR = "/img/staff/female-default-avatar.png";

export default function MemberCard({name, bio, roles, avatar, gender, className, ...props}) {
	return (
		<Box>
			<Card>
				<Row>
					<Col>
						<img
							src={avatar || (gender === "female" ? URL_TO_FEMALE_DEFAULT_AVATAR : URL_TO_MALE_DEFAULT_AVATAR )}
							alt={name}
							className={styles.avatar}
						/>
					</Col>
					<Col>
						<Text h3>{name}</Text>
						<Text p>{bio}</Text>
						<div className={styles.roles}>
							{roles.map((role) => {
								return (
									<Badge
										key={role}
										type={rolesList[role].type}
										style={{marginRight: "0.5rem"}}
									>
										{rolesList[role].displayName}
									</Badge>
								);
							})}
						</div>
					</Col>
				</Row>
			</Card>
		</Box>
	);
};