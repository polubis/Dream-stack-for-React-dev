import { useIntersectionObserver } from '@system/figa-hooks';
import React from 'react';
import { useLayoutEffect } from 'react';
import type { BlackHoleProps } from './defs';

const useBlackHoleAnimation = ({
  id,
  height,
  width,
  radius,
  paused,
}: BlackHoleProps & { paused: boolean }) => {
  useLayoutEffect(() => {
    let canvas = document.getElementById(id)! as HTMLCanvasElement;
    let ctx = canvas.getContext('2d')!;
    canvas.width = width;
    canvas.height = height;
    let acc = 0;
    let reverseAll = false;

    function Particle(x, y, distance, reversed) {
      this.angle = Math.random() * 2 * Math.PI;
      this.radius = Math.random() + 1;
      this.opacity = (Math.random() * 5 + 2) / 10;
      this.distance = (1 / this.opacity) * distance;
      this.speed = this.distance * 0.000008;
      this.direction = this.position = {
        x: x + this.distance * Math.cos(this.angle),
        y: y + this.distance * Math.sin(this.angle),
      };

      this.draw = function () {
        ctx.fillStyle = 'rgba(255,255,255,' + this.opacity + ')';
        ctx.beginPath();
        ctx.arc(
          this.position.x,
          this.position.y,
          this.radius,
          0,
          Math.PI * 2,
          false
        );
        ctx.fill();
        ctx.closePath();
      };
      this.update = function () {
        this.angle += this.speed;

        if (reversed) {
          this.position = {
            x: x + this.distance * -Math.sin(this.angle),
            y: y + this.distance * -Math.cos(this.angle),
          };
        } else {
          this.position = {
            x: x + this.distance * Math.cos(this.angle),
            y: y + this.distance * Math.sin(this.angle),
          };
        }

        this.draw();
      };
    }

    function Emitter(x, y) {
      this.position = { x: x, y: y };
      this.radius = radius;
      this.count = 1000;
      const halfCount = this.count / 2;
      this.particles = [];

      for (var i = 0; i < this.count; i++) {
        this.particles.push(
          new Particle(
            this.position.x,
            this.position.y,
            this.radius,
            i >= halfCount
          )
        );
      }
    }

    Emitter.prototype = {
      update: function () {
        for (var i = 0; i < this.count; i++) {
          this.particles[i].update();
        }

        if (acc === this.count / 10 - 1) {
          reverseAll = true;
        } else if (acc === 0) {
          reverseAll = false;
        }

        if (reverseAll) {
          acc--;
        } else {
          acc++;
        }
      },
    };

    var emitter = new Emitter(canvas.width / 2, canvas.height / 2);

    let reg;

    const animate =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (/* function */ callback) {
        window.setTimeout(callback, 1000 / 60);
      };

    function loop() {
      if (paused) {
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      emitter.update();
      reg = animate(loop);
    }

    if (!paused && width > 0 && height > 0) {
      loop();
    }

    return () => {
      cancelAnimationFrame(reg);
    };
  }, [paused]);
};

const BlackHole = (props: BlackHoleProps) => {
  const { ref, visible } = useIntersectionObserver<HTMLDivElement>();

  useBlackHoleAnimation({
    ...props,
    paused: !visible,
  });

  return (
    <div ref={ref}>
      <canvas id={props.id}></canvas>
    </div>
  );
};

export { BlackHole };
