import Grainient from "@/components/Grainient";
import TiltedCard from "@/components/TiltedCard";

export default function Home() {
  return (
    <main className="page-frame">
      <div className="page-background">
        <Grainient
          color1="#FF9FFC"
          color2="#5227FF"
          color3="#B497CF"
          timeSpeed={0.25}
          colorBalance={0.0}
          warpStrength={1.0}
          warpFrequency={5.0}
          warpSpeed={2.0}
          warpAmplitude={50.0}
          blendAngle={0.0}
          blendSoftness={0.05}
          rotationAmount={500.0}
          noiseScale={2.0}
          grainAmount={0.1}
          grainScale={2.0}
          grainAnimated={false}
          contrast={1.5}
          gamma={1.0}
          saturation={1.0}
          centerX={0.0}
          centerY={0.0}
          zoom={0.9}
        />
      </div>
      <div className="card-frame">
        <TiltedCard
          containerWidth="100%"
          containerHeight="100%"
          imageWidth="100%"
          imageHeight="100%"
          rotateAmplitude={6}
          scaleOnHover={1.03}
          showMobileWarning={false}
          showTooltip={false}
        />
      </div>
    </main>
  );
}
