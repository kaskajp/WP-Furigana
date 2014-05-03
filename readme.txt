=== WP-Furigana ===
Contributors: KASKA
Tags: japanese, language, tinymce
Requires at least: 3.3.1
Tested up to: 3.9
Stable tag: 1.2

WP-Furigana enables you to add Furigana (a Japanese reading aid) using the visual editor. No knowledge of the ruby HTML tag is needed.

== Installation ==

1. Download and Extract the zip file and just drop the folder "wpfurigana" into the wp-content/plugins/ directory of your WordPress installation.
2. Activate the Plugin "WP-Furigana" on your "Plugins" page.
3. Go to view a post or page and you'll see a yellow button with the character "ぶ".
4. To use WP-Furigana, you highlight a piece of text, click the WP-Furigana button and add your help text.

== Frequently Asked Questions ==

= Why am I seeing empty ruby tags in the HTML editor? =

If you remove furigana in the visual editor, parts of the ruby tag will remain. It's very important not to leave empty ruby tags so the WordPress editor is cleaned up each time you add a new furigana. If you don't add any furigana after removing them in the visual editor, use the cleanup button introduced in the latest version of WP-Furigana.

= The furigana is too close to my text! =

This plugin uses a custom CSS for Firefox, therefore your text's line-height is very important. Never give your text's line-height a value lower than the default (1).

= Why is the furigana not working in the visual editor in Firefox? =

Firefox is only supported at the front-end at the moment. The furigana has been colored blue though so it's possible to edit it in Firefox.

= Why can't I use the rp tag? =

The rp tag is not supported in this version of WP-Furigana.

= Why is the plugin not working correctly in Internet Explorer? =

Internet Explorer supports furigana and reading it works just fine, however, the plugin itself has not, and will not be tested in IE in a foreseeable future.

== Changelog ==

= 1.2 =
* Testing and fixing plugin for WordPress 3.9

= 1.1 =
* Updated credits as plugin home has moved.
* Testing plugin on WordPress 3.8

= 1.0 =
* Added the cleanup button.

= 0.5 =
* First version of WP-Furigana.

== Upgrade Notice ==

= 1.0 =
Added the cleanup button. Use this to remove empty ruby tags left behind when editing/removing furigana in the visual editor.

= 0.5 =
First version of WP-Furigana.