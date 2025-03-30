import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import DonationButton from './DonationButton';
import campaignData from '../campaignData.json';

const CampaignPage = () => {
  const [campaign, setCampaign] = useState({
    title: "",
    description: "",
    goalAmount: 0,
    raisedAmount: 0,
    donationsCount: 0,
    imageUrl: ""
  });
  
  const [donationAmount, setDonationAmount] = useState(100);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const selectedCampaign = campaignData.campaigns[0]; 
      setCampaign(selectedCampaign);
      setLoading(false);
    }, 1000);
  }, []);

  const handleDonationChange = (e) => {
    setDonationAmount(parseInt(e.target.value) || 0);
  };

  const handleDonate = () => {
    alert(`thank you for donate ${donationAmount} `);
    setCampaign(prev => ({
      ...prev,
      raisedAmount: prev.raisedAmount + donationAmount,
      donationsCount: prev.donationsCount + 1
    }));
  };

  if (loading) {
    return <div className="loading">Loading</div>;
  }

  return (
    <div className="campaign-container">
      <div className="campaign-header">
        <h1>{campaign.title}</h1>
        <img src={campaign.imageUrl} alt={campaign.title} className="campaign-image" />
      </div>

      <div className="campaign-details">
        <div className="campaign-stats">
          <div className="progress-container">
            <ProgressBar 
              raised={campaign.raisedAmount} 
              goal={campaign.goalAmount} 
            />
            <div className="amounts">
              <span className="raised">amount : {campaign.raisedAmount.toLocaleString()}dolar</span>
              <span className="goal">goal: {campaign.goalAmount.toLocaleString()} dolar</span>
            </div>
          </div>

          <div className="donation-box">
            <h3>add your role</h3>
            <div className="donation-amount">
              <label htmlFor="donation-amount">amount (dolar):</label>
              <input
                type="number"
                id="donation-amount"
                value={donationAmount}
                onChange={handleDonationChange}
                min="10"
              />
            </div>
            <DonationButton 
              onClick={handleDonate}
              amount={donationAmount}
            />
          </div>
        </div>

        <div className="campaign-description">
          <h2>عن الحملة</h2>
          <p>{campaign.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CampaignPage;