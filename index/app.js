import {Glowparticle} from "./glowparticle.js";

const COLORS = [
    {r: 120, g: 226, b: 255},
    {r: 251, g: 213, b: 107},
    {r: 237, g: 136, b: 255},
    {r: 229, g: 111, b: 170}
];

class App {
    constructor() {
        // 为canvas创建设置
        this.canvas = document.createElement('canvas');
        this.canvas.style.position = 'absolute';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.zIndex = '-1'; // 保证它在其他元素之下
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');

        this.pixelRatio = (window.devicePixelRatio > 1) ? 2 : 1;

        this.totalParticles = 15;
        this.particles = [];
        this.maxRadius = 1000;
        this.minRadius = 500;

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        window.requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        // 设置canvas的宽度和高度
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeight * this.pixelRatio;
        this.ctx.scale(this.pixelRatio, this.pixelRatio);

        this.createParticles();
    }

    createParticles() {
        let curColor = 0;
        this.particles = [];

        for (let i = 0; i < this.totalParticles; i++) {
            const item = new Glowparticle(
                Math.random() * this.stageWidth,
                Math.random() * this.stageHeight,
                Math.random() * (this.maxRadius - this.minRadius) + this.minRadius,
                COLORS[curColor]
            );

            if (++curColor >= COLORS.length) {
                curColor = 0;
            }

            this.particles[i] = item;
        }
    }

    animate() {
        window.requestAnimationFrame(this.animate.bind(this));
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        for (let i = 0; i < this.totalParticles; i++) {
            const item = this.particles[i];
            item.animate(this.ctx, this.stageWidth, this.stageHeight);
        }
    }
}

// 设置body的样式以确保画布全屏覆盖
document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.overflow = 'hidden';
document.body.style.position = 'relative';

window.onload = () => {
    new App();
};

document.addEventListener('DOMContentLoaded', () => {
    // 定义多个触发器与对应的工具提示
    const tooltips = {
        "wechat-personal": "tooltip-wechat-personal",
        "wechat-public": "tooltip-wechat-public",
        "xiaohongshu": "tooltip-xiaohongshu"
    };

    Object.keys(tooltips).forEach(triggerId => {
        const trigger = document.getElementById(triggerId);
        const tooltip = document.getElementById(tooltips[triggerId]);

        trigger.addEventListener('mouseenter', (event) => {
            tooltip.style.display = 'block';
            const rect = trigger.getBoundingClientRect();
            const tooltipRect = tooltip.getBoundingClientRect();
            tooltip.style.left = `${rect.left + (rect.width - tooltipRect.width) / 2}px`;
            tooltip.style.top = `${rect.bottom + window.scrollY+10}px`;
        });

        trigger.addEventListener('mouseleave', () => {
            tooltip.style.display = 'none';
        });
    });
});

document.addEventListener('wheel', (event) => {
    if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
        event.preventDefault();
    }
}, { passive: false });

let startX = 0;
let startY = 0;

document.addEventListener('touchstart', (event) => {
    const touch = event.touches[0];
    startX = touch.clientX;
    startY = touch.clientY;
}, { passive: false });

document.addEventListener('touchmove', (event) => {
    const touch = event.touches[0];
    const deltaX = Math.abs(touch.clientX - startX);
    const deltaY = Math.abs(touch.clientY - startY);

    if (deltaX > deltaY) {
        event.preventDefault();
    }
}, { passive: false });

function adjustBelowSvgHeight() {
    const other = document.getElementById('second');
    const svgContent = document.getElementById('svg-content');
    const belowSvg = document.getElementById('below-svg');

    const otherHeight = other.offsetHeight;
    const svgHeight = svgContent.getBoundingClientRect().height;

    belowSvg.style.height = (otherHeight - svgHeight) + 'px';

    const other1 = document.getElementById('first-other');
    const svgContent1 = document.getElementById('svg-content1');
    const belowSvg1 = document.getElementById('below-svg1');

// 获取元素的高度
    const otherHeight1 = other1.offsetHeight;
    const svgHeight1 = svgContent1.getBoundingClientRect().height;

// 计算当前的高度差
    const heightDifference = otherHeight1 - svgHeight1;

// 将高度差转换为像素值，并添加 20vh
    belowSvg1.style.height = (heightDifference + 50) + 'px';

}

window.addEventListener('load', adjustBelowSvgHeight);
window.addEventListener('resize', adjustBelowSvgHeight);



