"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.smoke = exports.regression = exports.dev = void 0;
const common = `./src/features/**/*.feature \
                --require-module ts-node/register \
                --require ./src/step-definitions/**/**/*.ts \
                -f json:./reports/report.json \
                --format progress-bar`;
const dev = exports.dev = `${common} --tags '@dev'`;
const smoke = exports.smoke = `${common} --tags '@smoke'`;
const regression = exports.regression = `${common} --tags '@regression'`;