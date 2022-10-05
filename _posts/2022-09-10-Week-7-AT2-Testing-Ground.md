---
layout: post
title:  "Testing anime.js week 7"
date:   2022-09-10 
categories: RMIT CCS
---

I have chosen anime.js because the motion graphics make my brain go brrrrr.

Smooth velocity, ease in ease out, easy ease, velocity, wavy waves is nice to look at.

Let's see if this works.

<script src='https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.min.js'></script>





<div id=rotating_square></div>

<script type=module>

    // getting and formatting the outer div
    const div = document.getElementById (`rotating_square`)
    div.width = div.parentNode.scrollWidth
    div.height = div.width * 9 / 16
    div.style.height = `${ div.height }px`
    div.style.backgroundColor = `#f4f4f4`

    // making a square pink div
    const square = document.createElement (`div`)
    square.style.width  = `100px`
    square.style.height = `100px`
    square.style.backgroundColor = `hotpink`
    square.style.position = `relative`

    // using the style.transform property to move the div
    const trans_x = `translateX(${ div.width /2 - 55 }px)`
    const trans_y = `translateY(${ div.height/2 - 40 }px)`
    square.style.transform = `${ trans_x } ${ trans_y }`

    // attaching the square div to the outer div
    div.append (square)


    // the anime () function will return an object
    // we can use to control the animation
    const square_mover = anime ({

            // remember the s at the end of targets!
            targets: square,
            duration: 3400,

            // this will rotate the div 
            // via its style.transform property
            rotate: `345deg`,

            // this will scale the div
            // via its style.transform property
            scale: 2,

            // makes it animate in both directions
            direction: `alternate`,

            // will not autoplay
            autoplay: false,
        })

    // registering the square_mover.play () method
    // to the onclick event listener
    div.onclick = () => square_mover.play ()
</script>


