import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req) {
    try {
        const body = await req.json();
        const { country, state } = body;

        console.log("➡️ country:", country);
        console.log("➡️ state:", state);

        const response = await axios.post(
            "https://countriesnow.space/api/v0.1/countries/state/cities",
            { country, state },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        console.log("✅ Sucesso:", response.data);

        return NextResponse.json(response.data.data);
    } catch (error) {
        console.error("❌ Erro no backend route.js:", error.message);
        console.error("📦 Resposta completa:", error.response?.data || error);

        return NextResponse.json([], { status: 500 });
    }
}
