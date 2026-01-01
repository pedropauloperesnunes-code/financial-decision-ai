import { useState } from "react";

export default function FormFinancial({ onSubmit }) {
  const [capital, setCapital] = useState("");
  const [risk, setRisk] = useState("Moderate");
  const [horizon, setHorizon] = useState("Medium");
  const [goals, setGoals] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ capital, risk, horizon, goals });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow rounded p-6 mb-6">
      <h2 className="text-xl font-bold mb-4">Financial Profile</h2>
      <input
        type="number"
        placeholder="Total Capital USD"
        value={capital}
        onChange={(e) => setCapital(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />
      <select value={risk} onChange={(e) => setRisk(e.target.value)} className="w-full p-2 border rounded mb-4">
        <option>Conservative</option>
        <option>Moderate</option>
        <option>Aggressive</option>
      </select>
      <select value={horizon} onChange={(e) => setHorizon(e.target.value)} className="w-full p-2 border rounded mb-4">
        <option>Short</option>
        <option>Medium</option>
        <option>Long</option>
      </select>
      <div className="mb-4">
        <label className="block mb-2">Goals:</label>
        <input
          type="text"
          placeholder="Capital growth, Passive income..."
          value={goals.join(", ")}
          onChange={(e) => setGoals(e.target.value.split(","))}
          className="w-full p-2 border rounded"
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">Analyze Portfolio</button>
    </form>
  );
}
