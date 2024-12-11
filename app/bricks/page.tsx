'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Brick {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  alive: boolean;
}

interface Ball {
  x: number;
  y: number;
  dx: number;
  dy: number;
  radius: number;
}

const BrickBreaker = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [paddle, setPaddle] = useState({ x: 0, width: 100, height: 10 });
  const [isDragging, setIsDragging] = useState(false);
  const [ball, setBall] = useState<Ball>({ x: 0, y: 0, dx: 4, dy: -4, radius: 8 });
  const [bricks, setBricks] = useState<Brick[]>([]);

  const CANVAS_WIDTH = 800;
  const CANVAS_HEIGHT = 600;
  const BRICK_ROWS = 5;
  const BRICK_COLS = 8;
  const BRICK_PADDING = 10;
  const COLORS = ['#60A5FA', '#818CF8', '#A78BFA', '#C084FC', '#F472B6'];

  const initGame = () => {
    const newBricks: Brick[] = [];
    const brickWidth = (CANVAS_WIDTH - (BRICK_COLS + 1) * BRICK_PADDING) / BRICK_COLS;
    const brickHeight = 30;

    for (let i = 0; i < BRICK_ROWS; i++) {
      for (let j = 0; j < BRICK_COLS; j++) {
        newBricks.push({
          x: j * (brickWidth + BRICK_PADDING) + BRICK_PADDING,
          y: i * (brickHeight + BRICK_PADDING) + BRICK_PADDING,
          width: brickWidth,
          height: brickHeight,
          color: COLORS[i % COLORS.length],
          alive: true,
        });
      }
    }

    setBricks(newBricks);
    setPaddle({ ...paddle, x: CANVAS_WIDTH / 2 - paddle.width / 2 });
    setBall({
      ...ball,
      x: CANVAS_WIDTH / 2,
      y: CANVAS_HEIGHT - paddle.height - 10,
    });
    setGameOver(false);
    setGameWon(false);
  };

  const handleStart = () => {
    initGame();
    setGameStarted(true);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    if (Math.abs(mouseX - paddle.x) < paddle.width) {
      setIsDragging(true);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDragging) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const newX = Math.max(0, Math.min(CANVAS_WIDTH - paddle.width, mouseX - paddle.width / 2));
    setPaddle({ ...paddle, x: newX });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const touchX = e.touches[0].clientX - rect.left;
    if (Math.abs(touchX - paddle.x) < paddle.width) {
      setIsDragging(true);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDragging) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const touchX = e.touches[0].clientX - rect.left;
    const newX = Math.max(0, Math.min(CANVAS_WIDTH - paddle.width, touchX - paddle.width / 2));
    setPaddle({ ...paddle, x: newX });
  };

  useEffect(() => {
    if (!gameStarted || gameOver || gameWon) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const gameLoop = () => {
      if (!gameStarted || gameOver || gameWon) return;

      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      // Draw bricks
      bricks.forEach((brick) => {
        if (brick.alive) {
          ctx.fillStyle = brick.color;
          ctx.fillRect(brick.x, brick.y, brick.width, brick.height);
        }
      });

      // Draw paddle
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(paddle.x, CANVAS_HEIGHT - paddle.height, paddle.width, paddle.height);

      // Draw ball
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.fill();
      ctx.closePath();

      // Ball collision with walls
      if (ball.x + ball.dx > CANVAS_WIDTH - ball.radius || ball.x + ball.dx < ball.radius) {
        ball.dx = -ball.dx;
      }
      if (ball.y + ball.dy < ball.radius) {
        ball.dy = -ball.dy;
      }

      // Ball collision with paddle
      if (
        ball.y + ball.dy > CANVAS_HEIGHT - paddle.height - ball.radius &&
        ball.x > paddle.x &&
        ball.x < paddle.x + paddle.width
      ) {
        ball.dy = -ball.dy;
      }

      // Ball collision with bricks
      bricks.forEach((brick) => {
        if (!brick.alive) return;
        if (
          ball.x > brick.x &&
          ball.x < brick.x + brick.width &&
          ball.y > brick.y &&
          ball.y < brick.y + brick.height
        ) {
          ball.dy = -ball.dy;
          brick.alive = false;
          if (bricks.every((b) => !b.alive)) {
            setGameWon(true);
          }
        }
      });

      // Game over condition
      if (ball.y + ball.dy > CANVAS_HEIGHT - ball.radius) {
        setGameOver(true);
        return;
      }

      // Update ball position
      ball.x += ball.dx;
      ball.y += ball.dy;
      setBall({ ...ball });

      requestAnimationFrame(gameLoop);
    };

    const animationId = requestAnimationFrame(gameLoop);
    return () => cancelAnimationFrame(animationId);
  }, [gameStarted, ball, paddle, bricks, gameOver, gameWon]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center p-8">
      <div className="relative backdrop-blur-lg bg-gray-900/70 p-8 rounded-2xl border border-gray-700/50 shadow-2xl">
        <h1 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
          Brick Breaker
        </h1>
        
        <canvas
          ref={canvasRef}
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          className="bg-gray-800/50 rounded-lg border border-gray-700/50"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
        />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {!gameStarted && (
            <button
              onClick={handleStart}
              className="px-8 py-4 bg-blue-500/80 hover:bg-blue-600/80 text-white rounded-lg font-bold text-xl transition-colors backdrop-blur-sm"
            >
              Start Game
            </button>
          )}
          {gameOver && (
            <div className="text-center">
              <h2 className="text-3xl font-bold text-red-400 mb-4">Game Over!</h2>
              <button
                onClick={handleStart}
                className="px-8 py-4 bg-blue-500/80 hover:bg-blue-600/80 text-white rounded-lg font-bold text-xl transition-colors backdrop-blur-sm"
              >
                Try Again
              </button>
            </div>
          )}
          {gameWon && (
            <div className="text-center">
              <h2 className="text-3xl font-bold text-green-400 mb-4">You Win!</h2>
              <button
                onClick={handleStart}
                className="px-8 py-4 bg-blue-500/80 hover:bg-blue-600/80 text-white rounded-lg font-bold text-xl transition-colors backdrop-blur-sm"
              >
                Play Again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrickBreaker;