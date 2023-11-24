import React from 'react';
import {
  Box,
  Flex,
  Avatar,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Using React icons
import { useSelector } from 'react-redux'; // Import the necessary library for state management


const NavLink = ({ children }) => (
  <Box
    as="a"
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: 'gray.200',
    }}
    href={'#'}>
    {children}
  </Box>
);

const Navbar = () => {
  const isLoginSuccess = useSelector((state) => state.AuthReducer.isLoginSuccess); // Assuming Redux state management
  const isLoggedIn = !!isLoginSuccess; // Convert to boolean

  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Box bg={'gray.100'} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isLoggedIn ? <FaTimes /> : <FaBars />} // Using React icons
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isLoggedIn ? handleClose : handleOpen}
          />

          <Text as={"b"} fontSize={"xl"} > Task Manager </Text>

          <Flex alignItems={'center'}>
            {isLoggedIn && (
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://example.com/user-profile-image.jpg'}
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => console.log('Add Task clicked')}>Add Task</MenuItem>
                  <MenuItem onClick={() => console.log('All Tasks clicked')}>All Tasks</MenuItem>
                  <MenuItem onClick={() => console.log('Pending Tasks clicked')}>
                    Pending Tasks
                  </MenuItem>
                  <MenuItem onClick={() => console.log('Analytics clicked')}>Analytics</MenuItem>
                  <MenuDivider />
                  <MenuItem onClick={() => console.log('Logout clicked')}>Logout</MenuItem>
                </MenuList>
              </Menu>
            )}
          </Flex>
        </Flex>
      </Box>

    </>
  );
};

export default Navbar;
