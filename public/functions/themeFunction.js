export function themeFunction(pomodoro = false, notes = false) {

    const darkThemeBtn = document.getElementById('darkTheme')
    const whiteThemeBtn = document.getElementById('whiteTheme')
    
    darkThemeBtn.addEventListener('click', () => {
        whiteThemeBtn.style.opacity = '1'
        darkThemeBtn.style.opacity = '0'

        document.documentElement.style.setProperty('--background-color', 'rgb(46, 46, 46)')

        if (pomodoro === true) {
            document.documentElement.style.setProperty('--tertiary-color', 'rgb(46, 46, 46)')
            document.documentElement.style.setProperty('--button-color', '#ffe5e5')
            document.documentElement.style.setProperty('--text-color-white', 'rgb(46, 46, 46)')
        }
        if (notes === true) {
            document.documentElement.style.setProperty('--tertiary-color', 'rgb(46, 46, 46)')
            document.documentElement.style.setProperty('--button-color', '#ffe5e5')
            document.documentElement.style.setProperty('--text-color-white', 'rgb(46, 46, 46)')
        }
    })

    whiteThemeBtn.addEventListener('click', () => {
        whiteThemeBtn.style.opacity = '0'
        darkThemeBtn.style.opacity = '1'

        document.documentElement.style.setProperty('--background-color', 'ffe5e5')

        if (pomodoro === true) {
            document.documentElement.style.setProperty('--tertiary-color', '#ffe5e5')
            document.documentElement.style.setProperty('--button-color', 'rgb(46, 46, 46)')
            document.documentElement.style.setProperty('--text-color-white', '#ffe5e5')
        }
        if (notes === true) {
            document.documentElement.style.setProperty('--tertiary-color', '#ffe5e5')
            document.documentElement.style.setProperty('--button-color', 'rgb(46, 46, 46)')
            document.documentElement.style.setProperty('--text-color-white', '#ffe5e5')
        }
    })



}