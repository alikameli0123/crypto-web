import style from './../../styles/Dashboard.module.css';
import Router from 'next/router';
import React,{useEffect} from 'react';

const DashboardPage = () => {
    useEffect(()=>{
        Router.push('/dashboard/panel');
    },[])
    return (
        <div className={`container-fluid ${style.dashboard_container}`}>
        </div>
    )
}

export default DashboardPage;