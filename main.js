const rotate = ( {deltaY: move} ) => {
    if (move > 0) watch.playbackRate -= 0.1
    else if (move < 0) watch.playbackRate += 0.1
    value_rate.innerText = Math.round(watch.playbackRate * 10) / 10
}