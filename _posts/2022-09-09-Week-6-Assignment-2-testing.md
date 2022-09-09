---
layout: post
title:  "let us experiment with anime.js and more learning week 6"
date:   2022-09-09 
categories: RMIT CCS
---



<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.js"></script>

<script>
const app = new Vue({
  el: '#banksy',
  data() {
    return {
      shredding: null,
      dropping: null
    }
  },
  methods: {
    shred() {
      this.shredding = anime({
        targets: '#original',
        height: 0,
        duration: 10000,
        easing: 'linear'
      })

      this.dropping = anime({
        targets: '#painting',
        translateY: '101%',
        duration: 10000,
        easing: 'linear'
      })
    },
    artSelected(e) {
      this.shredding.pause()
      this.dropping.pause()
      
      loadImage(
        e.target.files[0],
        canvas => {
          let url = canvas.toDataURL('image/jpeg')
          
          document.getElementById('original').style.backgroundImage = `url(${url})`
          
          let elements = Array.from(document.getElementsByClassName('shred'))
          
          elements.forEach(element => {
            element.style.backgroundImage = `url(${url})`
          })
          
          document.getElementById('original').style.height    = '100%'
          document.getElementById('painting').style.transform = 'translateY(0)'
          
          this.shred()
        }, {
          canvas: true,
          crop: true,
          maxHeight: 566,
          maxWidth: 392,
          orientation: true
        }
      )
    }
  },
  mounted() {
    this.shred()
  }
})




</script>





Using classes to make arrays
<iframe src="https://editor.p5js.org/s3849484/full/MZ03-ou6F"></iframe>





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

Pretty neat huh?

