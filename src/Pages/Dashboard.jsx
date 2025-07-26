import {Navbar} from '../Components/Navbar';
import { WelcomeBanner } from '../Components/WelcomeBanner';
import { SearchBar } from '../Components/Searchbar';
import { DashboardCards } from '../Components/DashboardCards';
import { Footer } from '../Components/Footer';

export default function Dashboard() {
  return (
    <div className="main-container min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <Navbar />

      <main className="flex-grow dark:bg-neutral-900 dark:text-white">
        <section aria-labelledby="welcome-heading">
          <WelcomeBanner />
        </section>
        <div className='px-4 sm:px-6 lg:px-8'>
          <section aria-label="Search" className="mt-6">
            <SearchBar />
          </section>
          <DashboardCards />
        </div>
      </main>

      <Footer />
    </div>
  );
}
