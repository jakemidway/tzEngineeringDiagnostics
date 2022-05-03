
// // window.addEventListener()

// let centerX = document.documentElement.clientHeight / 2
// let blockSlider = document.querySelector('.services')
// let coorSlider = blockSlider.getBoundingClientRect()
// let slideList = document.querySelector('.services__list')

// function getCoords(elem) {
//     let box = elem.getBoundingClientRect();
  
//     return {
//       top: box.top + window.pageYOffset,
//       right: box.right + window.pageXOffset,
//       bottom: box.bottom + window.pageYOffset,
//       left: box.left + window.pageXOffset
//     };
//   }


// // blockSlider.addEventListener("click", console.log(getCoords(blockSlider)))
// // console.log(blockSlider.clientHeight)

// function moveSlide(){
//     console.log(slideList.left)
// }

// moveSlide()


// document.addEventListener('scroll', () => {
//     console.log(window.pageYOffset)
//     console.log(getCoords(blockSlider))
//     let coor = getCoords(blockSlider)
//     if(window.pageYOffset > coor.top){
        
//         document.body.style.overflow = 'hidden';

//     }
// })

