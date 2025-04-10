'use client';

import { useEffect, useRef, useState } from 'react';

const fieldWidth = 700;
const fieldHeight = 400;

const robotRadius = fieldWidth/15;
const ballRadius = fieldWidth/30;

let robotX = fieldWidth / 7;
let robotY = fieldHeight / 5;

let A = 0;
let B = 0;
let C = 0;
let D = 0;

export default function Field() {
    const canvasRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: fieldWidth/2, y: fieldHeight/2 });

    const updateMousePosition = (e: { clientX: number; clientY: number; }) => setMousePosition({ x: e.clientX, y: e.clientY });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw Field
        ctx.fillStyle = "#00c255";
        ctx.fillRect(0, 0, fieldWidth, fieldHeight);

        // Draw Robot
        ctx.beginPath();
        ctx.arc(robotX, robotY, robotRadius, 0, 2 * Math.PI,);
        ctx.fillStyle = "#000000";
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(robotX + 50, robotY, robotRadius/2, 0, Math.PI * 2);
        ctx.fillStyle = "#00c255";
        ctx.fill();
        ctx.closePath();

        // Draw Ball
        ctx.beginPath();
        ctx.arc(mousePosition.x, mousePosition.y, ballRadius, 0, 2 * Math.PI);
        ctx.fillStyle = "#505050";
        ctx.fill();
        ctx.closePath();
    }, [mousePosition]);

    return <canvas ref={canvasRef} width={fieldWidth} height={fieldHeight} className="container" onMouseMove={updateMousePosition}></canvas>
}