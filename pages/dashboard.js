import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Header from "../components/Header";
import PortfolioScoreCard from "../components/PortfolioScoreCard";
import RiskConcentrationCard from "../components/RiskConcentrationCard";
import GoalAlignmentCard from "../components/GoalAlignmentCard";
import ScenarioCard from "../components/ScenarioCard";
import NextActionCard from "../components/NextActionCard";
import FormFinancial from "../components/FormFinancial";

export default function Dashboard() {
  const router = useRouter();

  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 🔐 PROTEÇÃO DE LOGIN
  useEffect(() => {
    const email = localStorage.getItem("user_email");
    if (!email) {
      router.push("/login");
    }
  }, [router]);

  // 🔎 SUBMISSÃO PARA A API
  const handleSubmit = async (data) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("API error");
      }

      const result = await response.json();
      setAnalysis(result.analysis);

    } catch (err) {
      setError("Failed to analyze portfolio.");
      console.error(err);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Financial Decision AI™
          </h1>

          <p className="text-gray-500 mt-2">
            Advanced portfolio analysis for smarter financial decisions.
          </p>

          <div className="mt-8">
            <FormFinancial onSubmit={handleSubmit} />
          </div>

          {loading && (
            <p className="mt-6 text-blue-600 font-medium">
              Analyzing your portfolio...
            </p>
          )}

          {error && (
            <p className="mt-6 text-red-500 font-medium">
              {error}
            </p>
          )}

          {analysis && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <PortfolioScoreCard score={analysis.portfolioScore} />
              <RiskConcentrationCard risks={analysis.risks} />
              <GoalAlignmentCard alignment={analysis.goalAlignment} />
              <ScenarioCard scenario={analysis.scenario} />
              <NextActionCard action={analysis.nextAction} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
