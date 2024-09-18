import { renderComponent } from "./utils/render-component.js";
import { createCard } from "./components/card_data/script.js";

const header = renderComponent("./components/header");
const sidebar = renderComponent("./components/sidebar");
const dashboard = renderComponent("./screens/dashboard");
const cardData = renderComponent("./components/card_data");

Promise.all([header, sidebar, dashboard, cardData]).then(() => {
  const card1 = createCard('fa fa-dollar-sign', 'Gastos do Mês', 'R$642,39');
  const card2 = createCard('fa fa-credit-card', 'Receitas do Mês', 'R$1.200,00');
  const card3 = createCard('', 'Receitas do Mês', 'R$1.200,00');

  const dashboardContainer = document.getElementById('content'); 
  dashboardContainer.appendChild(card1);
  dashboardContainer.appendChild(card2);
  dashboardContainer.appendChild(card3)

}).catch((error) => {
  console.error("Erro ao renderizar os componentes:", error);
});
