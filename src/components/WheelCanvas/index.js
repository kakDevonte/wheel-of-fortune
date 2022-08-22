import React from 'react';
import { WheelCanvasStyle } from './styles';

const colors = ['#fc0', '#333'];

export const clamp = (min, max, val) => Math.min(Math.max(min, +val), max);

const drawWheel = (canvasRef, data) => {
  const QUANTITY = data.length;

  const canvas = canvasRef.current;
  if (canvas?.getContext('2d')) {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 500, 500);
    ctx.strokeStyle = 'transparent';
    ctx.lineWidth = 0;

    const arc = Math.PI / (QUANTITY / 2);
    const startAngle = 0;
    const outsideRadius = canvas.width / 2 - 10;
    const fontSize = canvas.width / 20;

    const clampedTextDistance = clamp(0, 100, 60);
    const textRadius = (outsideRadius * clampedTextDistance) / 100;

    const clampedInsideRadius = clamp(0, 100, 1);
    const insideRadius = (outsideRadius * clampedInsideRadius) / 100;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    ctx.font = `bold ${fontSize}px Helvetica, Arial`;

    for (let i = 0; i < data.length; i++) {
      const angle = startAngle + i * arc;
      ctx.fillStyle = colors[i % 2];

      ctx.beginPath();
      ctx.arc(centerX, centerY, outsideRadius, angle, angle + arc, false);
      ctx.arc(centerX, centerY, insideRadius, angle + arc, angle, true);
      ctx.stroke();
      ctx.fill();

      ctx.save();

      ctx.strokeStyle = 1 <= 0 ? 'transparent' : 1;
      ctx.lineWidth = 1;
      for (let j = 0; j < data.length; j++) {
        const radiusAngle = startAngle + j * arc;
        ctx.beginPath();
        ctx.moveTo(
          centerX + (insideRadius + 1) * Math.cos(radiusAngle),
          centerY + (insideRadius + 1) * Math.sin(radiusAngle)
        );
        ctx.lineTo(
          centerX + (outsideRadius - 1) * Math.cos(radiusAngle),
          centerY + (outsideRadius - 1) * Math.sin(radiusAngle)
        );
        ctx.closePath();
        ctx.stroke();
      }

      ctx.fillStyle = '#fff';

      const text = data[i].label;

      if (typeof text !== 'string') {
        ctx.translate(
          centerX + Math.cos(angle + arc / 2) * textRadius * 1.5,
          centerY + Math.sin(angle + arc / 2) * textRadius * 1.5
        );
      } else {
        ctx.translate(
          centerX + Math.cos(angle + arc / 2) * textRadius,
          centerY + Math.sin(angle + arc / 2) * textRadius
        );
      }

      const textRotationAngle =
        typeof text !== 'string'
          ? angle + arc / 2 + Math.PI / 2
          : angle + arc / 2;
      ctx.rotate(textRotationAngle);
      ctx.fillText(text, -ctx.measureText(text).width / 2, fontSize / 2.7);
      ctx.restore();
    }
  }
};

export const WheelCanvas = ({ width, height, data }) => {
  const canvasRef = React.useRef();

  React.useEffect(() => {
    drawWheel(canvasRef, data);
  }, [canvasRef, data]);

  return <WheelCanvasStyle ref={canvasRef} width={width} height={height} />;
};
