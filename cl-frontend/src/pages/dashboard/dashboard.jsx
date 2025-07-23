import React, { useState } from 'react';
import { Search, BarChart3, FileText, Plus, CreditCard, Users, Clock, CheckCircle, AlertCircle, HandCoins } from 'lucide-react';

const Dashboard = () => {
  const styles = {
    dashboard: {
      display: 'flex',
      height: '100vh',
      backgroundColor: '#fef3c7'
    },
    sidebar: {
      width: '256px',
      backgroundColor: '#fde68a',
      borderRight: '1px solid #fcd34d'
    },
    companyHeader: {
      padding: '24px',
      borderBottom: '1px solid #fcd34d'
    },
    companyName: {
      fontSize: '20px',
      fontWeight: 'bold',
      margin: '0'
    },
    charming: {
      color: '#ea580c'
    },
    leather: {
      color: '#4b5563'
    },
    navMenu: {
      marginTop: '24px'
    },
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
    menuIcon: {
      width: '20px',
      height: '20px',
      marginRight: '12px'
    },
    menuText: {
      fontWeight: '500'
    },
    mainContent: {
      flex: '1',
      overflow: 'auto'
    },
    header: {
      backgroundColor: '#fde68a',
      padding: '24px',
      borderBottom: '1px solid #fcd34d'
    },
    headerContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    topNav: {
      display: 'flex',
      gap: '32px'
    },
    navLink: {
      color: '#374151',
      fontWeight: '500',
      textDecoration: 'none',
      transition: 'color 0.2s ease'
    },
    searchContainer: {
      position: 'relative'
    },
    searchInput: {
      padding: '8px 16px',
      paddingRight: '40px',
      backgroundColor: 'white',
      border: '1px solid #d1d5db',
      borderRadius: '9999px',
      outline: 'none',
      transition: 'all 0.2s ease'
    },
    searchIcon: {
      position: 'absolute',
      right: '12px',
      top: '10px',
      width: '20px',
      height: '20px',
      color: '#9ca3af'
    },
    dashboardContent: {
      padding: '32px'
    },
    welcomeSection: {
      textAlign: 'center',
      marginBottom: '32px'
    },
    welcomeTitle: {
      fontSize: '30px',
      fontWeight: 'bold',
      color: '#9a3412',
      margin: '0 0 8px 0'
    },
    welcomeSubtitle: {
      fontSize: '20px',
      color: '#c2410c',
      margin: '0'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '24px',
      marginBottom: '32px'
    },
    statCard: {
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      padding: '24px'
    },
    statHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '16px'
    },
    statTitle: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#1f2937',
      margin: '0'
    },
    toggleSwitch: {
      width: '48px',
      height: '24px',
      backgroundColor: '#22c55e',
      borderRadius: '12px',
      position: 'relative'
    },
    toggleKnob: {
      width: '20px',
      height: '20px',
      backgroundColor: 'white',
      borderRadius: '50%',
      position: 'absolute',
      right: '2px',
      top: '2px'
    },
    statIcon: {
      width: '32px',
      height: '32px'
    },
    statNumber: {
      fontSize: '36px',
      fontWeight: 'bold',
      color: '#111827',
      margin: '0'
    },
    contentGrid: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: '32px'
    },
    sectionTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#1f2937',
      margin: '0 0 16px 0'
    },
    tableContainer: {
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden'
    },
    dataTable: {
      width: '100%',
      borderCollapse: 'collapse'
    },
    tableHead: {
      backgroundColor: '#fef3c7'
    },
    tableTh: {
      padding: '12px 16px',
      textAlign: 'left',
      fontWeight: '600',
      color: '#374151'
    },
    tableTd: {
      padding: '12px 16px',
      color: '#1f2937'
    },
    evenRow: {
      backgroundColor: '#f9fafb'
    },
    oddRow: {
      backgroundColor: 'white'
    },
    statusBadge: {
      padding: '4px 8px',
      borderRadius: '9999px',
      fontSize: '12px',
      fontWeight: '500'
    },
    statusActive: {
      backgroundColor: '#dcfce7',
      color: '#166534'
    },
    statusCompleted: {
      backgroundColor: '#dbeafe',
      color: '#1e40af'
    },
    rightColumn: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'flex-end'
    },
    addLaybyBtn: {
      backgroundColor: '#ea580c',
      color: 'white',
      fontWeight: '600',
      padding: '12px 24px',
      border: 'none',
      borderRadius: '9999px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      cursor: 'pointer',
      transition: 'background-color 0.2s ease'
    },
    btnIcon: {
      width: '24px',
      height: '24px',
      backgroundColor: '#9a3412',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    plusIcon: {
      width: '16px',
      height: '16px',
      color: 'white'
    }
  };
  const [activeMenu, setActiveMenu] = useState('Dashboard');

  const sidebarItems = [
    { name: 'Dashboard', icon: BarChart3, active: true },
    { name: 'Laybys', icon: FileText },
    { name: 'Add Layby', icon: Plus },
    { name: 'Payments', icon: CreditCard },
    { name: 'Customers', icon: Users }
  ];

  const recentLaybys = [
    { customer: 'Lina Wong', product: 'Bag MOD1', total: 'R2000', paid: 'R1800', balance: 'R200', status: 'Active' },
    { customer: 'Larry Smith', product: 'Jacket CO100', total: 'R3000', paid: 'R1000', balance: 'R2000', status: 'Active' },
    { customer: 'Zayn Khan', product: 'Vellies Men', total: 'R1500', paid: 'R1500', balance: 'R0', status: 'Completed' }
  ];

  const upcomingPayments = [
    { customer: 'Sasha Willow', dueDate: 'Jun 25, 2025', balance: 'R400' },
    { customer: 'Luke Ross', dueDate: 'Jun 27, 2025', balance: 'R300' }
  ];

  return (
    <div style={styles.dashboard}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        {/* Company Name */}
        <div style={styles.companyHeader}>
          <h1 style={styles.companyName}>
            <span style={styles.charming}>CHARMING</span>
            <span style={styles.leather}> LEATHER</span>
          </h1>
        </div>

        {/* Menu Items */}
        <nav style={styles.navMenu}>
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                style={item.name === activeMenu ? styles.menuItemActive : styles.menuItem}
                onClick={() => setActiveMenu(item.name)}
              >
                <Icon style={styles.menuIcon} />
                <span style={styles.menuText}>{item.name}</span>
              </div>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.headerContent}>
            <nav style={styles.topNav}>
              <a href="#" style={styles.navLink}>LAY BY</a>
              <a href="#" style={styles.navLink}>ORDERS</a>
              <a href="#" style={styles.navLink}>STOCK</a>
            </nav>
            
            <div style={styles.searchContainer}>
              <input
                type="text"
                placeholder="Search"
                style={styles.searchInput}
              />
              <Search style={styles.searchIcon} />
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div style={styles.dashboardContent}>
          {/* Welcome Message */}
          <div style={styles.welcomeSection}>
            <h2 style={styles.welcomeTitle}>Welcome back, Aneesah!</h2>
            <p style={styles.welcomeSubtitle}>Here's what's happening with your laybys.</p>
          </div>

          {/* Stats Cards */}
          <div style={styles.statsGrid}>
            <div style={styles.statCard}>
              <div style={styles.statHeader}>
                <h3 style={styles.statTitle}>Active</h3>
                <div style={styles.toggleSwitch}>
                  <div style={styles.toggleKnob}></div>
                </div>
              </div>
              <p style={styles.statNumber}>75</p>
            </div>

            <div style={styles.statCard}>
              <div style={styles.statHeader}>
                <h3 style={styles.statTitle}>Completed</h3>
                <CheckCircle style={{...styles.statIcon, color: '#f97316'}} />
              </div>
              <p style={styles.statNumber}>51</p>
            </div>

            <div style={styles.statCard}>
              <div style={styles.statHeader}>
                <h3 style={styles.statTitle}>Overdue</h3>
                <Clock style={{...styles.statIcon, color: '#ef4444'}} />
              </div>
              <p style={styles.statNumber}>7</p>
            </div>

            <div style={styles.statCard}>
              <div style={styles.statHeader}>
                <h3 style={styles.statTitle}>Total Collected</h3>
                <HandCoins style={{...styles.statIcon, color: '#f97316'}} />
              </div>
              <p style={styles.statNumber}>40</p>
            </div>
          </div>

          <div style={styles.contentGrid}>
            {/* Recent Laybys Table */}
            <div>
              <h3 style={styles.sectionTitle}>Recent Laybys</h3>
              <div style={styles.tableContainer}>
                <table style={styles.dataTable}>
                  <thead style={styles.tableHead}>
                    <tr>
                      <th style={styles.tableTh}>Customer</th>
                      <th style={styles.tableTh}>Product</th>
                      <th style={styles.tableTh}>Total</th>
                      <th style={styles.tableTh}>Paid</th>
                      <th style={styles.tableTh}>Balance</th>
                      <th style={styles.tableTh}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentLaybys.map((layby, index) => (
                      <tr key={index} style={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
                        <td style={styles.tableTd}>{layby.customer}</td>
                        <td style={styles.tableTd}>{layby.product}</td>
                        <td style={styles.tableTd}>{layby.total}</td>
                        <td style={styles.tableTd}>{layby.paid}</td>
                        <td style={styles.tableTd}>{layby.balance}</td>
                        <td style={styles.tableTd}>
                          <span style={{
                            ...styles.statusBadge,
                            ...(layby.status === 'Active' ? styles.statusActive : styles.statusCompleted)
                          }}>
                            {layby.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right Column */}
            <div style={styles.rightColumn}>
              {/* Upcoming Payments */}
              <div>
                <h3 style={styles.sectionTitle}>Upcoming Payments</h3>
                <div style={styles.tableContainer}>
                  <table style={styles.dataTable}>
                    <thead style={styles.tableHead}>
                      <tr>
                        <th style={styles.tableTh}>Customer</th>
                        <th style={styles.tableTh}>Due Date</th>
                        <th style={styles.tableTh}>Balance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {upcomingPayments.map((payment, index) => (
                        <tr key={index} style={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
                          <td style={styles.tableTd}>{payment.customer}</td>
                          <td style={styles.tableTd}>{payment.dueDate}</td>
                          <td style={styles.tableTd}>{payment.balance}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Add New Layby Button */}
              <div style={styles.buttonContainer}>
                <button style={styles.addLaybyBtn}>
                  <div style={styles.btnIcon}>
                    <Plus style={styles.plusIcon} />
                  </div>
                  <span>Add New Layby</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;