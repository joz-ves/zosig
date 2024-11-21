"use client"; // Add this at the top
//jozef veselka
import * as React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // For Next.js routing
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import InfoIcon from '@mui/icons-material/Info';

export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);
  const router = useRouter(); // Client-side routing
//jozef veselka
  return (
    <Box sx={{ width: '100%', position: 'fixed', bottom: 0 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          // Add navigation logic
          if (newValue === 0) router.push('/');
          if (newValue === 1) router.push('/profil');
          if (newValue === 2) router.push('/prispevok');
          if (newValue === 3) router.push('/o-mne')
        }}
      >
        <BottomNavigationAction label="Domov" icon={<HomeIcon />} />
        <BottomNavigationAction label="Profily" icon={<PersonIcon />} />
        <BottomNavigationAction label="Príspevky" icon={<ArticleIcon />} />
        <BottomNavigationAction label="O mne" icon={<InfoIcon />} />
      </BottomNavigation>
    </Box>
  );
}
//jozef veselka