export default function ScenarioCard({ scenario }) {
  return (
    <div className="bg-white shadow rounded p-4">
      <h2 className="text-lg font-bold mb-2">Scenario Sensitivity</h2>
      <ul>
        <li>Down market: {scenario.down}</li>
        <li>Sideways: {scenario.sideways}</li>
        <li>Growth: {scenario.growth}</li>
      </ul>
    </div>
  );
}
