import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h1>Welcome to my fancy Routing Website!!!</h1>
            <nav>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/friends'>Friends</CustomLink>
                <CustomLink to={'/posts'}>Posts</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
                <CustomLink to='/countries'>Coutries</CustomLink>
                {/* <Link to="/friends">friends</Link>
                <Link to="/about">About</Link> */}
            </nav>
        </div>
    );
};

export default Header;