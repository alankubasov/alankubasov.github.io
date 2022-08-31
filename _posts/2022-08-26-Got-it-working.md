---
layout: post
title:  "Got The blog working! Web Audio and Canvas API"
date:   2022-08-26 
categories: RMIT CCS
---

# Lets get it 

Testing out the embedding feature for a sketch!

<iframe width=720 height=720 src="https://editor.p5js.org/s3849484/full/RAbL14opd"></iframe>


Today we learned about how to integrate and buffer audio into web, using different variables and methods. For example on click commands and array buffers. finding the audio, passing it onto the function and using the playback rate. 

Even though I missed two classes which was detrimental, I managed to familirise myself with using API's and plugging them into HTML, as well as using javascript without P5js, using sound API (which I plan to use in my future project) and the many different creative applications I can use them for.  



// the onclick property takes a function
// and passes that function a Mouse Event
document.onclick = click_handler

const audio_context = new AudioContext ()
audio_context.suspend ()

// declare mutable variable
// for the audio buffer
let vibraphone_buffer

// this is an asynchronous function
// that will load the audio data
// into the buffer declared above
// from the audio file
get_vibraphone ()

// we are name the argument mouse_event
// so we can refer to the mouse event
// the .onclick method passes in
function click_handler (mouse_event) { 
    if (audio_context.state == 'suspended') {
        audio_context.resume ()
        document.body.bgColor = `forestgreen`
    } else {
        // mouse_event has the coordinates
        // of the mouse position stored in it
        // as .clientX and .clientY properties
        const x_pos = mouse_event.clientX

        // divide the position by the width
        // to get a ratio between 0 - 1
        const x_ratio = x_pos / window.innerWidth

        // pass in 2 to the power of the ratio
        // this value will become the playback rate
        play_vibraphone (2 ** x_ratio)
    }
}

// the keyword async specifies that the function we
// are declaring here is asynchronous.  Which means
// it will wait until the data loads at each step 
// before moving on to the next.   
async function get_vibraphone () {

    // we are storing in the global variable
    // the result of a three step process
    // the first part fetches the file
    vibraphone_buffer = await fetch ("vibraphone_note.wav")

        // the second step formats the binary data
        // in an array
        .then (response => response.arrayBuffer ())

        // the third step encodes the binary data
        // as an audio buffer, which is returned
        // and stored in the global variable above
        .then (buffer => audio_context.decodeAudioData (buffer))
}

// this is the function that makes the sound
function play_vibraphone (rate) {

    // create a buffer source node
    const buf_node = audio_context.createBufferSource ()

    // wire it up to the audio output device
    buf_node.connect (audio_context.destination)

    // point the node's buffer to the audio 
    // buffer stored in vibraphone_buffer
    buf_node.buffer = vibraphone_buffer

    // use the argument passed into the function
    // as the playback rate
    buf_node.playbackRate.value = rate

    // node to start playing the audio buffer
    buf_node.start (audio_context.currentTime)
}

</script>