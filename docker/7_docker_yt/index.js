const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.use(express.static('public'))

const carros = [
  {
    id: 1,
    img:"carro2",
    Nome:"Mustang",
    Ano:"1990",
    velocidadeMaxima:"200k/h",
    notaEconomia:"5",
    notaUsuarios:"8",
    link:"www"
  },
  {
    id: 2,
    img:"carro1",
    Nome:"Mustang",
    Ano:"2010",
    velocidadeMaxima:"250k/h",
    notaEconomia:"4",
    notaUsuarios:"8",
    link:"www"
  },
  {
    id: 3,
    img:"carro3",
    Nome:"fusca",
    Ano:"1982",
    velocidadeMaxima:"130k/h",
    notaEconomia:"6",
    notaUsuarios:"6",
    link:"www"
  },{
    id: 4,
    img:"carro2",
    Nome:"I30",
    Ano:"2011",
    velocidadeMaxima:"210k/h",
    notaEconomia:"7",
    notaUsuarios:"8",
    link:"www"
  },{
    id: 5,
    img:"carro1",
    Nome:"veloster",
    Ano:"2012",
    velocidadeMaxima:"190k/h",
    notaEconomia:"7",
    notaUsuarios:"8",
    link:"www"
  },{
    id: 6,
    img:"carro3",
    Nome:"gol",
    Ano:"1999",
    velocidadeMaxima:"160k/h",
    notaEconomia:"6",
    notaUsuarios:"7",
    link:"www"
  },{
    id: 7,
    img:"carro2",
    Nome:"Uno",
    Ano:"2015",
    velocidadeMaxima:"160k/h",
    notaEconomia:"6",
    notaUsuarios:"7",
    link:"www"
  },{
    id: 8,
    img:"carro1",
    Nome:"Camaro",
    Ano:"2010",
    velocidadeMaxima:"260k/h",
    notaEconomia:"5",
    notaUsuarios:"9",
    link:"www"
  },
  {
    id: 9,
    img:"carro3",
    Nome:"Mustang",
    Ano:"1990",
    velocidadeMaxima:"200k/h",
    notaEconomia:"5",
    notaUsuarios:"8",
    link:"www"
  },
  {
    id: 10,
    img:"carro2",
    Nome:"Mustang",
    Ano:"2010",
    velocidadeMaxima:"250k/h",
    notaEconomia:"4",
    notaUsuarios:"8",
    link:"www"
  },
  {
    id: 11,
    img:"carro1",
    Nome:"fusca",
    Ano:"1982",
    velocidadeMaxima:"130k/h",
    notaEconomia:"6",
    notaUsuarios:"6",
    link:"www"
  },{
    id: 12,
    img:"carro3",
    Nome:"I30",
    Ano:"2011",
    velocidadeMaxima:"210k/h",
    notaEconomia:"7",
    notaUsuarios:"8",
    link:"www"
  },{
    id: 13,
    img:"carro2",
    Nome:"veloster",
    Ano:"2012",
    velocidadeMaxima:"190k/h",
    notaEconomia:"7",
    notaUsuarios:"8",
    link:"www"
  },{
    id: 14,
    img:"carro1",
    Nome:"gol",
    Ano:"1999",
    velocidadeMaxima:"160k/h",
    notaEconomia:"6",
    notaUsuarios:"7",
    link:"www"
  },{
    id: 15,
    img:"carro3",
    Nome:"Uno",
    Ano:"2015",
    velocidadeMaxima:"160k/h",
    notaEconomia:"6",
    notaUsuarios:"7",
    link:"www"
  },{
    id: 16,
    img:"carro2",
    Nome:"Camaro",
    Ano:"2010",
    velocidadeMaxima:"260k/h",
    notaEconomia:"5",
    notaUsuarios:"9",
    link:"www"
  },
  {
    id: 17,
    img:"carro1",
    Nome:"Mustang",
    Ano:"1990",
    velocidadeMaxima:"200k/h",
    notaEconomia:"5",
    notaUsuarios:"8",
    link:"www"
  },
  {
    id: 18,
    img:"carro3",
    Nome:"Mustang",
    Ano:"2010",
    velocidadeMaxima:"250k/h",
    notaEconomia:"4",
    notaUsuarios:"8",
    link:"www"
  },
  {
    id: 19,
    img:"carro2",
    Nome:"fusca",
    Ano:"1982",
    velocidadeMaxima:"130k/h",
    notaEconomia:"6",
    notaUsuarios:"6",
    link:"www"
  },{
    id: 20,
    img:"carro1",
    Nome:"I30",
    Ano:"2011",
    velocidadeMaxima:"210k/h",
    notaEconomia:"7",
    notaUsuarios:"8",
    link:"www"
  },{
    id: 21,
    img:"carro3",
    Nome:"veloster",
    Ano:"2012",
    velocidadeMaxima:"190k/h",
    notaEconomia:"7",
    notaUsuarios:"8",
    link:"www"
  },{
    id: 22,
    img:"carro2",
    Nome:"gol",
    Ano:"1999",
    velocidadeMaxima:"160k/h",
    notaEconomia:"6",
    notaUsuarios:"7",
    link:"www"
  },{
    id: 23,
    img:"carro1",
    Nome:"Uno",
    Ano:"2015",
    velocidadeMaxima:"160k/h",
    notaEconomia:"6",
    notaUsuarios:"7",
    link:"www"
  },{
    id: 24,
    img:"carro3",
    Nome:"Camaro",
    Ano:"2010",
    velocidadeMaxima:"260k/h",
    notaEconomia:"5",
    notaUsuarios:"9",
    link:"www"
  },
  {
    id: 25,
    img:"carro2",
    Nome:"Mustang",
    Ano:"2010",
    velocidadeMaxima:"250k/h",
    notaEconomia:"4",
    notaUsuarios:"8",
    link:"www"
  },
  {
    id: 26,
    img:"carro1",
    Nome:"fusca",
    Ano:"1982",
    velocidadeMaxima:"130k/h",
    notaEconomia:"6",
    notaUsuarios:"6",
    link:"www"
  },{
    id: 27,
    img:"carro1",
    Nome:"I30",
    Ano:"2011",
    velocidadeMaxima:"210k/h",
    notaEconomia:"7",
    notaUsuarios:"8",
    link:"www"
  },{
    id: 28,
    img:"carro3",
    Nome:"veloster",
    Ano:"2012",
    velocidadeMaxima:"190k/h",
    notaEconomia:"7",
    notaUsuarios:"8",
    link:"www"
  },{
    id: 29,
    img:"carro2",
    Nome:"gol",
    Ano:"1999",
    velocidadeMaxima:"160k/h",
    notaEconomia:"6",
    notaUsuarios:"7",
    link:"www"
  },{
    id: 30,
    img:"carro1",
    Nome:"Uno",
    Ano:"2015",
    velocidadeMaxima:"160k/h",
    notaEconomia:"6",
    notaUsuarios:"7",
    link:"www"
  },{
    id: 31,
    img:"carro3",
    Nome:"Camaro",
    Ano:"2010",
    velocidadeMaxima:"260k/h",
    notaEconomia:"5",
    notaUsuarios:"9",
    link:"www"
  },
  {
    id: 32,
    img:"carro2",
    Nome:"Mustang",
    Ano:"1990",
    velocidadeMaxima:"200k/h",
    notaEconomia:"5",
    notaUsuarios:"8",
    link:"www"
  },
  {
    id: 33,
    img:"carro1",
    Nome:"Mustang",
    Ano:"2010",
    velocidadeMaxima:"250k/h",
    notaEconomia:"4",
    notaUsuarios:"8",
    link:"www"
  },
  {
    id: 34,
    img:"carro3",
    Nome:"fusca",
    Ano:"1982",
    velocidadeMaxima:"130k/h",
    notaEconomia:"6",
    notaUsuarios:"6",
    link:"www"
  },{
    id: 35,
    img:"carro2",
    Nome:"I30",
    Ano:"2011",
    velocidadeMaxima:"210k/h",
    notaEconomia:"7",
    notaUsuarios:"8",
    link:"www"
  },{
    id: 36,
    img:"carro1",
    Nome:"veloster",
    Ano:"2012",
    velocidadeMaxima:"190k/h",
    notaEconomia:"7",
    notaUsuarios:"8",
    link:"www"
  },{
    id: 37,
    img:"carro3",
    Nome:"gol",
    Ano:"1999",
    velocidadeMaxima:"160k/h",
    notaEconomia:"6",
    notaUsuarios:"7",
    link:"www"
  },{
    id: 38,
    img:"carro1",
    Nome:"Uno",
    Ano:"2015",
    velocidadeMaxima:"160k/h",
    notaEconomia:"6",
    notaUsuarios:"7",
    link:"www"
  },{
    id: 39,
    img:"carro2",
    Nome:"Camaro",
    Ano:"2010",
    velocidadeMaxima:"260k/h",
    notaEconomia:"5",
    notaUsuarios:"9",
    link:"www"
  },
];

app.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  return res.json(carros);
});

app.get("/tabelas", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const page = req.query.page;
  const index = req.query.index;
  //const {page, index} = req.body;
  const found = carros.slice(page, index);
  return res.json(found);

});

app.get("/tabelas/:id", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const { id } = req.params;
  return res.json({
      nome: carros[id]
  });
});

app.post("/tabelas", (req, res) => {
  res.header("Content-Type", "application/json");
  res.header("Access-Control-Allow-Origin", "*");
  const nome = req.body;

  carros.push(nome);

  return res.json(carros);
});

app.put("/tabelas/:id", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const { id } = req.params;
  const { nome } = req.body;

  carros[id] = nome;

  return res.json(carros);
});

app.delete("/tabelas/:id", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const { id } = req.params;

  carros.splice(id, 1);

  return res.json(carros)

})

app.listen(port, () => {
  console.log(`App rodando na porta: ${port}`)
})







