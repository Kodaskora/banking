import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react';

const Home = () => {
  const loggedIn = {
    firstName: 'Tomas',
    lastName: 'Gonzalez',
    email: 'kodas@gmail.com',
  };

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type='greeting'
            title='Welcome'
            user={loggedIn?.firstName || 'Guest'}
            subtext='Access and manage your account and transactions efficienty.'
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        Recent Transactions
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 200.5 }, { currentBalance: 4500.85 }]}
      />
    </section>
  );
};

export default Home;
