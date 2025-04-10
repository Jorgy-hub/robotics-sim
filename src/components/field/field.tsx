'use client';

import { useEffect, useRef, useState } from 'react';

let fieldWidth = 1080;
let fieldHeight = 720;
let fieldSeparation = 20;

let robotX = fieldWidth / 10;
let robotY = fieldHeight / 10;

let mouseX = 0;
let mouseY = 0;

let A = 0;
let B = 0;
let C = 0;
let D = 0;

export default function Field() {
    const canvasRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: fieldWidth/2, y: fieldHeight/2 });

    const updateMousePosition = (e: { clientX: any; clientY: any; }) => setMousePosition({ x: e.clientX, y: e.clientY });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const image = new Image();
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw Field
        ctx.fillStyle = "#00c255";
        ctx.fillRect(0, 0, fieldWidth, fieldHeight);

        // Draw Robot
        ctx.beginPath();
        ctx.arc(robotX, robotY, 50, 0, 2 * Math.PI,);
        ctx.fillStyle = "#000000";
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(robotX + 50, robotY, 25, 0, Math.PI * 2);
        ctx.fillStyle = "#00c255";
        ctx.fill();
        ctx.closePath();

        // Draw Ball
        ctx.beginPath();
        ctx.arc(mousePosition.x, mousePosition.y, 20, 0, 2 * Math.PI);
        ctx.fillStyle = "#505050";
        ctx.fill();
        ctx.closePath();
    }, [mousePosition]);

    return <canvas ref={canvasRef} width={600} height={400} className="container" onMouseMove={updateMousePosition}></canvas>
}