export default function Success() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#0f172a",
      color: "#fff",
      textAlign: "center",
      padding: "40px"
    }}>
      <div>
        <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>
          ✅ Pagamento confirmado!
        </h1>

        <p style={{ fontSize: "18px", marginBottom: "30px", maxWidth: "500px" }}>
          Seu pagamento foi processado com sucesso.
          Agora você já pode acessar o Financial Decision AI™.
        </p>

        <a
          href="/dashboard"
          style={{
            background: "#22c55e",
            color: "#000",
            padding: "14px 28px",
            borderRadius: "8px",
            fontWeight: "bold",
            textDecoration: "none",
            fontSize: "16px"
          }}
        >
          Acessar Dashboard
        </a>
      </div>
    </div>
  );
}
