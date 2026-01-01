export default function Cancel() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#020617",
      color: "#fff",
      textAlign: "center",
      padding: "40px"
    }}>
      <div>
        <h1>Pagamento cancelado</h1>
        <p style={{ marginTop: 20 }}>
          Nenhuma cobrança foi realizada.
        </p>

        <a
          href="/dashboard"
          style={{
            display: "inline-block",
            marginTop: "30px",
            padding: "12px 24px",
            background: "#6366f1",
            color: "#fff",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          Voltar ao Dashboard
        </a>
      </div>
    </div>
  );
}
