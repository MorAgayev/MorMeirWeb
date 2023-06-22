export function downloadAsPdf(fileName, title) {
    var link = document.createElement('a');
    link.href = `/files/${fileName}.pdf`;
    link.download = `${title}.pdf`;
    link.dispatchEvent(new MouseEvent('click'));
}

export function scrollHeader() {
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header')
}

export function scrollActive() {
    const scrollY = window.scrollY

    document.querySelectorAll('section[id]').forEach(section => {
        const sectionHeight = section.offsetHeight
        const sectionTop = section.offsetTop - 58
        const sectionId = section.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}