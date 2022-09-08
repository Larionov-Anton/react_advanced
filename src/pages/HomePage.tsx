import React from "react";
import { useSearchUsersQuery } from "../store/github/github.api";

export function HomePage() {

	const {isError, isLoading, data} = useSearchUsersQuery('vladilen')
	console.log(data)

	return (
		<div>Home Page</div>
	)
}