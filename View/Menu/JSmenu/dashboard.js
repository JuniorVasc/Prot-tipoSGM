document.addEventListener('DOMContentLoaded', (event) => {
  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
      type: 'bar', // ou qualquer tipo de gráfico que você está utilizando
      data: {
          labels: ['Monitores', 'Toners', 'Dispositivos', 'Vazio', 'Vazio', 'Vazio'],
          datasets: [{
              label: 'Disposetivos',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                'rgba(255, 165, 0, 0.2)', // Laranja (semi-transparente)
                'rgba(0, 0, 0, 0.2)', // Preto (semi-transparente)
                'rgba(192, 192, 192, 0.2)', // Cinza (semi-transparente)
                'rgba(128, 128, 128, 0.2)', // Cinza escuro (semi-transparente)
                'rgba(128, 128, 128, 1)', // Cinza escuro
                'rgba(255, 165, 0, 0.2)'  // Laranja (semi-transparente)
              ],
              borderColor: [
                 'rgba(255, 165, 0, 1)', // Laranja
                'rgba(0, 0, 0, 1)', // Preto
                'rgba(0, 0, 0, 1)', // Preto
                'rgba(128, 128, 128, 1)', // Cinza escuro
                'rgba(128, 128, 128, 1)', // Cinza escuro
                'rgba(255, 165, 0, 1)'  // Laranja
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
});
