"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var accounts = [{
  kind: 'cc',
  "default": true,
  agency: '1735',
  agencyDigit: '',
  account: '24538',
  accountDigit: '7',
  conjunct: false,
  bankCode: '',
  bankName: 'Banco Bradesco S.A',
  savingsComplement: '',
  id: 0
}, {
  "default": false,
  agency: '3337',
  agencyDigit: '',
  account: '01032950',
  accountDigit: '7',
  conjunct: true,
  bankCode: '',
  bankName: 'Santander',
  savingsComplement: '',
  id: 1,
  kind: 'cc'
}, {
  "default": false,
  agency: '7662',
  agencyDigit: '',
  account: '9032950',
  accountDigit: '6',
  conjunct: false,
  bankCode: '001',
  bankName: 'Banco do Brasil',
  savingsComplement: '51',
  id: 2,
  kind: 'ci'
}];
var _default = accounts;
exports["default"] = _default;