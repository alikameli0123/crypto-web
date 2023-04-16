import Image from 'next/image';
import Link from 'next/link';
import { Navbar, Nav } from 'react-bootstrap';
import style from './Navbar.module.css'
import Data from './../../Api/Data';
import Cookie from '@/src/Api/Cookie';
import Router from 'next/router';

const NavbarComponent = () => {
    const signOut = (e) => {
        e.preventDefault();
        Cookie.deleteCookie('token');
        Router.push('/login')
    }
    return (
        <>
            <div className={style.navbar_container}>
                <div className={style.navbar}>
                    <div className="container-fluid">
                        <Navbar expand={`xl ${style.navbar_nav}`}>
                            <Navbar.Toggle aria-controls="GG-Header" className={style.navbar_toggler} />
                            <div className={style.userInfo}>
                                <span className={style.bell}>
                                    <div className={style.notif}></div>
                                    <Image src='/assets/dashboard/bell.svg' alt='user' width={24} height={24} />
                                </span>
                                <Image src='/assets/dashboard/user.svg' alt='user' width={47} height={47} />
                            </div>
                            <Navbar.Collapse id="GG-Header" className={style.navbar_collapse}>
                                <Nav className={`align-items-left d-block d-xl-none`}>
                                    {
                                        Data.getDashRoutes().map(route => (
                                            <Nav.Item key={route.path}>
                                                <Nav.Link
                                                    eventKey="7"
                                                    href={`/dashboard/${route.path}`}
                                                    className={style.disabled}
                                                    onClick={route.path == 'signout' && signOut}
                                                >
                                                    {route.name}
                                                    <span className={style.linkUnderline}></span>
                                                </Nav.Link>
                                            </Nav.Item>
                                        ))
                                    }
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavbarComponent;