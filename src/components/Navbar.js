import React from 'react';
import {Box, Text, Heading, Image} from 'gestalt';
import {NavLink} from 'react-router-dom';

const Navbar = () => (
    <Box height={70} color="watermelon" padding={1} shape="roundedBottom"
        display="flex" alignItems="center" justifyContent="around">
        <NavLink to="/signin">
            <Text size="x1" color="white">
                Sign In
            </Text>
        </NavLink>
        <NavLink to="/">
            <Box display="flex" alignItems="center" >
                <Box height={50} width={50} margin={2}>
                    <Image src="./icons/logo.svg" alt="music logo"
                    naturalHeight={1}
                    naturalWidth={1}/>
                </Box>
                <Heading size="xs" color="white">
                    Music Shop
                </Heading>
            </Box>
        </NavLink>
        <NavLink to="/signup">
            <Text size="x1" color="white">
                Sign Up
            </Text>
        </NavLink>
    </Box>

)
export default Navbar;