import { useEffect, useState } from "react";

export const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const updatePosition = () => {
            setScrollPosition(window.pageYOffset);
        };

        window.addEventListener('scroll', updatePosition);

        updatePosition();

        return () => window.removeEventListener('scroll', updatePosition);
    }, []);

    return scrollPosition;
}







// const sections = document.querySelectorAll('section');
// const navLi  = document.querySelectorAll(' nav .container ul li');

// window.addEventListener('scroll', ()=> {
//   let current = '';
//   sections.forEach( section => {
//     const sectionTop = section.offsetTop;
//     const sectionHeigh = section.clientHeight;
//     if(pageYOffset >= sectionTop) {
//       current = section.getAttribute('id');
//     }
//   })

//   navLi.forEach( li => {
//     li.classList.remove('active');
//     if(li.classList.contains(current)){
//       li.classList.add('active')
//     }
//   })
// })