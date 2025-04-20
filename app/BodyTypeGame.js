"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
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

export default function BodyTypeGame() {
  const [bust, setBust] = useState(0);
  const [waist, setWaist] = useState(0);
  const [hips, setHips] = useState(0);
  const [result, setResult] = useState(null);
  const [useInches, setUseInches] = useState(false);

  const convertToCm = (value) => useInches ? value * 2.54 : value;

  const handleSubmit = () => {
    const bodyType = getBodyType(
      convertToCm(bust),
      convertToCm(waist),
      convertToCm(hips)
    );
    setResult(bodyType);
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">You, Beautifully You 💖</h1>

      <p className="text-center mb-6 text-base text-muted-foreground">
        Every body is a good body. This space is made for you to feel confident,
        celebrated, and understood. Let's discover how unique and beautiful you
        already are – just as you are. 💕
      </p>

      <div className="flex items-center justify-end mb-2">
        <span className="text-sm mr-2">Use Inches</span>
        <Switch checked={useInches} onCheckedChange={setUseInches} />
      </div>

      <Card className="mb-4">
        <CardContent className="space-y-4 pt-6">
          <Input
            type="number"
            placeholder={`Bust (in ${useInches ? "inches" : "cm"})`}
            onChange={(e) => setBust(Number(e.target.value))}
          />
          <Input
            type="number"
            placeholder={`Waist (in ${useInches ? "inches" : "cm"})`}
            onChange={(e) => setWaist(Number(e.target.value))}
          />
          <Input
            type="number"
            placeholder={`Hips (in ${useInches ? "inches" : "cm"})`}
            onChange={(e) => setHips(Number(e.target.value))}
          />
          <Button className="w-full" onClick={handleSubmit}>
            See Your Body Type
          </Button>
        </CardContent>
      </Card>

      {result && (
        <Card>
          <CardContent className="text-center pt-6">
            <Image
              src={result.image}
              alt={`${result.name} avatar`}
              width={200}
              height={200}
              className="mx-auto mb-4 rounded-xl shadow"
            />
            <div className="text-4xl mb-2">{result.shape}</div>
            <div className="text-xl font-semibold">{result.name}</div>
            <p className="text-base mt-2">{result.message}</p>
            <p className="text-sm mt-4 text-muted-foreground italic">
              Style Tip: {result.styleTips}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
