import React from 'react'
import { Drawer, FormGroup, TextField, Button, Typography, IconButton, } from '@material-ui/core'

import Close from '@material-ui/icons/Close';

export const DrawerNote = ({ classes, setToggleDrawer, toggleDrawer, form, handleChange, handleCreate }) => {
	return (
		<Drawer
			anchor="top"
			open={toggleDrawer}
			onClose={() => setToggleDrawer(!toggleDrawer)}
			className={classes.drawer}
			>
				<Typography variant="h5" className={classes.textAling}>
					Add a Task
				</Typography>
				<IconButton
	            edge='start'
	            className={classes.btnClose}
	           	aria-label='menu'
	           	onClick={() => setToggleDrawer(!toggleDrawer)}
	          	>
	            	<Close/>
	          	</IconButton>
				<FormGroup className={classes.form} >
					<TextField 
					variant="outlined" 
					label="Title" 
					value={form.title} 
					onChange={(e) => handleChange(e)} 
					name="title"
					/>
					<TextField 
					variant="outlined" 
					label="Description" 
					value={form.description} 
					onChange={(e) => handleChange(e)} 
					name="description"
					/>
					<Button 
					variant="contained" 
					color="primary" 
					onClick={() => handleCreate()}
					>
						Save
					</Button>
				</FormGroup>
			</Drawer>
	)
}