document.body.style.margin   = 0
document.body.style.overflow = `hidden`

const cnv  = document.createElement ('canvas')
cnv.width  = window.innerWidth
cnv.height = window.innerHeight
document.body.appendChild (cnv)

const ctx = cnv.getContext ('2d')

console.log ('hello')

