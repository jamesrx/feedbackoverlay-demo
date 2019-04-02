import React from 'react';
import ReactDOM from 'react-dom';
import SettingsForm from './components/SettingsForm';
import FeedbackOverlay from './components/FeedbackOverlay';
import * as stubs from './stubs/demoStubs';

const settingsForm = document.getElementById('settings-form-root');
ReactDOM.render(<SettingsForm />, settingsForm);

const sampleUrlEl = document.getElementById('sample-url');
const feedbackOverlay = document.getElementById('feedback-overlay-root');

const urlClickHandler = function urlClickHandler(e) {
  if (e.target.classList.contains('url')) {
    ReactDOM.unmountComponentAtNode(feedbackOverlay);
    stubs.location.pathname = e.target.innerText;
    sampleUrlEl.innerText = stubs.location.pathname;
    ReactDOM.render(<FeedbackOverlay />, feedbackOverlay);
  }
};

document.getElementById('url-table').addEventListener('click', urlClickHandler);
