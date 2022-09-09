
import { useState, useEffect } from "react";


export function useDebounse(value: string, delay: number = 300): string {
	const[debounced, setDebounced] = useState(value)

	useEffect(() => {
		const handler = setTimeout(() => setDebounced(value), delay)
		return () => clearTimeout(handler)
	}, [value, delay])

	return debounced
}