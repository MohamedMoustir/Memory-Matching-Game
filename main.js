
let card = document.getElementById('continer');
const MemoryMatching = () => {
    let char = 'ABACCBDSEDSEZZRRHHMMRR';
    let ruslte = '';
    for (let i = 0; i < 18; i++) {
        const random = Math.floor(Math.random() * char.length);
        let ruslte = char.charAt(random)
        console.log(ruslte);
        card.innerHTML += `
        <div class="card w-16 h-20 cursor-pointer" data-card=${ruslte}>
      <div class="card-inner relative w-full h-full">
        <div class="card-front bg-white rounded-md flex items-center justify-center shadow-lg">
          <div class="w-4 h-4 bg-gray-200 rounded-full"></div>
        </div>
        <div class="card-back bg-white rounded-md flex items-center justify-center shadow-lg">
          <span class="text-2xl font-bold">${ruslte}</span>
        </div>
      </div>
    </div>
      `
    }
}

MemoryMatching()