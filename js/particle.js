tsParticles.load("particles-hero", {
    fullScreen: { enable: false },
    particles: {
        number: { value: 80, density: { enable: true, area: 800 } },
        color: { value: "#000000" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        move: {
            enable: true,
            speed: 1,
            direction: "none",
            outModes: { default: "out" }
        },
        links: {
            enable: true,
            distance: 150,
            color: "#000000",
            opacity: 0.4,
            width: 1
        }
    },
    interactivity: {
        events: { onHover: { enable: true, mode: "repulse" } },
        modes: { repulse: { distance: 100 } }
    },
    background: { color: "transparent" }
});

tsParticles.load("particles-click", {
    fullScreen: { enable: true, zIndex: 9999 },
    particles: {
        number: { value: 0 }, // awal kosong
        color: { value: "#000000" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true, animation: { enable: true, speed: 1, minimumValue: 0 } },
        size: { value: 3, random: true },
        move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            outModes: { default: "out" }
        },
        life: {
            duration: { value: 2 }, // hidup 2 detik
            count: 1 // muncul sekali lalu hilang
        },
        links: { enable: false }
    },
    interactivity: {
        events: {
            onClick: { enable: true, mode: "push" }
        },
        modes: {
            push: { quantity: 40 }
        }
    },
    background: { color: "transparent" }
});