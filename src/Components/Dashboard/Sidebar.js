import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import style from './Sidebar.module.css'
import Data from './../../Api/Data';
import React from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faHouseChimneyWindow, faRightLeft, faWallet } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
  const router = useRouter()
  return (
    <div className={`w-100 ${style.sidebar_container}`}>
      <Navbar expand="lg" className={style.sidebar_nav}>
        <Navbar.Brand className={style.brand}>

        </Navbar.Brand>
        <div className={style.sidebar_logo}>
          <Image
            className=""
            alt="crypto logo"
            src='/assets/logo.svg'
            width={26}
            height={22}
          />
        </div>
        <p className={style.company_name}>نیوکوین اسپیس</p>
        <Navbar.Toggle aria-controls="GG-Header" />
        <Navbar.Collapse id="GG-Header" className={style.navbar_collapse}>
          <Nav className={style.sidebar_items} variant="pills"
            defaultActiveKey="/dashboard/panel"
            activeKey={router.asPath}
            >
            {
              Data.getDashRoutes().map((route, index) => (
                <Nav.Item key={route.path} className={style.nav_item}>
                  <Nav.Link
                  as={Link}
                    eventKey={`/dashboard/${route.path}`}
                    href={`/dashboard/${route.path}`}
                    className={style.nav_link}
                  >
                    <span className={style.sidebar_item}>{route.name}</span>
                    {
                      route.icon &&
                      <span>
                        <Image
                          src={route.icon}
                          alt={route.name}
                          width={20}
                          height={20}
                        />
                      </span>
                    }
                    <FontAwesomeIcon icon={route.font_awesome} />
                  </Nav.Link>
                </Nav.Item>
              ))
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Sidebar;