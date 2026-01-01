export default function NextActionCard({ action }) {

  const startCheckout = async () => {
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "" // opcional
      }),
    });

    const data = await response.json();
    window.location.href = data.url;
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold text-gray-800">
          Próxima ação recomendada
        </h3>

        <p className="mt-2 text-gray-600">
          {action || "Desbloqueie a análise completa com a Financial Decision AI™"}
        </p>
      </div>

      <button
        onClick={startCheckout}
        className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg transition"
      >
        Assinar agora
      </button>
    </div>
  );
}
