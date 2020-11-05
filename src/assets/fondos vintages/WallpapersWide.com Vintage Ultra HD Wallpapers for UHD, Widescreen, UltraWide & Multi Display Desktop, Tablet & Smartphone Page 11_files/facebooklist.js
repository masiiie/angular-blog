/*
  Moogets - TextboxList + Autocomplete 0.2
  - MooTools version required: 1.2
  - MooTools components required: Element.Event, Element.Style, Selectors, Request.JSON and dependencies.
  
  Credits:
  - Idea: Facebook
  
  Changelog:
  - 0.1: initial release
  - 0.2: added click support, removed $attributes use, code cleanup
*/

/* Copyright: Guillermo Rauch <http://devthought.com/> - Distributed under MIT - Keep this message! */

var FacebookList = new Class({
  
  Extends: TextboxList,
  
  options: {    
    onBoxDispose: function(item) { this.autoFeed(JSON.decode(item.retrieve('text'))); },
    onInputFocus: function() { this.autoShow(); },    
    onInputBlur: function(el) { 
      this.lastinput = el;
      this.blurhide = this.autoHide.delay(200, this);
    },
    autocomplete: {
      'opacity': 0.8,
      'maxresults': 10,
      'minchars': 1
    }
  },
  
  initialize: function(element, autoholder, options) {
    this.parent(element, options);
    this.data = [];
		this.autoholder = $(autoholder).setStyle('opacity', this.options.autocomplete.opacity);
		this.autoresults = this.autoholder.getElement('ul');
		var children = this.autoresults.getElements('li');
    children.each(function(el) { this.add({id:el.get('value'),name:el.innerHTML}); }, this); 
  },
  
  autoShow: function(search) {
    this.autoholder.setStyle('display', 'block');
    this.autoholder.getChildren().setStyle('display', 'none');
    if(! search || ! search.trim() || (! search.length || search.length < this.options.autocomplete.minchars)) 
    {
      this.autoholder.getElement('.default').setStyle('display', 'block');
      this.resultsshown = false;
    } else {
      this.resultsshown = true;
      this.autoresults.setStyle('display', 'block').empty();
	  this.autoresults.empty();
	  
      this.data.filter(function(str) { if (typeof(str)=='string') { if (str) str = JSON.decode(str).name; return str ? str.test(search, 'i') : false;} else return false; }).each(function(result, ti) {
        if(ti >= this.options.autocomplete.maxresults) return;
        var that = this;
        var el = new Element('li').addEvents({
          'mouseenter': function() { that.autoFocus(this); },
          'click': function(e) { 
            new Event(e).stop();
            that.autoAdd(this); 
          }
        }).set('html', this.autoHighlight(JSON.decode(result).name, search)).inject(this.autoresults);
        el.store('result', JSON.decode(result));
        if(ti == 0) this.autoFocus(el);
      }, this);
    }
    return this;
  },
  
  autoHighlight: function(html, highlight) {
    if (typeof(html)!='undefined')
		return html.replace(new RegExp(highlight, 'gi'), function(match) {
	      return '<em>' + match + '</em>';
	    });
	else return '';
  },
  
  autoHide: function() {    
    this.resultsshown = false;
    this.autoholder.setStyle('display', 'none');    
    return this;
  },
  
  autoFocus: function(el) {
    if(! el) return;
    if(this.autocurrent) this.autocurrent.removeClass('auto-focus');
    this.autocurrent = el.addClass('auto-focus');
    return this;
  },
  
  autoMove: function(direction) {    
    if(!this.resultsshown) return;
    if (typeof(this.autocurrent)=='undefined') 
	{ } else this.autoFocus(this.autocurrent['get' + (direction == 'up' ? 'Previous' : 'Next')]());
    return this;
  },
  
  autoFeed: function(text) {
    if (this.data.indexOf(Object.toJSON(text)) == -1)
		this.data.include(Object.toJSON(text));    
    return this;
  },
  
  autoAdd: function(el) {
    if(!el || ! el.retrieve('result')) return;
    this.add(el.retrieve('result'));
    delete this.data[this.data.indexOf(Object.toJSON(el.retrieve('result')))];
	//this.data.indexOf(el.retrieve('result'))
    this.autoHide();
    var input = this.lastinput || this.current.retrieve('input');
    input.set('value', '').focus();
    return this;
  },
  
  createInput: function(options) {
    var li = this.parent(options);
    var input = li.retrieve('input');
    input.addEvents({
      'keydown': function(e) {
        this.dosearch = false;
        switch(new Event(e).code) {
          case Event.Keys.up: return this.autoMove('up');
          case Event.Keys.down: return this.autoMove('down');        
          case Event.Keys.enter: 
		  	if (!this.autocurrent) {
				var elTmp = this;
				new Request.JSON({
					'url': webPath + this.options.fetchFile, 
					onSuccess: function(resp) {
					    if (resp!=null && resp.length>0)
						{
							resp.each(function(t){
								elTmp.autoFeed(t)
							}.bind(elTmp));
							elTmp.autoShow(input.value);
							elTmp.autoAdd(elTmp.autocurrent);
						}
					}
				}).get({'action':'add', 'q': input.value});
				var evt = new Event(e);
				evt.stop();
				break;
			}
            this.autoAdd(this.autocurrent);
            this.autocurrent = false;
            this.autoenter = true;
            break;
          case Event.Keys.esc: 
            this.autoHide();
            if(this.current && this.current.retrieve('input'))
              this.current.retrieve('input').set('value', '');
            break;
          default: this.dosearch = true;
        }
      }.bind(this),
      'keyup': function(e) {
	  	switch(new Event(e).code) {
			case Event.Keys.up:
			case Event.Keys.down:
				break;
			case Event.Keys.enter: 
				
				break;
			default:
				if (typeof(this.options.fetchFile) != 'undefined') {
					var elTmp = this;
					new Request.JSON({
						'url': webPath + this.options.fetchFile,
						onSuccess: function(resp){
							if (resp != null && resp.length > 0) {
								resp.each(function(t){
									elTmp.autoFeed(t)
								}.bind(elTmp));
								//elTmp.autoShow(input.value);
								
							}
						}
					}).get({
						'q': input.value
					});
					this.autocurrent = false;        	
				}
				if (this.dosearch) 
					this.autoShow(input.value);
		}
      }.bind(this)
    });
    input.addEvent(Browser.Engine.trident ? 'keydown' : 'keypress', function(e) { 
      if(this.autoenter) new Event(e).stop()
      this.autoenter = false;
    }.bind(this));
    return li;
  },
  
  createBox: function(text, options) {
	var li = this.parent(text, options);
	return li.addEvents({
      'mouseenter': function() { this.addClass('bit-hover') },
      'mouseleave': function() { this.removeClass('bit-hover') }
    }).adopt(new Element('a', {
      'href': '#',
      'class': 'closebutton',
      'events': {
        'click': function(e) {
          new Event(e).stop();
          if(! this.current) this.focus(this.maininput);
          this.dispose(li);
        }.bind(this)
      }
    })).store('text', Object.toJSON(text));
  },
  
  addSmallInput: function(el, where) {
	  var input = this.parent(el, where);
	  var inp = input.getChildren('input')[0].set('value', JSON.decode(el.retrieve('text')).id);
	  return input;	
  }
  
});

/*
var ext = {
	toJSON: function (obj) {
		return JSON.encode(obj);
	}
};
$extend(Object, ext);
*/