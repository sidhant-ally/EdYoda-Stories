import React from 'react';
import './index.css'

const Topbar = () => {
    return (
        <nav className="navbar navbar-expand navbar-light pl-max">
            <div className="ta-l py-2">
                <h3 className="navbar-brand" href="#">Edyoda</h3>
                <h6 id="navbar-subtitle">Stories</h6>
            </div>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto ml-4">
                    <a className="nav-link" href="#">Explore categories <span><img class="BlogNavigationLink__DropdownArrow__2Uzyk" alt="Dropdown Icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAYAAAD37n+BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHhJREFUeNpiYGBguAPE/f///2fAh0FqgPguiBEDxC+BeDUQM2NRyAyVewlWCxW0B+L7QHwAiHmRFPNCxUBy9mAxJElVIL4MxBeBWB6KL0LFVOHq0KwXAuJDQHwPikFsIWQ1jFCFcMDIyMgGpFZAuRFA+V/I8gABBgD8EGd4shdx5wAAAABJRU5ErkJggg==" /></span></a>
                </ul>
                <span className="navbar-text ta-l">
                    EdYoda is free learning and knowledge
                    sharing platform for techies
                </span>
                <div id="navbar-main-button" type="button">
                    Go To Main Website
                </div>
            </div>
        </nav>
    );
}

export default Topbar;