import React from 'react'

const ServiceIcone = ({ svg }) => {
    let svgEle;

    switch (svg) {
        case 'responsiv':
            svgEle = (
                <svg height="50px" id="svg820" width="50px" version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <defs id="defs814">
                        <linearGradient id="linearGradient4358" gradientTransform="matrix(1.25 0 0 1.2 -484.714 468.561)" gradientUnits="userSpaceOnUse" x1="401.57144" x2="401.57144" y1="535.79797" y2="520.79797" xlinkHref="#linearGradient4424" />
                        <linearGradient id="linearGradient4424">
                            <stop id="stop4426" style={{ "stopColor": "#60a5e7", "stopOpacity": "0" }} offset="0" />
                            <stop id="stop4428" style={{ "stopColor": "#a6f3fb", "stopOpacity": ".25773194" }} offset="1" />
                        </linearGradient>
                    </defs>
                    <g id="layer1" transform="translate(0 -1090.52)">
                        <path id="rect4319" style={{ "opacity": "1", "fill": "#373737", "fillOpacity": "1", "stroke": "none" }} d="M0 2v22h32V2zm2 2h28v17H2z" transform="translate(0 1090.52)" />
                        <rect height="5.9999533" id="rect4321" style={{ "opacity": "1", "fill": "#373737", "fillOpacity": "1", "stroke": "none" }} width="6.0000095" x="13" y="1113.5197" />
                        <rect height="1.9999533" id="rect4323" style={{ "opacity": "1", "fill": "#373737", "fillOpacity": "1", "stroke": "none", "strokeWidth": "1.13389337" }} width="18" x="7" y="1118.5197" />
                        <rect height="17" id="rect1865" style={{ "opacity": "1", "vectorEffect": "none", "fill": "#373737", "fillOpacity": ".25098041", "stroke": "none", "strokeWidth": "2", "strokeLinecap": "butt", "strokeLinejoin": "bevel", "strokeMiterlimit": "4", "strokeDasharray": "none", "strokeDashoffset": "3.20000005", "strokeOpacity": "1" }} width="28" x="2" y="1094.5197" />
                    </g>
                </svg>
            );
            break;
        case 'fromScratch':
            svgEle = (
                <svg height="50px" id="svg3049" width="50px" version="1.1" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <g id="layer1" transform="translate(-421.714 -531.79)">
                        <path id="rect4132" style={{ "fill": "#373737", "fillOpacity": "1", "stroke": "none" }} d="M422.714 542.79v4h4l10-10-4-4zm2 0 8-8 2 2-8 8z" />
                    </g>
                </svg>
            );
            break;
        case 'graphic':
            svgEle = (
                <svg height="50px" width="50px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <g fill="#373737">
                        <path d="M0 0v16h7.63a10.651 10.651 0 0 0-1.218-5.794c-.938-1.81-2.047-3.59-2.375-5.638C3.764 3.06 3.82 1.511 4.039 0h-4.04z" fillOpacity=".75" />
                        <path d="M15.999 4.746 5.817 9.076c.916 1.62 1.699 3.379 1.806 5.262.041.553.043 1.109.006 1.662H16V4.746z" fillOpacity=".25" />
                        <path d="M4.039 0c-.348 2.284-.252 4.69.668 6.836.318.772.712 1.509 1.111 2.24L16 4.746V0H4.04z" fillOpacity=".5" />
                        <path d="M0 0v16h16V0H0zm1 1h14v14H1V1z" />
                    </g>
                </svg>
            );
            break;
        case 'support':
            svgEle = (
                <svg height="50px" id="svg820" width="50px" version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <defs id="defs814">
                        <linearGradient id="linearGradient4358" gradientTransform="matrix(1.25 0 0 1.2 -484.714 468.561)" gradientUnits="userSpaceOnUse" x1="401.57144" x2="401.57144" y1="535.79797" y2="520.79797" xlinkHref="#linearGradient4424" />
                        <linearGradient id="linearGradient4424">
                            <stop id="stop4426" style={{ "stopColor": "#60a5e7", "stopOpacity": "0" }} offset="0" />
                            <stop id="stop4428" style={{ "stopColor": "#a6f3fb", "stopOpacity": ".25773194" }} offset="1" />
                        </linearGradient>
                    </defs>
                    <g id="layer1" transform="translate(0 -1090.52)">
                        <path id="rect2370" style={{ "opacity": "1", "vectorEffect": "none", "fill": "#373737", "fillOpacity": "1", "stroke": "none", "strokeWidth": "2", "strokeLinecap": "butt", "strokeLinejoin": "bevel", "strokeMiterlimit": "4", "strokeDasharray": "none", "strokeDashoffset": "3.20000005", "strokeOpacity": "1" }} d="M2 4v24h28V4zm2 2h24v20H4z" transform="translate(0 1090.52)" />
                        <path id="path2381" style={{ "fill": "#373737", "fillOpacity": "1", "stroke": "none", "strokeWidth": "1.26491106px", "strokeLinecap": "butt", "strokeLinejoin": "miter", "strokeOpacity": "1" }} d="M22.424 1100.096a1.996 1.996 0 0 0-2.829 0l-.707.707-7.778 7.778 2.828 2.829 7.779-7.778.707-.708a1.996 1.996 0 0 0 0-2.828zm-12.021 9.192-1.414 4.243 4.242-1.414z" />
                    </g>
                </svg>
            );
            break;
        default:
            svgEle = null
    }
    return (
        <div>
            {svgEle}
        </div>
    )
}

export default ServiceIcone
