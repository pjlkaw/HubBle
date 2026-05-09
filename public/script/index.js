// Botão voltar para o topo


// Tema

export function themeFunction() {

    const darkThemeBtn = document.getElementById('darkTheme')
    const whiteThemeBtn = document.getElementById('whiteTheme')
    
    darkThemeBtn.addEventListener('click', () => {
        whiteThemeBtn.style.opacity = '1'
        darkThemeBtn.style.opacity = '0'

        document.documentElement.style.setProperty('--background-color', 'rgb(46, 46, 46)')
    })

    whiteThemeBtn.addEventListener('click', () => {
        whiteThemeBtn.style.opacity = '0'
        darkThemeBtn.style.opacity = '1'

        document.documentElement.style.setProperty('--background-color', 'rgb(240, 240, 240)')
    })
}themeFunction()