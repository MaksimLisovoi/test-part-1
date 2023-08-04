/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_sass_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/sass/main.css */ \"./src/styles/sass/main.css\");\n/* harmony import */ var _js_showArchivedNotes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/showArchivedNotes */ \"./src/js/showArchivedNotes.js\");\n/* harmony import */ var _js_noteApi_noteApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/noteApi/noteApi */ \"./src/js/noteApi/noteApi.js\");\n/* harmony import */ var _js_templates_commonTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/templates/commonTable */ \"./src/js/templates/commonTable.js\");\n/* harmony import */ var _js_templates_archivedTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/templates/archivedTable */ \"./src/js/templates/archivedTable.js\");\n/* harmony import */ var _js_notes_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/notes-modal */ \"./src/js/notes-modal.js\");\n/* harmony import */ var _js_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/form */ \"./src/js/form.js\");\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://radency-test-part1/./src/index.js?");

/***/ }),

/***/ "./src/js/dataForApp/notes.js":
/*!************************************!*\
  !*** ./src/js/dataForApp/notes.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   notes: () => (/* binding */ notes)\n/* harmony export */ });\nvar notes = [{\n  id: 1,\n  name: 'Shoping List',\n  created: 'May 21, 2023',\n  category: 'Task',\n  content: 'Should go to the store to buy products for Bolognese pasta, such as: beef, basil, noodles',\n  isArchived: false\n}, {\n  id: 2,\n  name: 'The theory of evolution',\n  created: 'May 27, 2023',\n  category: 'Idea',\n  content: 'Power doesn`t matter, without courage!',\n  isArchived: false\n}, {\n  id: 3,\n  name: 'The theory of evolution',\n  created: 'May 27, 2023',\n  category: 'Random Thought',\n  content: 'Two assure edward whence the was. Who worthy yet ten boy denote wonder. Weeks views her sight old tears sorry. Additions can suspected its concealed put furnished. Met the why particular devonshire decisively considered partiality. Certain it waiting no entered is. Passed her indeed uneasy shy polite appear denied. Oh less girl no walk. At he spot with five of view.',\n  isArchived: false\n}, {\n  id: 4,\n  name: 'The theory of evolution',\n  created: 'May 27, 2023',\n  category: 'Random Thought',\n  content: 'Style never met and those among great. At no or september sportsmen he perfectly happiness attending. Depending listening delivered off new she procuring satisfied sex existence. Person plenty answer to exeter it if. Law use assistance especially resolution cultivated did out sentiments unsatiable. Way necessary had intention happiness but september delighted his curiosity. Furniture furnished or on strangers neglected remainder engrossed.',\n  isArchived: false\n}, {\n  id: 5,\n  name: 'The theory of evolution',\n  created: 'May 27, 2023',\n  category: 'Quote',\n  content: 'Style never met and those among great. At no or september sportsmen he perfectly happiness attending. Depending listening delivered off new she procuring satisfied sex existence. Person plenty answer to exeter it if. Law use assistance especially resolution cultivated did out sentiments unsatiable. Way necessary had intention happiness but september delighted his curiosity. Furniture furnished or on strangers neglected remainder engrossed.',\n  isArchived: false\n}, {\n  id: 6,\n  name: 'The theory of evolution',\n  created: 'May 27, 2023',\n  category: 'Random Thought',\n  content: 'Style never met and those among great. At no or september sportsmen he perfectly happiness attending. Depending listening delivered off new she procuring satisfied sex existence. Person plenty answer to exeter it if. Law use assistance especially resolution cultivated did out sentiments unsatiable. Way necessary had intention happiness but september delighted his curiosity. Furniture furnished or on strangers neglected remainder engrossed.',\n  isArchived: false\n}, {\n  id: 7,\n  name: 'The theory of evolution',\n  created: 'May 27, 2023',\n  category: 'Random Thought',\n  content: 'He share of first to worse. Weddings and any opinions suitable smallest nay. My he houses or months settle remove ladies appear. Engrossed suffering supposing he recommend do eagerness. Commanded no of depending extremity recommend attention tolerably. Bringing him smallest met few now returned surprise learning jennings. Objection delivered eagerness he exquisite at do in. Warmly up he nearer mr merely me.',\n  isArchived: false\n}];\n\n//# sourceURL=webpack://radency-test-part1/./src/js/dataForApp/notes.js?");

/***/ }),

/***/ "./src/js/form.js":
/*!************************!*\
  !*** ./src/js/form.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _refs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./refs */ \"./src/js/refs.js\");\n/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nanoid */ \"./node_modules/nanoid/index.browser.js\");\n/* harmony import */ var _dataForApp_notes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataForApp/notes */ \"./src/js/dataForApp/notes.js\");\n/* harmony import */ var _templates_commonTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates/commonTable */ \"./src/js/templates/commonTable.js\");\n/* harmony import */ var _templates_archivedTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates/archivedTable */ \"./src/js/templates/archivedTable.js\");\n/* harmony import */ var _regexes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./regexes */ \"./src/js/regexes.js\");\n/* harmony import */ var _notes_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notes-modal */ \"./src/js/notes-modal.js\");\n\n\n\n\n\n\n\n_refs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].notesForm.addEventListener('submit', submitHandler);\nfunction submitHandler(e) {\n  e.preventDefault();\n  var formData = new FormData(_refs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].notesForm);\n  var content = formData.get('content');\n  var createdDate = new Date().toLocaleDateString('en-us', {\n    year: 'numeric',\n    month: 'short',\n    day: 'numeric'\n  });\n  formData.append('created', createdDate);\n  formData.append('id', (0,nanoid__WEBPACK_IMPORTED_MODULE_6__.nanoid)());\n  content.match(_regexes__WEBPACK_IMPORTED_MODULE_4__.datesRegex) ? formData.append('dates', content.match(_regexes__WEBPACK_IMPORTED_MODULE_4__.datesRegex)) : formData.append('dates', '');\n  var dataObject = Object.fromEntries(formData.entries());\n  dataObject.isArchived = false;\n  var currentNote = _dataForApp_notes__WEBPACK_IMPORTED_MODULE_1__.notes[_refs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].notesForm.id];\n  var refreshPage = function refreshPage() {\n    (0,_templates_commonTable__WEBPACK_IMPORTED_MODULE_2__.refreshTable)();\n    (0,_templates_archivedTable__WEBPACK_IMPORTED_MODULE_3__.archiveTable)();\n    (0,_notes_modal__WEBPACK_IMPORTED_MODULE_5__.closeModal)();\n  };\n  try {\n    if (currentNote) {\n      currentNote.name = dataObject.name;\n      currentNote.category = dataObject.category;\n      currentNote.content = dataObject.content;\n      refreshPage();\n      return;\n    }\n    _dataForApp_notes__WEBPACK_IMPORTED_MODULE_1__.notes.push(dataObject);\n    refreshPage();\n  } catch (error) {\n    console.log(error);\n  }\n}\n\n//# sourceURL=webpack://radency-test-part1/./src/js/form.js?");

/***/ }),

/***/ "./src/js/noteApi/noteApi.js":
/*!***********************************!*\
  !*** ./src/js/noteApi/noteApi.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteNote: () => (/* binding */ deleteNote)\n/* harmony export */ });\n/* harmony import */ var _refs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../refs */ \"./src/js/refs.js\");\n/* harmony import */ var _templates_commonTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/commonTable */ \"./src/js/templates/commonTable.js\");\n/* harmony import */ var _templates_archivedTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../templates/archivedTable */ \"./src/js/templates/archivedTable.js\");\n/* harmony import */ var _dataForApp_notes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dataForApp/notes */ \"./src/js/dataForApp/notes.js\");\n/* harmony import */ var _notes_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../notes-modal */ \"./src/js/notes-modal.js\");\n\n\n\n\n\nvar currentNote = function currentNote(id) {\n  return _dataForApp_notes__WEBPACK_IMPORTED_MODULE_3__.notes.indexOf(_dataForApp_notes__WEBPACK_IMPORTED_MODULE_3__.notes.find(function (note) {\n    return String(note.id) === id;\n  }));\n};\nfunction eventTargetCheck(e) {\n  console.dir(e.target);\n  if (e.target.className === 'js-table-btn-update' || e.target.className === 'table-notes__row--column') {\n    updateItem(e);\n    (0,_templates_commonTable__WEBPACK_IMPORTED_MODULE_1__.refreshTable)();\n  } else if (e.target.className === 'js-table-btn-del') {\n    deleteNote(e);\n    (0,_templates_commonTable__WEBPACK_IMPORTED_MODULE_1__.refreshTable)();\n    (0,_templates_archivedTable__WEBPACK_IMPORTED_MODULE_2__.archiveTable)();\n  } else if (e.target.className === 'js-table-btn-archive') {\n    archiveNote(e);\n    (0,_templates_commonTable__WEBPACK_IMPORTED_MODULE_1__.refreshTable)();\n    (0,_templates_archivedTable__WEBPACK_IMPORTED_MODULE_2__.archiveTable)();\n  }\n}\nfunction deleteNote(e) {\n  var id = e.target.parentNode.id;\n  var note = _dataForApp_notes__WEBPACK_IMPORTED_MODULE_3__.notes.splice(currentNote(id), 1);\n  return note;\n}\nfunction archiveNote(e) {\n  var id = e.target.parentNode.id;\n  _dataForApp_notes__WEBPACK_IMPORTED_MODULE_3__.notes[currentNote(id)].isArchived = !_dataForApp_notes__WEBPACK_IMPORTED_MODULE_3__.notes[currentNote(id)].isArchived;\n}\nfunction updateItem(e) {\n  var id = e.target.parentNode.id;\n  var clickedNote = _dataForApp_notes__WEBPACK_IMPORTED_MODULE_3__.notes[currentNote(id)];\n  _refs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].notesForm[0].value = clickedNote.name;\n  _refs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].notesForm[1].value = clickedNote.category;\n  _refs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].notesForm[2].value = clickedNote.content;\n  _refs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].notesForm.id = currentNote(id);\n  _refs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addNoteBtn.textContent = 'Update Note';\n  (0,_notes_modal__WEBPACK_IMPORTED_MODULE_4__.openModal)();\n}\n_refs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].notesTableBody.addEventListener('click', eventTargetCheck);\n\n//# sourceURL=webpack://radency-test-part1/./src/js/noteApi/noteApi.js?");

/***/ }),

/***/ "./src/js/notes-modal.js":
/*!*******************************!*\
  !*** ./src/js/notes-modal.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeModal: () => (/* binding */ closeModal),\n/* harmony export */   openModal: () => (/* binding */ openModal)\n/* harmony export */ });\n/* harmony import */ var _refs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./refs */ \"./src/js/refs.js\");\n\nvar notesModalOverlay = _refs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].notesModalOverlay,\n  notesModalOpenBtn = _refs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].notesModalOpenBtn,\n  notesModalCloseBtn = _refs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].notesModalCloseBtn;\nvar clearNoteValues = function clearNoteValues() {\n  _refs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].notesForm.id = '';\n  _refs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].notesForm[0].value = '';\n  _refs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].notesForm[1].value = '';\n  _refs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].notesForm[2].value = '';\n};\nvar openModal = function openModal() {\n  notesModalOverlay.classList.remove('is-hidden');\n  document.addEventListener('keydown', escapeModalHandler);\n};\nvar closeModal = function closeModal() {\n  notesModalOverlay.classList.add('is-hidden');\n  document.removeEventListener('keydown', escapeModalHandler);\n  clearNoteValues();\n  _refs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addNoteBtn.textContent = 'Add Note';\n};\nvar escapeModalHandler = function escapeModalHandler(e) {\n  if (e.key === 'Escape') {\n    closeModal();\n  }\n};\nvar clickModalHandler = function clickModalHandler(e) {\n  if (e.target === notesModalOverlay || e.target === notesModalCloseBtn) {\n    closeModal();\n  }\n};\nnotesModalOverlay.addEventListener('click', clickModalHandler);\nnotesModalOpenBtn.addEventListener('click', openModal);\n\n//# sourceURL=webpack://radency-test-part1/./src/js/notes-modal.js?");

/***/ }),

/***/ "./src/js/refs.js":
/*!************************!*\
  !*** ./src/js/refs.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  notesForm: document.querySelector('.js-form-notes'),\n  notesModalOverlay: document.querySelector('.js-notes-modal__overlay'),\n  notesModalOpenBtn: document.querySelector('.js-notes-modal__btn'),\n  notesModalCloseBtn: document.querySelector('.js-notes-modal__btn-close'),\n  tableSummary: document.querySelector('.js-table-summary'),\n  addNoteBtn: document.querySelector('.js-add-note-btn'),\n  tableSection: document.querySelector('.js-section-notes__body'),\n  notesTableBody: document.querySelector('.js-table-body'),\n  notesBtnDel: document.querySelector('.js-table-btn-del'),\n  archiveBtn: document.querySelector('.js-archive-btn')\n});\n\n//# sourceURL=webpack://radency-test-part1/./src/js/refs.js?");

/***/ }),

/***/ "./src/js/regexes.js":
/*!***************************!*\
  !*** ./src/js/regexes.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   datesRegex: () => (/* binding */ datesRegex)\n/* harmony export */ });\nvar datesRegex = /\\d{2}([\\/.-])\\d{2}\\1\\d{4}/g;\n\n//# sourceURL=webpack://radency-test-part1/./src/js/regexes.js?");

/***/ }),

/***/ "./src/js/showArchivedNotes.js":
/*!*************************************!*\
  !*** ./src/js/showArchivedNotes.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _refs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./refs */ \"./src/js/refs.js\");\n/* harmony import */ var _templates_commonTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates/commonTable */ \"./src/js/templates/commonTable.js\");\n\n\n_refs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].archiveBtn.addEventListener('click', archiveBtnClickHandler, false);\nfunction archiveBtnClickHandler(e) {\n  if (e.target.closest('.js-archive-btn')) {\n    _refs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].archiveBtn.classList.toggle('is-clicked');\n    (0,_templates_commonTable__WEBPACK_IMPORTED_MODULE_1__.refreshTable)();\n  }\n}\n\n//# sourceURL=webpack://radency-test-part1/./src/js/showArchivedNotes.js?");

/***/ }),

/***/ "./src/js/templates/archivedTable.js":
/*!*******************************************!*\
  !*** ./src/js/templates/archivedTable.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   archiveTable: () => (/* binding */ archiveTable)\n/* harmony export */ });\n/* harmony import */ var _dataForApp_notes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dataForApp/notes */ \"./src/js/dataForApp/notes.js\");\n/* harmony import */ var _refs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../refs */ \"./src/js/refs.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\nfunction archiveTable() {\n  if (!_dataForApp_notes__WEBPACK_IMPORTED_MODULE_0__.notes) {\n    return;\n  }\n  var notesAmount = _dataForApp_notes__WEBPACK_IMPORTED_MODULE_0__.notes.reduce(function (acc, note) {\n    var _acc$active, _acc$active2, _acc$archived, _acc$archived2;\n    return _objectSpread(_objectSpread({}, acc), {}, {\n      active: note.isArchived ? _objectSpread(_objectSpread({}, acc.active), {}, _defineProperty({}, note.category, (acc === null || acc === void 0 || (_acc$active = acc.active) === null || _acc$active === void 0 ? void 0 : _acc$active[note.category]) || 0)) : _objectSpread(_objectSpread({}, acc.active), {}, _defineProperty({}, note.category, ((acc === null || acc === void 0 || (_acc$active2 = acc.active) === null || _acc$active2 === void 0 ? void 0 : _acc$active2[note.category]) || 0) + 1)),\n      archived: !note.isArchived ? _objectSpread(_objectSpread({}, acc.archived), {}, _defineProperty({}, note.category, (acc === null || acc === void 0 || (_acc$archived = acc.archived) === null || _acc$archived === void 0 ? void 0 : _acc$archived[note.category]) || 0)) : _objectSpread(_objectSpread({}, acc.archived), {}, _defineProperty({}, note.category, ((acc === null || acc === void 0 || (_acc$archived2 = acc.archived) === null || _acc$archived2 === void 0 ? void 0 : _acc$archived2[note.category]) || 0) + 1))\n    });\n  }, {});\n  var allCategories = _objectSpread(_objectSpread({}, notesAmount.active), notesAmount.isArchived);\n  _refs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tableSummary.innerHTML = Object.keys(allCategories).map(function (category) {\n    return \"<tr class=\\\"table-notes__row\\\">\\n                    <td class=\\\"table-notes__row--column\\\"></td>\\n                    <td class=\\\"table-notes__row--column\\\">\".concat(category, \"</td>\\n                    <td class=\\\"table-notes__row--column\\\">\").concat(notesAmount.active[category] || 0, \"</td>\\n                    <td class=\\\"table-notes__row--column\\\">\").concat(notesAmount.archived[category] || 0, \"</td>\\n                  </tr>\");\n  }).join('');\n}\narchiveTable();\n\n//# sourceURL=webpack://radency-test-part1/./src/js/templates/archivedTable.js?");

/***/ }),

/***/ "./src/js/templates/commonTable.js":
/*!*****************************************!*\
  !*** ./src/js/templates/commonTable.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   refreshTable: () => (/* binding */ refreshTable)\n/* harmony export */ });\n/* harmony import */ var _dataForApp_notes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dataForApp/notes */ \"./src/js/dataForApp/notes.js\");\n/* harmony import */ var _refs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../refs */ \"./src/js/refs.js\");\n\n\nrefreshTable();\nfunction refreshTable() {\n  if (!_dataForApp_notes__WEBPACK_IMPORTED_MODULE_0__.notes) {\n    return;\n  }\n  var isArchivedBtnClicked = _refs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].archiveBtn.classList.contains('is-clicked');\n  _refs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].notesTableBody.innerHTML = !isArchivedBtnClicked ? _dataForApp_notes__WEBPACK_IMPORTED_MODULE_0__.notes.map(function (note) {\n    var id = note.id,\n      name = note.name,\n      icon = note.icon,\n      created = note.created,\n      category = note.category,\n      content = note.content,\n      isArchived = note.isArchived;\n    var contentCheck = content.length > 20 ? content.slice(0, 20) + '...' : content;\n    var datesCheck = note.dates ? note.dates : '';\n    if (isArchived === false) {\n      return \"<tr id=\\\"\".concat(id, \"\\\" class=\\\"table-notes__row \\\" >\\n                    <td class=\\\"table-notes__row--column\\\"></td>\\n                    <td class=\\\"table-notes__row--column\\\">\").concat(name, \"</td>\\n                    <td class=\\\"table-notes__row--column\\\">\").concat(created, \"</td>\\n                    <td class=\\\"table-notes__row--column\\\">\").concat(category, \"</td>\\n                    <td class=\\\"table-notes__row--column\\\">\").concat(contentCheck, \"</td>\\n                    <td class=\\\"table-notes__row--column\\\">\").concat(datesCheck, \"</td>\\n                    <td>\\n                        <div id=\\\"\").concat(id, \"\\\" class='table-notes__btn-block'>\\n                          <button  class=\\\"js-table-btn-update\\\"><svg class=\\\"table-notes__btn-icon\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 512 512\\\"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\\\"M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z\\\"/></svg></button>\\n                          <button class=\\\"js-table-btn-del\\\"><svg class=\\\"table-notes__btn-icon\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 448 512\\\"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\\\"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z\\\"/></svg></i></button>\\n                          <button  class=\\\"js-table-btn-archive\\\"><svg class=\\\"table-notes__btn-icon\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 512 512\\\"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\\\"M32 32H480c17.7 0 32 14.3 32 32V96c0 17.7-14.3 32-32 32H32C14.3 128 0 113.7 0 96V64C0 46.3 14.3 32 32 32zm0 128H480V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V160zm128 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z\\\"/></svg></button>\\n                        </div>\\n                      </td>\\n\\n                  </tr>\");\n    }\n  }).join('') : _dataForApp_notes__WEBPACK_IMPORTED_MODULE_0__.notes.map(function (note) {\n    var id = note.id,\n      name = note.name,\n      created = note.created,\n      category = note.category,\n      content = note.content,\n      isArchived = note.isArchived;\n    var contentCheck = content.length > 20 ? content.slice(0, 20) + '...' : content;\n    var datesCheck = note.dates ? note.dates : '';\n    if (isArchived === true) {\n      return \"<tr class=\\\"table-notes__row \\\" >\\n                    <td class=\\\"table-notes__row--column\\\"></td>\\n                    <td class=\\\"table-notes__row--column \\\">\".concat(name, \"</td>\\n                    <td class=\\\"table-notes__row--column\\\">\").concat(created, \"</td>\\n                    <td class=\\\"table-notes__row--column\\\">\").concat(category, \"</td>\\n                    <td class=\\\"table-notes__row--column\\\">\").concat(contentCheck, \"</td>\\n                    <td class=\\\"table-notes__row--column\\\">\").concat(datesCheck, \"</td>\\n                    <td>\\n                        <div id=\\\"\").concat(id, \"\\\" class='table-notes__btn-block'>\\n                          <button class=\\\"js-table-btn-update\\\"><svg class=\\\"table-notes__btn-icon\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 512 512\\\"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\\\"M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z\\\"/></svg></button>\\n                          <button class=\\\"js-table-btn-del\\\"><svg class=\\\"table-notes__btn-icon\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 448 512\\\"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\\\"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z\\\"/></svg></i></button>\\n                          <button class=\\\"js-table-btn-archive\\\"><svg class=\\\"table-notes__btn-icon\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 512 512\\\"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\\\"M32 32H480c17.7 0 32 14.3 32 32V96c0 17.7-14.3 32-32 32H32C14.3 128 0 113.7 0 96V64C0 46.3 14.3 32 32 32zm0 128H480V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V160zm128 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z\\\"/></svg></button>\\n                        </div>\\n                      </td>\\n\\n                  </tr>\");\n    }\n  }).join('');\n}\n\n//# sourceURL=webpack://radency-test-part1/./src/js/templates/commonTable.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/sass/main.css":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/sass/main.css ***!
  \*********************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../images/icons/icon-close.svg */ \"./src/images/icons/icon-close.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.container {\n  width: 100%;\n  padding-left: 18px;\n  padding-right: 18px;\n  margin-left: auto;\n  margin-right: auto; }\n\n@media (min-width: 1320px) {\n  .container {\n    max-width: 1320px;\n    padding-left: 12px;\n    padding-right: 12px; } }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0; }\n\np {\n  margin: 0; }\n\na {\n  -webkit-text-decoration: none;\n  text-decoration: none;\n  color: #000000; }\n\ninput {\n  margin: 0;\n  padding: 0; }\n\nbutton {\n  padding: 0;\n  background-color: transparent;\n  color: #000000;\n  border: none;\n  cursor: pointer; }\n\nfigure {\n  margin: 0;\n  padding: 0; }\n\nbody {\n  background-color: #fbf9f7;\n  color: #000000;\n  font-family: roboto, sans-serif; }\n\nul {\n  margin: 0;\n  padding: 0; }\n\nli {\n  list-style: none;\n  padding: 0;\n  margin: 0; }\n\nimg {\n  display: block;\n  height: auto; }\n\n.page {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.wrapper {\n  min-height: 100%;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.section-notes__body {\n  padding-top: 60px; }\n\n.section-notes__btn {\n  display: block;\n  margin-top: 16px;\n  margin-right: auto;\n  margin-left: auto;\n  padding: 12px 16px 12px 16px;\n  border: 1px solid #383838;\n  border-radius: 5px;\n  -webkit-transition: background-color cubic-bezier(0.4, 0, 0.2, 1) 250ms;\n  transition: background-color cubic-bezier(0.4, 0, 0.2, 1) 250ms;\n  font-size: 18px;\n  font-weight: 400; }\n\n.section-notes__btn:hover {\n  background-color: #383838;\n  color: #fbf9f7; }\n\n.table-notes {\n  width: 100%; }\n\n.table-notes tr {\n  margin-bottom: 10px; }\n\n.table-notes__header {\n  background-color: #383838;\n  color: #fbf9f7; }\n\n.table-notes__header th {\n  padding: 20px;\n  font-size: 18px; }\n\n.table-notes__icon-row {\n  width: 30px; }\n\n.table-notes__row {\n  background-color: #f5f4fa; }\n\n.table-notes__row:hover {\n  cursor: pointer;\n  background-color: #e6e1db;\n  -webkit-transition: background-color cubic-bezier(0.4, 0, 0.2, 1) 250ms;\n  transition: background-color cubic-bezier(0.4, 0, 0.2, 1) 250ms; }\n\n.table-notes__row.is-archived {\n  display: none; }\n\n.table-notes__row--column {\n  padding: 20px; }\n\n.table-notes__btn-icon {\n  pointer-events: none;\n  width: 26px;\n  height: 26px;\n  fill: #383838;\n  -webkit-transition: fill cubic-bezier(0.4, 0, 0.2, 1) 250ms;\n  transition: fill cubic-bezier(0.4, 0, 0.2, 1) 250ms; }\n\n.table-notes__btn-icon:hover {\n  fill: #868483;\n  -webkit-transform: scale(1.12);\n          transform: scale(1.12); }\n\n.table-notes__btn-block {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.table-notes__btn-block button {\n  padding: 8px;\n  -webkit-transition: -webkit-transform cubic-bezier(0.4, 0, 0.2, 1) 250ms;\n  transition: -webkit-transform cubic-bezier(0.4, 0, 0.2, 1) 250ms;\n  transition: transform cubic-bezier(0.4, 0, 0.2, 1) 250ms;\n  transition: transform cubic-bezier(0.4, 0, 0.2, 1) 250ms, -webkit-transform cubic-bezier(0.4, 0, 0.2, 1) 250ms; }\n\n.table-notes__btn-block button:hover {\n  -webkit-transform: scale(1.12);\n          transform: scale(1.12); }\n\n.table-summary {\n  margin-top: 30px; }\n\n.archive-main-btn:hover {\n  -webkit-transform: scale(1.12);\n          transform: scale(1.12);\n  -webkit-transition: -webkit-transform cubic-bezier(0.4, 0, 0.2, 1) 250ms;\n  transition: -webkit-transform cubic-bezier(0.4, 0, 0.2, 1) 250ms;\n  transition: transform cubic-bezier(0.4, 0, 0.2, 1) 250ms;\n  transition: transform cubic-bezier(0.4, 0, 0.2, 1) 250ms, -webkit-transform cubic-bezier(0.4, 0, 0.2, 1) 250ms; }\n\n.archive-main-btn__icon {\n  fill: #e6e1db; }\n\n.archive-main-btn.is-clicked .archive-main-btn__icon {\n  fill: #e7dab1; }\n\n.section-notes__modal {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%;\n  padding: 20px; }\n\n.notes-modal {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 100%;\n  max-width: 600px;\n  min-height: 581px;\n  padding: 40px;\n  background-color: #fff;\n  -webkit-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);\n          box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);\n  -webkit-transition: opacity cubic-bezier(0.4, 0, 0.2, 1) 250ms;\n  transition: opacity cubic-bezier(0.4, 0, 0.2, 1) 250ms; }\n\n.notes-modal__content {\n  width: 100%; }\n\n.notes-modal__overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.8); }\n\n.notes-modal__overlay.is-hidden {\n  opacity: 0;\n  pointer-events: none;\n  visibility: hidden; }\n\n.notes-modal__btn {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 48px;\n  height: 48px;\n  padding: 0;\n  margin: 0;\n  border: none;\n  border-radius: 50%;\n  background-color: transparent;\n  color: #fff;\n  cursor: pointer;\n  -webkit-transition: background-color cubic-bezier(0.4, 0, 0.2, 1) 250ms;\n  transition: background-color cubic-bezier(0.4, 0, 0.2, 1) 250ms;\n  outline: none;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-position: center;\n  background-size: 60%;\n  background-repeat: no-repeat; }\n\n.notes-modal__btn:hover {\n  background-color: rgba(0, 0, 0, 0.5); }\n\n.form-notes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.form-notes__header {\n  text-align: center;\n  margin-bottom: 26px; }\n\n.form-notes textarea {\n  resize: none; }\n\n.form-notes label {\n  margin-bottom: 12px; }\n\n.form-notes select.decorated option:hover {\n  background-color: #e6e1db;\n  -webkit-transition: background-color cubic-bezier(0.4, 0, 0.2, 1) 250ms;\n  transition: background-color cubic-bezier(0.4, 0, 0.2, 1) 250ms; }\n\n.form-notes__input {\n  padding: 16px;\n  font-size: 18px; }\n\n.form-notes__input:not(:last-child) {\n  margin-bottom: 20px; }\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://radency-test-part1/./src/styles/sass/main.css?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://radency-test-part1/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://radency-test-part1/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://radency-test-part1/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/sass/main.css":
/*!**********************************!*\
  !*** ./src/styles/sass/main.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/sass/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://radency-test-part1/./src/styles/sass/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://radency-test-part1/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://radency-test-part1/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://radency-test-part1/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://radency-test-part1/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://radency-test-part1/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://radency-test-part1/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/images/icons/icon-close.svg":
/*!*****************************************!*\
  !*** ./src/images/icons/icon-close.svg ***!
  \*****************************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=\";\n\n//# sourceURL=webpack://radency-test-part1/./src/images/icons/icon-close.svg?");

/***/ }),

/***/ "./node_modules/nanoid/index.browser.js":
/*!**********************************************!*\
  !*** ./node_modules/nanoid/index.browser.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   customAlphabet: () => (/* binding */ customAlphabet),\n/* harmony export */   customRandom: () => (/* binding */ customRandom),\n/* harmony export */   nanoid: () => (/* binding */ nanoid),\n/* harmony export */   random: () => (/* binding */ random),\n/* harmony export */   urlAlphabet: () => (/* reexport safe */ _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__.urlAlphabet)\n/* harmony export */ });\n/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ \"./node_modules/nanoid/url-alphabet/index.js\");\n\nlet random = bytes => crypto.getRandomValues(new Uint8Array(bytes))\nlet customRandom = (alphabet, defaultSize, getRandom) => {\n  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1\n  let step = -~((1.6 * mask * defaultSize) / alphabet.length)\n  return (size = defaultSize) => {\n    let id = ''\n    while (true) {\n      let bytes = getRandom(step)\n      let j = step\n      while (j--) {\n        id += alphabet[bytes[j] & mask] || ''\n        if (id.length === size) return id\n      }\n    }\n  }\n}\nlet customAlphabet = (alphabet, size = 21) =>\n  customRandom(alphabet, size, random)\nlet nanoid = (size = 21) =>\n  crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {\n    byte &= 63\n    if (byte < 36) {\n      id += byte.toString(36)\n    } else if (byte < 62) {\n      id += (byte - 26).toString(36).toUpperCase()\n    } else if (byte > 62) {\n      id += '-'\n    } else {\n      id += '_'\n    }\n    return id\n  }, '')\n\n\n//# sourceURL=webpack://radency-test-part1/./node_modules/nanoid/index.browser.js?");

/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.js":
/*!***************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   urlAlphabet: () => (/* binding */ urlAlphabet)\n/* harmony export */ });\nconst urlAlphabet =\n  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'\n\n\n//# sourceURL=webpack://radency-test-part1/./node_modules/nanoid/url-alphabet/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;