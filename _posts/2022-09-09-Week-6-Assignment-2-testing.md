---
layout: post
title:  "let us experiment with anime.js"
date:   2022-09-09 
categories: RMIT CCS
---



<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.js"></script>





Here is an example of recursion, where the frame calls upon a link to display within it.

<iframe  id='recursion'></iframe>

<script>
    const recursion_frame = document.getElementById ('recursion')
    recursion_frame.width = recursion_frame.parentNode.scrollWidth
    recursion_frame.height = recursion_frame.width
    const i = !location.search ? 1 :
      Number (location.search.split ("?").pop ()) + 1
    if (i < 12) {
        const path = `/rmit/ccs/2022/09/09/Week-6-Assignment-2-testing.html?${ i }`
        recursion_frame.src = `https://alankubasov.github.io` + path
    }
</script>