
import { useState } from "react";
import Image from "next/image";

const bodyTypes = [
  {
    name: "Sunshine",
    message: "Radiant and full of warmth!",
    shape: "🌞",
    styleTips: "Flowy dresses, A-line skirts, and bright colors highlight your beautiful curves. Embrace bold prints and comfy fits!",
    image: "/avatars/sunshine.png"
  },
  {
    name: "Grace",
    message: "Elegant and poised.",
    shape: "💃",
    styleTips: "Wrap dresses, high-waisted pants, and soft fabrics enhance your natural elegance. Go for soft pastels or florals.",
    image: "/avatars/grace.png"
  },
  {
    name: "Power",
    message: "Strong and confident!",
    shape: "🏋️‍♀️",
    styleTips: "Structured jackets, bold colors, and fitted jeans reflect your power. Try statement accessories and sleek cuts.",
    image: "/avatars/power.png"
  },
  {
    name: "Glow",
    message: "Bright, bold, and beautiful.",
    shape: "🌟",
    styleTips: "Layered looks, comfy oversized tops, and colorful sneakers match your vibrant personality. Mix patterns with confidence!",
    image: "/avatars/glow.png"
  },
];

function getBodyType(bust, waist, hips) {
  if (bust === waist && waist === hips) return bodyTypes[3];
  if (hips > bust && hips > waist) return bodyTypes[0];
  if (bust > hips) return bodyTypes[2];
  return bodyTypes[1];
}

export default function Home() {
  const [bust, setBust] = useState(0);
  const [waist, setWaist] = useState(0);
  const [hips, setHips] = useState(0);
  const [result, setResult] = useState(null);

  const handleSubmit = () => {
    const bodyType = getBodyType(bust, waist, hips);
    setResult(bodyType);
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
      <h1 style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>
        You, Beautifully You 💖
      </h1>
      <div style={{ marginTop: 20 }}>
        <input
          type="number"
          placeholder="Bust (in cm)"
          onChange={(e) => setBust(Number(e.target.value))}
          style={{ width: '100%', padding: 8, marginBottom: 10 }}
        />
        <input
          type="number"
          placeholder="Waist (in cm)"
          onChange={(e) => setWaist(Number(e.target.value))}
          style={{ width: '100%', padding: 8, marginBottom: 10 }}
        />
        <input
          type="number"
          placeholder="Hips (in cm)"
          onChange={(e) => setHips(Number(e.target.value))}
          style={{ width: '100%', padding: 8, marginBottom: 10 }}
        />
        <button onClick={handleSubmit} style={{ width: '100%', padding: 10, backgroundColor: '#f472b6', color: 'white', border: 'none', borderRadius: 5 }}>
          See Your Body Type
        </button>
      </div>

      {result && (
        <div style={{ marginTop: 30, textAlign: 'center' }}>
          <Image
            src={result.image}
            alt={`${result.name} avatar`}
            width={200}
            height={200}
          />
          <div style={{ fontSize: 32, marginTop: 10 }}>{result.shape}</div>
          <h2 style={{ fontSize: 20, fontWeight: 'bold' }}>{result.name}</h2>
          <p>{result.message}</p>
          <p style={{ fontStyle: 'italic', marginTop: 10 }}>Style Tip: {result.styleTips}</p>
        </div>
      )}
    </div>
  );
}
