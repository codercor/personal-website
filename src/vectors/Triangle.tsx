import anime from 'animejs';
import React, { useEffect } from 'react'


export default function Triangle(props: any) {
    // useEffect(() => {
    //     anime({
    //         targets: 'triangle-path',
    //         strokeDashoffset: [anime.setDashoffset, 0],
    //         easing: 'easeInOutSine',
    //         duration: 1500,
    //         delay: function (el, i) { return i * 250 },
    //         direction: 'alternate',
    //         loop: true
    //     });
    // }, []);
    return (
        <div>
            <svg width="669" className='animate-triangleRotate origin-[50%_40%] absolute left-[-100%]' height="594" xmlns="http://www.w3.org/2000/svg">
                <path stroke="#B2FF9E" className='animate-triangleDraw absolute ' clip-rule="evenodd" d="M55.0441 0.883221L614.627 0.883178C656.389 0.883182 682.49 46.0921 661.609 82.2593L381.818 566.872C360.937 603.039 308.734 603.039 287.853 566.872L8.06152 82.2593C-12.8196 46.0922 13.2818 0.883216 55.0441 0.883221ZM55.044 11.7334C21.6342 11.7334 0.753115 47.9005 17.458 76.8343L297.249 561.447C313.954 590.381 355.717 590.381 372.421 561.447L652.213 76.8342C668.918 47.9004 648.037 11.7333 614.627 11.7334L55.044 11.7334Z" />
            </svg>
        </div>

    )
}