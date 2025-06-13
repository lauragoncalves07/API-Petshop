const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

const dados = {
 "Para Gatos:": [
    {
        nome: "Ração",
        imagem: "https://images.petz.com.br/fotos/20001310000100_1731437949425.jpg",
        descricao: "Ração Golden para Gatos Adultos Castrados Sabor Frango."
      },
      {
        nome: "Areia Sanitária",
        imagem: "https://images.tcdn.com.br/img/img_prod/1028357/areia_higienica_pipicat_floral_para_gatos_12_kg_307_1_c83ac9adea9314bf8f4cdd2ca365d4c6.jpg",
        descricao: "Areia Sanitária Meau Grãos Finos para Gatos."
      },
      
      {
        nome: "Caixa de areia",
        imagem: "https://images.petz.com.br/fotos/1556123276597.jpg",
        descricao: "Banheira Pop Furacão Pet para Gatos Preta."
      },
      {
        nome: "Brinquedo Varinha",
        imagem: "https://images.petz.com.br/fotos/1613486435135.jpg",
        descricao: "Brinquedo Chalesco Varinha com Pena e Guizo para Gatos - Cores Sortidas."
      },
      {
        nome: "Shampoo",
        imagem: "https://images.petz.com.br/fotos/1721941243877.jpg",
        descricao: "Shampoo Fresh Care para Gatos 500ml."
      }

],

  "Para Cães:": [
    {
      nome: "Ração",
      imagem: "https://images.petz.com.br/fotos/1708614057884.jpg",
      descricao: "Ração Golden Special para Cães Adultos Sabor Frango e Carne."
    },
    {
      nome: "Tapete Higiênico",
      imagem: "https://images.petz.com.br/fotos/1623439416408.jpg",
      descricao: "Sanitário Furacão Pet Xixi Fácil Pop Preto para Cães."
    },
    {
      nome: "Brinquedo de pelúcia",
      imagem: "https://images.petz.com.br/fotos/1688143004271.jpg",
      descricao: "Brinquedo Chalesco Macaco Pelúcia Marrom para Cães."
    },
    {
      nome: "Shampoo",
      imagem: "https://images.petz.com.br/fotos/1721941339052.jpg",
      descricao: "Shampoo Fresh Care Peles Sensíveis para Cães 500ml."
    },
    {
      nome: "Guia",
      imagem: "https://images.petz.com.br/fotos/1676471886300.jpg",
      descricao: "Guia Petz Waterproof Black para Cães."
    }
   

  ],
  "Para Pássaros:": [
    {
      nome: "Ração",
      imagem: "https://images.tcdn.com.br/img/img_prod/1028357/racao_reino_das_aves_farinhada_criador_parrots_para_passaros_423_1_df0272a377f6bed9c51667c72cbe097b.jpg",
      descricao: "Ração Reino das Aves Farinhada Criador Parrots para Pássaros."
    },
    {
      nome: "Gaiola",
      imagem: "https://images.petz.com.br/fotos/1607345836638.jpg",
      descricao: "Gaiola para Pássaros Monaco Piu Piu Número 1 com Bandeja."
    },
    {
      nome: "Brinquedo",
      imagem: "https://images.petz.com.br/fotos/1593792279564.jpg",
      descricao: "Brinquedo Passaritos Toys Para Calopsitas Escada."
    },
    {
      nome: "Kit Comedouro",
      imagem: "https://images.petz.com.br/fotos/40014120000038-1.jpg",
      descricao: "Kit Vida Alimentação Mr. Pet Pássaros."
    },
    {
      nome: "Higiene",
      imagem: "https://images.petz.com.br/fotos/1568377225578.jpg",
      descricao: "Areia Higiênica ProGato para Pássaros - 1,3kg."
    }
  
  ],
  "Para Peixes:": [
    {
      nome: "Ração",
      imagem: "https://images.petz.com.br/fotos/1572633695555.jpg",
      descricao: "Alimento para peixe Alcon Guppy 20gr."
    },
    {
      nome: "Alimentador",
      imagem: "https://images.petz.com.br/fotos/1503349706165.jpg",
      descricao: "Alimentador Automático Soma para Peixes Food Timer Tool."
    },
    {
      nome: "Aquário",
      imagem: "https://images.petz.com.br/fotos/1601039503634.jpg",
      descricao: "Aquário Boyu Curvo 100 187 Litros Preto Champagne."
    },
    {
      nome: "Tratamento de água",
      imagem: "https://images.petz.com.br/fotos/1454964800283.jpg",
      descricao: "Condicionador Água Labcon Peixes Aqualife."
    },
    {
      nome: "Decoração",
      imagem: "https://images.petz.com.br/fotos/1602688429023.jpg",
      descricao: "Enfeite Lester Pedra Furada."
    }
  
    
  ]
  
};

app.get('/api/materiais', (req, res) => {
  res.json(dados);
});

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}/api/materiais`);
});
