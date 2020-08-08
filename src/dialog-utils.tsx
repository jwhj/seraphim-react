import React, { useState, useRef } from 'react'
const {
	Dialog,
	TextField,
	Button
} = MaterialUI
export const usePrompt = (): [(label: string) => Promise<string>, JSX.Element] => {
	const [showPrompt, setShowPrompt] = useState(false)
	const [label, setLabel] = useState('')
	const textRef = useRef<HTMLInputElement>()
	const resolveRef = useRef<(s: string) => void>()
	const $prompt = async (label: string) => {
		setShowPrompt(true)
		setLabel(label)
		return await new Promise<string>(resolve => {
			resolveRef.current = resolve
		})
	}
	const commit = (s: string) => {
		textRef.current.value = ''
		resolveRef.current(s)
		setShowPrompt(false)
	}
	return [$prompt, (
		<Dialog open={showPrompt} PaperProps={{
			style: {
				padding: '15px 20px 5px'
			}
		}} onEntered={() => textRef.current.focus()}>
			<TextField size="small" label={label} variant="outlined" inputRef={textRef} style={{
				width: '20em'
			}} onKeyPress={(evt: KeyboardEvent) => {
				evt.stopPropagation()
				if (evt.key === 'Enter') commit(textRef.current.value)
			}} />
			<div style={{ textAlign: 'right' }}>
				<Button size="small" onClick={() => commit(undefined)}>Cancel</Button>
				<Button size="small" color="primary" onClick={() => commit(textRef.current.value)}>OK</Button>
			</div>
		</Dialog>
	)]
}