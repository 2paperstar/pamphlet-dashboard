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
import useAuth from '../hooks/useAuth';

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
    submenus: [
      {
        title: '이벤트 발행',
        path: '/event/publish/normal',
      },
      {
        title: '이벤트 참여 확인',
        path: '/event/check',
      },
      {
        title: '이벤트 추첨',
        path: '/event/ruffle',
      },
    ],
  },
  {
    title: '상품 관리',
    icon: <Inventory2OutlinedIcon />,
    submenus: [
      {
        title: '상품 업로드',
        path: '/product/management',
      },
      {
        title: '상품 목록 확인',
        path: '/product/analysis',
      },
      {
        title: '상품 페이지 수정',
        path: '/product/exhibition',
      },
    ],
  },
  {
    title: '통계 분석',
    icon: <InsightsOutlinedIcon />,
    path: '/analysis',
  },
  {
    title: '행사장',
    icon: <MapOutlinedIcon />,
    path: '/exhibition',
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
  const logout = useAuth((state) => state.logout);
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
          <ListItemButton onClick={logout}>
            <ListItemText primary="로그아웃" />
          </ListItemButton>
        </List>
      </Drawer>
      <Box
        component="main"
        flexGrow={1}
        p={1}
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
