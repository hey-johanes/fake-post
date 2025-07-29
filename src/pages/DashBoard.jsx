import { Outlet } from 'react-router-dom';
import Footer from '../component/footer/Footer';
import Header from '../component/navbar/Navbar';

function DashBoard() {
  return (
    <div>
      <Header />
      <main className="container py-3">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default DashBoard;
