(function($) {
	tinymce.create('tinymce.plugins.Furigana', {
		init : function(ed, url) {
			ed.addButton('furigana', {
				title : 'Add Furigana',
				image : url+'/assets/furigana.png',
				onclick : function(v) {
					var sel_text = 0;
					var editor  = tinyMCE.activeEditor;
					
					if (editor.selection.getContent()) {
					    content = editor.selection.getContent();
					    sel_text = 1;
					} else {
					    content = editor.getContent();
					}
					
					var furigana = prompt("Insert Furigana", "");
					
					if(furigana){
						ed.execCommand('mceInsertContent', false, '<ruby><rb>'+content+'</rb><rt>'+furigana+'</rt></ruby>');
						
						var endContent = $(editor.getContent());
						$('ruby', endContent).each(function(){
							var plainText = $('rb', $(this)).text();
							if( $('rt', $(this)).length < 1 ) {
								$(this).closest('ruby').before(plainText).remove();
								var newHtml = '';
								endContent.each(function(index,value) {
									newHtml += $(value).clone().wrap('<p>').parent().html();
								});
								ed.setContent(newHtml);
							}
						});
					}
				}
			});
			ed.addButton('furiganacleaner', {
				title : 'Furigana Cleaner (removes empty ruby tags)',
				image : url+'/assets/furiganacleaner.png',
				onclick : function(v) {
					var sel_text = 0;
					var editor  = tinyMCE.activeEditor;
					
					if (editor.selection.getContent()) {
					    content = editor.selection.getContent();
					    sel_text = 1;
					} else {
					    content = editor.getContent();
					}
				
					var endContent = $(editor.getContent());
					$('ruby', endContent).each(function(){
						var plainText = $('rb', $(this)).text();
						if( $('rt', $(this)).length < 1 || $('rt', $(this)).text() == '' ) {
							$(this).closest('ruby').before(plainText).remove();
							var newHtml = '';
							endContent.each(function(index,value) {
								newHtml += $(value).clone().wrap('<p>').parent().html();
							});
							ed.setContent(newHtml);
						}
					});
				}
			});
		},
		createControl : function(n, cm) {
			return null;
		},
		getInfo : function() {
			return {
				longname : "WP-Furigana"
			};
		}
	});
	tinymce.PluginManager.add('furigana', tinymce.plugins.Furigana);
	
})(jQuery);