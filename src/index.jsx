import React from 'react';
import ReactDOM from 'react-dom';
import SettingsForm from './components/SettingsForm';
import FeedbackOverlay from './components/FeedbackOverlay';
import * as stubs from './demoStubs';

const settingsForm = document.getElementById('settings-form-root');
ReactDOM.render(<SettingsForm />, settingsForm);

const feedbackOverlay = document.getElementById('feedback-overlay-root');

const urlClickHandler = function urlClickHandler(e) {
  if (e.target.classList.contains('url')) {
    ReactDOM.unmountComponentAtNode(feedbackOverlay);
    stubs.location.pathname = e.target.innerText;
    document.getElementById('sample-url').innerText = stubs.location.pathname;
    ReactDOM.render(<FeedbackOverlay />, feedbackOverlay);
  }
};

document.getElementById('url-table').addEventListener('click', urlClickHandler);
