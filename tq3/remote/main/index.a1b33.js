System.register("chunks:///main.js", ['cc'], function () {
  'use strict';

  var cclegacy, _decorator, SpriteFrame, Sprite, SystemEvent, UITransformComponent, tween, Vec3, view, Tween, Component, Label, Prefab, Node, instantiate, director;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
      SystemEvent = module.SystemEvent;
      UITransformComponent = module.UITransformComponent;
      tween = module.tween;
      Vec3 = module.Vec3;
      view = module.view;
      Tween = module.Tween;
      Component = module.Component;
      Label = module.Label;
      Prefab = module.Prefab;
      Node = module.Node;
      instantiate = module.instantiate;
      director = module.director;
    }],
    execute: function () {
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }

        return obj;
      }

      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;

        _setPrototypeOf(subClass, superClass);
      }

      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
          o.__proto__ = p;
          return o;
        };

        return _setPrototypeOf(o, p);
      }

      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return self;
      }

      function _initializerDefineProperty(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
          enumerable: descriptor.enumerable,
          configurable: descriptor.configurable,
          writable: descriptor.writable,
          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
      }

      function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object.keys(descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
          desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
          Object.defineProperty(target, property, desc);
          desc = null;
        }

        return desc;
      }

      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp;

      cclegacy._RF.push({}, "34cd5kJ9JtKwoEDFs6wQc45", "RedPacket", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var RedPacket = (_dec = ccclass('RedPacket'), _dec2 = property([SpriteFrame]), _dec3 = property(Sprite), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RedPacket, _Component);

        function RedPacket() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "spf", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "sp", _descriptor2, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "index", 0);

          _defineProperty(_assertThisInitialized(_this), "point", 0);

          _defineProperty(_assertThisInitialized(_this), "ratio", 0);

          _defineProperty(_assertThisInitialized(_this), "addCallback", null);

          _defineProperty(_assertThisInitialized(_this), "removeCallback", null);

          _defineProperty(_assertThisInitialized(_this), "points", [5, 15, 20, 50, 80, 100]);

          return _this;
        }

        var _proto = RedPacket.prototype;

        _proto.onLoad = function onLoad() {
          var _this2 = this;

          this.index = this.getRandomNum(0, 5);
          this.point = this.points[this.index];
          this.node.on(SystemEvent.EventType.TOUCH_START, function () {
            _this2.onTouchCallback();
          });
        };

        _proto.onEnable = function onEnable() {
          var _this3 = this;

          var ui = this.node.getComponent(UITransformComponent);
          tween(this.node).by(this.ratio, {
            position: new Vec3(0, -view.getVisibleSize().height - ui.height)
          }).call(function () {
            _this3.removeCallback && _this3.removeCallback();
          }).removeSelf().start();
        };

        _proto.setRatio = function setRatio(ratio) {
          this.ratio = ratio;
        };

        _proto.getRandomNum = function getRandomNum(min, max) {
          return Math.floor(Math.random() * (max - min + 1) + min);
        };

        _proto.setAddCallback = function setAddCallback(callback) {
          this.addCallback = callback;
        };

        _proto.setRemoveCallback = function setRemoveCallback(callback) {
          this.removeCallback = callback;
        };

        _proto.onTouchCallback = function onTouchCallback() {
          Tween.stopAllByTarget(this.node);
          this.sp.spriteFrame = this.spf[this.index];

          if (this.addCallback != null) {
            this.addCallback(this.point);
          }

          tween(this.node).delay(0.3).removeSelf().start();
        };

        return RedPacket;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spf", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sp", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class);

      cclegacy._RF.pop();

      cclegacy._RF.push({}, "1eabajV1CtFibt6aB2z/9m/", "UserInfo", undefined);
      /*
       * @Author: caizj
       * @Date: 2021-12-14 21:45:58
       * @Email: 784157458@qq.com
       * @Description:
       */


      var UserInfo = function UserInfo() {};

      _defineProperty(UserInfo, "point", 0);

      _defineProperty(UserInfo, "count", 0);

      cclegacy._RF.pop();

      var _dec$1, _dec2$1, _dec3$1, _dec4, _class$1, _class2$1, _descriptor$1, _descriptor2$1, _descriptor3, _temp$1;

      cclegacy._RF.push({}, "07c94VIQRpHqYKKp8jnXjsC", "Game", undefined);

      var ccclass$1 = _decorator.ccclass,
          property$1 = _decorator.property;
      var Game = (_dec$1 = ccclass$1('Game'), _dec2$1 = property$1(Label), _dec3$1 = property$1(Prefab), _dec4 = property$1(Node), _dec$1(_class$1 = (_class2$1 = (_temp$1 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Game, _Component);

        function Game() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "txtPoint", _descriptor$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "prefab", _descriptor2$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "nodeParent", _descriptor3, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "ratio", 4);

          _defineProperty(_assertThisInitialized(_this), "offset", 0.5);

          _defineProperty(_assertThisInitialized(_this), "delta", 0);

          _defineProperty(_assertThisInitialized(_this), "isOver", false);

          return _this;
        }

        var _proto = Game.prototype;

        _proto.start = function start() {
          UserInfo.count = 0;
          UserInfo.point = 0;
        };

        _proto.update = function update(dt) {
          if (this.isOver) {
            return;
          }

          this.delta += dt;

          if (this.delta >= this.offset) {
            this.ratio *= 0.99;
            this.addRedPacket();
            this.delta = 0;
          }
        };

        _proto.getRandomNum = function getRandomNum(min, max) {
          return Math.floor(Math.random() * (max - min + 1) + min);
        };

        _proto.addRedPacket = function addRedPacket() {
          var _this2 = this;

          if (this.isOver) {
            return;
          }

          var node = instantiate(this.prefab);
          var component = node.getComponent(RedPacket);
          component.setAddCallback(function (point) {
            UserInfo.point += point;
            UserInfo.count++;

            _this2.reloadUI();
          });
          component.setRemoveCallback(function () {
            _this2.isOver = true;
            director.loadScene('result');
          });
          component.setRatio(this.ratio);
          var ui = node.getComponent(UITransformComponent);
          var y = view.getVisibleSize().height / 2 + ui.height / 2;
          console.log('##y', y);
          var index = this.getRandomNum(0, 3);
          var x = view.getVisibleSize().width / 8 * (2 * index - 3);
          node.position = new Vec3(x, y, 0);
          node.parent = this.nodeParent;
        };

        _proto.onClick = function onClick(event, data) {
          switch (data) {
            case 'again':
              {
                director.loadScene('home');
                break;
              }
          }
        };

        _proto.reloadUI = function reloadUI() {
          this.txtPoint.string = "" + UserInfo.point;
        };

        return Game;
      }(Component), _temp$1), (_descriptor$1 = _applyDecoratedDescriptor(_class2$1.prototype, "txtPoint", [_dec2$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$1 = _applyDecoratedDescriptor(_class2$1.prototype, "prefab", [_dec3$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2$1.prototype, "nodeParent", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2$1)) || _class$1);

      cclegacy._RF.pop();

      var _dec$2, _class$2;

      cclegacy._RF.push({}, "386c6dV5vpMb73jMuOoQ90U", "Home", undefined);

      var ccclass$2 = _decorator.ccclass;
      var Home = (_dec$2 = ccclass$2('Home'), _dec$2(_class$2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Home, _Component);

        function Home() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = Home.prototype;

        _proto.onClick = function onClick(event, data) {
          switch (data) {
            case 'start':
              {
                director.loadScene('game');
                break;
              }
          }
        };

        return Home;
      }(Component)) || _class$2);

      cclegacy._RF.pop();

      var _dec$3, _dec2$2, _class$3, _class2$2, _descriptor$2, _temp$2;

      cclegacy._RF.push({}, "ecf1dLAR2FPwIFsM4MFoOL/", "Result", undefined);

      var ccclass$3 = _decorator.ccclass,
          property$2 = _decorator.property;
      var Result = (_dec$3 = ccclass$3('Result'), _dec2$2 = property$2(Label), _dec$3(_class$3 = (_class2$2 = (_temp$2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Result, _Component);

        function Result() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "res", _descriptor$2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = Result.prototype;

        _proto.start = function start() {
          this.res.string = "\u54C7\u585E!\u62A2\u5230\u4E86" + UserInfo.count + "\u4E2A\u5171" + UserInfo.point + "\u5143!";
        };

        _proto.onClick = function onClick() {
          director.loadScene('home');
        };

        return Result;
      }(Component), _temp$2), _descriptor$2 = _applyDecoratedDescriptor(_class2$2.prototype, "res", [_dec2$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2$2)) || _class$3);

      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///main.js'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});
//# sourceMappingURL=index.js.map