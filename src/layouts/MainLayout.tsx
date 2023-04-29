import {
  Collapse,
  Container,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Outlet } from 'react-router';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

const drawerWidth = 240;

const menus = [
  {
    title: '맵, 가게 정보관리',
    icon: <MapOutlinedIcon />,
    submenus: [
      {
        title: '부스 요약 소개',
        path: '/map/summary',
      },
      {
        title: '부스 정보 정리',
        path: '/map/booth',
      },
      {
        title: '부스 상세 설명',
        path: '/map/detail',
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

  return (
    <>
      <ListItemButton onClick={() => setOpen((prev) => !prev)}>
        <ListItemIcon>{menu.icon}</ListItemIcon>
        <ListItemText primary={menu.title} />
        {menu.submenus && <>{open ? <ExpandLess /> : <ExpandMore />}</>}
      </ListItemButton>
      {menu.submenus && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div">
            {menu.submenus.map((submenu) => (
              <ListItemButton key={submenu.path}>
                <ListItemText primary={submenu.title} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

const MainLayout = () => {
  return (
    <Container>
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
      <Outlet />
    </Container>
  );
};

export default MainLayout;
