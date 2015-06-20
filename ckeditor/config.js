/**
 * @license Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';

  config.toolbarGroups = [
    { name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
    { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
    { name: 'editing', groups: [ 'find', 'selection', 'spellchecker' ] },
    { name: 'forms' },
    { name: 'links' },
    { name: 'insert' },
    { name: 'liteTB', groups: ['lite']},
    '/',
    { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
    { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
    { name: 'colors' },
    { name: 'styles' },
    { name: 'tools' },
    { name: 'others' },
    { name: 'about' }
  ];

	config.extraPlugins = 'lineutils,widget,footnotes,lite';

  config.scayt_autoStartup = true;

  // Changes Tracking switched off by default
  var lite = config.lite = config.lite || {};
  lite.isTracking = true;

};
