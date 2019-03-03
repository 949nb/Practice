var $buttons = $('.buttons > button')
var $imgs = $('#imgs')
var $img = $('#imgs > img')
var $firstClone = $img.eq(0).clone(true)
var $lastClone = $img.eq($img.length-1).clone(true)

$imgs.prepend($lastClone)
$imgs.append($firstClone)

let index = 0

$buttons.eq(0).on('click',function(){
    console.log(index)
    if(index === 2){
        console.log('我是在第三张过来的')
        $imgs.css({transform:'translateX(-3200px)'})
        .one('transitionend',function(){
            $imgs.hide().offset()
            $imgs.css({transform:'translateX(-800px)'})
            .show()
        })
    }else{
        $imgs.css({transform: 'translateX(-800px)'})
    }
    index = 0
})

$buttons.eq(1).on('click',function(){
    console.log(index)
    $imgs.css({transform: 'translateX(-1600px)'})
    index = 1
})

$buttons.eq(2).on('click',function(){
    console.log(index)
    if(index === 0){
        console.log('我是在第一张过来地')
        $imgs.css({transform:'translateX(0px)'})
        .one('transitionend',function(){
            $imgs.hide().offset()
            $imgs.css({transform:'translateX(-2400px)'})
            .show()
        })
    }else{
        $imgs.css({transform: 'translateX(-2400px)'})
    }
    index = 2
})