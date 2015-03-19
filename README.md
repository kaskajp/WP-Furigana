# WP Furigana

WP-Furigana enables you to add Furigana (a Japanese reading aid) using the visual editor. No knowledge of the ruby HTML tag is needed.

Requires: WordPress 3.3.1 or newer
Tested up to: 3.9.1
Stable tag: 1.2.1

## Installation and usage:

1. Download and Extract the zip file and just drop the folder "wpfurigana" into the wp-content/plugins/ directory of your WordPress installation.

2. Activate the Plugin "WP Furigana" on your "Plugins" page.

3. Go to a post or page edit view and you'll see a yellow button with the character "ぶ".

4. To use WP Furigana, you highlight a piece of text, click the WP Furigana button and add your furigana.

5. Read about the known issues below.

## Known issues:

If you remove furigana in the visual editor, parts of the ruby tag will remain. It's very important not to leave empty ruby tags so the WordPress editor is cleaned up each time you add a new furigana. If you don't add any furigana after removing them in the visual editor, use the cleanup button introduced in the latest version of WP Furigana.

This plugin uses a custom CSS for Firefox, therefore, your text's line-height is very important. Never give your text's line-height a value lower than the default (1).

Furigana displays correctly in posts/pages in Firefox, but not in the editor itself. To be as kind as possible to bloggers with Firefox, at least the furigana in the editor is blue so it's easy to find.

The <rp> tag is not supported in the current version of WP Furigana.

### Internet Explorer:

Ruby is supported and displays correctly in Internet Explorer, however, the WordPress plugin itself has not been tested in the edit post/page view in Internet Explorer. So, the WP Furigana buttons may or may not play nice with you if you use IE.

## Frequently Asked Questions

### Why am I seeing empty ruby tags in the HTML editor?

If you remove furigana in the visual editor, parts of the ruby tag will remain. It's very important not to leave empty ruby tags so the WordPress editor is cleaned up each time you add a new furigana. If you don't add any furigana after removing them in the visual editor, use the cleanup button introduced in the latest version of WP-Furigana.

### The furigana is too close to my text!

This plugin uses a custom CSS for Firefox, therefore your text's line-height is very important. Never give your text's line-height a value lower than the default (1).

### Why is the furigana not working in the visual editor in Firefox?

Firefox is only supported at the front-end at the moment. The furigana has been colored blue though so it's possible to edit it in Firefox.

### Why can't I use the rp tag?

The rp tag is not supported in this version of WP-Furigana.

### Why is the plugin not working correctly in Internet Explorer?

Internet Explorer supports furigana and reading it works just fine, however, the plugin itself has not, and will not be tested in IE in a foreseeable future.

## Credits:

WP Furigana uses a modifed version of [Zoltan Hawryluk's ruby css](http://www.useragentman.com/blog/2010/10/29/cross-browser-html5-ruby-annotations-using-css/) which is based on [George Chavchanidze's](http://www.chavchanidze.com/) ruby css developed for [Prince XML](http://www.princexml.com/bb/viewtopic.php?t=81).