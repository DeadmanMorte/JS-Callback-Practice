function move(element) {
    element.style.position = 'fixed'


    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function movewithArrowKeys(left,bottom,walkingAni){
        let direction = null;
        let x = 100;
        let y = 250;
        
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'

    setInterval(function() {
        if (direction === 'west'){
        x -= 1   
        }
        if (direction === 'east'){
        x += 1
        }
        if (direction === 'north'){
        y += 1
        }
        if (direction === 'south'){
        y -= 1
        }
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'

        if (x <= 0){
            x = 0
        }
        if (y <= 105){
            y = 105
        }
        if ( x >= window.innerWidth) {
            x = window.innerWidth
        }
        if ( y >= window.innerHeight) {
            y = window.innerHeight
        }
        }, 1)
    
        document.addEventListener('keydown', function(e){
        if(e.repeat) return;
    
        if(e.key === 'ArrowLeft'){
            direction = 'west'
        }
        if(e.key === 'ArrowRight'){
            direction = 'east'
        }
        if(e.key === 'ArrowUp'){
            direction = 'north'
        }
        if(e.key === 'ArrowDown'){
            direction = 'south'
        }
        walkingAni(direction)
        })
    
        document.addEventListener('keyup', function(e){
        direction = null
        walkingAni(direction)
        })
    }
    
    return {
        to: moveToCoordinates,
        withArrowKeys: movewithArrowKeys
    }
}