export function toggleSidebarVisibility(sidebar) {
	return { type: 'TOGGLE_SIDEBAR_VISIBILITY', sidebar }
}

export function closeRightSidebar() {
	return { type: 'CLOSE_RIGHT_SIDEBAR' }
}
