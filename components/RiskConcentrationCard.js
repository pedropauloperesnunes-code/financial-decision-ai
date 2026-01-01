export default function RiskConcentrationCard({ risks }) {
  return (
    <div className="bg-white shadow rounded p-4">
      <h2 className="text-lg font-bold mb-2">Risk Concentration</h2>
      <p>{risks}</p>
    </div>
  );
}
