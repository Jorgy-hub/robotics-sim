'use client';

import { useEffect, useRef, useState } from 'react';

interface FieldProps {
    value: string;
}

interface MousePosition {
    x: number;
    y: number;
}

const fieldWidth = 700;
const fieldHeight = 400;

const robotRadius = fieldWidth / 15;
const ballRadius = fieldWidth / 30;

let robotX = fieldWidth / 7;
let robotY = fieldHeight / 5;
let lastTimestamp = 0;

let A = 100;
let B = 100;
let C = 100;
let D = 100;


export default function Field(props: FieldProps) {
    const value = { props };
    const canvasRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: fieldWidth / 2, y: fieldHeight / 2 });

    const updateMousePosition = (e: { clientX: number; clientY: number; }) => {
        let rect = canvasRef.current.getBoundingClientRect();
        setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }

    const draw = () => {
        console.log(mousePosition);
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
        ctx.arc(robotX + 50, robotY, robotRadius / 2, 0, Math.PI * 2);
        ctx.fillStyle = "#00c255";
        ctx.fill();
        ctx.closePath();

        // Draw Ball
        ctx.beginPath();
        ctx.arc(mousePosition.x, mousePosition.y, ballRadius, 0, 2 * Math.PI);
        ctx.fillStyle = "#505050";
        ctx.fill();
        ctx.closePath();
    }

    const animate = () => {
        const timestamp = Date.now();
        if (timestamp > lastTimestamp + 10) {
            let deltaTime = (timestamp - lastTimestamp) / 0.1;
            let robotXAdd = (A + B + C + D) / deltaTime;
            let robotYAdd = (A - B - C + D) / deltaTime;

            robotXAdd = isNaN(robotXAdd) ? 0 : robotXAdd;
            robotYAdd = isNaN(robotYAdd) ? 0 : robotYAdd;
            robotX += robotXAdd;
            robotY += robotYAdd;

            robotX = robotX >= (fieldWidth - 50) ? fieldWidth - 50 : robotX <= 50 ? 50 : robotX;
            robotY = robotY >= (fieldHeight - 50) ? fieldHeight - 50 : robotY <= 50 ? 50 : robotY;
            draw();
        }
        lastTimestamp = timestamp;
        requestAnimationFrame(animate);
    }

    useEffect(() => {
        requestAnimationFrame(animate);
    }, [mousePosition]);

    return <canvas ref={canvasRef} width={fieldWidth} height={fieldHeight} className="cursor-none" onMouseMove={updateMousePosition}></canvas>
}