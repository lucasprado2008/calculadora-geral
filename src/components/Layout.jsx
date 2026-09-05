import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Layout() {
    return (
        <div>
            {/* Navbar */}
            <Navbar />

            {/* Content */}
            <main>
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Layout;