import { randomInt } from "../number.ts";
import { distanceSquared, normalVec, type Position } from "../2d.ts";

const FRAME_INTERVAL = 1000 / 15;

export class AnimatedHero extends HTMLElement {
  // @ts-expect-error It is initialized
  private canvas: HTMLCanvasElement;
  // @ts-expect-error It is initialized
  private shapes: Shape[];
  private isInView: boolean = false;
  private rafId: number | null = null;
  private observer: IntersectionObserver | null = null;
  private lastFrameAt = 0;

  connectedCallback() {
    this.canvas = document.createElement("canvas");
    this.canvas.setAttribute("class", "absolute inset-0 -z-1 blur-[60px]");
    this.canvas.style.setProperty("background", "#F8FAF4");
    this.append(this.canvas);

    const rect = this.getBoundingClientRect();
    this.canvas.width = rect.width;
    this.canvas.height = rect.height;
    this.shapes = [];
    for (let i = 0; i < 2; i++) {
      this.shapes.push(new Shape(this.canvas));
    }
    this.canvas.animate(
      [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ],
      { duration: 1000 },
    );
    window.addEventListener("resize", this.resize);
    document.addEventListener("visibilitychange", this.onVisibilityChange);
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        this.isInView = entry.isIntersecting;
        this.syncAnimation();
      });
    });
    this.observer.observe(this);
  }

  private onVisibilityChange = () => {
    if (document.visibilityState === "visible") {
      for (const shape of this.shapes) {
        shape.resetTiming();
      }
    }
    this.syncAnimation();
  };

  private syncAnimation() {
    const shouldRun = this.isInView && document.visibilityState === "visible";

    if (shouldRun) {
      this.startLoop();
    } else {
      this.stopLoop();
    }
  }

  private startLoop() {
    if (this.rafId !== null) {
      return;
    }

    const tick = (now: number) => {
      this.rafId = null;
      if (!this.isInView || document.visibilityState !== "visible") {
        return;
      }
      if (now - this.lastFrameAt >= FRAME_INTERVAL) {
        this.lastFrameAt = now;
        this.drawFrame();
      }
      this.rafId = window.requestAnimationFrame(tick);
    };

    this.rafId = window.requestAnimationFrame(tick);
  }

  private stopLoop() {
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  private drawFrame() {
    const ctx = this.canvas.getContext("2d");
    if (!ctx) {
      return;
    }
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (const shape of this.shapes) {
      shape.draw();
    }
  }

  disconnectedCallback() {
    window.removeEventListener("resize", this.resize);
    document.removeEventListener("visibilitychange", this.onVisibilityChange);
    this.stopLoop();
    this.observer?.unobserve(this);
    this.observer = null;
  }

  private resize = () => {
    const rect = this.getBoundingClientRect();
    this.canvas.width = rect.width;
    this.canvas.height = rect.height;
    for (const shape of this.shapes) {
      shape.updateSize();
    }
  };
}

class Shape {
  private color = "#F3FFDF";
  private width = 360;
  private height = 170;
  private position: Position;
  // @ts-expect-error it is initialized
  private target: Position;
  private lastDrawnAt = 0;
  private speed = 0.1;

  constructor(private canvas: HTMLCanvasElement) {
    this.updateSize();
    this.position = {
      x: randomInt(0, canvas.width),
      y: randomInt(0, canvas.height),
    };

    this.generateTarget();
  }

  updateSize() {
    this.width = Math.max((360 / 1920) * this.canvas.width, 200);
    this.height = (170 / 1080) * this.canvas.height;
  }

  public resetTiming() {
    this.lastDrawnAt = 0;
  }

  public updatePosition() {
    if (this.lastDrawnAt === 0) {
      return;
    }
    const n = normalVec(this.position, this.target);
    const time = Date.now() - this.lastDrawnAt;
    this.position = {
      x: this.position.x + n.x * time * this.speed,
      y: this.position.y + n.y * time * this.speed,
    };
    if (distanceSquared(this.position, this.target) < 10) {
      this.generateTarget();
    }
  }

  public draw() {
    this.updatePosition();
    const ctx = this.canvas.getContext("2d");
    if (!ctx) {
      return;
    }
    ctx.save();
    // ctx.filter = `blur(${this.blur}px)`;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.ellipse(
      this.position.x,
      this.position.y,
      this.width,
      this.height,
      0,
      0,
      2 * Math.PI,
    );
    ctx.fill();
    ctx.restore();
    this.lastDrawnAt = Date.now();
  }

  private generateTarget() {
    this.target = {
      x: randomInt(0, this.canvas.width),
      y: randomInt(0, this.canvas.height),
    };
  }
}
