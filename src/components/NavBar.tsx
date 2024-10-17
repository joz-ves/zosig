import * as React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router'; // For Next.js routing
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PersonIcon from '@mui/icons-material/Person';
import ArticleIcon from '@mui/icons-material/Article';
import HomeIcon from '@mui/icons-material/Home';

export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);
  const router = useRouter(); // Next.js router for navigation

  const handleNavigation = (newValue: number) => {
    setValue(newValue);

    // Perform navigation based on the selected index
    switch (newValue) {
      case 0:
        router.push('/'); // Navigate to Home
        break;
      case 1:
        router.push('/profil'); // Navigate to Profile
        break;
      case 2:
        router.push('/prispevok'); // Navigate to Articles
        break;
      default:
        break;
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          handleNavigation(newValue);
        }}
      >
        <BottomNavigationAction label="Domov" icon={<HomeIcon />} />
        <BottomNavigationAction label="Profily" icon={<PersonIcon />} />
        <BottomNavigationAction label="Príspevky" icon={<ArticleIcon />} />
      </BottomNavigation>
    </Box>
  );
}
