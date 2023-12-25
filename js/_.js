// curry 는 함수의 실행을 인자가 채워질 때까지 미루다가 채워지면 실행하는 것을 말함.
function _curry(fn) {
  return function(a, b) {
    return arguments.length === 2 ? fn(a, b) : function(b) { return fn(a, b); };
  };
}

function _curryr(fn) {
  return function(a, b) {
    return arguments.length === 2 ? fn(a, b) : function(b) { return fn(b, a); };
  };
}

var _get = _curryr(function (obj, key) {
  return (!obj || obj === undefined) ? undefined : obj[key];
});

function _filter(list, predi) {
  // closure 클로저
    var new_list = [];
    _each(list, function (val) {
      if (predi(val)) new_list.push(val);
    });
    return new_list;
  }
  
  function _map(list, mapper) {
    // closure 클로저
    var new_list = [];
    _each(list, function (val) {
      new_list.push(mapper(val));
    });
    return new_list;
  }
  
  function _each(list, iter) {
    for (var i = 0; i < list.length; i++) {
      iter(list[i]);
    }
    return list;
  }
  