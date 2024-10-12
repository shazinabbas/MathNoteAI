import { useRef, useState } from "react";

export default function Home() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    
    const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    return (
        <canvas 
            ref= { canvasRef }
            id = 'canvas'
            className='absolute top-0 left-0 w-full h-full'
        />
    );

}