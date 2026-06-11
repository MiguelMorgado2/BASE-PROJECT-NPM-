"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uncheckElement = exports.selectElementValue = exports.scrollElementIntoView = exports.inputValueOnPage = exports.inputValueOnIframe = exports.inputElementValue = exports.getTitleWithinPage = exports.getTextWithinIframeElement = exports.getTableData = exports.getIframeElement = exports.getElements = exports.getElementWithinIframe = exports.getElementValue = exports.getElementTextWithinPage = exports.getElementTextAtIndex = exports.getElementText = exports.getElementOnPage = exports.getElementAtIndex = exports.getElement = exports.getAttributeText = exports.elementEnabled = exports.elementChecked = exports.clickElementAtIndex = exports.clickElement = exports.checkElement = void 0;
const clickElement = async (page, elementIdentifier) => {
  await page.click(elementIdentifier);
};
exports.clickElement = clickElement;
const clickElementAtIndex = async (page, elementIdentifier, elementPosition) => {
  await page.locator(elementIdentifier).nth(elementPosition).click();
};
exports.clickElementAtIndex = clickElementAtIndex;
const inputElementValue = async (page, elementIdentifier, input) => {
  await page.focus(elementIdentifier);
  await page.fill(elementIdentifier, input);
};
exports.inputElementValue = inputElementValue;
const selectElementValue = async (page, elementIdentifier, option) => {
  await page.focus(elementIdentifier);
  await page.selectOption(elementIdentifier, option);
};
exports.selectElementValue = selectElementValue;
const checkElement = async (page, elementIdentifier) => {
  await page.check(elementIdentifier);
};
exports.checkElement = checkElement;
const uncheckElement = async (page, elementIdentifier) => {
  await page.uncheck(elementIdentifier);
};
exports.uncheckElement = uncheckElement;
const inputValueOnIframe = async (elementIframe, elementIdentifier, inputValue) => {
  await elementIframe.fill(elementIdentifier, inputValue);
};
exports.inputValueOnIframe = inputValueOnIframe;
const inputValueOnPage = async (pages, pageIndex, elementIdentifier, inputValue) => {
  await pages[pageIndex].focus(elementIdentifier);
  await pages[pageIndex].fill(elementIdentifier, inputValue);
};
exports.inputValueOnPage = inputValueOnPage;
const scrollElementIntoView = async (page, elementIdentifier) => {
  const element = page.locator(elementIdentifier);
  await element.scrollIntoViewIfNeeded();
};
exports.scrollElementIntoView = scrollElementIntoView;
const getElement = async (page, elementIdentifier) => {
  const element = await page.locator(elementIdentifier).first().elementHandle();
  return element;
};
exports.getElement = getElement;
const getElements = async (page, elementIdentifier) => {
  const elements = await page.locator(elementIdentifier).elementHandles();
  return elements;
};
exports.getElements = getElements;
const getElementAtIndex = async (page, elementIdentifier, index) => {
  const elementAtIndex = await page.locator(elementIdentifier).nth(index).elementHandle();
  return elementAtIndex;
};
exports.getElementAtIndex = getElementAtIndex;
const getElementValue = async (page, elementIdentifier) => {
  const value = await page.locator(elementIdentifier).inputValue();
  return value;
};
exports.getElementValue = getElementValue;
const getIframeElement = async (page, iframeIdentifier) => {
  const elementHandle = await page.locator(iframeIdentifier).elementHandle();
  const elementIframe = await elementHandle?.contentFrame();
  return elementIframe;
};
exports.getIframeElement = getIframeElement;
const getElementWithinIframe = async (elementIframe, elementIdentifier) => {
  const visibleOnIframeElement = await elementIframe?.locator(elementIdentifier).elementHandle();
  return visibleOnIframeElement;
};
exports.getElementWithinIframe = getElementWithinIframe;
const getTextWithinIframeElement = async (elementIframe, elementIdentifier) => {
  const textOnIframeElement = await elementIframe?.textContent(elementIdentifier);
  return textOnIframeElement;
};
exports.getTextWithinIframeElement = getTextWithinIframeElement;
const getTitleWithinPage = async (page, pages, pageIndex) => {
  const titleWithinPage = await pages[pageIndex].title();
  return titleWithinPage;
};
exports.getTitleWithinPage = getTitleWithinPage;
const getElementOnPage = async (page, elementIdentifier, pages, pageIndex) => {
  const elementOnPage = await pages[pageIndex].locator(elementIdentifier).elementHandle();
  return elementOnPage;
};
exports.getElementOnPage = getElementOnPage;
const getElementTextWithinPage = async (page, elementIdentifier, pages, pageIndex) => {
  const textWithinPage = await pages[pageIndex].textContent(elementIdentifier);
  return textWithinPage;
};
exports.getElementTextWithinPage = getElementTextWithinPage;
const getAttributeText = async (page, elementIdentifier, attribute) => {
  const attributeText = await page.locator(elementIdentifier).getAttribute(attribute);
  return attributeText;
};
exports.getAttributeText = getAttributeText;
const getElementText = async (page, elementIdentifier) => {
  const text = await page.textContent(elementIdentifier);
  return text;
};
exports.getElementText = getElementText;
const getElementTextAtIndex = async (page, elementIdentifier, index) => {
  const textAtIndex = await page.locator(elementIdentifier).nth(index).textContent();
  return textAtIndex;
};
exports.getElementTextAtIndex = getElementTextAtIndex;
const getTableData = async (page, elementIdentifier) => {
  const rows = await page.locator(`${elementIdentifier} tbody tr`).all();
  const table = await Promise.all(rows.map(async row => {
    const cells = await row.locator('td').all();
    return Promise.all(cells.map(cell => cell.textContent()));
  }));
  return JSON.stringify(table);
};
exports.getTableData = getTableData;
const elementEnabled = async (page, elementIdentifier) => {
  const enabled = await page.isEnabled(elementIdentifier);
  return enabled;
};
exports.elementEnabled = elementEnabled;
const elementChecked = async (page, elementIdentifier) => {
  const checked = await page.isChecked(elementIdentifier);
  return checked;
};
exports.elementChecked = elementChecked;