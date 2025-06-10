function inicializar() {
  let botaoGeoLocalizao = document.getElementById('geoLocalizaoBtn');
  let saida = document.getElementById('resultado');

  //prettier-ignore
  if ((botaoGeoLocalizao instanceof HTMLButtonElement) && (saida instanceof HTMLParagraphElement)) {
    botaoGeoLocalizao.addEventListener('click', () => {
      try {
        // Utiliza a API de geolocalização do navegador para obter a posição atual do usuário.
        navigator.geolocation.getCurrentPosition(
          (posicao) => {
            /**
             * O parâmetro `posicao` é um objeto que contém as coordenadas do usuário
             * e outras informações adicionais. Ele possui uma propriedade `coords` com:
             * - `latitude`: A latitude atual do usuário.
             * - `longitude`: A longitude atual do usuário.
             */
            saida.textContent = `Latitude: ${posicao.coords.latitude}, Longitude: ${posicao.coords.longitude}`;
          },
          // Função chamada quando a requisição falha.
          (erro) => {
            /**
             * O parâmetro `erro` é um objeto que descreve o motivo da falha.
             * Ele possui uma propriedade `message` que contém uma descrição da falha.
             * Exemplo: "User denied Geolocation" (Usuário negou a permissão de localização).
             */
            saida.textContent = erro.message;
          }
        );
      } catch (erro) {
        saida.textContent = erro.message;
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', inicializar);
