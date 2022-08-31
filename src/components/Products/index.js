import React from "react";
import Icon1 from "../../assets/images/product-1.svg";
import Icon2 from "../../assets/images/product-2.svg";
import Icon3 from "../../assets/images/product-3.svg";
import Icon4 from "../../assets/images/product-4.svg";

import {
  ProductsContainer,
  ProductsH1,
  ProductsWrapper,
  ProductsCard,
  ProductsIcon,
  ProductsH2,
  ProductsP,
} from "./ProductsElements";

const Products = () => {
  return (
    <ProductsContainer role="complementary" aria-label="products" id="products">
      <ProductsH1>Nossos produtos</ProductsH1>
      <ProductsWrapper>
        <ProductsCard>
          <ProductsIcon src={Icon1} aria-label="Person paying with phone" />
          <ProductsH2>Processamento e captura de pagamentos</ProductsH2>
          <ProductsP>
          Tecnologia de ponta para capturar e processar transações por 
          meio de vários métodos.
          </ProductsP>
        </ProductsCard>
        <ProductsCard>
          <ProductsIcon
            src={Icon2}
            aria-label="Person in front of credit card"
          />
          <ProductsH2>Adiantamento em dinheiro</ProductsH2>
          <ProductsP>
            Oferecemos a antecipação de todos os créditos de mais de 40 dias até
            transferências instantâneas.
          </ProductsP>
        </ProductsCard>
        <ProductsCard>
          <ProductsIcon
            src={Icon3}
            aria-label="A bowl of asian food on a table"
          />
          <ProductsH2>Benefícios Corporativos</ProductsH2>
          <ProductsP>
          Adicione soluções como Alimentação, Refeição, Adiantamento ou Benefícios personalizados
          para seu negócio.
          </ProductsP>
        </ProductsCard>
        <ProductsCard>
          <ProductsIcon
            src={Icon4}
            aria-label="Person in front of a calendar"
          />
          <ProductsH2>Circuito fechado corporativo</ProductsH2>
          <ProductsP>
          Escolas e universidades, eventos corporativos e negócios
            mercado comum das associações.
          </ProductsP>
        </ProductsCard>
      </ProductsWrapper>
    </ProductsContainer>
  );
};

export default Products;
