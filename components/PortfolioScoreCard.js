export default function PortfolioScoreCard({ score }) {
  let status = "Weak";
  if (score >= 85) status = "Strong";
  else if (score >= 70) status = "Moderate";

  return (
    <div className="bg-white shadow rounded p-4">
      <h2 className="text-lg font-bold mb-2">Portfolio Health Score</h2>
      <p className="text-2xl">{score} / 100</p>
      <p className="text-sm text-gray-500">{status}</p>
    </div>
  );
}
