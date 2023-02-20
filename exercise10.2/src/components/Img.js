import React from 'react';

const Img = React.forwardRef(({ src, className, mouseOver, mouseLeave }, ref) => {

    return (
        <img
            ref={ref}
            onMouseOver={mouseOver}
            onMouseLeave={mouseLeave}
            src={src} 
            className={className}
            alt="img"
        />
    )
})

export default Img