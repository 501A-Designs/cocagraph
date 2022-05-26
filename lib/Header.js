import React from 'react'

export default function Header() {
    let header = {
		position: 'sticky',
		zIndex: '100',
		top: 0,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: '1em 1.5em',
		backgroundColor:'rgb(228, 228, 228)',
		borderBottom: '1px solid rgb(212, 212, 212)',
		marginBottom: 0
	}
	let nav = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
        gap:'1em'
	}
    return (
        <header style={header}>
            <h2 style={{margin:0,padding:0}}>cocagraph</h2>
            <nav style={nav}>
                <a href="/editor">Editor</a>
                <a href="/about">About</a>
                <a href="/todos">GitHub</a>
            </nav>
        </header>
    )
}
