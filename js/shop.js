document.addEventListener('DOMContentLoaded', function() {
    const donationOpportunities = [
        { name: "Clean Water Initiative", description: "Support access to clean and safe drinking water for communities in need.", goal: "$10,000" },
        { name: "Renewable Energy Fund", description: "Invest in renewable energy projects to reduce carbon emissions.", goal: "$20,000" },
        { name: "Sustainable Agriculture Program", description: "Promote sustainable farming practices and food security.", goal: "$15,000" }
        // Add more donation opportunities as needed
    ];

    const donationOpportunitiesContainer = document.getElementById('donation-opportunities');

    donationOpportunities.forEach(opportunity => {
        const opportunityCard = document.createElement('div');
        opportunityCard.classList.add('donation-opportunity');
        opportunityCard.innerHTML = `
            <h3>${opportunity.name}</h3>
            <p>${opportunity.description}</p>
            <p>Goal: ${opportunity.goal}</p>
            <button class="donate-button">Donate</button>
        `;
        donationOpportunitiesContainer.appendChild(opportunityCard);
    });
});
