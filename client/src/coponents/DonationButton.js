

import React, { useState } from 'react';

const DonationButton = () => {
  const [donationAmount, setDonationAmount] = useState(100);
  const [isDonating, setIsDonating] = useState(false);

  const handleDonate = () => {
    setIsDonating(true);
    setTimeout(() => {
      alert(`thanks for donation${donationAmount}`);
      setIsDonating(false);
    }, 1000);
  };

  return (
    <div className="donation-widget">
      <div className="organization-name">GiveDirectly</div>
      
      <div className="donation-amount-container">
        <span className="currency-symbol">$</span>
        <input
          type="number"
          className="donation-amount"
          value={donationAmount}
          onChange={(e) => setDonationAmount(parseInt(e.target.value) || 0)}
          min="1"
        />
      </div>
      
      <button 
        className={`donate-button ${isDonating ? 'donating' : ''}`}
        onClick={handleDonate}
        disabled={isDonating}
      >
        {isDonating ? 'جاري التبرع...' : 'DONATE'}
      </button>
    </div>
  );
};

export default DonationButton;
