"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  400: 'A ação está incorreta ou incompleta.',
  401: 'Autorização negada.',
  403: 'Acesso negado.',
  404: 'Recurso ou página não encontrada.',
  408: 'A ação expirou ou foi interrompida.',
  500: 'Não foi possivel realizar essa ação.',
  501: 'Recurso não implementado.',
  502: 'Não foi possível completar a ação.',
  503: 'Serviço indisponível no momento.',
  504: 'Serviço em manutenção ou não encontrado.'
};
exports["default"] = _default;