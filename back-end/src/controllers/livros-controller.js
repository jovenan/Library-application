const mongoose = require("mongoose");
const Livros = mongoose.model("Livros");
const validaQuantCaracteres = require("../validators")

// Rota raiz
exports.get = (req, res, next) => {
  res.status(200).send({
    title: "node Library API",
    version: "1.0.0",
  });
};

// Rota GET livros
exports.getBooks = (req, res, next) => {
  Livros.find({ active: true }, "title description genre active")
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
};

// Rota GET livro por genero
exports.getByGenre = (req, res, next) => {
  Livros.find(
    { genre: req.params.genre, active: true },
    "title description genre active"
  )
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((e) => {
      res.status(404).send({ response: "No book find", error: e });
    });
};

// Rota GET livro por id
exports.getById = (req, res, next) => {
  Livros.findById(req.params.id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((e) => {
      res.status(404).send({ response: "No book find", error: e });
    });
};

// Rota POST livro
exports.post = (req, res, next) => {

  let mensagem = []

  let validacaoTitle = validaQuantCaracteres(req.body.title)
  if(validacaoTitle == false) {
    mensagem.push("O titulo deve ter mais de 3 caracteres.");
  }

  let validacaoDescription = validaQuantCaracteres(req.body.description)
  if(validacaoDescription == false) {
    mensagem.push("A descricao deve ter mais de 3 caracteres.");
  }

  let validacaoGenre = validaQuantCaracteres(req.body.genre)
  if(validacaoGenre == false) {
    mensagem.push("O Genero deve ter mais de 3 caracteres.");
  }

  if(validacaoTitle == false || validacaoDescription == false || validacaoGenre == false) {
    res.status(400).send({ message: "Falha ao cadastrar Livro!", CamposIncorretos: mensagem});
  } else {
    var Livro = new Livros(req.body);
    Livro.save()
      .then((x) => {
        res
          .status(201)
          .send({ message: "Livro cadastrado com sucesso!", data: x });
      })
      .catch((e) => {
        res.status(400).send({ message: "Falha ao cadastrar Livro!", data: e });
      });
  }

  
};

// Rota PUT livro
exports.put = (req, res, next) => {
  Livros.findByIdAndUpdate(req.params.id, {
    $set: {
      title: req.body.title,
      description: req.body.description,
      genre: req.body.genre,
      active: req.body.active,
    },
  })
    .then((x) => {
      res
        .status(201)
        .send({ message: "Livro atualizado com sucesso!", data: x });
    })
    .catch((e) => {
      res.status(400).send({
        message: "Falha ao atualizar produto",
        data: e,
      });
    });
};

// Rota DELETE livro
exports.delete = (req, res, next) => {
  Livros.findByIdAndRemove(req.params.id)
    .then((x) => {
      res.status(200).send({
        message: "Livro removido com sucesso!",
      });
    })
    .catch((e) => {
      res.status(400).send({
        message: "Falha ao remover livro",
        data: e,
      });
    });
};
