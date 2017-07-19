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
    this.bindEvt();
    this._$context.trigger('more:data');
  };

  More.prototype.bindEvt = function(){
    var _this = this;
    this._$context.on('more:data', function(){
      _this.moreData();
    });
    this._$context.on('success:data', function(event, data){
      _this.render.call(_this, data);
    });
    this._$context.on('next:page', function(){
      _this.next();
    });
    this._$context.on('data:reset', function(){
      _this.reset();
    });
    this._$context.on('switch:button', function(){
      _this.switchButton();
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
      this._button.attr('class', 'open');
      this._button.text('더보기');
      this._$context.trigger('data:reset');
      this._$context.trigger('more:data');
    }else{
      this._button.text('닫기');
      this._button.attr('class', 'close');
    }
  };

  More.prototype.moreData = function(){
    var _this = this;
    var data = this._dataList.filter(function(value, index){
        return _this._current <= index && _this._nextCount > index;
    });
    this._$context.trigger('success:data', [data]);
    this._$context.trigger('next:page');
  };

  More.prototype.render = function(data){
    var resultHtml = '';
    data.forEach(function(value){
      resultHtml += $.templates('#tmpl').render({'text' : value});
    });
    this._$elem.append(resultHtml);
  };

  More.prototype.next = function(){
    this._current  < this._limit ? this._current += this._options.count : this._current = this._limit;
    this._nextCount < this._limit ? this._nextCount += this._options.count :  this._nextCount = this._limit;
    // 현재 포인트가 최고점을 넘었을때 버튼을 변경해준다.
    if(this._current >= this._limit) this._$context.trigger('switch:button');
  };

  More.prototype.reset = function(){
    this._$elem.empty();
    this._nextCount = this._options.count;
    this._current = 0;
  };

  return More;
})();



