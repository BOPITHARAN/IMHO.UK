import './style.css'
import { router } from './router.js'
import { themeManager } from './utils/theme.js'

// Initialize theme
themeManager.init()

// Initialize router
router.init()

// Handle navigation
document.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
        e.preventDefault()
        router.navigateTo(e.target.href)
    }
})

// Handle browser back/forward
window.addEventListener('popstate', () => {
    router.handleRoute()
})