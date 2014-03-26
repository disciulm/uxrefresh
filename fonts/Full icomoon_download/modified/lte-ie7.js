/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icons_refresh\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-LOGO-Font' : '&#x52;',
			'icon-facebook' : '&#x21;',
			'icon-google-plus' : '&#x22;',
			'icon-twitter' : '&#x23;',
			'icon-feed' : '&#x24;',
			'icon-vimeo' : '&#x26;',
			'icon-wordpress' : '&#x27;',
			'icon-pinterest' : '&#x28;',
			'icon-mail' : '&#x29;',
			'icon-user' : '&#x2a;',
			'icon-bubbles' : '&#x2b;',
			'icon-arrow-right' : '&#x25;',
			'icon-linkedin' : '&#x2c;',
			'icon-warning' : '&#x61;',
			'icon-file' : '&#x74;',
			'icon-printer' : '&#x50;',
			'icon-file-pdf' : '&#x41;',
			'icon-music' : '&#x2d;',
			'icon-question' : '&#x71;',
			'icon-cross' : '&#x78;',
			'icon-ICON-arrows-down' : '&#x31;',
			'icon-ICON-arrows-left' : '&#x32;',
			'icon-ICON-arrows-right' : '&#x33;',
			'icon-ICON-arrows-up' : '&#x34;',
			'icon-UX-logomark-small' : '&#x55;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};