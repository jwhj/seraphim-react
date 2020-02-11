import React, { useState, useRef } from 'react'
import axios from 'axios'
import uuid from 'uuid/v1'
const {
	Button, IconButton,
	Icon,
	Grid,
	List, ListItem, ListItemSecondaryAction, ListSubheader,
	TextField
} = MaterialUI
export default () => {
	const [sectionList, setSectionList] = useState([])
	const curSectionName = useRef<HTMLInputElement>()
	const sectionContent = useRef<HTMLInputElement>()
	const gameName = useRef<HTMLInputElement>()
	const load = async () => {
		const res = await axios.post('/api/lst', { gameName: gameName.current.value })
		setSectionList((await axios.post('/api/lst', { gameName: gameName.current.value })).data)
	}
	const handleAddSection = async () => {
		const s = prompt('Section name:') || uuid()
		await axios.post('/api/write', {
			gameName: gameName.current.value,
			sectionName: s,
			content: ''
		})
		await load()
		await openSection(s)
	}
	const openSection = async (sectionName: string) => {
		sectionContent.current.value = (await axios.post('/api/read', { gameName: gameName.current.value, sectionName })).data
		curSectionName.current.value = sectionName
		sectionContent.current.focus()
	}
	const deleteSection = async (sectionName: string) => {
		await axios.post('/api/del', { gameName: gameName.current.value, sectionName })
		await load()
	}
	return (
		<div>
			<Grid container spacing={3} style={{ width: '100%' }}>
				<Grid item xs={3}>
					<List>
						<ListSubheader>
							Sections
							<ListItemSecondaryAction>
								<Button variant="contained" disableElevation onClick={handleAddSection}>Add</Button>
							</ListItemSecondaryAction>
						</ListSubheader>
						{sectionList.map(x => (
							<ListItem button key={x} onClick={() => openSection(x)}>
								{x}
								<ListItemSecondaryAction>
									<IconButton onClick={() => deleteSection(x)}>
										<Icon>delete</Icon>
									</IconButton>
								</ListItemSecondaryAction>
							</ListItem>
						))}
					</List>
				</Grid>
				<Grid item xs={9}>
					<div style={{ width: '100%', padding: 10 }}>
						<TextField label="Game name" InputLabelProps={{ shrink: true }} inputRef={gameName} style={{
							marginRight: 5
						}}
							onKeyDown={(evt: KeyboardEvent) => {
								evt.key === 'Enter' && load()
							}} />
						<TextField label="Section name" InputLabelProps={{ shrink: true }} inputRef={curSectionName}
							onKeyDown={(evt: KeyboardEvent) => {
								evt.key === 'Enter' && openSection(curSectionName.current.value)
							}} />
					</div>
					<TextField multiline variant="filled" rows="30" label="Content"
						InputLabelProps={{ shrink: true }} inputRef={sectionContent} style={{ width: '100%' }}
						inputProps={{ style: { fontFamily: 'monospace' } }}
						onBlur={() => {
							axios.post('/api/write', {
								gameName: gameName.current.value,
								sectionName: curSectionName.current.value,
								content: sectionContent.current.value
							})
						}} />
				</Grid>
			</Grid>
		</div>
	)
}