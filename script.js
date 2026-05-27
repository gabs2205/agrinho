const botao = document.getElementById('btnDica');
const texto = document.getElementById('textoDica');

const dicas = [
    "A irrigação por gotejamento reduz o desperdício de água em até 60%.",
    "Monitorar a umidade do solo evita regar as plantas sem necessidade.",
    "A captação da água da chuva é uma excelente alternativa para o manejo agrícola."
];

botao.addEventListener('click', () => {
    const dicaAleatoria = dicas[Math.floor(Math.random() * dicas.length)];
    texto.textContent = dicaAleatoria;
    texto.className = "visivel";
});
