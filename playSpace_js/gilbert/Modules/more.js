var More = (function(){
  var More = function(options){
    this._$context = options.context;
    this._$elem = this._$context.find(options.elem);
    this._button = this._$context.find(options.button);
    this._options = options;
  };

  More.prototype.run = function(data){
    if(!data.length){
      console.error('data is not defiend');
      return ;
    }
    this.init(data);
  };

  More.prototype.init = function(data){
    this._dataList = data;
    this._limit = this._dataList.length;
    this._nextCount = this._options.count;
    this._current = 0;
    this._isLimit = false;
    this._nextCount > this._limit ? this.hideButton() : this.showButton();
    this.bindEvt();
    this._$context.trigger('more:data');
    this._$context.trigger('setting:limit');
  };

  More.prototype.bindEvt = function(){
    var _this = this;
    this._$context.on('more:data', function(){
      _this.moreData();
    });
    this._$context.on('success:data', function(event, data){
      _this.render.call(_this, data);
    });
    this._$context.on('setting:page', function(){
      _this.settingPage();
    });
    this._$context.on('setting:limit', function(){
      _this.settingLimit();
    });
  };
  // 처음 보여줄 데이터 보다 옵션 카운트 수가 많을때 버튼을 가려야한다.
  More.prototype.showButton = function(){
    this._button.show();
  };

  More.prototype.hideButton = function(){
    this._button.hide();
  };

  More.prototype.switchButton = function(){
    if(this._button.hasClass('close')){
      this.reset();
      this._$context.trigger('more:data');
    }
     this._button.text(this._isLimit ? '닫기' : '더보기');
     this._button.attr('class', this._isLimit ? 'close' : 'open');
  };

  More.prototype.moreData = function(){
    var _this = this;
    var data = this._dataList.filter(function(value, index){
        return _this._current <= index && _this._nextCount > index;
    });
    this._$context.trigger('success:data', [data]);
    this.next();
  };

  More.prototype.render = function(data){
    var resultHtml = '';
    data.forEach(function(value){
      resultHtml += $.templates('#tmpl').render({'text' : value});
    });
    this._$elem.append(resultHtml);
  };

  More.prototype.settingLimit = function(){
    this._$context.find('.total').text(Math.ceil(this._limit/this._options.count));
  };

  More.prototype.settingPage = function(){
    this._$context.find('.page').text(this._current/this._options.count);
  };

  More.prototype.next = function(){
    this._current  < this._limit ? this._current += this._options.count : this._current = this._limit;
    this._nextCount < this._limit ? this._nextCount += this._options.count :  this._nextCount = this._limit;
    this._$context.trigger('setting:page');
    if(this._current >= this._limit){
      this._isLimit = true;
      this.switchButton();
    }
  };

  More.prototype.reset = function(){
    this._$elem.empty();
    this._nextCount = this._options.count;
    this._current = 0;
    this._isLimit = false;
  };

  return More;
})();



