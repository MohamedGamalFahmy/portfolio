  
    const numDrops = 100; // عدد قطرات المطر
    for (let i = 0; i < numDrops; i++) {
      let drop = document.createElement("div");
      drop.classList.add("raindrop");
      drop.style.left = Math.random() * window.innerWidth + "px";
      drop.style.animationDuration = 0.5 + Math.random() * 0.7 + "s";
      drop.style.animationDelay = Math.random() * 5 + "s";
      document.body.appendChild(drop);
    }
  
