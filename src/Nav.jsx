import React from 'react'

function Nav() {
    const navArr = [
        { href: "/soil/loam", value: "loam soil" },
        { href: "/soil/sandy", value: "sandy soil" },
        { href: "/soil/clay", value: "clay soil" },
        { href: "/soil/silt", value: "silt soil" },
        { href: "/soil/peat", value: "peat soil" },
        { href: "/soil/chalk", value: "chalk soil" },
    ]
    function onClickHandler(e) {
        const soilLinkHolder = document.querySelector(".soil-link-holder")

        soilLinkHolder.classList.toggle("soil-type-link-toggle")
    }
    return (
        <div className='main-nav'>
            <a href="/" className='home-link nav-link'>Home</a>
            <div className="nav-soil-type">
                <button type="button" onClick={onClickHandler} className='soil-type-btn'>soil type</button>
                <section className="soil-link-holder soil-type-link-toggle">
                    {navArr.map(({value, href}, index)=> <a className='soil-type-link nav-link' key={index} href={href}> {value} </a>)}
                </section>
            </div>
        </div>
    )
}

export default Nav