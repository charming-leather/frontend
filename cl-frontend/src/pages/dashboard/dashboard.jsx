import Header from "../../components/header/header.jsx";
import Layout from "../../components/layout/layout.jsx";
import {Routes, Route} from "react-router-dom";
import Laybys from "../laybys/laybys.jsx";
import Customers from "../customers/customers.jsx";

const Dashboard = () => {
    return (
        <>
            <Header />
            <Layout>
                <Routes>
                    <Route path="/" element={<h1>Dashboard page</h1>} />
                    <Route path="laybys" element={<Laybys />} />
                    <Route path="customers" element={<Customers />} />
                </Routes>
            </Layout>
        </>
    )
}

export default Dashboard;