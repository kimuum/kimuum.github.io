/*!
 * @author 김정기
 * @description 보이는 ARS 프레임웍
 */
(function (context, $, undefined) {
	"use strict";
	/* jshint expr: true, validthis: true */
	/* global common, alert, escape, unescape */

	var $root = $(document.documentElement);

	/**
	 * @namespace
	 * @name common
	 * @description root namespace of hib site
	 */


	/**
	 * @namespace
	 * @name common
	 * @description 보이는 ARS 공통 기능 스크립트
	 */

	/**
	 * @namespace
	 * @name common
	 * @description common 단축명
	 */
	var common = context.common || (context.common = {});

	var toString = Object.prototype.toString,
		hasOwn = Object.prototype.hasOwnProperty,
		doc = context.document,
		emptyFn = function () {},
		arraySlice = Array.prototype.slice;
		
	if (typeof Function.prototype.bind === 'undefined') {
		/**
		 * 함수내의 컨텐스트를 지정
		 * @param {Object} context 컨텍스트
		 * @param {Mixed} ... 두번째 인자부터는 실제로 싱행될 함수로 전달된다.
		 * @example
		 * function Test(){
		 *		alert(this.name);
		 * }.bind({name: 'axl rose'});
		 *
		 * Test(); -> alert('axl rose');
		 */
		Function.prototype.bind = function () {
			var __method = this,
				args = arraySlice.call(arguments),
				object = args.shift();

			return function () {
				// bind로 넘어오는 인자와 원본함수의 인자를 병합하여 넘겨줌.
				var local_args = args.concat(arraySlice.call(arguments));
				if (this !== window) { local_args.push(this); }
				return __method.apply(object, local_args);
			};
		};
	}

	/**
	 * jQuery 객체
	 * @class
	 * @name $
	 */
	
	/**
	 * jquery easing
	 * Open source under the BSD License.
	 *  */
	$.extend($.easing,
	{
	    def: 'easeOutQuad',
	    /**
	     * custom: 그냥 만들어봄
	     *  */
	    custom: function (x, t, b, c, d) {
		    var s = 1.70158; 
		    if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		    return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;	
	    },
	    swing: function (x, t, b, c, d) {
	        //alert($.easing.default);
	        return $.easing[$.easing.def](x, t, b, c, d);
	    },
	    easeInQuad: function (x, t, b, c, d) {
	        return c*(t/=d)*t + b;
	    },
	    easeOutQuad: function (x, t, b, c, d) {
	        return -c *(t/=d)*(t-2) + b;
	    },
	    easeInOutQuad: function (x, t, b, c, d) {
	        if ((t/=d/2) < 1) return c/2*t*t + b;
	        return -c/2 * ((--t)*(t-2) - 1) + b;
	    },
	    easeInCubic: function (x, t, b, c, d) {
	        return c*(t/=d)*t*t + b;
	    },
	    easeOutCubic: function (x, t, b, c, d) {
	        return c*((t=t/d-1)*t*t + 1) + b;
	    },
	    easeInOutCubic: function (x, t, b, c, d) {
	        if ((t/=d/2) < 1) return c/2*t*t*t + b;
	        return c/2*((t-=2)*t*t + 2) + b;
	    },
	    easeInQuart: function (x, t, b, c, d) {
	        return c*(t/=d)*t*t*t + b;
	    },
	    easeOutQuart: function (x, t, b, c, d) {
	        return -c * ((t=t/d-1)*t*t*t - 1) + b;
	    },
	    easeInOutQuart: function (x, t, b, c, d) {
	        if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
	        return -c/2 * ((t-=2)*t*t*t - 2) + b;
	    },
	    easeInQuint: function (x, t, b, c, d) {
	        return c*(t/=d)*t*t*t*t + b;
	    },
	    easeOutQuint: function (x, t, b, c, d) {
	        return c*((t=t/d-1)*t*t*t*t + 1) + b;
	    },
	    easeInOutQuint: function (x, t, b, c, d) {
	        if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
	        return c/2*((t-=2)*t*t*t*t + 2) + b;
	    },
	    easeInSine: function (x, t, b, c, d) {
	        return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	    },
	    easeOutSine: function (x, t, b, c, d) {
	        return c * Math.sin(t/d * (Math.PI/2)) + b;
	    },
	    easeInOutSine: function (x, t, b, c, d) {
	        return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	    },
	    easeInExpo: function (x, t, b, c, d) {
	        return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	    },
	    easeOutExpo: function (x, t, b, c, d) {
	        return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	    },
	    easeInOutExpo: function (x, t, b, c, d) {
	        if (t==0) return b;
	        if (t==d) return b+c;
	        if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
	        return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	    },
	    easeInCirc: function (x, t, b, c, d) {
	        return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	    },
	    easeOutCirc: function (x, t, b, c, d) {
	        return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	    },
	    easeInOutCirc: function (x, t, b, c, d) {
	        if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
	        return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	    },
	    easeInElastic: function (x, t, b, c, d) {
	        var s=1.70158;var p=0;var a=c;
	        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
	        if (a < Math.abs(c)) { a=c; var s=p/4; }
	        else var s = p/(2*Math.PI) * Math.asin (c/a);
	        return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	    },
	    easeOutElastic: function (x, t, b, c, d) {
	        var s=1.70158;var p=0;var a=c;
	        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
	        if (a < Math.abs(c)) { a=c; var s=p/4; }
	        else var s = p/(2*Math.PI) * Math.asin (c/a);
	        return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	    },
	    easeInOutElastic: function (x, t, b, c, d) {
	        var s=1.70158;var p=0;var a=c;
	        if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
	        if (a < Math.abs(c)) { a=c; var s=p/4; }
	        else var s = p/(2*Math.PI) * Math.asin (c/a);
	        if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	        return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	    },
	    easeInBack: function (x, t, b, c, d, s) {
	        if (s == undefined) s = 1.70158;
	        return c*(t/=d)*t*((s+1)*t - s) + b;
	    },
	    easeOutBack: function (x, t, b, c, d, s) {
	        if (s == undefined) s = 1.70158;
	        return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	    },
	    easeInOutBack: function (x, t, b, c, d, s) {
	        if (s == undefined) s = 1.70158;
	        if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
	        return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	    },
	    easeInBounce: function (x, t, b, c, d) {
	        return c - $.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	    },
	    easeOutBounce: function (x, t, b, c, d) {
	        if ((t/=d) < (1/2.75)) {
	            return c*(7.5625*t*t) + b;
	        } else if (t < (2/2.75)) {
	            return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
	        } else if (t < (2.5/2.75)) {
	            return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
	        } else {
	            return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
	        }
	    },
	    easeInOutBounce: function (x, t, b, c, d) {
	        if (t < d/2) return $.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
	        return $.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	    }
	});	
	
	/**
	 * Object에 해당 하는 클래스명을 리턴
	 * @function
	 * @name $#getClassName
	 * @param {Integer} index default: 0
	 * @return {String} 문자열
	 * @example
	 * 	$('.d-list').getClassName();
	 * 
	 *  */
	$.fn.getClassName = function (index) {
		var str = ' '.concat(this.eq((index ? index : 0)).attr('class')).replace(/\s/gi, function () {
			return '.';
		});
		return str;
	};

	/**
	 * value값을 URI인코딩하여 반환
	 * @function
	 * @name $#encodeURI
	 * @return {String} 인코딩된 문자열
	 */
	$.fn.encodeURI = function (value) {
		if (arguments.length === 0) {
			return encodeURIComponent($.trim(this.val()));
		} else {
			return this.val(encodeURIComponent(value));
		}
	};

	/**
	 * value값의 앞뒤 스페이스문자 또는 old ie인경우에 placeholder를 제거하여 실제 값만 반환
	 * @function
	 * @name $#trimVal
	 * @return {String} 문자열
	 */
	$.fn.trimVal = (function () {
		var supportPlaceholder = ('placeholder' in document.createElement('input'));

		return supportPlaceholder ? function (value) {
			if(arguments.length === 0) { return $.trim(this.val()); }
			else { return this.val($.trim(value)); }
		} : function (value) {
			if (arguments.length === 0) {
				if(this.val() === this.attr('placeholder')) {
					return '';
				}
				return $.trim(this.val());
			} else {
				value = $.trim(value) || this.attr('placeholder');
				return this.val(value);
			}
		};
	})();

	/**
	 * 체크여부를 지정할 때, changed 이벤트를 발생시킨다.(연결된 label에 on클래스를 토글링하고자 할 때 사용)
	 * @function
	 * @name $#checked
	 * @param {Boolean} checked 체크여부
	 * @fires $#changed
	 * @example
	 * // 먼저 changed 이벤트 바인딩
	 * $('input:checkbox').on('changed', function (e, isChecked){ $(this).parent()[isChecked?'addClass':'removeClass']('on'); });
	 * ..
	 * // checked 값을 변경
	 * $('input:checkbox').checked(true); // 해당체크박스의 부모에 on클래스가 추가된다.
	 */
	$.fn.checked = function (checked) {
		return this.each(function () {
			if(this.type !== 'checkbox' && this.type !== 'radio'){ return; }
			/**
			 * @event $#changed
			 * @type {object}
			 * @peoperty {boolean} checked - 체크 여부
			 */
			var $this = $(this).prop('checked', checked).trigger('changed', [checked]);
		});
	};

	/**
	 * 클래스 치환
	 * @function
	 * @name $#replaceClass
	 * @param {String} old 대상클래스
	 * @param {String} newCls 치환클래스
	 */
	$.fn.replaceClass = function (old, newCls) {
		return this.each(function () {
			$(this).removeClass(old).addClass(newCls);
		});
	};

	/**
	 * 레이어 표시 담당:
	 * - 단순히 show를 하는게 아니라, 레이어가 표시되기전에 beforeshow이벤트를, 표시된 후에 show이벤트를 발생시켜준다.
	 * - 레이어를 띄운 버튼을 보관한다. 닫을때, 버튼에 어떠한 액션을 취하고자 할 때 유용
	 * @function
	 * @name $#showLayer
	 * @param {Element|jQuery} options.button (Optional) 버튼
	 * @param {Function} options.onShow (Optional) 표시될 때 실행될 함수
	 */
	$.fn.showLayer = function (options) {
		options = $.extend({
			onShow: common.emptyFn,
			opener: null
		}, options);

		return this.each(function () {
			var $this = $(this),
				evt;
			if (options.opener) {
				$this.data('opener', options.opener);
				$(options.opener).attr({'aria-pressed': 'true', 'aria-expand': 'true'});
			}

			$this.trigger(evt = $.Event('beforeshow'));
			if (evt.isDefaultPrevented()){ return; }

			// 표시될 때 d_open 클래스 추가
			$this.addClass('d_open').show().trigger('show');
			options.onShow.call($this[0]);
		});
	};

	/**
	 * 레이어 숨김 담당:
	 * - 단순히 hide를 하는게 아니라, 숨겨진 후에 hide이벤트를 발생시켜준다.
	 * @function
	 * @name $#hideLayer
	 * @param {Boolean} options.focusOpener (Optional) 숨겨진 후에 버튼에 포커스를 줄것인지 여부
	 * @param {Function} options.onHide (Optional) 숨겨진 후에 실행될 함수
	 */
	$.fn.hideLayer = function (options) {
		options = $.extend({
			onHide: common.emptyFn,
			focusOpener: false
		}, options);

		return this.each(function () {
			var $this = $(this);
			$this.removeClass('d_open').hide().trigger('hide');
			options.onHide.call($this[0]);

			// 숨겨진 후에 열었던 원래버튼에 포커스를 강제로 준다.
			if($this.data('opener')){
				var $btn = $( $this.data('opener') );
				$btn.attr({'aria-pressed': 'false', 'aria-expand': 'false'});
				if (options.focusOpener === true) {
					$btn.focus();
				}
			}
		});
	};

	/**
	 * 아무것도 안하는 빈함수
	 * @function
	 * @name $#noop
	 * @example
	 * $(this)[ isDone ? 'show' : 'noop' ](); // isDone이 true에 show하되 false일때는 아무것도 안함.
	 */
	$.fn.noop = function () {
		return this;
	};

	/**
	 * 체크된 항목의 값을 배열에 담아서 반환
	 * @function
	 * @name $#checkedValues
	 * @return {Array}
	 */
	$.fn.checkedValues = function () {
		var results = [];
		this.each(function () {
			if((this.type === 'checkbox' || this.type === 'radio') && this.checked === true) {
				results[results.length] = this.value;
			}
		});
		return results;
	};

	/**
	 * 같은 레벨에 있는 다른 row에서 on를 제거하고 현재 row에 on 추가
	 * @function
	 * @name $#activeRow
	 * @param {String} cls 활성 클래스명
	 * @return {jQuery}
	 */
	$.fn.activeRow = function (cls) {
		cls = cls || 'on';
		return this.addClass(cls).siblings().removeClass(cls).end();
	};


	$.fn.mousestop = function (time) {
		var me = this,
			stop_timeout = null;

		time = time || 1500;

		this.on('mouseenter mouseleave mousemove',function (e) {
			switch(e.type) {
				case 'mousemove':
				case 'mouseenter':
					clearTimeout(stop_timeout);
					stop_timeout = setTimeout(function() {
						me.trigger('mousestop');
					}, time);
					break;
				case 'mouseleave':
					clearTimeout(stop_timeout);
					break;
				default:
					break;
			}
		});
	};
	
	$.fn.imageSequnce = function(opts) {
		opts = $.extend({
			duration:1000,
			repeat: false,
			reverse: false
		}, opts);

		opts.start && opts.start.call(this);
		var me = this,
			count = this.length,
			idx = opts.reverse ? count - 1 : 0,
			interval = opts.duration / count,
			ended = function() {
				if(opts.repeat) {
					if(opts.reverse) {
						idx = count - 1;
					} else {
						idx = 0;
					}
				} else {
					opts.ended && opts.ended.call(me);
					clearInterval(timer); timer = null;
				}
			},
			timer;

		timer = setInterval(function(){
			me.hide().eq(idx).show();
			if(opts.reverse) {
				idx -= 1;
				if(0 > idx) {
					ended();
				}
			} else {
				idx += 1;
				if(count <= idx) {
					ended();
				}
			}
		}, interval);
	};
	
	/**
	 * Object에 제스쳐의 방향 리턴
	 * @function
	 * @name $#addTouchEvent
	 * @return {Object} Object
	 * @구현 trigger interface
	 * 	start: 터치를 시작했을 시점
	 * move: 터치상태에서 이동중일때
	 * end: 터치상태에서 손가락을 놓았을 때
	 */
	$.fn.addTouchEvent = function (options) {
		var me = this,
			 set = $.extend({directionType: 'horizontal', isContain: false}, options);
		me.on({
			'touchstart': function (e) {
				var touches = e.originalEvent.touches[0];
				this.startX = touches.pageX - (set.isContain ? (this.distanceX ? this.distanceX : 0): 0);
				this.startY = touches.pageY - (set.isContain ? (this.distanceY ? this.distanceY : 0): 0);
				this.direction = null;
				this.timeStamp = e.timeStamp;
				
				me.triggerHandler('start', {
					originalEvent: e,
					obj : this,
					type: 'start',
					startX : this.startX,
					startY : this.startY,
					direction : this.direction,
					distanceX: this.distanceX,
					distanceY: this.distanceY				
				});
			},
			'touchmove': function (e) {
				var touches = e.originalEvent.touches[0];
				
				this.distanceX = touches.pageX - this.startX;
				this.distanceY = touches.pageY - this.startY;
				this.timeStamp = e.timeStamp;
				if(Math.abs(this.distanceX) > Math.abs(this.distanceY)){
					this.direction = (this.distanceX < 0 ? 'left' : 'right');
					if(set.directionType == 'horizontal') e.preventDefault();
				}else if(Math.abs(this.distanceY) > Math.abs(this.distanceX)){
					this.direction = (this.distanceY < 0 ? 'up' : 'down');
					if(set.directionType == 'vertical') e.preventDefault();
				}
				
				me.triggerHandler('move', {
					originalEvent: e,
					obj : this,
					type: 'move',
					startX : this.startX,
					startY : this.startY,
					direction : this.direction,
					distanceX: this.distanceX,
					distanceY: this.distanceY
				});
			},
			'touchend': function (e) {
				var time = e.timeStamp - this.timeStamp,
					 distance = this.distanceX,
					 speed = time/Math.abs(distance);
				
				me.triggerHandler('end', {
					originalEvent: e,
					obj : this,
					type: 'end',
					startX : this.startX,
					startY : this.startY,
					direction : this.direction,
					distanceX: this.distanceX,
					distanceY: this.distanceY,
					time: time,
					speed: speed
				});
			}
		});
		return this;
	};
	
	/**
	 * 특정 object를 arguement로 입력된 text로 치환
	 * @function
	 * @name $#log
	 * @param {Arguments} cls 출력시킬 내용
	 * @example
	 * $('#header').log(1, 2, 3, 4, 5);
	 *  */
	$.fn.log = function () {
		var str = '';
		for(var key in arguments){
			str += arguments[key]+' | ';
		}
		this.text(str);
		this.attr('style', "position:relative; top:0px; left:0px; border:1px solid red; background-color:#FFF; z-index:11111111111;");
	};

	/**
     * CSS3속성으로 위치값 이동
     * @member Of common
     * @name setTransition
     * @function
     * 
     * @param {Integer} posX x축 좌표
     * @param {Integer} posY y축좌표
     * @param {Integer} time 이동까지 걸리는 시간 설정
     *  */
    $.fn.setTransition = function(posX, posY, time){
		this.css({
			'transform' : 'translate3d('+(posX)+'px, '+(posY)+'px, 0px)',
			'transition-timing-function': 'linear',
			'transition-duration': time+'ms',
			'perspective': '1000',
			'backface-visibility': 'hidden'
		});
		return this;
    };

	/**
	 * timeStart("name")로 name값을 키로하는 타이머가 시작되며, timeEnd("name")로 해당 name값의 지난 시간을 로그에 출력해준다.
	 * @memberOf common
	 * @name timeStart
	 * @function
	 *
	 * @param {String} name 타이머의 키값
	 * @param {Boolean} reset 리셋(초기화) 여부
	 *
	 * @example
	 * common.timeStart('animate');
	 * ...
	 * common.timeEnd('animate'); -> animate: 10203ms
	 */
	common.timeStart = function (name, reset){
		if(!name) { return; }
		var time = new Date().getTime(),
			key = "KEY" + name.toString();

		this.timeCounters || (this.timeCounters = {});
		if(!reset && this.timeCounters[key]) { return; }
		this.timeCounters[key] = time;
	};

	/**
	 * timeStart("name")에서 지정한 해당 name값의 지난 시간을 로그에 출력해준다.
	 * @memberOf common
	 * @name timeEnd
	 * @function
	 *
	 * @param {String} name 타이머의 키값
	 * @return {Number} 걸린 시간
	 *
	 * @example
	 * common.timeStart('animate');
	 * ...
	 * common.timeEnd('animate'); -> animate: 10203ms
	 */
	common.timeEnd = function (name){
		if(!this.timeCounters) { return; }

		var time = new Date().getTime(),
			key = "KEY" + name.toString(),
			timeCounter = this.timeCounters[key],
			diff, label;

		if(timeCounter) {
			diff = time - timeCounter;
			label = name + ": " + diff + "ms";
			console.log('[' + name + '] ' + label + 'ms');
			delete this.timeCounters[key];
		}
		return diff;
	};

	/**
	 * 네임스페이스 공간을 생성하고 객체를 설정<br>
	 * js의 네이티브에서 제공하지 않는 기능이지만,<br>
	 * 객체리터럴을 이용하여 여타 컴파일 언어의 네임스페이스처럼 쓸 수 있다.
	 *
	 * @function
	 * @memberOf common
	 * @name namespace
	 *
	 * @param {String} name 네임스페이스명
	 * @param {Object} obj {Optional} 지정된 네임스페이스에 등록할 객체, 함수 등
	 * @return {Object} 생성된 네임스페이스
	 *
	 * @example
	 * common.namesapce('common.widget.Tabcontrol', TabControl)
	 *
	 * ex) common.namespace('common.widget.Control', function (){}) 를 네이티브로 풀어서 작성한다면 다음과 같다.
	 *
	 * var common = common || {};
	 * common.ui = common.ui || {};
	 * common.widget.Control = common.widget.Control || function (){};
	 */
	common.namespace = function (name, obj) {
		if (typeof name !== 'string') {
			obj && (name = obj);
			return name;
		}
		var root = context,
			names = name.split('.'),
			isSet = arguments.length === 2;

		if(isSet) {
			for(var i = -1, item; item = names[++i]; ){
				root = root[item] || (root[item] = (i === names.length - 1 ? obj : {}));
			}
		} else { // isGet
			for(var i = -1, item; item = names[++i]; ){
				if(item in root) { root = root[item]; }
				else { throw Error(name + '은(는) 정의되지 않은 네임스페이스입니다.'); }
			}
		}

		return root;
	};

	/**
	 * common를 루트로 하여 네임스페이스를 생성하여 새로운 속성을 추가하는 함수
	 *
	 * @function
	 * @memberOf common
	 * @name define
	 *
	 * @param {String} name .를 구분자로 해서 common를 시작으로 하위 네임스페이스를 생성. 없으면 common에 추가된다.
	 * @param {Object|Function} object
	 * @param {Boolean} (Optional) isExecFn object값이 함수형일 때 실행을 시킨 후에 설정할 것인가 여부
	 *
	 * @example
	 * common.define('', [], {});
	 * common.
	 */
	common.define = function (name, object, isExecFn) {
		if (typeof name !== 'string') {
			object = name; name = '';
		}

		var root = common,
			names = name ? name.replace(/^common\.?/, '').split('.') : [],
			ln = names.length - 1,
			leaf = names[ln];

		if (isExecFn !== false && typeof object === 'function' && !hasOwn.call(object, 'classType')) {
			object = object.call(root);
		}

		for (var i = 0; i < ln; i++) {
			root = root[names[i]] || (root[names[i]] = {});
		}

		(leaf && (root[leaf] ? $.extend(root[leaf], object) : (root[leaf] = object))) || $.extend(root, object);
	};

	/**
	 * common.define 를 통해 정의된 모듈을 변수에 담아서 사용하고자 할 경우
	 *
	 * @function
	 * @memberOf common
	 * @name use
	 *
	 * @param {String} name 네임스페이스
	 * @return {Object} 함수를 실행한 결과값
	 *
	 * @example
	 * common.define('test', function (){
	*	 return {
	*		init: function (){
	*			 alert(0);
	*		}
	*	});
	 * var test = common.use('test'); 
	 * test.init()	=> alert(0)
	 */
	common._prefix = 'common.';

	common.define(/** @lends common */ {
		/**
		 * document jQuery wrapper
		 */
		$doc: $(document),
		/**
		 * window jQuery wrapper
		 */
		$win: $(window),
		/**
		 * 빈 함수
		 * @function
		 * @example
		 * var func = common.emptyFn
		 */
		emptyFn: emptyFn,

		/**
		 * 임시 노드: css3스타일의 지원여부와 html을 인코딩/디코딩하거나 노드생성할 때  사용
		 */
		tmpNode: doc.createElement('div'),

		/**
		 * html5 속성의 지원여부를 체크할 때 사용
		 * @example
		 * is = 'placeholder' in common.tmpInput;  // placeholder를 지원하는가
		 */
		tmpInput: doc.createElement('input'),

		/**
		 * 터치기반 디바이스 여부
		 */
		isTouch: !!('ontouchstart' in window),
		
		/**
		 * PC 접속여부 
		 */
		isPC: !!(/win16|win32|win64|mac|macintel/gi.test(navigator.platform)),

		/**
		 * Transform 지원여부 
		 */
		isTransform: function (obj, name) {
			var prefixes = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' '),
				count = prefixes.length,
				el = document.createElement('div'),
				i = 0,
				support = false;

			// 2. 임의의 element를 생성한 다음에 element.style에서 해당 프로퍼티가 있는 지를 확인합니다. 
			for ( i = 0 ; i < count ; i++ ) {
				support = document.createElement('div').style[prefixes[i]] != undefined || support;
				if (support) { break; }
			}
			//while( support !== true ) {
			//	support = document.createElement('div').style[prefixes[support++]] != undefined || support;
			//}

			// 3. 지원여부를 출력합니다. 
			return support;
		},

		/**
		 * 객체 자체에 주어진 이름의 속성이 있는지 조회
		 *
		 * @param {Object} obj 객체
		 * @param {String} name 키 이름
		 * @return {Boolean} 키의 존재 여부
		 */
		hasOwn: function (obj, name) {
			return hasOwn.call(obj, name);
		},

		/**
		 * 브라우저의 Detect 정보: 되도록이면 Modernizr 라이브러리를 사용할 것을 권함
		 *
		 * @example
		 * common.browser.isOpera // 오페라
		 * common.browser.isWebKit // 웹킷
		 * common.browser.isIE // IE
		 * common.browser.isIE6 // IE56
		 * common.browser.isIE7 // IE567
		 * common.browser.isOldIE // IE5678
		 * common.browser.version // IE의 브라우저
		 * common.browser.isChrome // 크롬
		 * common.browser.isGecko // 파이어폭스
		 * common.browser.isMac // 맥OS
		 * common.browser.isAir // 어도비 에어
		 * common.browser.isIDevice // 아이폰, 아이패드
		 * common.browser.isSafari // 사파리
		 * common.browser.isIETri4 // IE엔진
		 */
		browser: (function () {
			var t = {},
				win = context,
				na = win.navigator,
				ua = na.userAgent,
				match;

			t.isOpera = win.opera && win.opera.buildNumber;
			t.isWebKit = /WebKit/.test(ua);

			match = /(msie) ([\w.]+)/.exec(ua.toLowerCase()) || /(trident)(?:.*rv.?([\w.]+))?/.exec(ua.toLowerCase()) || ['',null,-1];
			t.isIE = !t.isWebKit && !t.isOpera && match[1] !== null;		//(/MSIE/gi).test(ua) && (/Explorer/gi).test(na.appName);
			t.isIE6 = t.isIE && /MSIE [56]/i.test(ua);
			t.isIE7 = t.isIE && /MSIE [567]/i.test(ua);
			t.isOldIE = t.isIE && /MSIE [5678]/i.test(ua);
			t.version = parseInt(match[2], 10);		// 사용법: if(browser.isIE && browser.version > 8) { // 9이상인 ie브라우저

			t.isChrome = (ua.indexOf('Chrome') !== -1);
			t.isGecko = (ua.indexOf('Firefox') !==-1);
			t.isMac = (ua.indexOf('Mac') !== -1);
			t.isAir = ((/adobeair/i).test(ua));
			t.isIDevice = /(iPad|iPhone)/.test(ua);
			t.isSafari = (/Safari/).test(ua);
			t.isIETri4 = (t.isIE && ua.indexOf('Trident/4.0') !== -1);

			return t;
		}()),
		
		is: function (o, typeName) {
            if (o === null) {
                return typeName === 'null';
            }

            if (o && (o.nodeType === 1 || o.nodeType === 9)) {
                return typeName === 'element';
            }

            var s = toString.call(o),
                type = s.match(/\[object (.*?)\]/)[1].toLowerCase();

            if (type === 'number') {
                if (isNaN(o)) {
                    return typeName === 'nan';
                }
                if (!isFinite(o)) {
                    return typeName === 'infinity';
                }
            }

            return type === typeName;
        },

		/**
		 * 주어진 인자가 빈값인지 체크
		 *
		 * @param {Object} value 체크할 문자열
		 * @param {Boolean} allowEmptyString (Optional: false) 빈문자를 허용할 것인지 여부
		 * @return {Boolean}
		 */
		isEmpty: function (value, allowEmptyString) {
			return (value === null) || (value === undefined) || (!allowEmptyString ? value === '' : false) || (this.isArray(value) && value.length === 0);
		},

		/**
		 * 배열인지 체크
		 *
		 * @function
		 * @param {Object} value 체크할 값
		 * @return {Boolean}
		 */
		isArray: function (value) {
			return value && (value.constructor === Array || !!value.push);
		},

		/**
		 * 날짜형인지 체크
		 * @param {Object} value 체크할 값
		 * @return {Boolean}
		 */
		isDate: function (value) {
			return toString.call(value) === '[object Date]';
		},

		/**
		 * JSON 객체인지 체크
		 *
		 * @function
		 * @param {Object} value 체크할 값
		 * @return {Boolean}
		 */
		isObject: (toString.call(null) === '[object Object]') ? function (value) {
			return value !== null && value !== undefined && toString.call(value) === '[object Object]' && value.ownerDocument === undefined;
		} : function (value) {
			return toString.call(value) === '[object Object]';
		},

		/**
		 * 함수형인지 체크
		 *
		 * @function
		 * @param {Object} value 체크할 값
		 * @return {Boolean}
		 */
		isFunction: (typeof document !== 'undefined' && typeof document.getElementsByTagName('body') === 'function') ? function (value) {
			return toString.call(value) === '[object Function]';
		} : function (value) {
			return typeof value === 'function';
		},

		/**
		 * 숫자 타입인지 체크.
		 * @param {Object} value 체크할 값
		 * @return {Boolean}
		 */
		isNumber: function (value) {
			return typeof value === 'number' && isFinite(value);
		},

		/**
		 * 숫지인지 체크하되 .를 허용
		 * @param {Object} value 예: 1, '1', '2.34'
		 * @return {Boolean}
		 */
		isNumeric: function (value) {
			return !isNaN(parseFloat(value)) && isFinite(value);
		},

		/**
		 * 문자형인지 체크
		 * @param {Object} value 체크할 값
		 * @return {Boolean}
		 */
		isString: function (value) {
			return typeof value === 'string';
		},

		/**
		 * 불린형인지 체크
		 *
		 * @param {Object} value 체크할 값
		 * @return {Boolean}
		 */
		isBoolean: function (value) {
			return typeof value === 'boolean';
		},

		/**
		 * 엘리먼트인지 체크
		 * @param {Object} value 체크할 값
		 * @return {Boolean}
		 */
		isElement: function (value) {
			return value ? value.nodeType === 1 : false;
		},

		/**
		 * 텍스트노드인지 체크
		 * @param {Object} value 체크할 값
		 * @return {Boolean}
		 */
		isTextNode: function (value) {
			return value ? value.nodeName === "#text" : false;
		},

		/**
		 * 정의된 값인지 체크
		 * @param {Object} 체크할 값
		 * @return {Boolean}
		 */
		isDefined: function (value) {
			return typeof value !== 'undefined';
		},

		/**
		 * 주어진 값을 배열로 변환
		 *
		 * @param {Mixed} 배열로 변환하고자 하는 값
		 * @return {Array}
		 *
		 * @example
		 * common.toArray('abcd"); => ["a", "b", "c", "d"]
		 * common.toArray(arguments);  => arguments를 객체를 array로 변환하여 Array에서 지원하는 유틸함수(slice, reverse ...)를 쓸수 있다.
		 */
		toArray: function (value) {
			return arraySlice.apply(value, arraySlice.call(arguments, 1));
		},

		/**
		 * 15자의 숫자로 이루어진 유니크한 값 생성
		 *
		 * @return {String}
		 */
		getUniqId: function () {
			return Number(String(Math.random() * 10).replace(/\D/g, ''));
		},

		/**
		 * 시퀀스 엘리먼트 생성
		 * @function
		 * @param {jQuery} $container 컨테이너
		 * @param {String} format 포멧
		 * @param {Number} length 개수
		 */
		createSequenceElement: function ( $container, format, length ) {
			var t = '<img src="' + format + '" alt="" style="display:none;" />',
				h = [],
				i;
			
			for ( i = 0; i < length; i += 1 ) {
				h.push(t.replace( /#+/, function ( $0 ) { return common.lpad( i, $0.length ); }));
			}
			
			$container.html( h.join( '' ) );
			$container.children( ':first' ).show();
		},
	
		/**
		 * 시퀀스 엘리먼트 시작
		 * @function
		 * @param {jQuery} $container 컨테이너
		 */
		startSequenceElement: function ( $container, options ) {
			var timer = $container.data( 'seq_timer' ),
				opts = $.extend( { fps: 30, loop: true, first: false, complete: null, onComplete: null }, options );
			
			if ( ! timer ) {
				var $els = $container.children(),
					length = $els.length,
					index = opts.first ? 0 : $els.filter( ':visible:first' ).index();
				
				$els.eq( index ).siblings().hide();
				
				timer = setInterval(function () {
					$els.eq( index ).hide();
					$els.eq( index = ++index % length ).show();
					
					if ( ! opts.loop && index === length - 1 ) {
						common.stopSequenceElement( $container );
						if ( opts.complete ) opts.complete.apply( $container[ 0 ] );

						if ( typeof opts.onComplete === 'function') {
							opts.onComplete();
						}
					}
				}, Math.floor( 1000 / opts.fps ));
				
				$container.data( 'seq_timer', timer );
			}
		},
	
		/**
		 * 시퀀스 엘리먼트 정지
		 * @function
		 * @param {jQuery} $container 컨테이너
		 */
		stopSequenceElement: function ( $container ) {
			var timer = $container.data( 'seq_timer' );
			
			if ( timer ) {
				clearInterval( timer );
				$container.data( 'seq_timer', null );
			}
		},

		/**
		 * 왼쪽 문자 채우기
		 * @param {String} val 값
		 * @param {Number} len 길이
		 * @param {String} str 문자
		 */
		lpad: function ( val, len, str ) {
			var v = new String( val ),
				n = ( len || 2 ) - v.length,
				s = str || '0',	
				p = '',
				i;
			
			for ( i = 0; i < n; i += 1 ) {
				p += s;
			}
			
			return p + v;
		},

		/**
		 * 왼쪽 문자 채우기
		 * @param {String} val 값
		 * @param {Number} len 길이
		 * @param {String} str 문자
		 */
		isOnScreen: function (obj) {
			var win = $(window),
				viewport = {
					top : win.scrollTop(),
					left : win.scrollLeft()
				},
				bounds,
				onScreen = [],
				i = 0;

			$.each(obj, function (k, value) {
				bounds = obj.eq(k).offset();
				viewport.right = viewport.left + win.width();
				viewport.bottom = viewport.top + win.height();
				bounds.right = bounds.left + obj.eq(k).outerWidth();
				bounds.bottom = bounds.top + obj.eq(k).outerHeight();
				if (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom)) {
					onScreen.push(k);
					i++;
				}
			});

			return onScreen;
		},

		/**
		 * 순번으로 유니크값 을 생성해서 반환
		 * @function
		 * @return {Number}
		 */
		getUniqKey: (function () {
			var uniqKey = 0;
			return function () {
				return (uniqKey += 1);
			};
		}()),
		
		/**
         * 로그를 보기위한 함수
         * @private
         * @function
         * @param {Arguments} 출력시킬 문자열 
         */
		log: function () {
	    	var str = '';
		    for(var key in arguments){
		        str += arguments[key]+' | ';
		    }
	    	
	    	
	    	var $log = $('.d-log');
	    	if($log.size() == 0){
	    		$(document.body).append('<div class="d-log"></div>');	//로그용
	    		$log = $('.d-log');
	    		$log.attr('style', "position:fixed; top:0px; left:0px; border:1px solid red; background-color:#FFF; z-index:11111111111;");
	    	}	    	
	    	
			$log.text(str);
		}

	});

	/**
	 * 문자열 관련 유틸 함수 모음
	 *
	 * @namespace
	 * @name common.string
	 * @description
	 */
	common.define('string', function () {
		var escapeChars = {
				'&': '&amp;',
				'>': '&gt;',
				'<': '&lt;',
				'"': '&quot;',
				"'": '&#39;'
			},
			unescapeChars = (function (escapeChars) {
				var results = {};
				$.each(escapeChars, function (k, v) {
					results[v] = k;
				});
				return results;
			})(escapeChars),
			escapeRegexp = /[&><'"]/g,
			unescapeRegexp = /(&amp;|&gt;|&lt;|&quot;|&#39;|&#[0-9]{1,5};)/g,
			tagRegexp = /<\/?[^>]+>/gi,
			scriptRegexp = /<script[^>]*>([\\S\\s]*?)<\/script>/img;

		return /** @lends common.string */{
			/**
			 * 정규식이나 검색문자열을 사용하여 문자열에서 텍스트를 교체
			 *
			 * @param {String} value 교체를 수행할 문자열
			 * @param {RegExp|String} 검색할 문자열이나 정규식 패턴
			 * @param {String} 대체할 문자열
			 * @return {String} 대체된 결과 문자열
			 *
			 * @example
			 * common.replaceAll("a1b2c3d", /[0-9]/g, ''); => "abcd"
			 */
			replaceAll: function (value, find, rep) {
				if (find.constructor === RegExp) {
					return value.replace(new RegExp(find.toString().replace(/^\/|\/$/gi, ""), "gi"), rep);
				}
				return value.split(find).join(rep);
			},

			/**
			 * 주어진 문자열의 바이트길이 반환
			 *
			 * @param {String} value 길이를 계산할 문자열
			 * @return {Number}
			 *
			 * @example
			 * common.byteLength("동해물과"); => 8
			 */
			byteLength: function (value) {
				var l = 0;
				for (var i=0, len = value.length; i < len; i++) {
					l += (value.charCodeAt(i) > 255) ? 2 : 1;
				}
				return l;
			},

			/**
			 * 주어진 문자열을 지정된 길이(바이트)만큼 자른 후, 꼬리글을 덧붙여 반환
			 *
			 * @param {String} value 문자열
			 * @param {Number} length 잘라낼 길이
			 * @param {String} truncation (Optional: '...') 꼬리글
			 * @return {String} 결과 문자열
			 *
			 * @example
			 * common.string.cutByByte("동해물과", 3, "..."); => "동..."
			 */
			cutByByte: function (value, length, truncation) {
				var str = value,
					chars = this.charsByByte(value, length);

				truncation || (truncation = '');
				if (str.length > chars) {
					return str.substring(0, chars) + truncation;
				}
				return str;
			},

			/**
			 * 주어진 바이트길이에 해당하는 char index 반환
			 *
			 * @param {String} value 문자열
			 * @param {Number} length 제한 문자수
			 * @return {Number} chars count
			 */
			charsByByte: function (value, length) {
				var str = value,
					l = 0, len = 0, i = 0;
				for (i=0, len = str.length; i < len; i++) {
					l += (str.charCodeAt(i) > 255) ? 2 : 1;
					if (l > length) { return i; }
				}
				return i;
			},

			/**
			 * 첫글자를 대문자로 변환하고 이후의 문자들은 소문자로 변환
			 *
			 * @param {String} value 문자열
			 * @return {String} 결과 문자열
			 *
			 * @example
			 * common.string.capitalize("abCdEfg"); => "Abcdefg"
			 */
			capitalize: function (value) {
				return value ? value.charAt(0).toUpperCase() + value.substring(1) : value;
			},

			/**
			 * 카멜 형식으로 변환
			 *
			 * @param {String} value 문자열
			 * @return {String} 결과 문자열
			 *
			 * @example
			 * common.string.capitalize("ab-cd-efg"); => "abCdEfg"
			 */
			camelize: function (value) {
				return value ? value.replace(/(\-|_|\s)+(.)?/g, function (a, b, c) {
					return (c ? c.toUpperCase() : '');
				}) : value
			},

			/**
			 * 대쉬 형식으로 변환
			 *
			 * @param {String} value 문자열
			 * @return {String} 결과 문자열
			 *
			 * @example
			 * common.string.dasherize("abCdEfg"); => "ab-cd-efg"
			 */
			dasherize: function (value) {
				return value ? value.replace(/[_\s]+/g, '-').replace(/([A-Z])/g, '-$1').replace(/-+/g, '-').toLowerCase() : value;
			},

			toFirstLower: function (value) {
				return value ? value.replace(/^[A-Z]/, function (s) { return s.toLowerCase(); }) : value;
			},

			/**
			 * 주어진 문자열을 지정한 수만큼 반복하여 조합
			 *
			 * @param {String} value 문자열
			 * @param {Number} cnt 반복 횟수
			 * @return {String} 결과 문자열
			 *
			 * @example
			 * common.string.repeat("ab", 4); => "abababab"
			 */
			repeat: function (value, cnt, sep) {
				sep || (sep = '');
				var result = [];

				for (var i = 0; i < cnt; i++) {
					result.push(value);
				}
				return result.join(sep);
			},

			/**
			 * 특수기호를 HTML ENTITY로 변환
			 *
			 * @param {String} value 특수기호
			 * @return {String} 결과 문자열
			 *
			 * @example
			 * common.string.escapeHTML('<div><a href="#">링크</a></div>'); => "&lt;div&gt;&lt;a href=&quot;#&quot;&gt;링크&lt;/a&gt;&lt;/div&gt;"
			 */
			escapeHTML: function (value) {
				return value ? (value+"").replace(escapeRegexp, function (m) {
					return escapeChars[m];
				}) : value;
			},

			/**
			 * HTML ENTITY로 변환된 문자열을 원래 기호로 변환
			 *
			 * @param {String} value 문자열
			 * @return {String} 결과 문자열
			 *
			 * @example
			 * common.string.unescapeHTML('&lt;div&gt;&lt;a href=&quot;#&quot;&gt;링크&lt;/a&gt;&lt;/div&gt;');  => '<div><a href="#">링크</a></div>'
			 */
			unescapeHTML: function (value) {
				return value ? (value+"").replace(unescapeRegexp, function (m) {
					return unescapeChars[m];
				}) : value;
			},

			/**
			 * string === value이면 other를,  string !== value 이면 value를 반환
			 *
			 * @param {String} value
			 * @param {String} these
			 * @param {String} other
			 * @return {String}
			 *
			 * @example
			 * common.string.toggle('ASC", "ASC", "DESC"); => "DESC"
			 * common.string.toggle('DESC", "ASC", "DESC"); => "ASC"
			 */
			toggle: function (value, these, other) {
				return these === value ? other : value;
			},

			/**
			 * 주어진 문자열에 있는 {인덱스} 부분을 인수로 대테하여 반환
			 *
			 * @param {String} format 문자열
			 * @param {String} ... 대체할 문자열
			 * @return {String} 결과 문자열
			 *
			 * @example
			 * common.string.format("{0}:{1}:{2} {0}", "a", "b", "c");  => "a:b:c a"
			 */
			format: function (format) {
				var args = common.toArray(arguments).slice(1);

				return format.replace(/{([0-9]+)}/g, function (m, i) {
					return args[i];
				});
			},

			/**
			 * 주어진 문자열에서 HTML를 제거
			 *
			 * @param {String} value 문자열
			 * @return {String}
			 */
			stripTags: function (value) {
				return value.replace(tagRegexp, '');
			},

			/**
			 * 주어진 문자열에서 스크립트를 제거
			 *
			 * @param {String} value 문자열
			 * @return {String}
			 */
			stripScripts: function (value) {
				return value.replace(scriptRegexp, '');
			}

		};
	});


	/**
	 * @namespace
	 * @name common.uri
	 * @description
	 */
	common.define('uri', /** @lends common.uri */{

		/**
		 * 주어진 url에 쿼리스츠링을 조합
		 *
		 * @param {String} url
		 * @param {String:Object} string
		 * @return {String}
		 *
		 * @example
		 * common.uri.urlAppend("board.do", {"a":1, "b": 2, "c": {"d": 4}}); => "board.do?a=1&b=2&c[d]=4"
		 * common.uri.urlAppend("board.do?id=123", {"a":1, "b": 2, "c": {"d": 4}}); => "board.do?id=123&a=1&b=2&c[d]=4"
		 */
		addToQueryString: function (url, string) {
			if (common.isObject(string)) {
				string = common.object.toQueryString(string);
			}
			if (!common.isEmpty(string)) {
				return url + (url.indexOf('?') === -1 ? '?' : '&') + string;
			}

			return url;
		},

		/**
		 * 쿼리스트링을 객체로 변환
		 *
		 * @param {String} query
		 * @return {Object}
		 *
		 * @example
		 * common.uri.parseQuery("a=1&b=2"); => {"a": 1, "b": 2}
		 */
		parseQuery: function (query) {
			if (!query) {
				return {};
			}
			if (query.length > 0 && query.charAt(0) === '?'){ query = query.substr(1); }

			var params = (query + '').split('&');
			var obj = {};
			var params_length = 0,
				tmp = '',
				x = 0;
			params_length = params.length;
			for (x = 0; x < params_length; x++) {
				tmp = params[x].split('=');
				obj[decodeURIComponent(tmp[0])] = decodeURIComponent(tmp[1]).replace(/[+]/g, ' ');
			}
			return obj;
		},

		/**
		 * url를 파싱하여 host, port, protocol 등을 추출
		 *
		 * @function
		 * @param {String} str url 문자열
		 * @return {Object}
		 *
		 * @example
		 * common.uri.parseUrl("http://www.common.com:8080/list.do?a=1&b=2#comment");
		 * => {scheme: "http", host: "www.common.com", port: "8080", path: "/list.do", query: "a=1&b=2"…}
		 */
		parseUrl: (function () {
			var o = {
				strictMode: false,
				key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
				q: {
					name: "queryKey",
					parser: /(?:^|&)([^&=]*)=?([^&]*)/g
				},
				parser: {
					strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
					loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/\/?)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
				}
			};

			return function (str) {
				if (str.length > 2 && str[0] === '/' && str[1] === '/') {
					str = window.location.protocol + str;
				}
				var m = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
					uri = {}, i = 14;
				while (i--){ uri[o.key[i]] = m[i] || ""; }
				var retArr = {};
				if (uri.protocol !== '') { retArr.scheme = uri.protocol; }
				if (uri.host !== '') { retArr.host = uri.host; }
				if (uri.port !== '') { retArr.port = uri.port; }
				if (uri.user !== '') { retArr.user = uri.user; }
				if (uri.password !== '') { retArr.pass = uri.password; }
				if (uri.path !== '') { retArr.path = uri.path; }
				if (uri.query !== '') { retArr.query = uri.query; }
				if (uri.anchor !== '') { retArr.fragment = uri.anchor; }
				return retArr;
			};
		})(),

		/**
		 * 주어진 url에서 해쉬문자열 제거
		 *
		 * @param {String} url url 문자열
		 * @return {String} 결과 문자열
		 *
		 * @example
		 * common.uri.removeHash("list.do#comment"); => "list.do"
		 */
		removeHash: function (url) {
			return url ? url.replace(/.*(?=#[^\s]+$)/, '') : url;
		}
	});

	/**
	 * 숫자관련 유틸함수 모음
	 *
	 * @namespace
	 * @name common.number
	 * @description
	 */
	common.define('number', /** @lends common.number */{
		/**
		 * 주어진 수를 자릿수만큼 앞자리에 0을 채워서 반환
		 *
		 * @param {String} value
		 * @param {Number} size (Optional: 2)
		 * @param {String} character (Optional: '0')
		 * @return {String}
		 *
		 * @example
		 * common.number.zeroPad(2, 3); => "002"
		 */
		zeroPad: function (value, size, character) {
			var result = String(value);
			character = character || "0";
			size || (size = 2);

			while (result.length < size) {
				result = character + result;
			}
			return result;
		},

		/**
		 * 세자리마다 ,를 삽입
		 *
		 * @param {Number} value
		 * @return {String}
		 *
		 * @example
		 * common.number.addComma(21342); => "21,342"
		 */
		addComma: function (value) {
			value += '';
			var x = value.split('.'),
				x1 = x[0],
				x2 = x.length > 1 ? '.' + x[1] : '',
				re = /(\d+)(\d{3})/;

			while (re.test(x1)) {
				x1 = x1.replace(re, '$1' + ',' + '$2');
			}
			return x1 + x2;
		},

		/**
		 * min ~ max사이의 랜덤값 반환
		 *
		 * @param {Number} min 최소값
		 * @param {Number} max 최대값
		 * @return {Number} 랜덤값
		 */
		random: function (min, max) {
			if (max === null) {
				max = min;
				min = 0;
			}
			return min + Math.floor(Math.random() * (max - min + 1));
		},

		/**
		 * 상하한값을 반환. value가 min보다 작을 경우 min을, max보다 클 경우 max를 반환
		 *
		 * @param {Number} value
		 * @param {Number} min 최소값
		 * @param {Number} max 최대값
		 * @return {Number}
		 */
		limit: function (value, min, max) {
			if (value < min) { return min; }
			else if (value > max) { return max; }
			return value;
		}
	});


	/**
	 * 배열관련 유틸함수
	 * @namespace
	 * @name common.array
	 */
	common.define('array', /** @lends common.array */{
		/**
		 * 콜백함수로 하여금 요소를 가공하는 함수
		 *
		 * @param {Array} obj 배열
		 * @param {Function} cb 콜백함수
		 * @return {Array}
		 *
		 * @example
		 * common.array.map([1, 2, 3], function (item, index){
		 *		return item * 10;
		 * });
		 * => [10, 20, 30]
		 */
		map: function (obj, cb) {
			var results = [];
			if (!common.isArray(obj) || !common.isFunction(cb)) { return results; }

			for(var i =0, len = obj.length; i < len; i++) {
				results[results.length] = cb(obj[i], i, obj);
			}
			return results;
		},

		/**
		 * 배열 요소의 순서를 섞어주는 함수
		 *
		 * @param {Array} obj 배열
		 * @return {Array} 순서가 섞인 새로운 배열
		 */
		shuffle: function (obj) {
			var rand,
				index = 0,
				shuffled = [],
				number = common.number;

			$.each(obj, function (k, value) {
				rand = number.random(index++);
				shuffled[index - 1] = shuffled[rand], shuffled[rand] = value;
			});
			return shuffled;
		},

		/**
		 * 콜백함수로 하여금 요소를 걸려내는 함수
		 *
		 * @param {Array} obj 배열
		 * @param {Function} cb 콜백함수
		 * @return {Array}
		 *
		 * @example
		 * common.array.filter([1, '일', 2, '이', 3, '삼'], function (item, index){
		 *		return typeof item === 'string';
		 * });
		 * => ['일','이','삼']
		 */
		filter: function (obj, cb) {
			var results = [];
			if (!common.isArray(obj) || !common.isFunction(cb)) { return results; }
			for(var i =0, len = obj.length; i < len; i++) {
				cb(obj[i], i, obj) && (results[results.length] = obj[i]);
			}
			return results;
		},

		/**
		 * 주어진 배열에 지정된 값이 존재하는지 체크
		 *
		 * @param {Array} obj 배열
		 * @param {Function} cb 콜백함수
		 * @return {Array}
		 *
		 * @example
		 * common.array.include([1, '일', 2, '이', 3, '삼'], '삼');  => true
		 */
		include: function (arr, value, b) {
			return common.array.indexOf(arr, value, b) > -1;
		},

		/**
		 * 주어진 인덱스의 요소를 반환
		 *
		 * @param {Array} obj 배열
		 * @param {Function} cb 콜백함수
		 * @return {Array}
		 *
		 * @example
		 * common.array.indexOf([1, '일', 2, '이', 3, '삼'], '일');  => 1
		 */
		indexOf: function (arr, value, b) {
			for (var i = 0, len = arr.length; i < len; i++) {
				if( (b !== false && arr[i] === value) || (b === false && arr[i] == value) ) { return i; }
			}
			return -1;
		},

		/**
		 * 주어진 배열에서 index에 해당하는 요소를 삭제
		 *
		 * @param {Array} value 배열
		 * @param {Number} index 삭제할 인덱스
		 * @return {Array} 지정한 요소가 삭제된 배열
		 */
		remove: function (value, index) {
			if (!common.isArray(value)) { return value; }
			return value.slice(index, 1);
		},

		/**
		 * 주어진 배열에서 가장 큰 요소를 반환
		 *
		 * @param {Array} array 배열
		 * @return {Mix}
		 */
		max: function ( array ){
			return Math.max.apply( Math, array );
		},

		/**
		 * 주어진 배열에서 가장 작은 요소를 반환
		 *
		 * @param {Array} array 배열
		 * @return {Mix}
		 */
		min: function ( array ){
			return Math.min.apply( Math, array );
		}
	});

	/**
	 * JSON객체 관련 유틸함수
	 * @namespace
	 * @name common.object
	 */
	common.define('object', /** @lends common.object */{

		/**
		 * 개체의 열거가능한 속성 및 메서드 이름을 배열로 반환
		 *
		 * @param {Object} obj 리터럴 객체
		 * @return {Array} 객체의 열거가능한 속성의 이름이 포함된 배열
		 *
		 * @example
		 * common.object.keys({"name": "Axl rose", "age": 50}); => ["name", "age"]
		 */
		keys: function (obj) {
			var results = [];
			$.each(obj, function (k) {
				results[results.length] = k;
			});
			return results;
		},

		/**
		 * 개체의 열거가능한 속성의 값을 배열로 반환
		 *
		 * @param {Object} obj 리터럴 객체
		 * @return {Array} 객체의 열거가능한 속성의 값들이 포함된 배열
		 *
		 * @example
		 * common.object.values({"name": "Axl rose", "age": 50}); => ["Axl rose", 50]
		 */
		values: function (obj) {
			var results = [];
			$.each(obj, function (k, v) {
				results[results.length] = v;
			});
			return results;
		},

		/**
		 * 콜백함수로 하여금 요소를 가공하는 함수
		 *
		 * @param {JSON} obj 배열
		 * @param {Function} cb 콜백함수
		 * @return {JSON}
		 *
		 * @example
		 * common.object.map({1; 'one', 2: 'two', 3: 'three'}, function (item, key){
		 *		return item + '__';
		 * });
		 * => {1: 'one__', 2: 'two__', 3: 'three__'}
		 */
		map: function (obj, cb) {
			if (!common.isObject(obj) || !common.isFunction(cb)){ return obj; }
			var results = {};
			for(var k in obj) {
				if (obj.hasOwnProperty(k)) {
					results[k] = cb(obj[k], k, obj);
				}
			}
			return results;
		},

		/**
		 * 요소가 있는 json객체인지 체크
		 *
		 *
		 * @param {Object} value json객체
		 * @return {Boolean} 요소가 하나라도 있는지 여부
		 */
		hasItems: function (value) {
			if (!common.isObject(value)) {
				return false;
			}

			for (var key in value) {
				if (value.hasOwnProperty(key)) {
					return true;
				}
			}
			return false;
		},


		/**
		 * 객체를 쿼리스크링으로 변환
		 *
		 * @param {Object} obj 문자열
		 * @param {Boolean} isEncode {Optional} URL 인코딩할지 여부
		 * @return {String} 결과 문자열
		 *
		 * @example
		 * common.object.toQueryString({"a":1, "b": 2, "c": {"d": 4}}); => "a=1&b=2&c[d]=4"
		 */
		toQueryString: function (params, isEncode) {
			if (typeof params === 'string') {
				return params;
			}
			var queryString = '',
				encode = isEncode === false ? function (v) {
					return v;
				} : encodeURIComponent;

			$.each(params, function (key, value) {
				if (typeof (value) === 'object') {
					$.each(value, function (innerKey, innerValue) {
						if (queryString !== '') {
							queryString += '&';
						}
						queryString += encode(key) + '[' + encode(innerKey) + ']=' + encode(innerValue);
					});
				} else if (typeof (value) !== 'undefined') {
					if (queryString !== '') {
						queryString += '&';
					}
					queryString += encode(key) + '=' + encode(value);
				}
			});
			return queryString;
		},

		/**
		 * 주어진 배열를 키와 요소를 맞바꾸어 반환
		 *
		 * @param {Array} obj 배열
		 * @return {Object}
		 *
		 * @example
		 * common.object.travere({1:a, 2:b, 3:c, 4:d]);
		 * => {a:1, b:2, c:3, d:4}
		 */
		traverse: function (obj) {
			var result = {};
			$.each(obj, function (index, item) {
				result[item] = index;
			});
			return result;
		},

		/**
		 * 주어진 리터럴에서 index에 해당하는 요소를 삭제
		 *
		 * @param {Array} value 리터럴
		 * @param {Number} key 삭제할 키
		 * @return 지정한 요소가 삭제된 리터럴
		 */
		remove: function (value, key) {
			if (!common.isObject(value)) { return value; }
			value[key] = null;
			delete value[key];
			return value;
		}
	});


	/**
	 * 날짜관련 유틸함수
	 * @namespace
	 * @name common.date
	 */
	common.define('date', function () {
		var months = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
			fullMonths = "January,Febrary,March,April,May,June,July,Augst,September,October,November,December".split(",");


		function compare(d1, d2) {
			return d1.getTime() > d2.getTime() ? -1 : (d1.getTime() === d2.getTime() ? 0 : 1);
		}

		return /** @lends common.date */{
            /**
             * 날짜 가감함수
             * @param {Date} date 날짜
             * @param {String} interval 가감타입
             * @param {Number} value 가감 크기
             * @returns {Date}
             */
            add: function(date, interval, value) {
                var d = new Date(date.getTime());
                if (!interval || value === 0) {
                    return d;
                }

                switch(interval) {
                    case "ms":
                        d.setMilliseconds(d.getMilliseconds() + value);
                        break;
                    case "s":
                        d.setSeconds(d.getSeconds() + value);
                        break;
                    case "m":
                        d.setMinutes(d.getMinutes() + value);
                        break;
                    case "h":
                        d.setHours(d.getHours() + value);
                        break;
                    case "d":
                        d.setDate(d.getDate() + value);
                        break;
                    case "M":
                        d.setMonth(d.getMonth() + value);
                        break;
                    case "y":
                        d.setFullYear(d.getFullYear() + value);
                        break;
                }
                return d;
            },			
			/**
			 * 날짜형식을 지정한 포맷의 문자열로 변환
			 *
			 * @param {Date} formatDate
			 * @param {String} formatString} 포맷 문자열
			 * @return {String} 결과 문자열
			 *
			 * @example
			 * common.date.format(new Date(), "yy:MM:dd");
			 * =>
			 */
			format: function (formatDate, formatString) {
				formatString || (formatString = 'yyyy-MM-dd');
				if (formatDate instanceof Date) {
					var yyyy = formatDate.getFullYear(),
						yy = yyyy.toString().substring(2),
						M = formatDate.getMonth() + 1,
						MM = M < 10 ? "0" + M : M,
						MMM = months[M - 1],
						MMMM = fullMonths[M - 1],
						d = formatDate.getDate(),
						dd = d < 10 ? "0" + d : d,
						h = formatDate.getHours(),
						hh = h < 10 ? "0" + h : h,
						m = formatDate.getMinutes(),
						mm = m < 10 ? "0" + m : m,
						s = formatDate.getSeconds(),
						ss = s < 10 ? "0" + s : s,
						x = h > 11 ? "PM" : "AM",
						H = h % 12;

					if (H === 0) {
						H = 12;
					}
					return formatString.replace(/yyyy/g, yyyy).replace(/yy/g, yy).replace(/MMMM/g, MMMM).replace(/MMM/g, MMM).replace(/MM/g, MM).replace(/M/g, M).replace(/dd/g, dd).replace(/d/g, d).replace(/hh/g, hh).replace(/h/g, h).replace(/mm/g, mm).replace(/m/g, m).replace(/ss/g, ss).replace(/s/g, s).replace(/!!!!/g, MMMM).replace(/!!!/g, MMM).replace(/H/g, H).replace(/x/g, x);
				} else {
					return "";
				}
			},

			/**
			 * date가 start와 end사이인지 여부
			 *
			 * @param {Date} date 날짜
			 * @param {Date} start 시작일시
			 * @param {Date} end 만료일시
			 * @return {Boolean}
			 */
			between: function (date, start, end) {
				return date.getTime() >= start.getTime() && date.getTime() <= end.getTime();
			},

			/**
			 * 날짜 비교
			 *
			 * @function
			 * @param {Date} date1 날짜1
			 * @param {Date} date2 날짜2
			 * @return {Number} -1: date1가 이후, 0: 동일, 1:date2가 이후
			 */
			compare: compare,

			/**
			 * 년월일이 동일한가
			 *
			 * @param {Date} date1 날짜1
			 * @param {Date} date2 날짜2
			 * @return {Boolean}
			 */
			equalsYMH: function (a, b){
				var ret = true;
				if(!a || !a.getDate || !b || !b.getDate) { return false; }
				$.each(['getFullYear', 'getMonth', 'getDate'], function (i, fn){
					ret = ret && (a[fn]() === b[fn]());
					if(!ret){ return false; }
				});
				return ret;
			},

			/**
			 * value날짜가 date이후인지 여부
			 *
			 * @param {Date} value 날짜
			 * @param {Date} date
			 * @return {Boolean}
			 */
			isAfter: function (value, date) {
				return compare(value, date || new Date()) === 1;
			},

			/**
			 * value날짜가 date이전인지 여부
			 *
			 * @param {Date} value 날짜
			 * @param {Date} date
			 * @return {Boolean}
			 */
			isBefore: function (value, date) {
				return compare(value, date || new Date()) === -1;
			},

			/**
			 * 주어진 날짜 형식의 문자열을 Date객체로 변환
			 *
			 * @function
			 * @param {String} dateStringInRange 날짜 형식의 문자열
			 * @return {Date}
			 */
			parseDate: (function () {
				var isoExp = /^\s*(\d{4})(\d{2})(\d{2})(\d{2})?(\d{2})?(\d{2})?\s*$/;
				return function (dateStringInRange) {
					var date, month, parts;

					if (dateStringInRange instanceof Date){
						return dateStringInRange;
					}

					dateStringInRange = dateStringInRange.replace(/[^\d]+/g, '');
					date = new Date(dateStringInRange);
					if (!isNaN(date)) {
						return date;
					}

					date = new Date(NaN);
					parts = isoExp.exec(dateStringInRange);

					if(parts) {
						month = +parts[2];
						date.setFullYear(parts[1]|0, month - 1, parts[3]|0);
						date.setHours(parts[4]|0);
						date.setMinutes(parts[5]|0);
						date.setSeconds(parts[6]|0);
						if(month != date.getMonth() + 1) {
							date.setTime(NaN);
						}
					}
					return date;
				};
			})(),

			/**
			 * 주어진 년월의 일수를 반환
			 *
			 * @param {Number} year 년도
			 * @param {Number} month 월
			 * @return {Date}
			 */
			daysInMonth: function (year, month) {
				var dd = new Date(year|0, month|0, 0);
				return dd.getDate();
			},

			/**
			 * 주어진 시간이 현재부터 몇시간 이전인지 표현(예: -54000 -> 54초 이전)
			 *
			 * @function
			 * @param {Date|Interval} time 시간
			 * @return {String}
			 *
			 * @example
			 * common.date.prettyTimeDiff(new Date() - 51811); -> "52초 이전"
			 */
			prettyTimeDiff: (function () {
				var ints = {
					'초': 1,
					'분': 60,
					'시': 3600,
					'일': 86400,
					'주': 604800,
					'월': 2592000,
					'년': 31536000
				};

				return function (time) {

					time = +new Date(time);

					var gap = ((+new Date()) - time) / 1000,
						amount, measure;

					for (var i in ints) {
						if (gap > ints[i]) { measure = i; }
					}

					amount = gap / ints[measure];
					amount = gap > ints.day ? (Math.round(amount * 100) / 100) : Math.round(amount);
					amount += measure + ' 이전';

					return amount;
				};
			}()),
			/**
			 * 주어진 시간이 현재부터 몇시간 이전인지 표현(예: -54000 -> 54초 이전)
			 *
			 * @function
			 * @param {Date|Interval} time 시간
			 * @return {String}
			 *
			 * @example
			 * common.date.timeDiff(new Date() - 51811); -> "00:00:52"
			 */
			timeDiff: function (t1, t2) {
				var zeroPad = common.number.zeroPad;
				var amount = (t1.getTime() - t2.getTime()) / 1000,
					days = 0,
					hours = 0,
					mins = 0,
					secs = 0;

				days=Math.floor(amount/86400);
				amount=amount%86400;
				hours=Math.floor(amount/3600);
				amount=amount%3600;
				mins=Math.floor(amount/60);
				amount=amount%60;
				secs=Math.floor(amount);

				return zeroPad(hours) + ':' + zeroPad(mins) + ':' + zeroPad(secs);
			}
		};
	});


	/**
	 * prototype 을 이용한 클래스 생성
	 * @namespace
	 * @name common.Class
	 * @example
	 * var Person = Class({
	*	$extend: Object, // 상속받을 부모클래스
	*	$singleton: true, // 싱글톤 여부
	*	$statics: { // 클래스 속성 및 함수 
	*		live: function () {} // Person.live(); 으로 호출
	*	}, 
	*	$mixins: [Animal, Robot], // 특정 클래스에서 메소드들을 빌려오고자 할 때 해당 클래스를 지정(다중으로도 가능),
	*	initialize: function (name) {
	*		this.name = name;
	*	},
	*	say: function (job){
	*		alert("I'm Person: " + job);
	*	},
	*	run: function (){
	*		alert("i'm running...");
	*	}
	*`});
	 *
	 * var Man = Class({
	*	$extend: Person,
	*	initialize: function (name, age) {
	*		this.supr(name);  // Person(부모클래스)의 initialize메소드를 호출 or this.suprMethod('initialize', name);
	*		this.age = age;
	*	},
	*	// say를 오버라이딩함
	*	say: function (job) {
	*		this.suprMethod('say', 'programer'); // 부모클래스의 say 메소드 호출 - 첫번째인자는 메소드명, 두번째부터는 해당 메소드로 전달될 인자

	*		alert("I'm Man: "+ job);
	*	}
	* });
	 * var man = new Man('kim', 20);
	 * man.say('freeman');  // 결과: alert("I'm Person: programer"); alert("I'm Man: freeman");
	 * man.run(); // 결과: alert("i'm running...");
	 */


	common.define('Class', function () {
		var isFn = common.isFunction,
			emptyFn = common.emptyFn,
			include = common.array.include,
			ignoreNames = ['superclass', 'members', 'statics'];


		// 부모클래스의 함수에 접근할 수 있도록 .supr 속성에 부모함수를 래핑하여 설정
		function wrap(k, fn, supr) {
			return function () {
				var tmp = this.supr, undef, ret;

				this.supr = supr.prototype[k];
				ret = undefined;
				try {
					ret = fn.apply(this, arguments);
				} finally {
					this.supr = tmp;
				}
				return ret;
			};
		}

		// 속성 중에 부모클래스에 똑같은 이름의 함수가 있을 경우 래핑처리
		function process(what, o, supr) {
			for (var k in o) {
				if (o.hasOwnProperty(k)) {
					what[k] = isFn(o[k]) && isFn(supr.prototype[k]) ? wrap(k, o[k], supr) : o[k];
				}
			}
		}

		/**
		 * 클래스 정의
		 *
		 * @memberOf common.Class
		 *
		 * @param {String} ns (Optional) 네임스페이스
		 * @param {Object} attr 속성
		 * @return {Class}
		 */
		return function (attr) {
			var supr, statics, mixins, hooks, singleton, Parent, instance;

			if (isFn(attr)) {
				attr = attr();
			}

			// 생성자 몸체
			function constructor() {
				if (singleton) {
					if (instance) {
						return instance;
					} else {
						instance = this;
					}
				}

				if (this.initialize) {
					this.initialize.apply(this, arguments);
				} else {
					supr.prototype.initialize && supr.prototype.initialize.apply(this, arguments);
				}
			}

			function Class() {
				constructor.apply(this, arguments);
			}

			supr = attr.$extend || emptyFn;
			singleton = attr.$singleton || false;
			statics = attr.$statics || false;
			mixins = attr.$mixins || false;
			hooks = attr.$hooks || false;

			Parent = emptyFn;
			Parent.prototype = supr.prototype;

			Class.prototype = new Parent;
			Class.prototype.constructor = Class;

			/**
			 * 메소드 내에서 부모클래스에 접근할 때 사용
			 * @memberOf common.Class
			 * @property
			 */
			Class.superclass = supr.prototype;
			Class.classType = Class;

			if (singleton) {
				/**
				 * 싱글톤 클래스일 경우 싱글톤 인스턴스를 반환
				 * @memberOf common.Class
				 * @property
				 */
				Class.getInstance = function () {
					if (!instance) {
						instance = new Class();
					}
					return instance;
				};
			}

			/**
			 * 부모클래스의 메소드를 호출할 수 있는 래핑함수
			 * @memberOf common.Class
			 * @name suprMethod
			 * @function
			 * @param {String} name 호출하고자 하는 부모함수명
			 * @return {Mix} 부모함수의 반환값
			 * @example
			 * this.suprMethod('show', true);  -> 부모클래스의 show(true) 메소드 호출
			 */
			Class.prototype.suprMethod = function (name) {
				var args = arraySlice.call(arguments, 1);
				return supr.prototype[name].apply(this, args);
			};

			/**
			 * func의 컨텍스트를 this로 지정
			 * @memberOf common.Class
			 * @name proxy
			 * @function
			 * @param {function} function 함수
			 * @return {Function}
			 * @example
			 * function test(){
			 *		alert(this.name);
			 * }
			 * var Person = Class({
			 *		initialize: function () {
			 *			this.name = 'axl rose',
			 *			this.proxy(test)();  // = test.bind(this)와 동일, test함수의 컨텍스틑 this로 지정 -> 결과: alert('axl rose');
			 *		}
			 * });
			 */
			Class.prototype.proxy = function (func) {
				var _this = this;
				return function () {
					func.apply(_this, arraySlice.call(arguments));
				};
			};


			/**
			 * 여러 클래스를 mixins방식으로 merge
			 * @memberOf common.Class
			 * @name mixins
			 * @function
			 * @param {function} o 객체
			 * @example
			 * var A = Class({
			 *		funcA: function (){ ... }
			 * });
			 * var B = Class({
			 *		funcB: function (){ ... }
			 * });
			 * var Person = Class({
			 *		initialize: function () {
			 *			...
			 *		}
			 * });
			 * Person.mixins([A, B]);
			 * var person = new Person();
			 * person.funcA();
			 * person.funcB();
			 */
			Class.mixins = function (o) {
				if (!o.push) { o = [o]; }
				$.each(o, function (index, value) {
					$.each(value, function (key, item) {
						Class.prototype[key] = item;
					});
				});
			};
			mixins && Class.mixins.call(Class, mixins);


			/**
			 * 클래스에 메소드  추가
			 * @memberOf common.Class
			 * @name members
			 * @function
			 * @param {function} o 객체
			 * @example
			 * var Person = Class({
			 *		initialize: function () {
			 *			...
			 *		}
			 * });
			 * Person.members({
			 *		newFunc: function () { ... }
			 * });
			 * var person = new Person();
			 * person.newFunc();
			 */
			Class.members = function (o) {
				process(Class.prototype, o, supr);
			};
			attr && Class.members.call(Class, attr);

			/*
			 * 클래스함수 추가함수
			 * @memberOf common.Class
			 * @name statics
			 * @function
			 * @param {function} o 객체
			 * @example
			 * var Person = Class({
			 *		initialize: function () {
			 *			...
			 *		}
			 * });
			 * Person.statics({
			 *		staticFunc: function () { ... }
			 * });
			 * Person.staticFunc();
			 */
			Class.statics = function (o) {
				o = o || {};
				for (var k in o) {
					if (!include(ignoreNames, k)) {
						Class[k] = o[k];
					}
				}
				return Class;
			};
			Class.statics.call(Class, supr);
			statics && Class.statics.call(Class, statics);

			if(hooks || (hooks = Parent.prototype.$hooks)) {
				hooks.onClassCreate && hooks.onClassCreate(Class);
			}

			return Class;
		};
	});

	common.define( /** @lends common */{
		/**
		 * 설정 값들이 들어갈 리터럴
		 *
		 * @private
		 * @type {Object}
		 */
		configs: {},

		/**
		 * 설정값을 꺼내오는 함수
		 *
		 * @param {String} name 설정명. `.`를 구분값으로 단계별로 값을 가져올 수 있다.
		 * @param {Object} def {Optional} 설정된 값이 없을 경우 사용할 기본값
		 * @return {Object} 설정값
		 */
		getConfig: function (name, def) {
			var root = common.configs,
				names = name.split('.'),
				pair = root;

			for (var i = 0, len = names.length; i < len; i++) {
				if (!(pair = pair[names[i]])) {
					return def;
				}
			}
			return pair;
		},

		/**
		 * 설정값을 지정하는 함수
		 *
		 * @param {String} name 설정명. `.`를 구분값으로 단계를 내려가서 설정할 수 있다.
		 * @param {Object} value 설정값
		 * @return {Object} 설정값
		 */
		setConfig: function (name, value) {
			var root = common.configs,
				names = name.split('.'),
				len = names.length,
				last = len - 1,
				pair = root;

			for (var i = 0; i < last; i++) {
				pair = pair[names[i]] || (pair[names[i]] = {});
			}
			return (pair[names[last]] = value);
		}
	});

	common.define( /** @lends common */{
		/**
		 * 템플릿 생성
		 *
		 * @param {String} text 템플릿 문자열
		 * @param {Object} data 템플릿 문자열에서 변환될 데이타
		 * @param {Object} settings 옵션
		 * @return tempalte 함수
		 *
		 * @example
		 * var tmpl = common.template('&lt;span>&lt;%=name%>&lt;/span>');
		 * var html = tmpl({name: 'Axl rose'}); => &lt;span>Axl rose&lt;/span>
		 * $('div').html(html);
		 */
		template: function (str, data) {
			var m,
				src = 'var __src = [], escapeHTML=common.string.escapeHTML; with(value||{}){ __src.push("';
			str = $.trim(str);
			src += str.replace(/\r|\n|\t/g, " ")
				.replace(/<%(.*?)%>/g, function (a, b){ return '<%' + b.replace(/"/g, '\t') + '%>'; })
				.replace(/"/g, '\\"')
				.replace(/<%(.*?)%>/g, function (a, b){ return '<%' + b.replace(/\t/g, '"') + '%>'; })
				.replace(/<%=(.+?)%>/g, '", $1, "')
				.replace(/<%-(.+?)%>/g, '", escapeHTML($1), "')
				.replace(/(<%|%>)/g, function (a, b){ return b === '<%' ? '");' : '__src.push("'});

			src+='"); }; return __src.join("")';

			var f = new Function('value', 'data', src);
			if( data ) {
				return f( data );
			}
			return f;
		}
	});


	/**
	 * @namespace
	 * @name common.valid
	 * @description 밸리데이션 함수 모음
	 */
	common.define('valid', function () {
		var trim = $.trim,
			isString = common.isString,
			isNumber = common.isNumber,
			isElement = common.isElement;

		return /** @lends common.valid */{
			empty: common.isEmpty,
			/**
			 * 필수입력 체크
			 *
			 * @param {String} str
			 * @return {Boolean} 빈값이면 false 반환
			 */
			require: function (str) {
				isString(str) || (isElement(str) && (str = str.value));
				return !!str;
			},
			/**
			 * 유효한 이메일형식인지 체크
			 *
			 * @param {String} str
			 * @return {Boolean}
			 */
			email: function (str) {
				isString(str) || (isElement(str) && (str = str.value));
				return (str = trim(str)) ? (/\w+([-+.]\w+)*@\w+([-.]\w+)*\.[a-zA-Z]{2,4}$/).test(str) : false;
			},
			/**
			 * 한글인지 체크
			 *
			 * @param {String} str
			 * @return {Boolean}
			 */
			kor: function (str) {
				isString(str) || (isElement(str) && (str = str.value));
				return (str = trim(str)) ? (/^[가-힝]+$/).test(str) : false;
			},
			/**
			 * 영문 체크
			 *
			 * @param {String} str
			 * @return {Boolean}
			 */
			eng: function (str) {
				isString(str) || (isElement(str) && (str = str.value));
				return (str = trim(str)) ? (/^[a-zA-Z]+$/).test(str) : false;
			},
			/**
			 * 숫자 체크
			 *
			 * @param {String} str
			 * @return {Boolean}
			 */
			num: function (str) {
				isString(str) || (isElement(str) && (str = str.value));
				return (str = trim(str)) ? isNumber(str) : false;
			},
			/**
			 * 유효한 url형식인지 체크
			 *
			 * @param {String} str
			 * @return {Boolean}
			 */
			url: function (str) {
				isString(str) || (isElement(str) && (str = str.value));
				return (str = trim(str)) ? (/^https?:\/\/([\w\-]+\.)+/).test(str) : false;
			},
			/**
			 * 특수기호 유무 체크
			 *
			 * @param {String} str
			 * @return {Boolean}
			 */
			special: function (str) {
				isString(str) || (isElement(str) && (str = str.value));
				return (str = trim(str)) ? (/^[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]+$/).test(str) : false;
			},
			/**
			 * 유효한 전화번호형식인지 체크
			 *
			 * @param {String} str
			 * @return {Boolean}
			 */
			phone: function (str) {
				isString(str) || (isElement(str) && (str = str.value));
				return (str = trim(str)) ? (/^\d{1,3}-\d{3,4}-\d{4}$/).test(str) : false;
			},
			/**
			 * 유효한 yyyy-MM-dd형식인지 체크
			 *
			 * @param {String} str
			 * @return {Boolean}
			 */
			dateYMD: function (str) {
				isString(str) || (isElement(str) && (str = str.value));
				return (str = trim(str)) ? (/^\d{4}-\d{2}-\d{2}$/).test(str) : false;
			},
			/**
			 * 유효한 yyyy-MM-dd hh:mm:ss형식인지 체크
			 *
			 * @param {String} str
			 * @return {Boolean}
			 */
			dateYMDHMS: function (str) {
				isString(str) || (isElement(str) && (str = str.value));
				return (str = trim(str)) ? (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/).test(str) : false;
			},
			/**
			 * 유효한 주민번호인지 체크
			 *
			 * @param {String} strSsn1 앞주민번호.
			 * @param {String} strSsn2 (Optional) 뒷주민번호. 값이 없으면 strSsn1만으로 체크
			 * @return {Boolean}
			 */
			SSN: function (sid1, sid2) {
				var num = sid1 + (sid2 ? sid2 : ""),
					pattern = /^(\d{6})-?(\d{7})$/,
					sum = 0,
					last, mod,
					bases = "234567892345";

				if (!pattern.test(num)) { return false; }
				num = RegExp.$1 + RegExp.$2;

				last = num.charCodeAt(12) - 0x30;

				for (var i = 0; i < 12; i++) {
					if (isNaN(num.substring(i, i + 1))) { return false; }
					sum += (num.charCodeAt(i) - 0x30) * (bases.charCodeAt(i) - 0x30);
				}
				mod = sum % 11;
				return ((11 - mod) % 10 === last) ? true : false;
			},
			/**
			 * 유효한 외국인주민번호인지 체크
			 *
			 * @param {String} strSsn1 앞주민번호.
			 * @param {String} strSsn2 (Optional) 뒷주민번호. 값이 없으면 strSsn1만으로 체크
			 * @return {Boolean}
			 */
			FgnSSN: function (sid1, sid2) {
				var num = sid1 + (sid2 ? sid2 : ""),
					pattern = /^(\d{6})-?(\d{7})$/,
					sum = 0,
					odd, buf,
					multipliers = "234567892345".split("");

				if (!pattern.test(num)) { return false; }
				num = RegExp.$1 + RegExp.$2;

				buf = common.toArray(num);
				odd = buf[7] * 10 + buf[8];

				if (odd % 2 !== 0) { return false; }

				if ((buf[11] !== 6) && (buf[11] !== 7) && (buf[11] !== 9)) { return false; }

				for (var i = 0; i < 12; i++) { sum += (buf[i] *= multipliers[i]); }

				sum = 11 - (sum % 11);
				if (sum >= 10){ sum -= 10; }

				sum += 2;
				if (sum >= 10) { sum -= 10; }

				if (sum !== buf[12]) { return false; }

				return true;
			}
		};
	});

	/**
	 * @namespace
	 * @name common.css
	 * @description 벤더별 css명칭 생성
	 */
	common.define('css', function (){

		var _tmpDiv = common.tmpNode,
			_prefixes = ['Webkit', 'Moz', 'O', 'ms', 'Khtml'],
			_style = _tmpDiv.style,
			_vendor = (function () {
				var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
					transform,
					i = 0,
					l = vendors.length;

				for ( ; i < l; i++ ) {
					transform = vendors[i] + 'ransform';
					if ( transform in _style ) return vendors[i].substr(0, vendors[i].length-1);
				}

				return false;
			})(),
			string  = common.string;

		function prefixStyle(name) {
			if ( _vendor === false ) return false;
			if ( _vendor === '' ) return name;
			return _vendor + string.capitalize(name);
		}

		return /** @lends common.css */{
			supportTransition: _vendor !== false,
			/**
			 * 현재 브라우저의 css prefix명 (webkit or Moz or ms or O)
			 * @function
			 * @return {String}
			 */
			vendor: _vendor,
			/**
			 * 주어진 css속성을 지원하는지 체크
			 *
			 * @param {String} cssName 체크하고자 하는 css명
			 * @return {Boolean} 지원여부
			 */
			hasCSS3: function (name) {
				var a = _prefixes.length;
				if (name in _style) { return true; }
				name = string.capitalize(name);
				while (a--) {
					if (_prefixes[a] + name in _style) {
						return true;
					}
				}
				return false;
			},

			/**
			 * 주어진 css명 앞에 현재 브라우저에 해당하는 prefix를 붙여준다.
			 *
			 * @function
			 * @param {String} cssName css명
			 * @return {String}
			 * @example
			 * common.css.prefixStyle('transition'); // => webkitTransition
			 */
			prefixStyle: prefixStyle
		};
	});

	/**
	 * @namespace
	 * @name common.util
	 */
	common.define('util', function (){

		return /** @lends common.util */{
			/**
			 * png Fix
			 */
			pngFix: function () {
				var s, bg;
				$('img[@src*=".png"]', document.body).each(function () {
					this.css('filter', 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'' + this.src + '\', sizingMethod=\'\')');
					this.src = common.getSite() + common.Urls.getBlankImage() || '/resource/images/common/blank.gif';
				});
				$('.pngfix', document.body).each(function () {
					var $this = $(this);

					s = $this.css('background-image');
					if (s && /\.(png)/i.test(s)) {
						bg = /url\("(.*)"\)/.exec(s)[1];
						$this.css('background-image', 'none');
						$this.css('filter', "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + bg + "',sizingMethod='scale')");
					}
				});
			},

			/**
			 * 페이지에 존재하는 플래쉬의 wmode모드를 opaque로 변경
			 */
			wmode: function () {
				$('object').each(function () {
					var $this;
					if (this.classid.toLowerCase() === 'clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' || this.type.toLowerCase() === 'application/x-shockwave-flash') {
						if (!this.wmode || this.wmode.toLowerCase() === 'window') {
							this.wmode = 'opaque';
							$this = $(this);
							if (typeof this.outerHTML === 'undefined') {
								$this.replaceWith($this.clone(true));
							} else {
								this.outerHTML = this.outerHTML;
							}
						}
					}
				});
				$('embed[type="application/x-shockwave-flash"]').each(function () {
					var $this = $(this),
						wm = $this.attr('wmode');
					if (!wm || wm.toLowerCase() === 'window') {
						$this.attr('wmode', 'opaque');
						if (typeof this.outerHTML === 'undefined') {
							$this.replaceWith($this.clone(true));
						} else {
							this.outerHTML = this.outerHTML;
						}
					}
				});
			},

			/**
			 * 팝업. (common.openPopup으로도 사용가능)
			 * @param {string} url 주소
			 * @param {number=} width 너비.
			 * @param {number=} height 높이.
			 * @param {opts=} 팝업 창 모양 제어 옵션.
			 */
			openPopup: function (url, width, height, opts) {
				opts = $.extend({

				}, opts);
				width = width || 600;
				height = height || 400;
				//var winCoords = common.util.popupCoords(width, height),
				var target = opts.target || '',
					feature = 'app_, ',
					tmp = [];

				delete opts.name;
				for(var key in opts) {
					tmp.push(key + '=' + opts[ key ]);
				}
				common.browser.isSafari && tmp.push('location=yes');
				tmp.push('height='+height);
				tmp.push('width='+width);
				/* + ', top=' + winCoords.top + ', left=' + winCoords.left;*/
				feature += tmp.join(', ');

				window.open(
					url,
					target,
					feature
				);
			},

			/**
			 * 팝업의 사이즈를 $el 사이즈에 맞게 조절
			 */
			resizePopup: function ($el) {
				if(!($el instanceof jQuery)) { $el = $($el); }
				window.resizeTo($el.width(), $el.height());
			},

			/**
			 * 팝업의 사이즈에 따른 화면상의 중앙 위치좌표를 반환
			 * @param {number} w 너비.
			 * @param {number} h 높이.
			 * @return {JSON} {left: 값, top: 값}
			 */
			popupCoords: function (w, h) {
				var wLeft = window.screenLeft ? window.screenLeft : window.screenX,
					wTop = window.screenTop ? window.screenTop : window.screenY,
					wWidth = window.outerWidth ? window.outerWidth : document.documentElement.clientWidth,
					wHeight = window.outerHeight ? window.outerHeight : document.documentElement.clientHeight;

				return {
					left: wLeft + (wWidth / 2) - (w / 2),
					top: wTop + (wHeight / 2) - (h / 2) - 25
				};
			},

			/**
			 * data-src에 있는 이미지주소를 실제로 불러들인 다음, 주어진 사이즈내에서 자동으로 리사이징 처리
			 * @param {jQuery} $imgs
			 * @param {Number} wrapWidth 최대 너비 값
			 * @param {Number} wrapHeight 최대 높이 값
			 * @param {Function} [onError] (optional) 이미지를 불어오지 못했을 경우 실행할 콜백함수
			 * @return {Boolean} true 불러들인 이미지가 있었는지 여부
			 */
			lazyLoadImage: function ($imgs, wrapWidth, wrapHeight, onError) {
				var hasLazyImage = false;
				var dataSrcAttr = 'data-src';

				$imgs.filter('img[data-src]').each(function (i) {
					var $img = $(this);
					wrapWidth = wrapWidth || $img.parent().width();
					wrapHeight = wrapHeight || $img.parent().height();

					// 이미지가 로드되면, 실제 사이즈를 체크해서 가로이미지인지 세로이미지인지에 따라 기준이 되는 width, height에 지정한다.
					$img.one('load', function () {
						$img.removeAttr('width height').css({'width':'auto', 'height':'auto'});
						if($img.attr('data-no-height') === 'true' && this.width > wrapWidth) {
							$img.css('width', wrapWidth);
						} else if($img.attr('data-no-width') === 'true' && this.height > wrapHeight) {
							$img.css('height', wrapWidth);
						} else {
							var isHoriz = this.width > this.height;
							if ( isHoriz ) { // 가로로 긴 이미지
								$img.css('width', Math.min(this.width, wrapWidth));
							} else { // 세로로 긴 이미지
								$img.css('height', Math.min(this.height, wrapHeight));
							}
						}
					}).attr('src', $img.attr('data-src')).removeAttr('data-src');
				});
				return hasLazyImage;
			},

			/**
			 * 도큐먼트의 높이를 반환
			 * @return {Number}
			 */
			getDocHeight: function () {
				var doc = document,
					bd = doc.body,
					de = doc.documentElement;

				return Math.max(
					Math.max(bd.scrollHeight, de.scrollHeight),
					Math.max(bd.offsetHeight, de.offsetHeight),
					Math.max(bd.clientHeight, de.clientHeight)
				);
			},

			/**
			 * 도큐먼트의 너비를 반환
			 * @return {Number}
			 */
			getDocWidth: function () {
				var doc = document,
					bd = doc.body,
					de = doc.documentElement;
				return Math.max(
					Math.max(bd.scrollWidth, de.scrollWidth),
					Math.max(bd.offsetWidth, de.offsetWidth),
					Math.max(bd.clientWidth, de.clientWidth)
				);
			},

			/**
			 * 창의 너비를 반환
			 * @return {Number}
			 */
			getWinWidth : function () {
				var w = 0;
				if (self.innerWidth) {
					w = self.innerWidth;
				} else if (document.documentElement && document.documentElement.clientHeight) {
					w = document.documentElement.clientWidth;
				} else if (document.body) {
					w = document.body.clientWidth;
				}
				return w;
			},

			/**
			 * 창의 높이를 반환
			 * @return {Number}
			 */
			getWinHeight : function () {
				var w = 0;
				if (self.innerHeight) {
					w = self.innerHeight;
				} else if (document.documentElement && document.documentElement.clientHeight) {
					w = document.documentElement.clientHeight;
				} else if (document.body) {
					w = document.body.clientHeight;
				}
				return w;
			}
		};
	});

	common.openPopup = common.util.openPopup;

})(window, jQuery);


(function (context, $, common) {
	"use strict";
	/* jshint expr: true, validthis: true */

	var $win = common.$win,
		$doc = common.$doc,
		Class = common.Class,
		dateUtil = common.date,
		stringUtil = common.string,
		numberUtil = common.number,
		arraySlice = [].slice,
		View;		// ui.View

	/*
	 * @namespace
	 * @name common.EVENTS
	 */
	common.define('EVENTS', {
		ON_BEFORE_SHOW: 'beforeshow',
		ON_SHOW: 'show',
		ON_BEFORE_HIDE: 'beforehide',
		ON_HIDE: 'hide'
	});


	common.define( /** @lends common */{
		/**
		 * 작성된 클래스를 jQuery의 플러그인으로 사용할 수 있도록 바인딩시켜 주는 함수
		 *
		 * @param {Class} klass 클래스
		 * @param {String} name 플러그인명
		 *
		 * @example
		 * // 클래스 정의
		 * var Slider = common.Class({
		 *   initialize: function (el, options) { // 생성자의 형식을 반드시 지킬 것..(첫번째 인수: 대상 엘리먼트, 두번째 인수: 옵션값들)
		 *   ...
		 *   },
		 *   ...
		 * });
		 * common.bindjQuery(Slider, 'hibSlider');
		 * // 실제 사용시
		 * $('#slider').hibSlider({count: 10});
		 */
		bindjQuery: function (Klass, name) {
			var old = $.fn[name];

			$.fn[name] = function (options) {
				var a = arguments,
					args = arraySlice.call(a, 1),
					me = this,
					returnValue = this;

				this.each(function () {
					var $this = $(this),
						methodValue,
						instance;

					if( !(instance = $this.data(name)) || (a.length === 1 && typeof options !== 'string')) {
						instance && (instance.destroy(), instance = null);
						$this.data(name, (instance = new Klass(this, $.extend({}, $this.data(), options), me)));
					}

					if (typeof options === 'string' && common.isFunction(instance[options])) {
						try {
							methodValue = instance[options].apply(instance, args);
						} catch(e) {
							console.log('[jQuery bind error] ' + e);
						}

						if (/*methodValue !== instance && */methodValue !== undefined) {
							returnValue = methodValue;
							return false;
						}
					}
				});
				return returnValue;
			};

			// 기존의 모듈로 복구
			$.fn[name].noConflict = function () {
				$.fn[name] = old;
				return this;
			};
		}
	});


	common.define('Listener', function () {
		/**
		 * 이벤트 리스너
		 * @class
		 * @name common.Listener
		 */
		var Listener = Class( /** @lends common.Listener# */ {
			/**
			 * 생성자
			 */
			initialize: function () {
				this._listeners = $({});
			},

			/**
			 * 이벤트 핸들러 등록
			 * @param {Object} name 이벤트명
			 * @param {Object} cb 핸들러
			 */
			on: function () {
				var lsn = this._listeners;
				lsn.on.apply(lsn, arguments);
				return this;
			},

			/**
			 * 한번만 실행할 이벤트 핸들러 등록
			 * @param {Object} name 이벤트명
			 * @param {Object} cb 핸들러
			 */
			once: function () {
				var lsn = this._listeners;
				lsn.once.apply(lsn, arguments);
				return this;
			},

			/**
			 * 이벤트 핸들러 삭제
			 * @param {Object} name 삭제할 이벤트명
			 * @param {Object} cb {Optional} 삭제할 핸들러. 이 인자가 없을 경우 name에 등록된 모든 핸들러를 삭제.
			 */
			off: function () {
				var lsn = this._listeners;
				lsn.off.apply(lsn, arguments);
				return this;
			},

			/**
			 * 이벤트 발생
			 * @param {Object} name 발생시킬 이벤트명
			 */
			trigger: function () {
				var lsn = this._listeners;
				lsn.trigger.apply(lsn, arguments);
				return this;
			}
		});

		return Listener;
	});


	/**
	 * @namespace
	 * @name common.PubSub
	 * @description 발행/구독 객체: 상태변화를 관찰하는 옵저버(핸들러)를 등록하여, 상태변화가 있을 때마다 옵저버를 발행(실행)
	 * 하도록 하는 객체이다.
	 * @example
	 * // 옵저버 등록
	 * common.PubSub.on('customevent', function (){
	 *	 alert('안녕하세요');
	 * });
	 *
	 * // 등록된 옵저버 실행
	 * common.PubSub.trigger('customevent');
	 */
	common.define('PubSub', function () {

		var PubSub = new common.Listener();
		PubSub.attach = PubSub.on;
		PubSub.unattach = PubSub.off;

		return PubSub;
	});

	/**
	 *
	 * @param name
	 * @param attr
	 * @returns {*}
	 */
	common.ui = function (/*String*/name, /*Object*/attr) {
		var names = name.split(/\./),
			bindName = attr.bindjQuery,
			Klass;

		delete attr.bindjQuery;
		$.extend(attr, {
			$extend: (attr.$extend === undefined) ? common.ui.View : attr.$extend,
			name: names[names.length - 1]
		});
		Klass = common.Class(attr);
		common.define('ui.' + name, Klass);
		if(bindName) {
			common.bindjQuery(Klass, bindName);
		}
		return Klass;
	};


	/**
	 * @namespace
	 * @name common.ui
	 */
	View = common.define('ui.View', function () {
		var isFn = common.isFunction,
			execObject = function (obj, ctx) {
				return isFn(obj) ? obj.call(ctx) : obj;
			};

		/**
		 * 모든 UI요소 클래스의 최상위 클래스로써, UI클래스를 작성함에 있어서 편리한 기능을 제공해준다.
		 * @class
		 * @name common.ui.View
		 *
		 * @example
		 *
		 * var Slider = Class({
		 *		$extend: common.ui.View,
		 *		// 기능1) events 속성을 통해 이벤트핸들러를 일괄 등록할 수 있다. ('이벤트명 selector': '핸들러함수명')
		 *	events: {
		 *		click ul>li.item': 'onItemClick',		// this.$el.on('click', 'ul>li.item', this.onItemClick.bind(this)); 를 자동 수행
		 *		'mouseenter ul>li.item>a': 'onMouseEnter'	// this.$el.on('mouseenter', 'ul>li.item>a', this.onMouseEnter.bind(this)); 를 자동 수행
		 *	},
		 *	// 기능2) selectors 속성을 통해 지정한 selector에 해당하는 노드를 주어진 이름의 멤버변수에 자동으로 설정해 준다.
		 *	selectors: {
		 *		box: 'ul',			// this.$box = this.$el.find('ul') 를 자동수행
		 *		items: 'ul>li.item',	// this.$items = this.$el.find('ul>li.item') 를 자동수행
		 *		prevBtn: 'button.prev', // this.$prevBtn = this.$el.find('button.prev') 를 자동 수행
		 *		nextBtn: 'button..next' // this.$nextBtn = this.$el.find('button.next') 를 자동 수행
		 *	},
		 *	initialize: function (el, options) {
		 *	this.supr(el, options);	// 기능4) this.$el, this.options가 자동으로 설정된다.
		 *	},
		 *	onItemClick: function (e) {
		 *		...
		 *	},
		 *	onMouseEnter: function (e) {
		 *		...
		 *	}
		 * });
		 *
		 * new common.ui.Slider('#slider', {count: 10});
		 */
		var View = Class(/** @lends common.ui.View# */{
			$statics: {
				_instances: [] // 모든 인스턴스를 갖고 있는다..
			},
			/**
			 * 생성자
			 * @param {String|Element|jQuery} el 해당 엘리먼트(노드, id, jQuery 어떤 형식이든 상관없다)
			 * @param {Object} options 옵션값
			 * @return {Mixes} false 가 반환되면, 이미 해당 엘리먼트에 해당 모듈이 빌드되어 있거나 disabled 상태임을 의미한다.
			 */
			initialize: function (el, options) {
				options || (options = {});

				var me = this,
					eventPattern = /^([a-z]+) ?([^$]*)$/i,
					moduleName, superClass;

				if (!me.name){
					throw new Error('클래스의 이름이 없습니다');
				}

				moduleName = me.moduleName = common.string.toFirstLower(me.name);
				me.$el = el instanceof jQuery ? el : $(el);

				// 강제로 리빌드 시킬 것인가 /////////////////////////////////////////////////////////////////////////////////////////////////
				if(options.rebuild === true) {
					try { me.$el.data(moduleName).destroy(); } catch(e){}
					me.$el.removeData(moduleName);
				} else {
					// 이미 빌드된거면 false 반환 - 중복 빌드 방지
					if (me.$el.data(moduleName) ) {
						return false;
					}
					me.$el.data(moduleName, this);
				}
				/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

				// disabled상태면 false 반환
				if (me.$el.hasClass('disabled') || me.$el.attr('data-readony') === 'true' || me.$el.attr('data-disabled') === 'true') {
					return false;
				}

				View._instances.push(me);
				superClass = me.constructor.superclass;
				me.el = me.$el[0];													// 원래 엘리먼트도 변수에 설정
				me.options = $.extend({}, superClass.defaults, me.defaults, options);			// 옵션 병합
				me.cid = me.moduleName + '_' + common.getUniqKey();					// 객체 고유 키
				me.subViews = {};														// 하위 컨트롤를 관리하기 위함
				me._eventNamespace = '.' + me.cid;	// 객체 고유 이벤트 네임스페이스명


				me.updateSelectors();

				// events 속성 처리
				// events: {
				//	'click ul>li.item': 'onItemClick', //=> this.$el.on('click', 'ul>li.item', this.onItemClick); 으로 변환
				// }
				me.options.events = $.extend({},
					execObject(me.events, me),
					execObject(me.options.events, me));
				$.each(me.options.events, function (key, value) {
					if (!eventPattern.test(key)) { return false; }

					var name = RegExp.$1,
						selector = RegExp.$2,
						args = [name],
						func = isFn(value) ? value : (isFn(me[value]) ? me[value] : common.emptyFn);

					if (selector) { args[args.length] = $.trim(selector); }

					args[args.length] = function () {
						func.apply(me, arguments);
					};
					me.on.apply(me, args);
				});

				// options.on에 지정한 이벤트들을 클래스에 바인딩
				$.each(me.options.on || {}, function (key, value) {
					me.on(key, value);
				});
				///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

			},

			updateSelectors: function () {
				var me = this,
					superClass = me.constructor.superclass;

				// selectors 속성 처리
				// selectors: {
				//  box: 'ul',			// => this.$box = this.$el.find('ul');
				//  items: 'ul>li.item'  // => this.$items = this.$el.find('ul>li.item');
				// }
				me.options.selectors = $.extend({},
					execObject(superClass.selectors, me),
					execObject(me.selectors, me),
					execObject(me.options.selectors, me));
				$.each(me.options.selectors, function (key, value) {
					if (typeof value === 'string') {
						me['$' + key] = me.$el.find(value);
					} else if (value instanceof jQuery) {
						me['$' + key] = value;
					} else {
						me['$' + key] = $(value);
					}
					me.subViews['$' + key] = me['$' + key];
				});
				////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			},

			$: function (selector) {
				return this.$el.find(selector);
			},

			/**
			 * 파괴자
			 */
			destroy: function () {
				var me = this;

				me.$el.off(me._eventNamespace);

				// me.subviews에 등록된 자식들의 파괴자 호출
				$.each(me.subViews, function (key, item) {
					if(key.substr(0, 1) === '$') {
						item.off(me._eventNamespace);
					} else {
						item.destroy && item.destroy();
					}
				});
			},

			/**
			 * 옵션 설정함수
			 *
			 * @param {String} name 옵션명
			 * @param {Mixed} value 옵션값
			 */
			setOption: function (name, value) {
				this.options[name] = value;
			},

			/**
			 * 옵션값 반환함수
			 *
			 * @param {String} name 옵션명
			 * @param {Mixed} def 옵션값이 없을 경우 기본값
			 * @return {Mixed} 옵션값
			 */
			getOption: function (name, def) {
				return (name in this.options && this.options[name]) || def;
			},

			/**
			 * 인자수에 따라 옵션값을 설정하거나 반환해주는 함수
			 *
			 * @param {String} name 옵션명
			 * @param {Mixed} value {Optional} 옵션값: 없을 경우 name에 해당하는 값을 반환
			 * @return {Mixed}
			 * @example
			 * $('...').tabs('option', 'startIndex', 2);
			 */
			option: function (name, value) {
				if (typeof value === 'undefined') {
					return this.getOption(name);
				} else {
					this.setOption(name, value);
					this.triggerHandler('optionchange', [name, value]);
				}
			},

			/**
			 * 이벤트명에 현재 클래스 고유의 네임스페이스를 붙여서 반환 (ex: 'click mousedown' -> 'click.MyClassName mousedown.MyClassName')
			 * @private
			 * @param {String} eventNames 네임스페이스가 없는 이벤트명
			 * @return {String} 네임스페이스가 붙어진 이벤트명
			 */
			_normalizeEventNamespace: function (eventNames) {
				if (eventNames instanceof $.Event) {
					return eventNames;
				}

				var me = this,
					m = (eventNames || "").split( /\s/ );
				if(!m || !m.length) {
					return eventNames;
				}

				var name, tmp = [];
				for(var i = -1, name; name = m[++i]; ) {
					if (name.indexOf('.') === -1) {
						tmp.push(name + me._eventNamespace);
					} else {
						tmp.push(name);
					}
				}
				return tmp.join(' ');
			},

			/**
			 * 현재 클래스의 이벤트네임스페이스를 반환
			 * @return {String} 이벤트 네임스페이스
			 */
			getEventNamespace: function () {
				return this._eventNamespace;
			},


			/**
			 * me.$el에 이벤트를 바인딩
			 */
			on: function () {
				var args = arraySlice.call(arguments);
				args[0] = this._normalizeEventNamespace(args[0]);

				this.$el.on.apply(this.$el, args);
				return this;
			},

			/**
			 * me.$el에 등록된 이벤트를 언바인딩
			 */
			off: function () {
				var args = arraySlice.call(arguments);
				this.$el.off.apply(this.$el, args);
				return this;
			},

			/**
			 * me.$el에 일회용 이벤트를 바인딩
			 */
			one: function () {
				var args = arraySlice.call(arguments);
				args[0] = this._normalizeEventNamespace(args[0]);

				this.$el.one.apply(this.$el, args);
				return this;
			},

			/**
			 * me.$el에 등록된 이벤트를 실행
			 */
			trigger: function () {
				var args = arraySlice.call(arguments);
				this.$el.trigger.apply(this.$el, args);
				return this;
			},

			/**
			 * me.$el에 등록된 이벤트 핸들러를 실행
			 */
			triggerHandler: function () {
				var args = arraySlice.call(arguments);
				this.$el.triggerHandler.apply(this.$el, args);
				return this;
			},

			/**
			 * 해당 엘리먼트에 바인딩된 클래스 인스턴스를 반환
			 * @return {Class}
			 * @example
			 * var tabs = $('div').Tabs('instance');
			 */
			instance: function () {
				return this;
			},

			/**
			 * 해당 클래스의 소속 엘리먼트를 반환
			 * @return {jQuery}
			 */
			getElement: function (){
				return this.$el;
			}
		});

		return View;
	});


})(window, jQuery, common);

(function (context, $, common, ui) {
	
	var $win = common.$win,
		$doc = common.$doc,
		Class = common.Class,
		dateUtil = common.date,
		stringUtil = common.string,
		numberUtil = common.number,
		View = ui.View;		// ui.View

	
	/**
	 * SwipeModule 클래스<br />
	 * // 옵션 <br />
	 * options.limitX: 			Integer 좌/우 swipe의 최소값
	 * options.isContain:		Boolean		swipe후의 값을 가지고 있을지 판별
	 * @class
	 * @name common.ui.SwipeModule
	 * @extends common.ui.View
	 */
	common.ui('SwipeModule', {
		bindjQuery:'swipeModule',
		defaults: {
			limitX: 100,	//좌우 swipe의 최소값 pixel
			isContain: false			//true일때 초기화 되지 않은 연속 좌표 값을 가지고 연산함
		},
		selectors: {
		},
		
		/**
		 * 생성자
		 * @param {jQuery|Element|String} el 대상 엘리먼트
		 * @param {JSON} options
		 */
		initialize: function (el, options) {
			var me = this;
			
			if(me.supr(el, options) === false) { return; }
			
			me._bindEvent();
		},
		/**
		 * 내부 이벤트 바인딩용
		 * @memberOf SlideModule
		 * @name _bindEvent
		 * @private
		 *
		 * @example
		 * 	SwipeModule._bindEvent();
		 */
		_bindEvent: function () {
			var me = this;
			
			me.$el.addTouchEvent({isContain:me.options.isContain, directionType: 'horizontal'}).on({
				'start': function (data) {
					
				},
				'move': function (e, data) {
				},
				'end': function (e, data) {
					if(Math.abs(data.distanceX) < me.options.limitX) return;
					common.PubSub.trigger('swipe.'+data.direction, {
						originalEvent: e,
						direction : data.direction,
						startX : data.startX,
						startY: data.startY,
						distanceX: data.distanceX,
						distanceY: data.distanceY				
					});
				}
			});
		}
	});


	/**
	 * selectModule 클래스<br />
	 * // 옵션 <br />
	 * @class
	 * @name common.ui.selectModule
	 * @extends common.ui.View
	 */
	common.ui('SelectModule', {
		bindjQuery:'selectModule',
		defaults: {
		},
		selectors: {
			//selector: '.d-select-module'
			text: '.d-text',
			list: '.d-list'
		},
		
		/**
		 * 생성자
		 * @param {jQuery|Element|String} el 대상 엘리먼트
		 * @param {JSON} options
		 */
		initialize: function (el, options) {
			var me = this;
			
			if(me.supr(el, options) === false) { return; }
			
			me._setUp();
			me._bindEvent();
		},
		
		/**
		 * 페이지 로드시 선택항목에 대한 값으로 text를 세팅함
		 * @memberOf SelectModule
		 * @name _ setUp
		 * @private
		 * @example
		 * 	selectModule._bindEvent();
		 * @page
		 * 	http://local.ars.com/ending/TARS_3_3_2END.html
		 *  */
		_setUp: function () {
			var me = this;
			
			var $radio = me.$list.find('input[type="radio"]').filter(':checked');
			if($radio.size() > 0) me.$text.find('span').text($radio.siblings('label').text());
		},
		
		
		/**
		 * 내부 이벤트 바인딩용
		 * @memberOf SelectModule
		 * @name _bindEvent
		 * @private
		 *
		 * @example
		 * 	selectModule._bindEvent();
		 * @page
		 * 	http://local.ars.com/ending/TARS_3_3_2END.html
		 */
		_bindEvent: function () {
			var me = this,
				 $radio = me.$list.find('input[type="radio"]');
				 
			$radio.each(function (idx, cell) {
				var $this = $(this);
				if($this.prop('disabled') == true) $this.parent().addClass('disabled');
			});
				 
			//텍스트 영역을 클릭했을때 리스트들을 노출
			me.$text.on('click', function (e) {
				e.stopPropagation();
				var $this = $(this).toggleClass('on'),
					  max = (me.$list.offset().top+me.$list.height());
			});
			
			//항목을 선택했을 경우 해당 하는 텍스트의 내용을 교체해줌
			$radio.on('change', function (e) {
				e.stopPropagation();
				
				var $this = $(this);
				me.$text.find('span').text($this.siblings('label').text());
				me.$text.toggleClass('on');
			});
			
			//리스트를 선택시 document.click으로 이벤트 버블링 되는 것을 막음
			me.$list.on('click', function (e) {
				e.stopPropagation();
			});
			
			//문서를 클릭했을때 열려있는 select list 를 닫음
			common.PubSub.on('document.click', function (e) {
				if(me.$text.hasClass('on') == true) me.$text.removeClass('on');
			});
		}
	});
	
	
	
	
	/**
	 * RadioModule 클래스<br />
	 * // 옵션 <br />
	 * @class
	 * @name common.ui.radioModule
	 * @extends common.ui.View
	 */
	common.ui('RadioModule', {
		bindjQuery:'radioModule',
		defaults: {
			callback: ''
		},
		selectors: {
			list: '.d-list',
			radio : 'input[type="radio"]'			
		},
		
		/**
		 * 생성자
		 * @param {jQuery|Element|String} el 대상 엘리먼트
		 * @param {JSON} options
		 */
		initialize: function (el, options) {
			var me = this;
			
			if(me.supr(el, options) === false) { return; }
			
			me._setUp();
			me._bindEvent();
		},
		
		/**
		 * 페이지 로드시 선택항목에 대한 값으로 text를 세팅함
		 * @memberOf SelectModule
		 * @name _ setUp
		 * @private
		 * @example
		 * 	selectModule._bindEvent();
		 * @page
		 * 	http://local.ars.com/ending/TARS_3_3_2END.html
		 *  */
		_setUp: function () {
			var me = this;
			
			var $selectedRadio = me.$radio.filter(':checked'),
				 selectedIndex = me.$radio.index($selectedRadio);
			
			if(me[me.options.callback]) me[me.options.callback].call(this, selectedIndex);
		},
		
		
			
		/**
		 * callback 형식이 display일 경우
		 * @function
		 * @param {Integer} selectedIndex 선택된 라디오 버튼의 index
		 *  */	
		display: function (selectedIndex) {
			var me = this;
			me.$display = me.$el.find('.d-display');
			
			me.$display.not(me.$display.eq(selectedIndex).removeClass('none')).addClass('none');
		},
		
		/**
		 * 내부 이벤트 바인딩용
		 * @memberOf SelectModule
		 * @name _bindEvent
		 * @private
		 *
		 * @example
		 * 	selectModule._bindEvent();
		 * @page
		 * 		http://local.ars.com/error/TARS_13.html
		 */
		_bindEvent: function () {
			var me = this;
				 
			//항목을 선택했을 경우 해당 하는 텍스트의 내용을 교체해줌
			me.$radio.on('change', function (e) {
				me.display(me.$radio.index(this));
			});
		}
	});
	
	
	/**
	 * DateModule 클래스<br />
	 * // 옵션 <br />
	 * @class
	 * @name common.ui.DateModule
	 * @extends common.ui.View
	 */
	common.ui('DateModule', {
		bindjQuery:'dateModule',
		defaults: {
			picker: '.d-date-picker'
		},
		selectors: {
			pickerContainer: '.d-date-picker-container',
			dStr: '#ui-dStr',
			year: '#ui-year',
			month: '#ui-month',
			day: '#ui-day',
			uiPicker: '.ui-picker',
			uiAccept: '.ui-accept',
			uiCancel: '.ui-cancel',
			dimLayer: '.ui-dim-layer',
			win: $(window),
			doc: $(window.document)
			
			//var cd = new Date();
	      	/*$('#ui-dStr').html(dateFormat(cd, "fullDate"));
	      	$('#ui-year').val(dateFormat(cd, "yyyy"));
	      	$('#ui-mon').val(dateFormat(cd, "mm"));
	      	$('#ui-day').val(dateFormat(cd, "dd"));*/			
		},
		_date: null,
		$_selector: null,
		/**
		 * 생성자
		 * @param {jQuery|Element|String} el 대상 엘리먼트
		 * @param {JSON} options
		 */
		initialize: function (el, options) {
			var me = this;
			
			if(me.supr(el, options) === false) { return; }
			
			me._setUp();
			me._bindEvent();
		},
		
		/**
		 * 페이지 로드시 선택항목에 대한 값으로 text를 세팅함
		 * @memberOf SelectModule
		 * @name _ setUp
		 * @private
		 * @example
		 * 	DateModule._bindEvent();
		 * @page
		 * 	http://local.ars.com/ending/TARS_3_3_2END.html
		 *  */
		_setUp: function () {
			var me = this;
			
			if(me.$pickerContainer.size() == 0){
				var html = ''+
					'<div class="d-date-picker-container date_picker none">'+
					'	<div class="ui-dim-layer"></div>'+
					'	<table class="ui-picker" cellpadding="0" cellspacing="0">'+
					'		<tr>'+
					'			<td colspan="3"><div style="background-color:#000;border-bottom:thin solid #fff;font-size:20px;margin-bottom:5px;padding:5px;height:50px;">'+
					'				<div style="float:left;margin-right:5px; position: relative; top: 12px;"><img src="11-clock.png"/></div><div id="ui-dStr" style="width:200px;float:left; font-weight: bold; position: relative; top: 13px;">Som date</div></div>'+
					'			</td>'+
					'		</tr>'+
					'		<tr>'+
					'			<td><div id="pyear" class="ui-content ui-body-a" data-theme="a" style="text-align: center; width: 90px; padding: 10px 0px;margin:0px 2px;">+</div></td>'+	
					'			<td><div id="pmon"  class="ui-content ui-body-a" data-theme="a" style="text-align: center; width: 90px; padding: 10px 0px;margin:0px 2px;">+</div></td>'+
					'			<td><div id="pday" class="ui-content ui-body-a" data-theme="a" style="text-align: center; width: 90px; padding: 10px 0px;margin:0px 2px;">+</div></td>'+
					'		</tr>'+
					'		<tr>'+
					'			<td><input type="number" id="ui-year" style="width:86px;padding:0px;height:38px;margin:2px;" readonly="readonly"/></td>'+	
					'			<td><input type="number" id="ui-mon" style="width:86px;padding:0px;height:38px;margin:2px;" readonly="readonly"/></td>'+
					'			<td><input type="number" id="ui-day" style="width:86px;padding:0px;height:38px;margin:2px;" readonly="readonly"/></td>'+
					'		</tr>'+
					'		<tr>'+
					'			<td><div id="myear" class="ui-content ui-body-a" data-theme="a" style="text-align: center; width: 90px; padding: 10px 0px;margin:0px 2px;">-</div></td>'+	
					'		    <td><div id="mmon" class="ui-content ui-body-a" data-theme="a" style="text-align: center; width: 90px; padding: 10px 0px;margin:0px 2px 2px 2px;">-</div></td>'+
					'		    <td><div id="mday" class="ui-content ui-body-a" data-theme="a" style="text-align: center; width: 90px; padding: 10px 0px;margin:0px 2px;">-</div></td>'+
					'		</tr>'+
					'		<tr>'+
					'			<td colspan="3" style="background-color:#a7a7a7;">'+
					'			    <table width="100%">'+
					'			    	<tr>'+
					'			    		<td><div class="ui-content ui-body-a ui-cancel" data-theme="a" style="font-size:20px;text-align: center; padding: 10px 0px;margin:2px;">Cancel</div></td>'+					
					'			    		<td width="50%"><div class="ui-content ui-body-a ui-accept" data-theme="a" style="font-size:20px;text-align: center; padding: 10px 0px;margin:2px;">Accept</div></td>'+
					'			    	</tr>'+
					'			    </table>'+
					'			</td>'+
					'		</tr>'+
					'	</table>'+
					'</div>'+
					'';		
				$('body').append(html);
				me.$pickerContainer = $('.d-date-picker-container');
			}
			
			me.$dStr = me.$pickerContainer.find('#ui-dStr');
			me.$year = me.$pickerContainer.find('#ui-year');
			me.$month = me.$pickerContainer.find('#ui-mon');
			me.$day = me.$pickerContainer.find('#ui-day');
			me.$uiPicker = me.$pickerContainer.find('.ui-picker');
			me.$uiAccept = me.$pickerContainer.find('.ui-accept');
			me.$uiCancel = me.$pickerContainer.find('.ui-cancel');
			me.$dimLayer = me.$pickerContainer.find('.ui-dim-layer');
		},
		
		_updateF: function () {
			var me = this;
	      	me.$year.val(dateFormat(me._date, "yyyy"));
	      	me.$month.val(dateFormat(me._date, "mmm"));
	      	me.$day.val(dateFormat(me._date, "dd"));
	      	me.$dStr.html(dateFormat(me._date, "fullDate"));
		  },
		
		/**
		 * 내부 이벤트 바인딩용
		 * @memberOf DateModule
		 * @name _bindEvent
		 * @private
		 *
		 * @example
		 * 	selectModule._bindEvent();
		 * @page
		 * 		http://local.ars.com/test/jk/d_picker/custom.html
		 */
		_bindEvent: function () {
			var me = this;
			
			me.$pickerContainer.find('#pyear').click(function () {
				me._date.setYear(me._date.getFullYear() + 1);
		      	me._updateF();
		  	});
		  	me.$pickerContainer.find('#pmon').click(function () {
		    	me._date.setMonth(me._date.getMonth() + 1);
		      	me._updateF();
		  	});
		  	me.$pickerContainer.find('#pday').click(function () {
		      	me._date.setDate(me._date.getDate() + 1);
		      	me._updateF();
		  	});
		  	me.$pickerContainer.find('#myear').click(function () {
		      	me._date.setYear(me._date.getFullYear() - 1);
		      	me._updateF();
		  	});
		  	me.$pickerContainer.find('#mmon').click(function () {
		      	me._date.setMonth(me._date.getMonth() - 1);
		      	me._updateF();
		  	});
		  	me.$pickerContainer.find('#mday').click(function () {
		      	me._date.setDate(me._date.getDate() - 1);
		      	me._updateF();
		  	});
		  	
		  	//input을 눌렀을때
		  	me.$el.on('click', me.options.picker, function (e) {
		  		var $this = $(this);
		  		
		  		me._date = new Date(($this.val() ? $this.val() : new Date()));
		  		me.$pickerContainer.removeClass('none');
		  		
		  		me.$dStr.html(dateFormat(me._date, "fullDate"));
		      	me.$year.val(dateFormat(me._date, "yyyy"));
		      	me.$month.val(dateFormat(me._date, "mm"));
		      	me.$day.val(dateFormat(me._date, "dd"));
		  		
		  		me.$_selector = $this;
				me.$uiPicker.css({
					'left': (me.$win.width()-me.$uiPicker.width())/2,
					'top': (me.$win.height()-me.$uiPicker.height())/2
				});
		  	});
		  	//dim영역을 눌렀을때
		  	me.$dimLayer.click(function () {
		  		me.$pickerContainer.addClass('none');
		  	});
			
			me.$uiCancel.click(function () {
				me.$pickerContainer.addClass('none');
			});
				
			me.$uiAccept.click(function () {
				var month = me.$month.val();
				month = (month.length<2 ? '0'+month: month);
				
		    	var val = me.$year.val()+'-'+month+'-'+me.$day.val();
		      	me.$_selector.val(val);
		      	me.$pickerContainer.addClass('none');
			});
		}
	});
	
	
	
})(window, jQuery, common, common.ui);

// 글로벌 작업들
(function ($, common, ui, undefined) {
	var $win = common.$win,
		$doc = common.$doc,
		ui = common.ui,
		scroller = [];
		
	//스크롤 관련 작업
	/*var $allA = $('a');
  	$allA.on({
  		'touchstart': function () {
  			$(this).parent().addClass('hover');
  		},
  		'touchmove touchend': function () {
  			$allA.parent().removeClass('hover');
  		}
  	});
  	$('.d-scroll').each(function (idx, cell) {
		try{
			scroller.push(new IScroll(this, { scrollbars: true, eventPassthrough: 'horizontal', bounce:false, fadeScrollbars: true}));
		}catch(e){}
	});*/
	
	//스크롤 관련 시작 @141211
	var $allA = $('.d-scroll').each(function (idx, cell) {
		try{
			scroller.push(new IScroll(this, { scrollbars: true, eventPassthrough: 'horizontal', bounce:false, fadeScrollbars: true}));
		}catch(e){}
	}).find('a').on({
		'touchstart': function () {
  			$(this).parent().addClass('hover');
  		},
  		'touchmove touchend blur': function () {
  			$allA.parent().removeClass('hover');
  		}
	});
	
	var $headerA = $('.header').find('a').on({
		'touchstart': function () {
  			$(this).addClass('hover');
  		},
  		'touchmove touchend blur': function () {
  			$headerA.removeClass('hover');
  		}
	});
	
	$(".d-scroll").on("touchstart", "li", function(){
	  $(this).addClass('hover');  
	});
	
	$(".d-scroll").on("touchmove touchend blur", "li", function(){
	  $(this).removeClass('hover');  
	});
	
	//스크롤 관련 종료	@141211

	/** 보이는 ARS 의 우측 항목 삭제 */	
	common.removeDisplayCell = function (){
		$('.child-menu li').each(function (idx, cell) {
      var $this = $(this);
      if ($this.css('display').toLowerCase() == 'none') {
        $this.remove();
      }
    });
		
		//구성 요소 삭제시 스크롤 높이 갱신
		for(var key in scroller){
			scroller[key].refresh();
		}
	};	
	//input영역이 가릴 경우 실행
	common.supportInputArea = function () {
		$('input').on({
			'focus': function (e) {
				var $this = $(this),
          $header = $('header'),
          $contentsWrap = $this.closest('.content-container'),
          $section = $this.closest('section.content'),
          top = $header.height() + ($this.offset().top + $this.outerHeight(true)) + $contentsWrap.scrollTop();
				 
				setTimeout(function () {
					$section.css({				'height': top			});
					$contentsWrap.stop().animate({
						'scrollTop': $this.offset().top+$contentsWrap.scrollTop()
					});
				}, 50);
			},
			'blur': function () {
				var $this = $(this),
					 $section = $this.closest('section.content');
				$section.css({'height': ''});
			}
		});		
	};

	common.supportCapture_141204 = function () {
		$('.screen_save').parent().on('click', function () {
			var $section = $('section.content');
			var position = ($section.offset().top+$section.height() > common.$win.height() ? 'long': 'short');
			
			$(document.body).addClass('capture '+position);
			$('.btn_wrap').addClass('capture');
			$('.iScrollVerticalScrollbar').addClass('none');
			
			setTimeout(function () {
				common.PubSub.trigger('opencapture');
			}, 500);
			
			//스크롤 높이 갱신
			for(var key in scroller){
				scroller[key].refresh();
			}
		});
	};
	
	//화면 저장 버튼에 대한 처리
	common.supportCapture = function () {
		$('.screen_save').parent().on('click', function () {
			var height = 0,$section = $('section.content').children().each(function () {
				height += $(this).outerHeight(true);
			}),
			position = ($section.offset().top+height >= common.$win.height() ? 'long': 'short');
			
			$(document.body).addClass('capture '+position);
			$('.btn_wrap').addClass('capture');
			$('.iScrollVerticalSc').addClass('none');
			
			setTimeout(function () {
				common.PubSub.trigger('opencapture');
				//스크롤 높이 갱신
				for(var key in scroller){
					scroller[key].refresh();
				}
			},  0);
		});
	};
	
	common.closeCapture = function () {
		$(document.body).removeClass('capture short long');
		$('.btn_wrap').removeClass('capture');		
		$('.iScrollVerticalScrollbar').removeClass('none');
		
		//스크롤 높이 갱신
		for(var key in scroller){
			scroller[key].refresh();
		}
	};
	//스크롤 높이 갱신
	common.refreshScroll = function () {
		for(var key in scroller){
			scroller[key].refresh();
		}
	};
	
	//meta 태그의 스케일링 처리
	/*common.refreshMeta = function () {
		if($(window).width()<321){
        	$('meta[name=viewport]').attr('content', 'user-scalable=no, initial-scale=1.3, maximum-scale=1.3, minimum-scale=1.3, width=321, target-densitydpi=device-dpi');
		}
	};*/
		
	$(document).swipeModule();
	$('.d-select-module').selectModule();
	$('.d-radio-module').radioModule();
	
	// common.supportInputArea();
	common.supportCapture();
	// common.refreshMeta();
	
	// 마우스업시 - User Event 발생
	$(document).on('click.document', function () {
		common.PubSub.trigger('document.click');
	});
	
	// $(document.body).append(
  //   '<div class="loading-area d-loading"><div class="loading-inner"><div class="icon-box"><span class="icon-loading"></span><span class="icon-loading"></span><span class="icon-loading"></span></div></div></div>',
  // );

})(jQuery, common, common.ui);	

// 개편
// $(function () {
// 	$(window).bind({
//     resize: function () {
//       fontResize();
//     },
//   });

//   fontResize();

//   function fontResize() {
//     var tabletSize = 1440;
//     var mobileSize = 1024;
//     var size = 10;

//     if ($(window).outerWidth() <= 360) {
//       size = ($(window).outerWidth() * 10) / 360;
//     } else {
//       size = 10;
//     }

//     $('html').css('fontSize', size);
//     $('body').css('fontSize', size);
//   }
// })
