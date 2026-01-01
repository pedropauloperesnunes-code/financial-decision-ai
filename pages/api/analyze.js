import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const userScenario = req.body;

    const systemPrompt = `
You are a professional financial decision-support AI.

Your role is to analyze financial scenarios objectively, focusing on:
- Risk management
- Portfolio balance
- Goal alignment
- Scenario resilience

Do NOT provide financial advice.
Do NOT recommend specific assets.
Do NOT promise returns.

Use clear, structured, professional language.
Think like a financial analyst.
Your goal is to provide clarity, not predictions.
`;

    const userPrompt = `
Analyze the following financial scenario and return:

1. Portfolio health score (0–100)
2. Key risk factors
3. Alignment with stated goals
4. Scenario performance outlook
5. One clear next action to consider

Scenario:
${JSON.stringify(userScenario)}
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      temperature: 0.2,
    });

    res.status(200).json({
      analysis: JSON.parse(completion.choices[0].message.content),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Analysis failed" });
  }
}
