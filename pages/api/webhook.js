import Stripe from "stripe";
import { buffer } from "micro";

export const config = {
  api: {
    bodyParser: false,
  },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  const sig = req.headers["stripe-signature"];
  const buf = await buffer(req);

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      buf,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("Webhook error:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // ✅ PAGAMENTO CONFIRMADO
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    const customerEmail = session.customer_email;

    console.log("Pagamento confirmado para:", customerEmail);

    // 👉 AQUI você libera o acesso
    // Exemplos:
    // - salvar no banco
    // - marcar usuário como PRO
    // - liberar dashboard completo
  }

  res.json({ received: true });
}
