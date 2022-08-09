import React, { useState, useEffect } from 'react';
import {  
	makeStyles,  
	Typography,
	Box,
	Divider,
	List,
	ListItem,
	ListItemText,
	AppBar,
	Toolbar,
	IconButton,
	Avatar,
	BottomNavigation,
	BottomNavigationAction,
	Badge
} from '@material-ui/core';
import {Navbar} from './Navbar'
import {DrawerNote} from './DrawerNote'
import {Note} from './Note'

import Search from '@material-ui/icons/Search';
import YouTube from '@material-ui/icons/YouTube';
import Folder from '@material-ui/icons/Folder';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Subscriptions from '@material-ui/icons/Subscriptions';
import More from '@material-ui/icons/MoreVert';

import video1 from '../images/video1.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: theme.palette.background.light,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    paddingLeft: 16,
    paddingRight: 16
  },
  box: {
  	paddingTop: theme.mixins.toolbar.minHeight,
  	paddingBottom: theme.mixins.toolbar.minHeight,
  },
  gap:{
  	gap: 8
  },
  form:{
  	display: "flex",
  	flexDirection:"column",
  	gap: 8,
  	padding: 8,
  	position:"relative"
  },
  grow: {
    flexGrow: 1,
  },
  textAling:{
  	textAlign:"center",
  	paddingBottom: 8,
  	paddingTop: 8,
  },
  title:{
  	fontSize: 18,
  },
  description:{
  	fontSize: 16,
  	color: theme.palette.text.secundary
  },
  checkbox:{
  	marginRight: 24,
  	color: theme.palette.primary
  },
  column:{
  	display: "flex",
  	flexDirection: "column"
  },
  youtube:{
  	color: '#d22',
  	fontSize: "2rem"
  },
  navigation:{
  	position:"fixed",
  	bottom:0,
  	left:0,
  	width: "100%",
  	boxShadow: "0px -3px 5px -1px rgba(0,0,0,0.2),0px -6px 10px 0px rgba(0,0,0,0.14)"
  },
  canalbox:{
  	display:"flex",
  	height:"48px",
  	alignItems: "center",
  	paddingLeft:"20px",
  	backgroundColor:"#e7e7e7"
  },
  canal:{
  	position:"relative",
  	left:"-10px",
  	marginRight:"-8px",
  	color: "#555",
  	fontSize: "1.3rem"
  },
  canalText:{
  	fontSize:"0.8rem",
  	marginLeft:"4px",
  	color:"#666"
  },
  subs:{
  	color:"#36d",
  	fontSize:"1.2rem",
  	marginRight:"8px"
  },
  substext:{
  	color:"#36d",
  	fontSize:"0.8rem",
  	fontWeight:600,
  	marginRight:"8px"
  },
  videotext:{
  	fontSize:"0.9rem",
  },
  videosub:{
  	fontSize:"0.8rem",
  	color:"#555"
  },
  avatar:{
  	marginRight:"8px"
  },
  duration:{
  	position:"absolute",
  	right: 12,
  	top:200,
  	backgroundColor: "#000",
  	color:"#eee",
  	fontSize:"0.8rem",
  	padding:"2px"
  },
  duration2:{
  	position:"absolute",
  	left: 105,
  	top:62,
  	backgroundColor: "#000",
  	color:"#eee",
  	fontSize:"0.7rem",
  	padding:"1px"
  },
  spacing:{
  	gap:12,
  	padding:12,
  	position:"relative"
  }
}));

export const Home = () => {
	const [page, setPage] = useState(1)
	const classes = useStyles()

	const Video = () => (
		<Box className={classes.form}>
			<img src={video1} alt="viedo1" height="220"/>
			<Typography className={classes.duration} >12:34</Typography>
			<Box display="flex">
				<Avatar className={classes.avatar} />
				<Box>
					<Typography>lorem upsun at sen lorem upsun at sen</Typography>
					<Typography className={classes.videosub} >YoutuberX · 3.4 k vistas · hace 9 dias</Typography>
				</Box>
				<div className={classes.grow} />
				<More/>
			</Box >
		</Box>
	)

	const Principal = () => (
		<Box>
			<div className={classes.canalbox}>
				<AccountCircle className={classes.canal}/>
				<AccountCircle className={classes.canal}/>
				<AccountCircle className={classes.canal}/>
				<Typography variant="p" className={classes.canalText}>Tus canales</Typography>
				<div className={classes.grow} />
				<Subscriptions className={classes.subs} />
				<Typography className={classes.substext}>SUSCRIPCIONES</Typography>
			</div>
			<Video/>
			<Video/>
			<Video/>
			<Video/>
			<Video/>
			<Video/>
		</Box>
	)

	const DownloadVideo = () => (
		<ListItem className={classes.spacing} >
			<img src={video1} alt="video1" height="70"/>
			<Typography className={classes.duration2} >12:34</Typography>
			<ListItemText primary={"lorem upsun at sen lorem upsun at sen"} secondary={"YoutuberX"} />
			<More/>
		</ListItem>
	)

	const Downloads = () => (
		<Box>
			<Typography className={[classes.videosub, classes.spacing]} >Mueve hacia abajo para buscar en memoria</Typography>
			<List>
				<DownloadVideo/>
				<DownloadVideo/>
				<DownloadVideo/>
				<DownloadVideo/>
				<DownloadVideo/>
				<DownloadVideo/>
			</List>
		</Box>
	)

	return (
		<div className={classes.root}>
			<AppBar className={classes.appBar}>
				<Toolbar className={classes.gap} >
					<YouTube className={classes.youtube}/>
					<Typography variant='h6'>
		             	Go
		            </Typography>
		            <div className={classes.grow} />
					<IconButton
		            edge='start'
		           	aria-label='Add'
		          	>
		            	<Search/>
		          	</IconButton>
		          	<Avatar/>
				</Toolbar>
			</AppBar>

			<Box className={classes.box}>
				{page===0?<Principal/>:<Downloads/>}
			</Box>

			<BottomNavigation
			showlabel="true"
			shadow
			className={classes.navigation}
			value={page}
			onChange={(e, next) => setPage(next)}
			>
				<BottomNavigationAction label="Principal" icon={<Badge badgeContent="9" color="error"><Folder/></Badge>} />
				<BottomNavigationAction label="Downloads" icon={<Folder/>}/>
			</BottomNavigation>
		</div>
	)
}