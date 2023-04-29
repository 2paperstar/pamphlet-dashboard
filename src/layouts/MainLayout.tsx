import {
  Collapse,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Outlet, useLocation } from 'react-router';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';

const drawerWidth = 240;

const menus = [
  {
    title: '맵, 가게 정보관리',
    icon: <MapOutlinedIcon />,
    submenus: [
      {
        title: '부스 요약 소개',
        path: '/booth/summary',
      },
      {
        title: '부스 정보 정리',
        path: '/booth/info',
      },
      {
        title: '부스 상세 설명',
        path: '/booth/detail',
      },
    ],
  },
  {
    title: '이벤트 관리',
    icon: <EventOutlinedIcon />,
    path: '/event',
  },
  {
    title: '상품 관리',
    icon: <Inventory2OutlinedIcon />,
    path: '/product',
  },
  {
    title: '통계 분석',
    icon: <InsightsOutlinedIcon />,
    path: '/analysis',
  },
];

const Menu: React.FC<{
  menu: (typeof menus)[number];
}> = ({ menu }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  const button = (
    <ListItemButton
      onClick={() => setOpen((prev) => !prev)}
      selected={menu.path === pathname}
    >
      <ListItemIcon>{menu.icon}</ListItemIcon>
      <ListItemText primary={menu.title} />
      {menu.submenus && <>{open ? <ExpandLess /> : <ExpandMore />}</>}
    </ListItemButton>
  );

  return (
    <>
      {menu.path ? <Link to={menu.path}>{button}</Link> : button}
      {menu.submenus && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div">
            {menu.submenus.map((submenu) => (
              <Link to={submenu.path} key={submenu.path}>
                <ListItemButton selected={submenu.path === pathname}>
                  <ListItemText primary={submenu.title} />
                </ListItemButton>
              </Link>
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

const MainLayout = () => {
  return (
    <Box display="flex" minHeight="100vh">
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          {menus.map((menu) => (
            <Menu key={menu.title} menu={menu} />
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        flexGrow={1}
        display="flex"
        alignItems="stretch"
        flexDirection="column"
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
