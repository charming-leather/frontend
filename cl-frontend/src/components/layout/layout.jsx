import './layout.css'
import {BarChart3, CreditCard, Feather, FileText, Plus, Users} from "lucide-react";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

const Layout = ({children}) => {
    const [activeMenu, setActiveMenu] = useState('Dashboard');

    const navigate = useNavigate();
    const navigateTo = (item) => {
        setActiveMenu(item.name)
        navigate(item.url)
    }

    const styles = {
        menuItem: {
            display: 'flex',
            alignItems: 'center',
            padding: '12px 24px',
            cursor: 'pointer',
            color: '#374151',
            transition: 'all 0.2s ease'
        },
        menuItemActive: {
            display: 'flex',
            alignItems: 'center',
            padding: '12px 24px',
            cursor: 'pointer',
            backgroundColor: '#fed7aa',
            borderRight: '4px solid #ea580c',
            color: '#9a3412',
            transition: 'all 0.2s ease'
        },
    }

    const sidebarItems = [
        {
            name: 'Dashboard',
            url: '/',
            icon: BarChart3,
            active: true
        },
        {
            name: 'Laybys',
            url: '/dashboard/laybys',
            icon: FileText
        },
        {
            name: 'Add Layby',
            url: '/dashboard/addLayby',
            icon: Plus
        },
        { name: 'Payments', url: '/dashboard/payments', icon: CreditCard },
        { name: 'Customers', url: '/dashboard/customers', icon: Users },
        { name: 'Features', url: '/dashboard/features', icon: Feather },
    ];

    return (
        <>
            <div className="navbar">
                <div>
                    {/* Menu Items */}
                    <nav>
                        {sidebarItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={item.name}
                                    style={item.name === activeMenu ? styles.menuItemActive : styles.menuItem}
                                    onClick={() => navigateTo(item)}
                                >
                                    <Icon style={styles.menuIcon}/>
                                    <span style={styles.menuText}>{item.name}</span>
                                </div>
                            );
                        })}
                    </nav>
                </div>
            </div>
            <div className="main-content">{children}</div>
        </>
    )
}

export default Layout
