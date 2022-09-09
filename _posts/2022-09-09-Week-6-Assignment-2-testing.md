---
layout: post
title:  "let us experiment with anime.js"
date:   2022-09-09 
categories: RMIT CCS
---

<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.js"></script>

<script>

anime({
  targets: '.css-prop-demo .el',
  left: '240px',
  backgroundColor: '#FFF',
  borderRadius: ['0%', '50%'],
  easing: 'easeInOutQuad'
});

