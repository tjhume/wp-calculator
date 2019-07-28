fbuilderjQuery=(typeof fbuilderjQuery!='undefined')?fbuilderjQuery:jQuery;fbuilderjQuery(window).bind('pageshow',function(event){if(typeof event.originalEvent['persisted']!='undefined'&&event.originalEvent['persisted'])location.reload();});fbuilderjQuery.fbuilderjQueryGenerator=function(){if('fbuilderGeneratorFlag'in fbuilderjQuery)return;(function($){$.fbuilder=$.fbuilder||{};$.fbuilder['objName']='fbuilderjQuery';;(function(root){var lib={};lib.cf_logical_version='0.1';lib.IF=function(_if,_then,_else){if(_if){return(typeof _then==='undefined')?true:_then;}else{return(typeof _else==='undefined')?false:_else;}};lib.AND=function(){for(var i=0,h=arguments.length;i<h;i++){if(!arguments[i]){return false;}}
return true;};lib.OR=function(){for(var i=0,h=arguments.length;i<h;i++){if(arguments[i]){return true;}}
return false;};lib.NOT=function(_term){return(typeof _term=='undefined')?true:!_term;};lib.IN=function(_term,_values){function _reduce(str){return String(str).replace(/^\s+/,'').replace(/\s+$/,'').replace(/\s+/,' ').toLowerCase();};_term=_reduce(_term);if(typeof _values=='string')return _reduce(_values).indexOf(_term)!=-1;else if(typeof _values=='object'&&_values.length){for(var i=0,h=_values.length;i<h;i++)if(_reduce(_values[i]).indexOf(_term)!=-1)return true;}
return false;};root.CF_LOGICAL=lib;})(this);fbuilderjQuery=(typeof fbuilderjQuery!='undefined')?fbuilderjQuery:jQuery;fbuilderjQuery['fbuilder']=fbuilderjQuery['fbuilder']||{};fbuilderjQuery['fbuilder']['modules']=fbuilderjQuery['fbuilder']['modules']||{};fbuilderjQuery['fbuilder']['modules']['default']={'prefix':'','callback':function()
{function ROUNDx(operation,num,y)
{if(y&&y!=0)
{var r=operation(num/y)*y,p=(new String(y)).split('.');if(p.length==2)r=PREC(r,p[1].length);return r;}
else
{return operation(num);}};if(window.ROUND==undefined)
{window.ROUND=window.round=function(num,y)
{if(y)return ROUNDx(Math.round,num,y);return ROUNDx(Math.round,num);}}
if(window.FLOOR==undefined)
{window.FLOOR=window.floor=function(num,y)
{if(y)return ROUNDx(Math.floor,num,y);return ROUNDx(Math.floor,num);}}
if(window.CEIL==undefined)
{window.CEIL=window.ceil=function(num,y)
{if(y)return ROUNDx(Math.ceil,num,y);return ROUNDx(Math.ceil,num);}}
if(window.PREC==undefined)
{window.PREC=window.prec=function(num,pr)
{if('undefined'==typeof pr)pr=0;if(/^\d+$/.test(pr)&&$.isNumeric(num))
{var f=POW(10,pr);num=ROUND(num*f)/f;return num.toFixed(pr);}
return num;};}
if(window.CDATE==undefined)
{window.CDATE=window.cdate=function(num,format)
{format=(typeof format!='undefined')?format:((typeof window.DATETIMEFORMAT!='undefined')?window.DATETIMEFORMAT:'dd/mm/yyyy');if(isFinite(num*1))
{num=Math.round(num*86400000);var date=new Date(num),d=date.getDate(),m=date.getMonth()+1,y=date.getFullYear(),h=date.getHours(),i=date.getMinutes(),s=date.getSeconds(),a='';m=(m<10)?'0'+m:m;d=(d<10)?'0'+d:d;if(/a/.test(format))
{a=(h>=12)?'pm':'am';h=h%12;h=(h==0)?12:h;}
h=(h<10)?'0'+h:h;i=(i<10)?'0'+i:i;s=(s<10)?'0'+s:s;return format.replace(/y+/i,y).replace(/m+/i,m).replace(/d+/i,d).replace(/h+/i,h).replace(/i+/i,i).replace(/s+/i,s).replace(/a+/i,a);}
return num;};}
if(window.GCD==undefined)
{window.GCD=window.gcd=function(a,b)
{if(!b)return a;return GCD(b,a%b);};}
if(window.LOGAB==undefined)
{window.LOGAB=window.logab=function(a,b)
{return LOG(a)/LOG(b);};}
var math_prop=["LN10","PI","E","LOG10E","SQRT2","LOG2E","SQRT1_2","LN2","cos","pow","log","tan","sqrt","asin","abs","max","exp","atan2","atanh","random","acos","atan","min","sin"];for(var i=0,h=math_prop.length;i<h;i++)
{if(!window[math_prop[i]])
{window[math_prop[i]]=window[math_prop[i].toUpperCase()]=Math[math_prop[i]];}}
if(window.RADIANS==undefined)
{window.RADIANS=window.radians=function(a){return a*PI/180;};}
if(window.DEGREES==undefined)
{window.DEGREES=window.degrees=function(a){return a*180/PI;};}
fbuilderjQuery['fbuilder']['extend_window'](fbuilderjQuery['fbuilder']['modules']['default']['prefix'],CF_LOGICAL);},'validator':function(v)
{return(typeof v=='number')?isFinite(v):(typeof v!='undefined');}};;(function(root){var lib={records:{}};lib.cff_connector_version='0.1';lib.cffProxy=lib.cffproxy=lib.CFFPROXY=function(){if(typeof fbuilderjQuery=='undefined'||!arguments.length||typeof arguments[0]!='function')return;var $=fbuilderjQuery,args=Array.prototype.slice.call(arguments);index=args.toString();if(typeof lib.records[index]!='undefined')return lib.records[index];var form_id=(typeof $.fbuilder['currentFormId']!='undefined')?$.fbuilder['currentFormId']:'cp_calculatedfieldsf_pform_1',aux=(function(eq){return function(value){lib.records[index]=value;$.fbuilder.calculator.enqueueEquation(eq.identifier,[eq]);if(!$.fbuilder.calculator.processing_queue)
{$.fbuilder.calculator.processQueue(eq.identifier);}};})($.fbuilder['currentEq']),f=args[0];args.shift();args.push(aux);f.apply(null,args);};root.CF_CONNECTOR=lib;})(this);fbuilderjQuery=(typeof fbuilderjQuery!='undefined')?fbuilderjQuery:jQuery;fbuilderjQuery['fbuilder']=fbuilderjQuery['fbuilder']||{};fbuilderjQuery['fbuilder']['modules']=fbuilderjQuery['fbuilder']['modules']||{};fbuilderjQuery['fbuilder']['modules']['connector']={'prefix':'','callback':function()
{fbuilderjQuery['fbuilder']['extend_window'](fbuilderjQuery['fbuilder']['modules']['connector']['prefix'],CF_CONNECTOR);}};$.fbuilder['controls']=(typeof $.fbuilder['controls']!='undefined')?$.fbuilder['controls']:{};$.fbuilder['forms']=(typeof $.fbuilder['forms']!='undefined')?$.fbuilder['forms']:{};$.fbuilder['htmlEncode']=function(value)
{value=$('<div/>').text(value).html()
value=value.replace(/"/g,"&quot;").replace(/&amp;lt;/g,'&lt;').replace(/&amp;gt;/g,'&gt;');return value;};$.fbuilder['htmlDecode']=function(value)
{if(/&(?:#x[a-f0-9]+|#[0-9]+|[a-z0-9]+);?/ig.test(value))value=$('<div/>').html(value).text();return value;};$.fbuilder['escape_symbol']=function(value)
{return value.replace(/([\^\$\-\.\,\[\]\(\)\/\\\*\?\+\!\{\}])/g,"\\$1");};$.fbuilder['parseValStr']=function(value,raw)
{raw=raw||false;if(typeof value=='undefined'||value==null)value='';value=$.trim(value.replace(/\\/g,"\\\\")).replace(/'/g,"\\'").replace(/"/g,'\\"');return($.isNumeric(value))?((raw)?value:value*1):'"'+value+'"';};$.fbuilder['parseVal']=function(value,thousandSeparator,decimalSymbol)
{if(typeof value=='undefined'||value==null||value=='')return 0;value=$.trim(value);if(/(\d{1,2}[\/\.\-]\d{1,2}[\/\.\-]\d{4})|(\d{4}[\/\.\-]\d{1,2}[\/\.\-]\d{1,2})/.test(value))
return $.fbuilder['parseValStr'](value);thousandSeparator=$.fbuilder.escape_symbol((typeof thousandSeparator=='undefined')?',':thousandSeparator);decimalSymbol=(typeof decimalSymbol=='undefined'||/^\s*$/.test(decimalSymbol))?'.':decimalSymbol;var correction=new RegExp(((/^\s*$/.test(thousandSeparator))?',':thousandSeparator)+('\(\\d{1,2}\)$')),correctionReplacement=decimalSymbol+'$1';thousandSeparator=new RegExp(thousandSeparator,'g');decimalSymbol=new RegExp($.fbuilder.escape_symbol(decimalSymbol),'g');var t=value.replace(correction,correctionReplacement).replace(thousandSeparator,'').replace(decimalSymbol,'.').replace(/\s/g,''),p=/[+\-]?((\d+(\.\d+)?)|(\.\d+))(?:[eE][+\-]?\d+)?/.exec(t);return(p)?((/^0\d/.test(p[0]))?p[0].substr(1):p[0])*1:$.fbuilder['parseValStr'](value);};$.fn.fbuilder=function(options){var opt=$.extend({},{pub:false,identifier:"",title:""},options,true);opt.messages=$.extend({previous:"Previous",next:"Next",pageof:"Page {0} of {0}",required:"This field is required.",email:"Please enter a valid email address.",datemmddyyyy:"Please enter a valid date with this format(mm/dd/yyyy)",dateddmmyyyy:"Please enter a valid date with this format(dd/mm/yyyy)",number:"Please enter a valid number.",digits:"Please enter only digits.",maxlength:$.validator.format("Please enter no more than {0} characters."),minlength:$.validator.format("Please enter at least {0} characters."),equalTo:"Please enter the same value again.",max:$.validator.format("Please enter a value less than or equal to {0}."),min:$.validator.format("Please enter a value greater than or equal to {0}."),currency:"Please enter a valid currency value."},opt.messages);opt.messages.max=$.validator.format(opt.messages.max);opt.messages.min=$.validator.format(opt.messages.min);$.extend($.validator.messages,opt.messages);var items=[],reloadItemsPublic=function()
{var form_tag=$("#fieldlist"+opt.identifier).closest('form');form_tag.addClass(theForm.formtemplate);if(!opt.cached)
{$("#fieldlist"+opt.identifier).html("").addClass(theForm.formlayout);$("#formheader"+opt.identifier).html(theForm.show());var page=0;$("#fieldlist"+opt.identifier).append('<div class="pb'+page+' pbreak" page="'+page+'"></div>');for(var i=0;i<items.length;i++)
{items[i].index=i;if(items[i].ftype=="fPageBreak")
{page++;$("#fieldlist"+opt.identifier).append('<div class="pb'+page+' pbreak" page="'+page+'"></div>');}
else
{$("#fieldlist"+opt.identifier+" .pb"+page).append(items[i].show());if(items[i].predefinedClick)
{$("#fieldlist"+opt.identifier+" .pb"+page).find("#"+items[i].name).attr("placeholder",items[i].predefined);$("#fieldlist"+opt.identifier+" .pb"+page).find("#"+items[i].name).attr("value","");}
if(items[i].userhelpTooltip)
{var uh_t,uh=$("#fieldlist"+opt.identifier+" .pb"+page).find('[id*="'+items[i].name+'"]').closest(".dfield");if(uh.length==0)
{uh=$("#fieldlist"+opt.identifier+" .pb"+page).find('[id*="'+items[i].name+'"]').closest(".fields");}
uh_t=uh.find(".uh");if(uh_t.length&&uh_t.html()!="")
{uh.attr("uh",uh_t.html());uh_t.html("");}}}}}
else
{var page=form_tag.find('.pbreak').length,i=items.length;}
if(page>0)
{if(!opt.cached)
{$("#fieldlist"+opt.identifier+" .pb"+page).addClass("pbEnd");$("#fieldlist"+opt.identifier+" .pbreak").each(function(index){var code=$(this).html();var bSubmit='';if(index==page)
{if($("#cpcaptchalayer"+opt.identifier).length&&!/^\s*$/.test($("#cpcaptchalayer"+opt.identifier).html()))
{code+='<div class="captcha">'+$("#cpcaptchalayer"+opt.identifier).html()+'</div><div class="clearer"></div>';$("#cpcaptchalayer"+opt.identifier).html("");}
if($("#cp_subbtn"+opt.identifier).html())
{bSubmit='<div class="pbSubmit" tabindex="0">'+$("#cp_subbtn"+opt.identifier).html()+'</div>';}}
$(this).html('<fieldset><legend>'+opt.messages.pageof.replace(/\{\s*\d+\s*\}/,(index+1)).replace(/\{\s*\d+\s*\}/,(page+1))+'</legend>'+code+'<div class="pbPrevious" tabindex="0">'+opt.messages.previous+'</div><div class="pbNext" tabindex="0">'+opt.messages.next+'</div>'+bSubmit+'<div class="clearer"></div></fieldset>');});}
$('#fieldlist'+opt.identifier).find(".pbPrevious,.pbNext").bind("keyup",function(evt){if(evt.which==13||evt.which==32)$(this).click();}).bind("click",{'identifier':opt.identifier},function(evt){var _from=$(this).closest('.pbreak').attr('page')*1,_to=_from+(($(this).hasClass("pbPrevious"))?-1:1),_p;_p=$.fbuilder['goToPage']({'formIdentifier':evt.data.identifier,'from':_from,'to':_to});if(_p==_to)$.fbuilder.setBrowserHistory();return false;});}
else
{if(!opt.cached)
{if($("#cpcaptchalayer"+opt.identifier).length&&!/^\s*$/.test($("#cpcaptchalayer"+opt.identifier).html()))
{$("#fieldlist"+opt.identifier+" .pb"+page).append('<div class="captcha">'+$("#cpcaptchalayer"+opt.identifier).html()+'</div>');$("#cpcaptchalayer"+opt.identifier).html("");}
if($("#cp_subbtn"+opt.identifier).html())
{$("#fieldlist"+opt.identifier+" .pb"+page).append('<div class="pbSubmit" tabindex="0">'+$("#cp_subbtn"+opt.identifier).html()+'</div>');}}}
if(!opt.cached&&opt.setCache)
{var url=document.location.href,data={'cffaction':'cff_cache','cache':form_tag.html().replace(/\n+/g,''),'form':form_tag.find('[name="cp_calculatedfieldsf_id"]').val()};$.post(url,data,function(data){if(typeof console!='undefined')console.log(data);});}
$(document).on('click','#fbuilder .captcha img',function(){var e=$(this);e.attr('src',e.attr('src').replace(/&\d+$/,'')+'&'+Math.floor(Math.random()*1000));});$(form_tag).find('.captcha img').click();$('#fieldlist'+opt.identifier).find(".pbSubmit").bind("keyup",function(evt){if(evt.which==13||evt.which==32)$(this).click();}).bind("click",{'identifier':opt.identifier},function(evt){$(this).closest("form").submit();});if(i>0)
{theForm.after_show(opt.identifier);for(var i=0;i<items.length;i++)
{items[i].after_show();}
$.fbuilder.showHideDep({'formIdentifier':opt.identifier,'throwEvent':true});$('#fieldlist'+opt.identifier).find(".depItemSel,.depItem").bind("change",{'identifier':opt.identifier},function(evt)
{$.fbuilder.showHideDep({'formIdentifier':evt.data.identifier,'fieldItentifier':evt.target.id,'throwEvent':true});});try
{$.widget.bridge('uitooltip',$.ui.tooltip);$("#fbuilder"+opt.identifier).uitooltip({show:false,hide:false,tooltipClass:"uh-tooltip",position:{my:"left top",at:"left bottom+5",collision:"none"},items:"[uh]",content:function(){return $(this).attr("uh");},open:function(evt,ui){try{if(window.matchMedia("screen and (max-width: 640px)").matches){var duration=('undefined'!=typeof tooltip_duration&&/^\d+$/.test(tooltip_duration))?tooltip_duration:3000;setTimeout(function(){$(ui.tooltip).hide('fade');},duration);}}catch(err){}}});}catch(e){}}
$("#fieldlist"+opt.identifier+" .pbreak:not(.pb0)").find(".field").addClass("ignorepb");};var fform=function(){};$.extend(fform.prototype,{title:"Untitled Form",description:"This is my form. Please fill it out. It's awesome!",formlayout:"top_aligned",formtemplate:"",evalequations:1,evalequationsevent:2,autocomplete:1,show:function(){return'<div class="fform" id="field"><h2>'+this.title+'</h2><span>'+this.description+'</span></div>';},after_show:function(id){var form=$('#cp_calculatedfieldsf_pform'+id);if(typeof $.fn.fbuilder_localstorage!='undefined'&&form.hasClass('persist-form'))
{form.fbuilder_localstorage();}
form.attr('data-evalequations',this.evalequations).attr('data-evalequationsevent',this.evalequationsevent).attr('autocomplete',((this.autocomplete)?'on':'off')).find('input,select').blur(function(){try{$(this).valid();}catch(e){};});if(!this.autocomplete)form.find('input[name*="fieldname"]').attr('autocomplete','new-password');}});var theForm,ffunct={toShow:{},toHide:{},hiddenByContainer:{},getItem:function(name)
{var regExp=new RegExp((parseInt(name,10)==name)?'fieldname'+name+'_':name+'_',i);for(var i in items)
{if(items[i].name==name||regExp.test(items[i].name))
{return items[i];}}
return false;},getItems:function()
{return items;},loadData:function(f)
{var d=window[f];if(typeof d!='undefined')
{if(typeof d=='object'&&(typeof d.nodeType!=='undefined'||d instanceof jQuery)){d=jQuery.parseJSON(jQuery(d).val());}
else if(typeof d=='string'){d=jQuery.parseJSON(d);}
if(d.length==2)
{this.formId=d[1]['formid'];items=[];for(var i=0;i<d[0].length;i++)
{var obj=new $.fbuilder.controls[d[0][i].ftype]();obj=$.extend(true,{},obj,d[0][i]);obj.name=obj.name+opt.identifier;obj.form_identifier=opt.identifier;obj.init();items[items.length]=obj;}
theForm=new fform();theForm=$.extend(theForm,d[1][0]);opt.cached=(typeof d[1]['cached']!='undefined'&&d[1]['cached'])?true:false;opt.setCache=(!this.cached&&typeof d[1]['setCache']!='undefined'&&d[1]['setCache'])?true:false;reloadItemsPublic();}
$.fbuilder.cpcff_load_defaults(opt);}}};$.fbuilder['forms'][opt.identifier]=ffunct;this.fBuild=ffunct;return this;};$.fbuilder['showSettings']={formlayoutList:[{id:"top_aligned",name:"Top Aligned"},{id:"left_aligned",name:"Left Aligned"},{id:"right_aligned",name:"Right Aligned"}]};$.fbuilder.controls['ffields']=function(){};$.extend($.fbuilder.controls['ffields'].prototype,{form_identifier:"",name:"",shortlabel:"",index:-1,ftype:"",userhelp:"",userhelpTooltip:false,csslayout:"",init:function(){},_getAttr:function(attr)
{var me=this,f,v=$.trim(me[attr]);if($.isNumeric(v))return parseFloat(v);f=(/^fieldname\d+$/i.test(v))?me.getField(v):false;if(f)
{v=f.val();if(f.ftype=='fdate')return new Date(v*86400000);if($.isNumeric(v))return parseFloat(v);return v.replace(/^"+/,'').replace(/"+$/,'');}
return v;},_setHndl:function(attr,one)
{var me=this,v=$.trim(me[attr]);if($.isNumeric(v))return;var s=(/^fieldname\d+$/i.test(v))?'[id*="'+v+me.form_identifier+'"]':v,i=(one)?'one':'on';if('string'==typeof s&&!/^\s*$/.test(s))
{s=$.trim(s);if(!$.isNumeric(s.charAt(0)))
{$(document)[i]('change depEvent',s,function(evt){if(me['set_'+attr])me['set_'+attr](me._getAttr(attr),$(evt.target).hasClass('ignore'));});}}},getField:function(f){return $.fbuilder['forms'][this.form_identifier].getItem(f);},show:function()
{return'Not available yet';},after_show:function(){},val:function(raw){raw=raw||false;var e=$("[id='"+this.name+"']:not(.ignore)");if(e.length)
{var v=e.val();if(raw)return $.fbuilder.parseValStr(v,raw);v=$.trim(v);return($.isNumeric(v))?$.fbuilder.parseVal(v):$.fbuilder.parseValStr(v);}
return 0;},setVal:function(v)
{$("[id='"+this.name+"']").val(v);}});$.fbuilder['setBrowserHistory']=function(replace)
{if('history'in window)
{var bookmark='#',separator='';for(var formId in $.fbuilder.forms)
{bookmark+=separator+'f'+formId.replace(/[^\d]/g,'')+'p'+($.fbuilder.forms[formId]['currentPage']||0);separator='|';}
history[(replace)?'replaceState':'pushState']({},document.title,bookmark);}};$.fbuilder['manageHistory']=function(state)
{var bookmark=(document.URL.split('#').length>1)?document.URL.split('#')[1]:null,_match,_form,_to,setHistoryEntry=false,_goToPage=function(config){};if(bookmark)
{while(_match=bookmark.match(/f(\d+)p(\d+)\|?/))
{_form='_'+_match[1];_to=_match[2]*1;if(!(_form in $.fbuilder.forms)||!('currentPage'in $.fbuilder.forms[_form])||_to!=$.fbuilder['goToPage']({'formIdentifier':_form,'from':0,'to':_to}))setHistoryEntry=true;bookmark=bookmark.replace(_match[0],'');}}
else
{for(_form in $.fbuilder.forms)
{if('currentPage'in $.fbuilder.forms[_form])
$.fbuilder['goToPage']({'formIdentifier':_form,'from':0,'to':0});}}
if(setHistoryEntry)$.fbuilder.setBrowserHistory(true);};$.fbuilder['goToPage']=function(configObj)
{if('formIdentifier'in configObj&&'from'in configObj&&'to'in configObj)
{var identifier=configObj['formIdentifier'],_from=configObj['from']*1,_to=configObj['to']*1,direction=(_from<_to)?1:-1,formObj=$('[id="'+$.fbuilder.forms[identifier].formId+'"]'),pageObj,i=_from;while(i!=_to)
{$(".pbreak:not(.pb"+i+")",formObj).find(".field").addClass("ignorepb");$(".pb"+i,formObj).find(".field").removeClass("ignorepb");if(direction==1&&!formObj.valid())break;i+=direction;}
$.fbuilder.forms[identifier]['currentPage']=i;$(".pbreak:not(.pb"+i+")",formObj).hide().find(".field").addClass("ignorepb");pageObj=$(".pbreak.pb"+i,formObj);pageObj.show().find(".field").removeClass("ignorepb");if(i==_to)
{if($(".fields",pageObj).length>0)
{try
{var ffocusable=pageObj.find(":focusable"),_wScrollTop=$(window).scrollTop(),_viewportHeight=$(window).height(),_scrollTop=formObj.offset().top;if(ffocusable.length&&!ffocusable.first().hasClass('hasDatepicker')&&ffocusable.closest('[uh]').length==0)
{ffocusable[0].focus();}
if(_scrollTop<_wScrollTop||(_wScrollTop+_viewportHeight)<_scrollTop)
{$('html, body').animate({scrollTop:_scrollTop},50);}}
catch(e){}}}
else
{formObj.validate().focusInvalid();}
return i;}};$.fbuilder['showHideDep']=function(configObj)
{var process_items=function(items,isNotFirstTime)
{for(var i=0,h=items.length;i<h;i++)
{if(typeof items[i]=='string')items[i]=$.fbuilder['forms'][identifier].getItem(items[i]);if(isNotFirstTime&&items[i])
{$('[name="'+items[i].name+'"]').trigger('depEvent');if(items[i].usedInEquations)$.fbuilder['calculator'].enqueueEquation(identifier,items[i].usedInEquations);}
if(typeof items[i]['showHideDep']!='undefined')
{var list=items[i]['showHideDep'](toShow,toHide,hiddenByContainer);if(typeof list!='undefined'&&list.length)
process_items(list,true);}}};if(typeof configObj['formIdentifier']!=='undefined')
{var identifier=configObj['formIdentifier'];if(typeof $.fbuilder['forms'][identifier]!='undefined')
{var toShow=$.fbuilder['forms'][identifier]['toShow'],toHide=$.fbuilder['forms'][identifier]['toHide'],hiddenByContainer=$.fbuilder['forms'][identifier]['hiddenByContainer'],items=(typeof configObj['fieldItentifier']!='undefined')?[$.fbuilder['forms'][identifier].getItem(configObj['fieldItentifier'].replace(/_[cr]b\d+$/i,''))]:$.fbuilder['forms'][identifier].getItems();process_items(items);if(typeof configObj['throwEvent']=='undefined'||configObj['throwEvent'])
{$(document).trigger('showHideDepEvent',$.fbuilder['forms'][identifier]['formId']);}}}};$.fbuilder['cpcff_load_defaults']=function(o)
{var $=fbuilderjQuery,id,item,form_data,form_obj;if(typeof cpcff_default!='undefined')
{id=o.identifier.replace(/[^\d]/g,'');if(typeof cpcff_default[id]!='undefined')
{form_data=cpcff_default[id];id='_'+id;form_obj=$.fbuilder['forms'][id];for(var field_id in form_data)
{item=form_obj.getItem(field_id+id);try{if(typeof item['setVal']!='undefined')item.setVal(form_data[field_id]);}
catch(err){}}
$.fbuilder.showHideDep({'formIdentifier':o.identifier,'throwEvent':true});}}};window.addEventListener('popstate',function(){try
{$(".ui-datepicker").hide();$.fbuilder.manageHistory();}
catch(err){}});$(window).on('load',function(){$.fbuilder.manageHistory();});$.fbuilder.controls['ftext']=function(){};$.extend($.fbuilder.controls['ftext'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Untitled",ftype:"ftext",predefined:"",predefinedClick:false,required:false,readonly:false,size:"medium",minlength:"",maxlength:"",equalTo:"",regExp:"",regExpMssg:"",show:function()
{this.minlength=$.fbuilder.htmlEncode($.trim(this.minlength));this.maxlength=$.fbuilder.htmlEncode($.trim(this.maxlength));this.equalTo=$.fbuilder.htmlEncode($.trim(this.equalTo));return'<div class="fields '+this.csslayout+' '+this.name+' cff-text-field" id="field'+this.form_identifier+'-'+this.index+'"><label for="'+this.name+'">'+this.title+''+((this.required)?"<span class='r'>*</span>":"")+'</label><div class="dfield"><input id="'+this.name+'" name="'+this.name+'"'+((this.minlength.length)?' minlength="'+(this.minlength)+'"':'')+((this.maxlength.length)?' maxlength="'+(this.maxlength)+'"':'')+((this.equalTo.length)?' equalTo="#'+this.equalTo+this.form_identifier+'"':'')+' class="field '+this.size+((this.required)?" required":"")+'" '+((this.readonly)?'readonly':'')+' type="text" value="'+$.fbuilder.htmlEncode(this.predefined)+'" /><span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';},after_show:function()
{if(this.regExp!=""&&typeof $['validator']!='undefined')
{var parts=this.regExp.match(/(\/)(.*)(\/)([gimy]{0,4})$/i);this.regExp=(parts===null)?new RegExp(this.regExp):new RegExp(parts[2],parts[4].toLowerCase());if(!('pattern'in $.validator.methods))
$.validator.addMethod('pattern',function(value,element,param)
{try{return this.optional(element)||param.test(value);}
catch(err){return true;}});$('#'+this.name).rules('add',{'pattern':this.regExp,messages:{'pattern':this.regExpMssg}});}},val:function(raw)
{raw=raw||false;var e=$('[id="'+this.name+'"]:not(.ignore)');if(e.length)return $.fbuilder.parseValStr(e.val(),raw);return 0;}});$.fbuilder.controls['fcurrency']=function(){};$.extend($.fbuilder.controls['fcurrency'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Currency",ftype:"fcurrency",predefined:"",predefinedClick:false,required:false,readonly:false,size:"small",currencySymbol:"$",currencyText:"USD",thousandSeparator:",",centSeparator:".",noCents:false,min:"",max:"",formatDynamically:false,set_min:function(v,rmv)
{var e=$('[id="'+this.name+'"]');if(rmv)e.removeAttr('min');else e.attr('min',v);e.valid();},set_max:function(v,rmv)
{var e=$('[id="'+this.name+'"]');if(rmv)e.removeAttr('max');else e.attr('max',v);e.valid();},getFormattedValue:function(value)
{if(value=='')return value;var me=this,ts=me.thousandSeparator,cs=((cs=$.trim(me.centSeparator))!=='')?cs:'.',v=$.fbuilder.parseVal(value,ts,cs),parts=[],counter=0,str='',sign='';if(!isNaN(v))
{if(v<0)sign='-';v=ABS(v);parts=v.toString().split(".");for(var i=parts[0].length-1;i>=0;i--)
{counter++;str=parts[0][i]+str;if(counter%3==0&&i!=0)str=ts+str;}
parts[0]=str;if(parts[1])
{if(parts[1].length==1)parts[1]+='0';}
else parts[1]='00';return me.currencySymbol+sign+((me.noCents)?parts[0]:parts.join(cs))+me.currencyText;}
else
{return value;}},init:function()
{if(!/^\s*$/.test(this.min))this._setHndl('min');if(!/^\s*$/.test(this.max))this._setHndl('max');},show:function()
{return'<div class="fields '+this.csslayout+' '+this.name+' cff-currency-field" id="field'+this.form_identifier+'-'+this.index+'"><label for="'+this.name+'">'+this.title+''+((this.required)?"<span class='r'>*</span>":"")+'</label><div class="dfield"><input '+((this.readonly)?'readonly':'')+' id="'+this.name+'" name="'+this.name+'" class="field cffcurrency '+this.size+((this.required)?" required":"")+'" type="text" value="'+$.fbuilder.htmlEncode((this.formatDynamically)?this.getFormattedValue(this.predefined):this.predefined)+'" '+((!/^\s*$/.test(this.min))?'min="'+$.fbuilder.parseVal(this._getAttr('min'),this.thousandSeparator,this.centSeparator)+'" ':'')+((!/^\s*$/.test(this.max))?' max="'+$.fbuilder.parseVal(this._getAttr('max'),this.thousandSeparator,this.centSeparator)+'" ':'')+' /><span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';},after_show:function()
{var me=this;if(this.formatDynamically)
{$(document).on('change','[name="'+me.name+'"]',function(){this.value=me.getFormattedValue(this.value);});}
if(typeof $['validator']!='undefined')
{if(!('cffcurrency'in $.validator.methods))
$.validator.addMethod('cffcurrency',function(v,el)
{var f=el.id.match(/_\d+$/),esc=$.fbuilder.escape_symbol,r;e=$.fbuilder['forms'][f[0]].getItem(el.name);r=new RegExp('^\\s*('+esc(e.currencySymbol)+')?\\s*\\-?\\d+('+esc(e.thousandSeparator)+'\\d{3})*'+((e.noCents)?'':'('+e.centSeparator+'\\d+)?')+'\\s*('+esc(e.currencyText)+')?\\s*$','i');return this.optional(el)||r.test(v)||($.isNumeric(v)&&(!e.noCents||v===FLOOR(v)));},$.validator.messages['currency']);$.validator.methods.min=function(v,el,p)
{var f=el.id.match(/_\d+$/),e;if(f)e=$.fbuilder['forms'][f[0]].getItem(el.name);if(e)v=e.val();return this.optional(el)||v>=p;};$.validator.methods.max=function(v,el,p)
{var f=el.id.match(/_\d+$/),e;if(f)e=$.fbuilder['forms'][f[0]].getItem(el.name);if(e)v=e.val();return this.optional(el)||v<=p;};}},val:function(raw)
{raw=raw||false;var e=$('[id="'+this.name+'"]:not(.ignore)');if(e.length)
{var v=e.val();if(raw)return($.isNumeric(v))?v:$.fbuilder.parseValStr(v,raw);v=$.trim(v);v=v.replace(new RegExp($.fbuilder['escape_symbol'](this.currencySymbol),'g'),'').replace(new RegExp($.fbuilder['escape_symbol'](this.currencyText),'g'),'');return $.fbuilder.parseVal(v,this.thousandSeparator,this.centSeparator);}
return 0;}});$.fbuilder.controls['fnumber']=function(){};$.extend($.fbuilder.controls['fnumber'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Number",ftype:"fnumber",predefined:"",predefinedClick:false,required:false,readonly:false,size:"small",thousandSeparator:"",decimalSymbol:".",min:"",max:"",formatDynamically:false,dformat:"digits",formats:new Array("digits","number"),set_min:function(v,rmv)
{var e=$('[id="'+this.name+'"]');if(rmv)e.removeAttr('min');else e.attr('min',v);e.valid();},set_max:function(v,rmv)
{var e=$('[id="'+this.name+'"]');if(rmv)e.removeAttr('max');else e.attr('max',v);e.valid();},getFormattedValue:function(value)
{if(value=='')return value;var ts=this.thousandSeparator,ds=((ds=$.trim(this.decimalSymbol))!=='')?ds:'.',v=$.fbuilder.parseVal(value,ts,ds),s='',counter=0,str='',parts=[];if(!isNaN(v))
{if(v<0)s='-';v=ABS(v);parts=v.toString().split(".");for(var i=parts[0].length-1;i>=0;i--){counter++;str=parts[0][i]+str;if(counter%3==0&&i!=0)str=ts+str;}
parts[0]=str;return s+parts.join(ds);}
else
{return value;}},init:function()
{if(!/^\s*$/.test(this.min))this._setHndl('min');if(!/^\s*$/.test(this.max))this._setHndl('max');},show:function()
{var _type=(this.dformat=='digits'||(/^$/.test(this.thousandSeparator)&&/^\s*(\.\s*)?$/.test(this.decimalSymbol)))?'number':'text';return'<div class="fields '+this.csslayout+' '+this.name+' cff-number-field" id="field'+this.form_identifier+'-'+this.index+'"><label for="'+this.name+'">'+this.title+''+((this.required)?"<span class='r'>*</span>":"")+'</label><div class="dfield"><input id="'+this.name+'" name="'+this.name+'" '+((!/^\s*$/.test(this.min))?'min="'+$.fbuilder.parseVal(this._getAttr('min'),this.thousandSeparator,this.decimalSymbol)+'" ':'')+((!/^\s*$/.test(this.max))?' max="'+$.fbuilder.parseVal(this._getAttr('max'),this.thousandSeparator,this.decimalSymbol)+'" ':'')+' class="field '+this.dformat+' '+this.size+((this.required)?" required":"")+'" type="'+_type+'" value="'+$.fbuilder.htmlEncode((this.formatDynamically)?this.getFormattedValue(this.predefined):this.predefined)+'" '+((this.readonly)?'readonly':'')+' /><span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';},after_show:function()
{var me=this;if(this.formatDynamically&&this.dformat!='digits')
{$(document).on('change','[name="'+me.name+'"]',function(){this.value=me.getFormattedValue(this.value);});}
if(typeof $['validator']!='undefined')
{$.validator.methods.number=function(v,el)
{var f=el.id.match(/_\d+$/),esc=$.fbuilder.escape_symbol,e,r;if(f)e=$.fbuilder['forms'][f[0]].getItem(el.name);if(!e)e={thousandSeparator:',',decimalSymbol:'.'};r=new RegExp('^\\s*\\-?\\d+('+esc(e.thousandSeparator)+'\\d{3})*('+esc(e.decimalSymbol)+'\\d+)?\\s*$','i');return this.optional(el)||r.test(v)||$.isNumeric(v);};$.validator.methods.min=function(v,el,p)
{var f=el.id.match(/_\d+$/),e;if(f)e=$.fbuilder['forms'][f[0]].getItem(el.name);if(e)v=e.val();return this.optional(el)||v>=p;};$.validator.methods.max=function(v,el,p)
{var f=el.id.match(/_\d+$/),e;if(f)e=$.fbuilder['forms'][f[0]].getItem(el.name);if(e)v=e.val();return this.optional(el)||v<=p;};}},val:function(raw)
{raw=raw||false;var e=$('[id="'+this.name+'"]:not(.ignore)');if(e.length)
{var v=$.trim(e.val());if(raw)return($.isNumeric(v)&&this.thousandSeparator!='.')?v:$.fbuilder.parseValStr(v,raw);return $.fbuilder.parseVal(v,this.thousandSeparator,this.decimalSymbol);}
return 0;}});$.fbuilder.controls['fslider']=function(){};$.extend($.fbuilder.controls['fslider'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Slider",ftype:"fslider",predefined:"",predefinedMin:"",predefinedMax:"",predefinedClick:false,size:"small",thousandSeparator:",",centSeparator:".",min:0,max:100,step:1,range:false,minCaption:"",maxCaption:"",caption:"{0}",_setThousandsSeparator:function(v)
{v=$.fbuilder.parseVal(v,this.thousandSeparator,this.centSeparator);if(!isNaN(v))
{v=v.toString();var parts=v.toString().split("."),counter=0,str='';for(var i=parts[0].length-1;i>=0;i--)
{counter++;str=parts[0][i]+str;if(counter%3==0&&i!=0)str=this.thousandSeparator+str;}
parts[0]=str;if(typeof parts[1]!='undefined'&&parts[1].length==1)
{parts[1]+='0';}
return parts.join(this.centSeparator);}
else
{return v;}},_setFieldValue:function()
{var me=this;if(me.range)
{var values=$('#'+me.name+'_slider').slider('values');$('#'+me.name).val('['+values[0]+','+values[1]+']');$('#'+me.name+'_caption').html(me.caption.replace(/\{\s*0\s*\}/,me._setThousandsSeparator(values[0])).replace(/\{\s*0\s*\}/,me._setThousandsSeparator(values[1])));}
else
{var value=$('#'+me.name+'_slider').slider('value');$('#'+me.name).val(value);$('#'+me.name+'_caption').html(me.caption.replace(/\{\s*0\s*\}/,me._setThousandsSeparator(value)));}
$('#'+me.name).change();},init:function()
{function _toNumber(n){return(new String(n)).replace(/[^\d\.]/g,'')*1;};this.min=(/^\s*$/.test(this.min))?0:$.trim(this.min);this.max=(/^\s*$/.test(this.max))?100:$.trim(this.max);this.step=(/^\s*$/.test(this.step))?1:$.trim(this.step);this.predefined=(/^\s*$/.test(this.predefined))?this.min:_toNumber(this.predefined);this.predefinedMin=(/^\s*$/.test(this.predefinedMin))?this.min:_toNumber(this.predefinedMin);this.predefinedMax=(/^\s*$/.test(this.predefinedMax))?this.max:_toNumber(this.predefinedMax);this._setHndl('min');this._setHndl('max');this._setHndl('step');this.centSeparator=(/^\s*$/.test(this.centSeparator))?'.':$.trim(this.centSeparator);},show:function()
{return'<div class="fields '+this.csslayout+' '+this.name+' cff-slider-field" id="field'+this.form_identifier+'-'+this.index+'"><label for="'+this.name+'">'+this.title+'</label><div class="dfield slider-container"><input id="'+this.name+'" name="'+this.name+'" class="field" type="hidden" value="'+$.fbuilder.htmlEncode(this._getAttr('predefined'))+'"/><div id="'+this.name+'_slider" class="slider '+this.size+'"></div><div class="corner-captions '+this.size+'"><span class="left-corner">'+this.minCaption+'</span><span class="right-corner" style="float:right;">'+this.maxCaption+'</span></div><div id="'+this.name+'_caption" class="slider-caption"></div><span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';},set_min:function(v,ignore)
{var e=$('[id="'+this.name+'_slider"]'),c=this.val(),r=false;if(ignore)v=0;e.slider('option','min',v);if($.isArray(c)){if(c[0]<v){c[0]=v;r=true;}}
else if(c<v){c=v;r=true;}
if(r)this.setVal(c);},set_max:function(v,ignore)
{var e=$('[id="'+this.name+'_slider"]'),c=this.val(),r=false;if(ignore)v=100;e.slider('option','max',v);if($.isArray(c)){if(v<c[1]){c[1]=v;r=true;}}
else if(v<c){c=v;r=true;}
if(r)this.setVal(c);},set_step:function(v,ignore)
{if(ignore)v=1;$('[id="'+this.name+'_slider"]').slider("option","step",v);},after_show:function()
{var me=this,opt={range:(me.range!=false)?me.range:"min",min:me._getAttr('min'),max:me._getAttr('max'),step:me._getAttr('step')};if(me.range)
{var _min=Math.min(Math.max(me._getAttr('predefinedMin'),opt.min),opt.max),_max=Math.min(Math.max(me._getAttr('predefinedMax'),opt.min),opt.max);opt['values']=[_min,_max];}
else opt['value']=Math.min(Math.max(me._getAttr('predefined'),opt.min),opt.max);opt['slide']=opt['stop']=(function(e){return function(event,ui)
{if(typeof ui.value!='undefined')$(this).slider('value',ui.value);if(typeof ui.values!='undefined')$(this).slider('values',ui.values);e._setFieldValue();}})(me);$('#'+this.name+'_slider').slider(opt);me._setFieldValue();$('#cp_calculatedfieldsf_pform'+me.form_identifier).bind('reset',function(){$('#'+me.name+'_slider').slider(opt);me._setFieldValue();});},val:function(raw)
{raw=raw||false;var e=$('[id="'+this.name+'"]:not(.ignore)');return(e.length)?((raw)?e.val():JSON.parse(e.val())):0;},setVal:function(v)
{try{v=JSON.parse(v);}catch(err){}
try{$('[name="'+this.name+'"]').val(v);$('#'+this.name+'_slider').slider((($.isArray(v))?'values':'value'),v);this._setFieldValue();}catch(err){}}});$.fbuilder.controls['femail']=function(){};$.extend($.fbuilder.controls['femail'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Email",ftype:"femail",predefined:"",predefinedClick:false,required:false,readonly:false,size:"medium",equalTo:"",show:function()
{return'<div class="fields '+this.csslayout+' '+this.name+' cff-email-field" id="field'+this.form_identifier+'-'+this.index+'"><label for="'+this.name+'">'+this.title+''+((this.required)?"<span class='r'>*</span>":"")+'</label><div class="dfield"><input id="'+this.name+'" name="'+this.name+'" '+((this.equalTo!="")?"equalTo=\"#"+$.fbuilder.htmlEncode(this.equalTo+this.form_identifier)+"\"":"")+' class="field email '+this.size+((this.required)?" required":"")+'" type="email" value="'+$.fbuilder.htmlEncode(this.predefined)+'" '+((this.readonly)?'readonly':'')+' /><span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';},val:function(raw)
{raw=raw||false;var e=$('[id="'+this.name+'"]:not(.ignore)');if(e.length)return $.fbuilder.parseValStr(e.val(),raw);return 0;}});$.fbuilder.controls['fdate']=function(){};$.extend($.fbuilder.controls['fdate'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Date",ftype:"fdate",predefined:"",predefinedClick:false,size:"medium",required:false,dformat:"mm/dd/yyyy",dseparator:"/",tformat:"24",showDropdown:false,dropdownRange:"-10:+10",minDate:"",maxDate:"",invalidDates:"",minHour:0,maxHour:23,minMinute:0,maxMinute:59,stepHour:1,stepMinute:1,showDatepicker:true,showTimepicker:false,ariaHourLabel:'hours',ariaMinuteLabel:'minutes',ariaAMPMLabel:'am or pm',defaultDate:"",defaultTime:"",working_dates:[true,true,true,true,true,true,true],_set_Events:function()
{var me=this,f=function(){$('#'+me.name+'_date').valid();me.set_dateTime();};$(document).on('change','#'+me.name+'_date',function(){f();});$(document).on('change','#'+me.name+'_hours',function(){f();});$(document).on('change','#'+me.name+'_minutes',function(){f();});$(document).on('change','#'+me.name+'_ampm',function(){f();});$('#cp_calculatedfieldsf_pform'+me.form_identifier).bind('reset',function(){setTimeout(function(){me.set_DefaultDate();me.set_DefaultTime();me.set_dateTime();},500);});},_validateDate:function(d,w,i)
{try{if(d===null||!w[d.getDay()])return false;if(i!==null)
{for(var j=0,h=i.length;j<h;j++)
{if(d.getDate()==i[j].getDate()&&d.getMonth()==i[j].getMonth()&&d.getFullYear()==i[j].getFullYear())return false;}}}
catch(_err){}
return true;},_validateTime:function(e,i)
{if(i.showTimepicker)
{var base=e.name.replace('_date',''),h=$('#'+base+'_hours').val(),m=$('#'+base+'_minutes').val();if(i.tformat==12)
{if($('#'+base+'_ampm').val()=='pm'&&h!=12)h=h*1+12;if($('#'+base+'_ampm').val()=='am'&&h==12)h=0;}
if(h<i.minHour||i.maxHour<h||(h==i.minHour&&m<i.minMinute)||(h==i.maxHour&&i.maxMinute<m))return false;}
return true;},init:function()
{var me=this,_checkValue=function(v,min,max)
{v=parseInt(v);v=(isNaN(v))?max:v;return Math.min(Math.max(v,min),max);};me.dformat=me.dformat.replace(/\//g,me.dseparator);me.invalidDates=me.invalidDates.replace(/\s+/g,'');if(me.dropdownRange.indexOf(':')==-1)me.dropdownRange='-10:+10';if(!/^\s*$/.test(me.invalidDates))
{var dateRegExp=new RegExp(/^\d{1,2}\/\d{1,2}\/\d{4}$/),counter=0,dates=me.invalidDates.split(',');me.invalidDates=[];for(var i=0,h=dates.length;i<h;i++)
{var range=dates[i].split('-');if(range.length==2&&range[0].match(dateRegExp)!=null&&range[1].match(dateRegExp)!=null)
{var fromD=new Date(range[0]),toD=new Date(range[1]);while(fromD<=toD)
{me.invalidDates[counter]=fromD;var tmp=new Date(fromD.valueOf());tmp.setDate(tmp.getDate()+1);fromD=tmp;counter++;}}
else
{for(var j=0,k=range.length;j<k;j++)
{if(range[j].match(dateRegExp)!=null)
{me.invalidDates[counter]=new Date(range[j]);counter++;}}}}}
me.minHour=_checkValue(me.minHour,0,23);me.maxHour=_checkValue(me.maxHour,0,23);me.minMinute=_checkValue(me.minMinute,0,59);me.maxMinute=_checkValue(me.maxMinute,0,59);me.stepHour=_checkValue(me.stepHour,1,Math.max(1,me.maxHour-me.minHour));me.stepMinute=_checkValue(me.stepMinute,1,Math.max(1,me.maxMinute-me.minMinute));me._setHndl('minDate');me._setHndl('maxDate');},get_hours:function()
{var me=this,str='',i=0,h,from=(me.tformat==12)?1:me.minHour,to=(me.tformat==12)?12:me.maxHour;while((h=from+me.stepHour*i)<=to)
{if(h<10)h='0'+''+h;str+='<option value="'+h+'">'+h+'</option>';i++;}
return'<select id="'+me.name+'_hours" name="'+me.name+'_hours" class="hours-component" aria-label="'+$.fbuilder.htmlEncode(me.ariaHourLabel)+'">'+str+'</select>:';},get_minutes:function()
{var me=this,str='',i=0,m,n=(me.minHour==me.maxHour)?me.minMinute:0,x=(me.minHour==me.maxHour)?me.maxMinute:59;while((m=n+me.stepMinute*i)<=x)
{if(m<10)m='0'+''+m;str+='<option value="'+m+'">'+m+'</option>';i++;}
return'<select id="'+me.name+'_minutes" name="'+me.name+'_minutes" class="minutes-component" aria-label="'+$.fbuilder.htmlEncode(me.ariaMinuteLabel)+'">'+str+'</select>';},get_ampm:function()
{var str='';if(this.tformat==12)
{return'<select id="'+this.name+'_ampm" class="ampm-component"  aria-label="'+$.fbuilder.htmlEncode(this.ariaAMPMLabel)+'"><option value="am">am</option><option value="pm">pm</option></select>';}
return str;},set_dateTime:function()
{var me=this,str=$('#'+me.name+'_date').val();if(me.showTimepicker)
{str+=' '+$('#'+me.name+'_hours').val();str+=':'+$('#'+me.name+'_minutes').val();if($('#'+me.name+'_ampm').length)str+=$('#'+me.name+'_ampm').val();}
$('#'+me.name).val(str).change();},set_minDate:function(v,ignore)
{var e=$('[id*="'+this.name+'"].hasDatepicker');if(e.length)
{e.datepicker('option','minDate',(ignore)?null:v);e.change();}},set_maxDate:function(v,ignore)
{var e=$('[id*="'+this.name+'"].hasDatepicker');if(e.length)
{e.datepicker('option','maxDate',(ignore)?null:v);e.change();}},set_DefaultDate:function()
{var me=this,p={dateFormat:me.dformat.replace(/yyyy/g,"yy"),minDate:me._getAttr('minDate'),maxDate:me._getAttr('maxDate')},dp=$("#"+me.name+"_date"),dd=(me.defaultDate!="")?me.defaultDate:((me.predefined!="")?me.predefined:new Date());dp.click(function(){$(document).click();$(this).focus();});if(me.showDropdown)p=$.extend(p,{changeMonth:true,changeYear:true,yearRange:me.dropdownRange});p=$.extend(p,{beforeShowDay:(function(w,i){return function(d){return[me._validateDate(d,w,i),""];};})(me.working_dates,me.invalidDates)});dp.datepicker(p);if(!me.predefinedClick)dp.datepicker("setDate",dd);if(!me._validateDate(dp.datepicker("getDate"),me.working_dates,me.invalidDates))dp.datepicker("setDate",'');},set_DefaultTime:function()
{var me=this,_setValue=function(f,v,m)
{v=Math.min(v*1,m*1);v=(v<10)?0+''+v:v;$('#'+f+' [value="'+v+'"]').prop('selected',true);};if(me.showTimepicker)
{var parts,time={},tmp=0,max_minutes=59;if((parts=/(\d{1,2}):(\d{1,2})\s*([ap]m)?/gi.exec(me.defaultTime))!=null)
{time['hour']=parts[1]*1+((parts.length==4&&/pm/i.test(parts[3])&&parts[1]!=12)?12:0);time['minute']=parts[2];}
else
{var d=new Date();time['hour']=d.getHours();time['minute']=d.getMinutes();}
time['hour']=Math.min(Math.max(time['hour'],me.minHour),me.maxHour);if(time['hour']<=me.minHour)time['minute']=Math.max(time['minute'],me.minMinute);if(me.maxHour<=time['hour'])time['minute']=Math.min(time['minute'],me.maxMinute);_setValue(me.name+'_hours',(me.tformat==12)?((time['hour']>12)?time['hour']-12:((time['hour']==0)?12:time['hour'])):time['hour'],(me.tformat==12)?12:me.maxHour);_setValue(me.name+'_minutes',time['minute'],(time['hour']==me.maxHour)?me.maxMinute:59);$('#'+me.name+'_ampm'+' [value="'+((time['hour']<12)?'am':'pm')+'"]').prop('selected',true);}},show:function()
{var me=this,n=me.name,attr='value',format_label=[],date_tag_type='text',disabled='',date_tag_class='field date'+me.dformat.replace(/[^a-z]/ig,"")+' '+me.size+((me.required&&me.showDatepicker)?' required':'');if(me.predefinedClick)attr='placeholder';if(me.showDatepicker)format_label.push(me.dformat);else{date_tag_type='hidden';disabled='disabled';}
if(me.showTimepicker)format_label.push('HH:mm');return'<div class="fields '+me.csslayout+' '+n+' cff-date-field" id="field'+me.form_identifier+'-'+me.index+'"><label for="'+n+'_date">'+me.title+''+((me.required)?"<span class='r'>*</span>":"")+((format_label.length)?' <span class="dformat">('+format_label.join(' ')+')</span>':'')+'</label><div class="dfield"><input id="'+n+'" name="'+n+'" type="hidden" value="'+$.fbuilder.htmlEncode(me.predefined)+'"/><input id="'+n+'_date" name="'+n+'_date" class="'+date_tag_class+' date-component" type="'+date_tag_type+'" '+attr+'="'+$.fbuilder.htmlEncode(me.predefined)+'" '+disabled+' />'+((me.showTimepicker)?' '+me.get_hours()+me.get_minutes()+' '+me.get_ampm():'')+'<span class="uh">'+me.userhelp+'</span></div><div class="clearer"></div></div>';},after_show:function()
{var me=this,date_format='date'+me.dformat.replace(/[^a-z]/ig,""),validator=function(v,e)
{try
{var _dp=$.datepicker,_fb=$.fbuilder,p=e.name.replace('_date','').split('_'),_index=(p.length>1)?'_'+p[1]:'',item=('forms'in _fb&&_index in _fb['forms'])?_fb['forms'][_index].getItem(p[0]+'_'+p[1]):null,inst=_dp._getInst(e),minDate=_dp._determineDate(inst,_dp._get(inst,'minDate'),null),maxDate=_dp._determineDate(inst,_dp._get(inst,'maxDate'),null),dateFormat=_dp._get(inst,'dateFormat'),date=_dp.parseDate(dateFormat,v,_dp._getFormatConfig(inst));if(item!=null)
{return this.optional(e)||((minDate==null||date>=minDate)&&(maxDate==null||date<=maxDate)&&item._validateDate($(e).datepicker('getDate'),item.working_dates,item.invalidDates)&&item._validateTime(e,item));}
return true;}
catch(er)
{return false;}};if(!(date_format in $.validator.methods))$.validator.addMethod(date_format,validator);me.set_DefaultDate();me.set_DefaultTime();me._set_Events();me.set_dateTime();},val:function(raw)
{raw=raw||false;var me=this,e=$('[id="'+me.name+'"]:not(.ignore)'),dformat=me.dformat.replace(new RegExp('\\'+me.dseparator,'g'),'/');if(e.length)
{var v=e.val(),rt;if(raw)return $.fbuilder.parseValStr(v,raw);if(dformat=='yyyy/mm/dd'||dformat=='yyyy/dd/mm')
rt='(\\d{4})[\\/\\-\\.](\\d{1,2})[\\/\\-\\.](\\d{1,2})';else
rt='(\\d{1,2})[\\/\\-\\.](\\d{1,2})[\\/\\-\\.](\\d{4})';v=$.trim(e.val());var re=new RegExp(rt+'(\\s(\\d{1,2})[:\\.](\\d{1,2})\s*([amp]{2})?)?'),d=re.exec(v),h=0,m=0,date;if(d)
{if(typeof d[5]!='undefined')h=d[5]*1;if(typeof d[6]!='undefined')m=d[6]*1;if(typeof d[7]!='undefined')
{var am=d[7].toLowerCase();if(am=='pm'&&h<12)h+=12;if(am=='am'&&h==12)h-=12;}
switch(dformat)
{case'yyyy/dd/mm':date=new Date(d[1],(d[3]*1-1),d[2],h,m,0,0);break;case'yyyy/mm/dd':date=new Date(d[1],(d[2]*1-1),d[3],h,m,0,0);break;case'dd/mm/yyyy':date=new Date(d[3],(d[2]*1-1),d[1],h,m,0,0);break;case'mm/dd/yyyy':date=new Date(d[3],(d[1]*1-1),d[2],h,m,0,0);break;}
if(me.showTimepicker)return date.valueOf()/86400000;else return Math.ceil(date.valueOf()/86400000);}}
return 0;},setVal:function(v)
{try
{v=$.trim(v).replace(/\s+/g,' ').split(' ');if(this.showDatepicker)
{this.defaultDate=v[0];this.set_DefaultDate();}
if(this.showTimepicker)
{var t=(v.length==2)?v[1]:((!this.showDatepicker)?v[0]:false);if(t!==false)
{this.defaultTime=t;this.set_DefaultTime();}}
this.set_dateTime();}
catch(err)
{}}});$.fbuilder.controls['ftextarea']=function(){};$.extend($.fbuilder.controls['ftextarea'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Untitled",ftype:"ftextarea",predefined:"",predefinedClick:false,required:false,readonly:false,size:"medium",minlength:"",maxlength:"",rows:4,show:function()
{return'<div class="fields '+this.csslayout+' '+this.name+' cff-textarea-field" id="field'+this.form_identifier+'-'+this.index+'"><label for="'+this.name+'">'+this.title+''+((this.required)?"<span class='r'>*</span>":"")+'</label><div class="dfield"><textarea '+((!/^\s*$/.test(this.rows))?'rows='+this.rows:'')+' id="'+this.name+'" name="'+this.name+'" minlength="'+(this.minlength)+'" maxlength="'+$.fbuilder.htmlEncode(this.maxlength)+'" class="field '+this.size+((this.required)?" required":"")+'" '+((this.readonly)?'readonly':'')+'>'+((!this.predefinedClick)?this.predefined:'')+'</textarea><span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';},val:function(raw)
{raw=raw||false;var e=$('[id="'+this.name+'"]:not(.ignore)');if(e.length)return $.fbuilder.parseValStr(e.val().replace(/[\n\r]+/g,' '),raw);return 0;}});$.fbuilder.controls['fcheck']=function(){};$.extend($.fbuilder.controls['fcheck'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Check All That Apply",ftype:"fcheck",layout:"one_column",required:false,merge:1,max:-1,maxError:"Check no more than {0} boxes",toSubmit:"text",showDep:false,show:function()
{this.choicesVal=((typeof(this.choicesVal)!="undefined"&&this.choicesVal!==null)?this.choicesVal:this.choices);var str="",classDep;if(typeof this.choicesDep=="undefined"||this.choicesDep==null)
this.choicesDep=new Array();for(var i=0,h=this.choices.length;i<h;i++)
{if(typeof this.choicesDep[i]!='undefined')
this.choicesDep[i]=$.grep(this.choicesDep[i],function(n){return n!="";});else
this.choicesDep[i]=[];classDep=(this.choicesDep[i].length)?'depItem':'';str+='<div class="'+this.layout+'"><label for="'+this.name+'_cb'+i+'"><input name="'+this.name+'[]" id="'+this.name+'_cb'+i+'" class="field '+classDep+' group '+((this.required)?" required":"")+'" value="'+$.fbuilder.htmlEncode(this.choicesVal[i])+'" vt="'+$.fbuilder.htmlEncode((this.toSubmit=='text')?this.choices[i]:this.choicesVal[i])+'" type="checkbox" '+((this.choiceSelected[i])?"checked":"")+'/> <span>'+$.fbuilder.htmlDecode(this.choices[i])+'</span></label></div>';}
return'<div class="fields '+this.csslayout+' '+this.name+' cff-checkbox-field" id="field'+this.form_identifier+'-'+this.index+'"><label>'+this.title+''+((this.required)?"<span class='r'>*</span>":"")+'</label><div class="dfield">'+str+'<span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';},after_show:function()
{var m=this;$(document).on('click','[id*="'+m.name+'"]',function(){if(0<m.max)
{var d=true;if($('[id*="'+m.name+'"]:checked').length<m.max)d=false;$('[id*="'+m.name+'"]:not(:checked)').prop('disabled',d);}});if(0<m.max)
$('[id*="'+m.name+'"]').rules('add',{maxlength:m.max,messages:{maxlength:m.maxError}});},showHideDep:function(toShow,toHide,hiddenByContainer)
{var me=this,item=$('[id*="'+me.name+'"]'),form_identifier=me.form_identifier,isHidden=(typeof toHide[me.name]!='undefined'||typeof hiddenByContainer[me.name]!='undefined'),result=[];try
{item.each(function(i,e){if(typeof me.choicesDep[i]!='undefined'&&me.choicesDep[i].length)
{var checked=e.checked;for(var j=0,k=me.choicesDep[i].length;j<k;j++)
{if(!/fieldname/i.test(me.choicesDep[i][j]))continue;var dep=me.choicesDep[i][j]+form_identifier;if(isHidden||!checked)
{if(typeof toShow[dep]!='undefined')
{delete toShow[dep]['ref'][me.name+'_'+i];if($.isEmptyObject(toShow[dep]['ref']))
delete toShow[dep];}
if(typeof toShow[dep]=='undefined')
{$('[id*="'+dep+'"],.'+dep).closest('.fields').hide();$('[id*="'+dep+'"]:not(.ignore)').addClass('ignore');toHide[dep]={};}}
else
{delete toHide[dep];if(typeof toShow[dep]=='undefined')
toShow[dep]={'ref':{}};toShow[dep]['ref'][me.name+'_'+i]=1;if(!(dep in hiddenByContainer))
{$('[id*="'+dep+'"],.'+dep).closest('.fields').show();$('[id*="'+dep+'"].ignore').removeClass('ignore');}}
if($.inArray(dep,result)==-1)result.push(dep);}}});}
catch(e){}
return result;},val:function(raw)
{raw=raw||false;var v,me=this,m=me.merge&&!raw,e=$('[id*="'+me.name+'"]:checked:not(.ignore)');if(!m)v=[];if(e.length)
{e.each(function(){var t=(m)?$.fbuilder.parseVal(this.value):$.fbuilder.parseValStr(this.value,raw);if(!$.isNumeric(t))t=t.replace(/^"/,'').replace(/"$/,'');if(m)v=(v)?v+t:t;else v.push(t);});}
return(typeof v=='object'&&typeof v['length']!=='undefined')?v:((v)?(($.isNumeric(v))?v:'"'+v+'"'):0);},setVal:function(v)
{var t,n=this.name;if(!$.isArray(v))v=[v];$('[id*="'+n+'"]').prop('checked',false);for(var i in v)
{t=(new String(v[i])).replace(/(['"])/g,"\\$1");$('[id*="'+n+'"][vt="'+t+'"],[id*="'+n+'"][value="'+t+'"]').prop('checked',true);}
$('[id*="'+n+'"]').change();}});$.fbuilder.controls['fradio']=function(){};$.extend($.fbuilder.controls['fradio'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Select a Choice",ftype:"fradio",layout:"one_column",required:false,toSubmit:"text",choiceSelected:"",showDep:false,untickAccepted:true,show:function()
{this.choicesVal=((typeof(this.choicesVal)!="undefined"&&this.choicesVal!==null)?this.choicesVal:this.choices);var l=this.choices.length,str="",classDep="";if(typeof this.choicesDep=="undefined"||this.choicesDep==null)
this.choicesDep=new Array();for(var i=0;i<l;i++)
{if(typeof this.choicesDep[i]!='undefined')
this.choicesDep[i]=$.grep(this.choicesDep[i],function(n){return n!="";});else
this.choicesDep[i]=[];if(this.choicesDep[i].length)
classDep='depItem';}
for(var i=0;i<l;i++)
{str+='<div class="'+this.layout+'"><label for="'+this.name+'_rb'+i+'"><input name="'+this.name+'" id="'+this.name+'_rb'+i+'" class="field '+classDep+' group '+((this.required)?" required":"")+'" value="'+$.fbuilder.htmlEncode(this.choicesVal[i])+'" vt="'+$.fbuilder.htmlEncode((this.toSubmit=='text')?this.choices[i]:this.choicesVal[i])+'" type="radio" '+((this.choices[i]+' - '+this.choicesVal[i]==this.choiceSelected)?"checked":"")+'/> <span>'+$.fbuilder.htmlDecode(this.choices[i])+'</span></label></div>';}
return'<div class="fields '+this.csslayout+' '+this.name+' cff-radiobutton-field" id="field'+this.form_identifier+'-'+this.index+'"><label>'+this.title+''+((this.required)?"<span class='r'>*</span>":"")+'</label><div class="dfield">'+str+'<span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';},after_show:function()
{var me=this,n=me.name;if(me.untickAccepted)
{$(document).off('click','[id*="'+n+'"]').on('click','[id*="'+n+'"]',function(){var m=this,e=$(m);$('[id*="'+n+'"]').each(function(){if(m!==this)$(this).data('previous-status',false);});if(e.data('previous-status')){m.checked=false;e.change();}
e.data('previous-status',m.checked);});}},showHideDep:function(toShow,toHide,hiddenByContainer)
{var me=this,item=$('[id*="'+me.name+'"]'),form_identifier=me.form_identifier,isHidden=(typeof toHide[me.name]!='undefined'||typeof hiddenByContainer[me.name]!='undefined'),result=[];try
{item.each(function(i,e){if(typeof me.choicesDep[i]!='undefined'&&me.choicesDep[i].length)
{var checked=e.checked;for(var j=0,k=me.choicesDep[i].length;j<k;j++)
{if(!/fieldname/i.test(me.choicesDep[i][j]))continue;var dep=me.choicesDep[i][j]+form_identifier;if(isHidden||!checked)
{if(typeof toShow[dep]!='undefined')
{delete toShow[dep]['ref'][me.name+'_'+i];if($.isEmptyObject(toShow[dep]['ref']))
delete toShow[dep];}
if(typeof toShow[dep]=='undefined')
{$('[id*="'+dep+'"],.'+dep).closest('.fields').hide();$('[id*="'+dep+'"]:not(.ignore)').addClass('ignore');toHide[dep]={};}}
else
{delete toHide[dep];if(typeof toShow[dep]=='undefined')
toShow[dep]={'ref':{}};toShow[dep]['ref'][me.name+'_'+i]=1;if(!(dep in hiddenByContainer))
{$('[id*="'+dep+'"],.'+dep).closest('.fields').show();$('[id*="'+dep+'"].ignore').removeClass('ignore');}}
if($.inArray(dep,result)==-1)result.push(dep);}}});}
catch(e){}
return result;},val:function(raw)
{raw=raw||false;var e=$('[id*="'+this.name+'"]:not(.ignore):checked');if(e.length)return $.fbuilder.parseValStr(e.val(),raw);return 0;},setVal:function(v)
{var t=(new String(v)).replace(/(['"])/g,"\\$1"),n=this.name;$('[id*="'+n+'"]').prop('checked',false);$('[id*="'+n+'"][vt="'+t+'"],[id*="'+n+'"][value="'+t+'"]').prop('checked',true);$('[id*="'+n+'"]').change();}});$.fbuilder.controls['fdropdown']=function(){};$.extend($.fbuilder.controls['fdropdown'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Select a Choice",ftype:"fdropdown",size:"medium",required:false,toSubmit:"text",merge:0,choiceSelected:"",multiple:false,vChoices:1,showDep:false,show:function()
{this.choicesVal=((typeof(this.choicesVal)!="undefined"&&this.choicesVal!==null)?this.choicesVal:this.choices)
var c=this.choices,cv=this.choicesVal,og=(typeof this.optgroup=='undefined')?new Array():this.optgroup,op_o=false,l=c.length,classDep='',str='';if(typeof this.choicesDep=="undefined"||this.choicesDep==null)
this.choicesDep=new Array();for(var i=0;i<l;i++)
{if(typeof this.choicesDep[i]!='undefined'&&(typeof og[i]=='undefined'||!og[i]))
this.choicesDep[i]=$.grep(this.choicesDep[i],function(n){return n!="";});else
this.choicesDep[i]=[];if(this.choicesDep[i].length&&(typeof og[i]=='undefined'||!og[i]))
classDep='depItem';}
for(var i=0;i<l;i++)
{if(og[i])
{if(op_o)str+='</optgroup>';str+='<optgroup label="'+$.fbuilder.htmlEncode(c[i])+'">';op_o=true;}
else
{str+='<option '+((this.choiceSelected==c[i]+' - '+cv[i])?"selected":"")+' '+((classDep!='')?'class="'+classDep+'"':'')+' value="'+$.fbuilder.htmlEncode(cv[i])+'" vt="'+$.fbuilder.htmlEncode((this.toSubmit=='text')?c[i]:cv[i])+'" data-i="'+i+'">'+c[i]+'</option>';}}
if(op_o)str+='</optgroup>';return'<div class="fields '+this.csslayout+' '+this.name+' cff-dropdown-field" id="field'+this.form_identifier+'-'+this.index+'"><label for="'+this.name+'">'+this.title+''+((this.required)?"<span class='r'>*</span>":"")+'</label>'+'<div class="dfield"><select id="'+this.name+'" name="'+this.name+((this.multiple)?'[]':'')+'" class="field '+((classDep!='')?' depItemSel ':'')+this.size+((this.required)?' required':'')+'" '+((this.multiple==true)?' multiple="multiple" size="'+((this.vChoices)?this.vChoices:1)+'"':'')+'>'+str+'</select><span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div><div class="clearer"></div></div>';},showHideDep:function(toShow,toHide,hiddenByContainer)
{var me=this,item=$('#'+me.name+'.depItemSel'),form_identifier=me.form_identifier,isHidden=(typeof toHide[me.name]!='undefined'||typeof hiddenByContainer[me.name]!='undefined'),result=[];try
{if(item.length)
{var selected=[];$(item).find(':selected').each(function(){selected.push($(this).data('i'));});for(var i=0,h=me.choices.length;i<h;i++)
{if(typeof me.choicesDep[i]!='undefined'&&me.choicesDep[i].length)
{for(var j=0,k=me.choicesDep[i].length;j<k;j++)
{if(!/fieldname/i.test(me.choicesDep[i][j]))continue;var dep=me.choicesDep[i][j]+form_identifier;if(isHidden||$.inArray(i,selected)==-1)
{if(typeof toShow[dep]!='undefined')
{delete toShow[dep]['ref'][me.name+'_'+i];if($.isEmptyObject(toShow[dep]['ref']))
delete toShow[dep];}
if(typeof toShow[dep]=='undefined')
{$('[id*="'+dep+'"],.'+dep).closest('.fields').hide();$('[id*="'+dep+'"]:not(.ignore)').addClass('ignore');toHide[dep]={};}}
else
{delete toHide[dep];if(typeof toShow[dep]=='undefined')
toShow[dep]={'ref':{}};toShow[dep]['ref'][me.name+'_'+i]=1;if(!(dep in hiddenByContainer))
{$('[id*="'+dep+'"],.'+dep).closest('.fields').show();$('[id*="'+dep+'"].ignore').removeClass('ignore');}}
if($.inArray(dep,result)==-1)result.push(dep);}}}}}
catch(e){}
return result;},val:function(raw)
{raw=raw||false;var e=$('[id="'+this.name+'"]:not(.ignore) option:selected'),v,m=this.multiple,g=this.merge&&!raw;if(m&&!g)v=[];if(e.length)
{e.each(function(){var t=$.fbuilder.parseValStr(this.value,raw);if(!$.isNumeric(t))t=t.replace(/^"/,'').replace(/"$/,'');if(!m||g)v=(v)?v+t:t;else v.push(t);});}
return(typeof v=='object'&&typeof v['length']!=='undefined')?v:((v)?(($.isNumeric(v))?v:'"'+v+'"'):0);},setVal:function(v)
{if(!$.isArray(v))v=[v];var t,n=this.name;for(var i in v)
{t=(new String(v[i])).replace(/(['"])/g,"\\$1");$('[id="'+n+'"] OPTION[vt="'+t+'"],[id="'+n+'"] OPTION[value="'+t+'"]').prop('selected',true);}
$('[id="'+n+'"]').change();}});$.fbuilder.controls['ffile']=function(){};$.extend($.fbuilder.controls['ffile'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Untitled",ftype:"ffile",required:false,size:"medium",accept:"",upload_size:"",multiple:false,preview:false,thumb_width:'80px',thumb_height:'',init:function(){this.thumb_width=$.trim(this.thumb_width);this.thumb_height=$.trim(this.thumb_height);},show:function()
{this.accept=$.fbuilder.htmlEncode($.trim(this.accept));this.upload_size=$.fbuilder.htmlEncode($.trim(this.upload_size));return'<div class="fields '+this.csslayout+' '+this.name+' cff-file-field" id="field'+this.form_identifier+'-'+this.index+'"><label for="'+this.name+'">'+this.title+''+((this.required)?"<span class='r'>*</span>":"")+'</label><div class="dfield"><input type="file" id="'+this.name+'" name="'+this.name+'[]"'+((this.accept.length)?' accept="'+this.accept+'"':'')+((this.upload_size.length)?' upload_size="'+this.upload_size+'"':'')+' class="field '+this.size+((this.required)?" required":"")+'" '+((this.multiple)?'multiple':'')+' /><span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';},after_show:function()
{var me=this;if(!('accept'in $.validator.methods))
$.validator.addMethod("accept",function(value,element,param)
{if(this.optional(element))return true;else{param=typeof param==="string"?param.replace(/,/g,'|'):"png|jpe?g|gif";var regExpObj=new RegExp(".("+param+")$","i");for(var i=0,h=element.files.length;i<h;i++)
if(!element.files[i].name.match(regExpObj))return false;return true;}});if(!('upload_size'in $.validator.methods))
$.validator.addMethod("upload_size",function(value,element,params)
{if(this.optional(element))return true;else{var total=0;for(var i=0,h=element.files.length;i<h;i++)
total+=element.files[i].size/1024;return(total<=params);}});$('#'+me.name).change(function(){var h=this.files.length,n=0;$(this).siblings('span.files-list').remove();if(1<=h)
{var filesContainer=$('<span class="files-list"></span>');for(var i=0;i<h;i++)
{(function(i,file){if(me.preview&&file.type.match('image.*')&&'FileReader'in window)
{var reader=new FileReader();reader.onload=function(e){var img=$('<img>');img.attr('src',e.target.result).css('maxWidth','100%');if(me.thumb_height!='')img.attr('height',me.thumb_height);if(me.thumb_width!='')img.attr('width',me.thumb_width);filesContainer.append($('<span>'+(n?', ':'')+'</span>').append(img));n++;};reader.readAsDataURL(file);}
else if(1<h){filesContainer.append($('<span>').text((n?', ':'')+file.name));n++;}})(i,this.files[i]);}
$(this).after(filesContainer);}});}});$.fbuilder.controls['fpassword']=function(){};$.extend($.fbuilder.controls['fpassword'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Untitled",ftype:"fpassword",predefined:"",predefinedClick:false,required:false,size:"medium",minlength:"",maxlength:"",equalTo:"",show:function()
{return'<div class="fields '+this.csslayout+' '+this.name+' cff-password-field" id="field'+this.form_identifier+'-'+this.index+'"><label for="'+this.name+'">'+this.title+''+((this.required)?"<span class='r'>*</span>":"")+'</label><div class="dfield"><input id="'+this.name+'" name="'+this.name+'" minlength="'+(this.minlength)+'" maxlength="'+$.fbuilder.htmlEncode(this.maxlength)+'" '+((this.equalTo!="")?"equalTo=\"#"+$.fbuilder.htmlEncode(this.equalTo+this.form_identifier)+"\"":"")+' class="field '+this.size+((this.required)?" required":"")+'" type="password" value="'+$.fbuilder.htmlEncode(this.predefined)+'"/><span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';},val:function(raw)
{raw=raw||false;var e=$('[id="'+this.name+'"]:not(.ignore)');if(e.length)return $.fbuilder.parseValStr(e.val(),raw);return 0;}});$.fbuilder.controls['fPhone']=function(){};$.extend($.fbuilder.controls['fPhone'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Phone",ftype:"fPhone",required:false,readonly:false,dformat:"### ### ####",predefined:"888 888 8888",show:function()
{var me=this,str="",tmp=this.dformat.split(' '),tmpv=this.predefined.split(' '),attr=(typeof this.predefinedClick!='undefined'&&this.predefinedClick)?'placeholder':'value';for(var i=0;i<tmpv.length;i++)
{if($.trim(tmpv[i])=="")
{tmpv.splice(i,1);}}
for(var i=0;i<tmp.length;i++)
{if($.trim(tmp[i])!="")
{str+='<div class="uh_phone" ><input type="text" id="'+this.name+'_'+i+'" name="'+this.name+'_'+i+'" class="field '+((i==0)?' phone ':' digits ')+((this.required)?' required ':'')+'" size="'+$.trim(tmp[i]).length+'" '+attr+'="'+((tmpv[i])?tmpv[i]:"")+'" maxlength="'+$.trim(tmp[i]).length+'" minlength="'+$.trim(tmp[i]).length+'" '+((this.readonly)?'readonly':'')+' /><div class="l">'+$.trim(tmp[i])+'</div></div>';}}
return'<div class="fields '+this.csslayout+' '+this.name+' cff-phone-field" id="field'+this.form_identifier+'-'+this.index+'"><label for="'+this.name+'">'+this.title+''+((this.required)?"<span class='r'>*</span>":"")+'</label><div class="dfield"><input type="hidden" id="'+this.name+'" name="'+this.name+'" class="field " />'+str+'<span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';},after_show:function()
{var me=this,tmp=me.dformat.split(' ');if(!('phone'in $.validator.methods))
$.validator.addMethod("phone",function(value,element)
{if(this.optional(element))return true;else return /^\+{0,1}\d*$/.test(value);});for(var i=0,h=tmp.length;i<h;i++)
{$('#'+me.name+'_'+i).bind('change',function(){var v='';for(var i=0;i<tmp.length;i++)
{v+=$('#'+me.name+'_'+i).val();}
$('#'+me.name).val(v).change();});if(i+1<h)
{$('#'+me.name+'_'+i).bind('keyup',{'next':i+1},function(evt){var e=$(this);if(e.val().length==e.attr('maxlength'))
{e.change();$('#'+me.name+'_'+evt.data.next).focus();}});}}},val:function(raw)
{raw=raw||false;var e=$('[id="'+this.name+'"]:not(.ignore)');if(e.length)return $.fbuilder.parseValStr(e.val(),raw);return 0;},setVal:function(v)
{$('[name="'+this.name+'"]').val(v);v=$.trim(v).replace(/[^\d]/g,' ').split(' ');for(var i in v)$('[id="'+this.name+'_'+i+'"]').val(v[i]);}});$.fbuilder.controls['fCommentArea']=function(){};$.extend($.fbuilder.controls['fCommentArea'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Comments here",ftype:"fCommentArea",userhelp:"A description of the section goes here.",show:function()
{return'<div class="fields '+this.csslayout+' '+this.name+' comment_area" id="field'+this.form_identifier+'-'+this.index+'"><label id="'+this.name+'">'+this.title+'</label><span class="uh">'+this.userhelp+'</span><div class="clearer"></div></div>';}});$.fbuilder.controls['fhidden']=function(){};$.extend($.fbuilder.controls['fhidden'].prototype,$.fbuilder.controls['ffields'].prototype,{ftype:"fhidden",title:"",predefined:"",show:function()
{return'<div class="fields '+this.csslayout+' '+this.name+' cff-hidden-field" id="field'+this.form_identifier+'-'+this.index+'" style="padding:0;margin:0;border:0;width:0;height:0;overflow:hidden;"><label for="'+this.name+'">'+this.title+'</label><div class="dfield"><input id="'+this.name+'" name="'+this.name+'" type="hidden" value="'+$.fbuilder.htmlEncode(this.predefined)+'" class="field" /></div></div>';}});$.fbuilder.controls['fSectionBreak']=function(){};$.extend($.fbuilder.controls['fSectionBreak'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Section Break",ftype:"fSectionBreak",userhelp:"A description of the section goes here.",show:function()
{return'<div class="fields '+this.csslayout+' '+this.name+' section_breaks" id="field'+this.form_identifier+'-'+this.index+'"><div class="section_break" id="'+this.name+'" ></div><label>'+this.title+'</label><span class="uh">'+this.userhelp+'</span><div class="clearer"></div></div>';}});$.fbuilder.controls['fPageBreak']=function(){};$.extend($.fbuilder.controls['fPageBreak'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Page Break",ftype:"fPageBreak",show:function()
{return'<div class="fields '+this.csslayout+' '+this.name+' section_breaks" id="field'+this.form_identifier+'-'+this.index+'"><div class="section_break" id="'+this.name+'" ></div><label>'+this.title+'</label><span class="uh">'+this.userhelp+'</span><div class="clearer"></div></div>';}});$.fbuilder.controls['fsummary']=function(){};$.extend($.fbuilder.controls['fsummary'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Summary",ftype:"fsummary",fields:"",titleClassname:"summary-field-title",valueClassname:"summary-field-value",fieldsArray:[],show:function()
{var me=this;if('string'!=typeof me.fields)return;var p=$.trim(me.fields.replace(/\,+/g,',')).split(','),l=p.length;if(l)
{var str='<div class="fields '+me.csslayout+' '+me.name+' cff-summary-field" id="field'+me.form_identifier+'-'+me.index+'">'+((!/^\s*$/.test(me.title))?'<h2>'+me.title+'</h2>':'')+'<div id="'+me.name+'">';for(var i=0;i<l;i++)
{if(!/^\s*$/.test(p[i]))
{p[i]=$.trim(p[i]);str+='<div ref="'+p[i]+me.form_identifier+'" class="cff-summary-item"><span class="'+me.titleClassname+' cff-summary-title"></span><span class="'+me.valueClassname+' cff-summary-value"></span></div>';}}
str+='</div></div>';return str;}},after_show:function(){var me=this;if('string'!=typeof me.fields)return;var p=$.trim(me.fields.replace(/\,+/g,',')).split(','),l=p.length;if(l)
{for(var i=0;i<l;i++)
{if(!/^\s*$/.test(p[i]))
{p[i]=$.trim(p[i]);me.fieldsArray.push(p[i]+me.form_identifier);$(document).on('change','[id*="'+p[i]+me.form_identifier+'"]',function(){me.update();});}}
$(document).on('showHideDepEvent',function(evt,form_identifier)
{me.update();});$('#cp_calculatedfieldsf_pform'+me.form_identifier).bind('reset',function(){setTimeout(function(){me.update();},10);});}},update:function()
{for(var j=0,k=this.fieldsArray.length;j<k;j++)
{var i=this.fieldsArray[j],e=$('[id="'+i+'"],[id^="'+i+'_rb"],[id^="'+i+'_cb"]'),tt=$('[ref="'+i+'"]');if(e.length&&tt.length)
{var l=$('[id="'+i+'"],[id^="'+i+'_rb"],[id^="'+i+'_cb"]').closest('.fields').find('label:first').clone().find('.r,.dformat').remove().end(),t=$.trim(l.text()).replace(/\:$/,''),v=[];e.each(function(){var e=$(this);if(/(checkbox|radio)/i.test(e.attr('type'))&&!e.is(':checked'))
{return;}
else if(e[0].tagName=='SELECT')
{v.push($(e[0].options[e[0].selectedIndex]).attr('vt'));}
else
{if(e.attr('vt'))
{v.push(e.attr('vt'));}
else
{var c=$('[id="'+i+'_caption"]');v.push((c.length&&!/^\s*$/.test(c.html()))?c.html():e.val());}}});tt.find('.cff-summary-title')[(/^\s*$/.test(t))?'hide':'show']().html(t);tt.find('.cff-summary-value').html(v.join(', '));if(e.hasClass('ignore'))
{tt.hide();}
else
{tt.show();}}}}});$.fbuilder.controls['fcontainer']=function(){};$.fbuilder.controls['fcontainer'].prototype={fields:[],columns:1,after_show:function()
{var e=$('#'+this.name),f;for(var i=0,h=this.fields.length;i<h;i++)
{f=$('[id*="'+this.fields[i]+this.form_identifier+'"]').closest('.fields').detach();if(this.columns>1)
{f.addClass('column'+this.columns);if(i%this.columns==0)f.css('clear','left');}
f.appendTo(e);}},showHideDep:function(toShow,toHide,hiddenByContainer)
{var me=this,isHidden=(typeof toHide[me.name]!='undefined'||typeof hiddenByContainer[me.name]!='undefined'),fId,result=[];for(var i=0,h=me.fields.length;i<h;i++)
{if(!/fieldname/i.test(me.fields[i]))continue;fId=me.fields[i]+me.form_identifier;if(isHidden)
{if(typeof hiddenByContainer[fId]=='undefined')hiddenByContainer[fId]={};if(typeof hiddenByContainer[fId][me.name]=='undefined')
{hiddenByContainer[fId][me.name]={};if(typeof toHide[fId]=='undefined')
{$('[id*="'+fId+'"],.'+fId).closest('.fields').hide();$('[id*="'+fId+'"]:not(.ignore)').addClass('ignore');result.push(fId);}}}
else
{if(typeof hiddenByContainer[fId]!='undefined')
{delete hiddenByContainer[fId][me.name];if($.isEmptyObject(hiddenByContainer[fId]))
{delete hiddenByContainer[fId];if(typeof toHide[fId]=='undefined')
{$('[id*="'+fId+'"],.'+fId).closest('.fields').show();$('[id*="'+fId+'"].ignore').removeClass('ignore');result.push(fId);}}}}}
return result;}};$.fbuilder.controls['ffieldset']=function(){};$.extend($.fbuilder.controls['ffieldset'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Untitled",ftype:"ffieldset",fields:[],columns:1,show:function()
{return'<div class="fields '+this.csslayout+' '+this.name+' cff-container-field" id="field'+this.form_identifier+'-'+this.index+'"><FIELDSET id="'+this.name+'">'+((!/^\s*$/.test(this.title))?'<LEGEND>'+this.title+'</LEGEND>':'')+'</FIELDSET><div class="clearer"></div></div>';},after_show:function()
{$.fbuilder.controls['fcontainer'].prototype.after_show.call(this);},showHideDep:function(toShow,toHide,hiddenByContainer)
{return $.fbuilder.controls['fcontainer'].prototype.showHideDep.call(this,toShow,toHide,hiddenByContainer);}});$.fbuilder.controls['fdiv']=function(){};$.extend($.fbuilder.controls['fdiv'].prototype,$.fbuilder.controls['ffields'].prototype,{ftype:"fdiv",fields:[],columns:1,show:function()
{return'<div class="fields '+this.csslayout+' '+this.name+' cff-container-field" id="field'+this.form_identifier+'-'+this.index+'"><div id="'+this.name+'"></div><div class="clearer"></div></div>';},after_show:function()
{$.fbuilder.controls['fcontainer'].prototype.after_show.call(this);},showHideDep:function(toShow,toHide,hiddenByContainer)
{return $.fbuilder.controls['fcontainer'].prototype.showHideDep.call(this,toShow,toHide,hiddenByContainer);}});$.fbuilder.controls['fMedia']=function(){};$.extend($.fbuilder.controls['fMedia'].prototype,$.fbuilder.controls['ffields'].prototype,{ftype:"fMedia",sMediaType:"image",data:{image:{sWidth:"",sHeight:"",sSrc:"",sAlt:"",sLink:"",sTarget:"",sFigcaption:""},audio:{sWidth:"",sSrc:"",sSrcAlt:"",sControls:1,sLoop:0,sAutoplay:0,sMuted:0,sPreload:"auto",sFallback:"",sFigcaption:""},video:{sWidth:"",sHeight:"",sSrc:"",sSrcAlt:"",sPoster:"",sControls:1,sLoop:0,sAutoplay:0,sMuted:0,sPreload:"auto",sFallback:"",sFigcaption:""}},_show_image:function()
{var d=this.data.image,esc=$.fbuilder.htmlEncode,a=[],l=[],r='';if($.trim(d.sWidth))a.push('width="'+esc(d.sWidth)+'"');if($.trim(d.sHeight))a.push('height="'+esc(d.sHeight)+'"');if($.trim(d.sSrc))a.push('src="'+esc(d.sSrc)+'"');if($.trim(d.sAlt))a.push('alt="'+esc(d.sAlt)+'"');if($.trim(d.sLink))
{l.push('href="'+esc(d.sLink)+'"');if($.trim(d.sTarget))l.push('target="'+esc(d.sTarget)+'"');r='<a '+l.join(' ')+' ><img '+a.join(' ')+' /></a>';}
else
{r='<img '+a.join(' ')+' />';}
return r;},_show_audio_video:function(d,isV)
{var esc=$.fbuilder.htmlEncode,a=[],t=(isV)?'video':'audio';if($.trim(d.sWidth))a.push('width="'+esc(d.sWidth)+'"');if(isV&&$.trim(d.sHeight))a.push('height="'+esc(d.sHeight)+'"');if(isV&&$.trim(d.sPoster))a.push('poster="'+esc(d.sPoster)+'"');if($.trim(d.sSrc))a.push('src="'+esc(d.sSrc)+'"');if(d.sAutoplay)a.push('autoplay');if(d.sControls)a.push('controls');if(d.sLoop)a.push('loop');if(d.sMuted)a.push('muted');a.push('preload="'+esc(d.sPreload)+'"');return'<'+t+' '+a.join(' ')+'>'+(($.trim(d.sSrcAlt))?'<source src="'+esc(d.sSrcAlt)+'" />':'')+'<p>'+d.sFallback+'</p></'+t+'>';},_show_audio:function()
{return this._show_audio_video(this.data.audio,false);},_show_video:function()
{return this._show_audio_video(this.data.video,true);},show:function()
{return'<div class="fields '+this.csslayout+' '+this.name+' cff-media-field" id="field'+this.form_identifier+'-'+this.index+'"><div class="clearer"><div class="field" id="'+this.name+'">'+this['_show_'+this.sMediaType]()+'</div></div><span class="uh">'+this.data[this.sMediaType].sFigcaption+'</span><div class="clearer"></div></div>';}});$.fbuilder.controls['fButton']=function(){};$.extend($.fbuilder.controls['fButton'].prototype,$.fbuilder.controls['ffields'].prototype,{ftype:"fButton",sType:"button",sValue:"button",sOnclick:"",userhelp:"A description of the section goes here.",show:function()
{var esc=function(v){v=v.replace(/&lt/g,'&amp;').replace(/"/g,"&quot;").replace(/\n+/g,' ');return v;},type=this.sType,clss='';if(this.sType=='calculate')
{type='button';clss='calculate-button';}
else if(this.sType=='reset')
{clss='reset-button';}
return'<div class="fields '+this.csslayout+' '+this.name+' cff-button-field" id="field'+this.form_identifier+'-'+this.index+'"><input id="'+this.name+'" type="'+type+'" value="'+esc(this.sValue)+'" class="field '+clss+'" onclick="'+esc(this.sOnclick)+'" /><span class="uh">'+this.userhelp+'</span><div class="clearer"></div></div>';},after_show:function()
{$('#'+this.name).click(function()
{var e=$(this);if(e.hasClass('calculate-button'))
{var suffix=e.attr('id').match(/_\d+$/)[0],items=$.fbuilder['forms'][suffix].getItems();$.fbuilder['calculator'].defaultCalc('#'+e.closest('form').attr('id'));for(var i=0,h=items.length;i<h;i++)
{if(items[i].ftype=='fsummary')
{items[i].update();}}}
if(e.hasClass('reset-button'))
{setTimeout(function()
{var identifier=e.closest('form').attr('id').replace(/cp_calculatedfieldsf_pform/,'');$.fbuilder['showHideDep']({'formIdentifier':identifier});var page=parseInt(e.closest('.pbreak').attr('page'));if(page)
{$("#fieldlist"+identifier+" .pbreak").css("display","none");$("#fieldlist"+identifier+" .pbreak").find(".field").addClass("ignorepb");$("#fieldlist"+identifier+" .pb0").css("display","block");if($("#fieldlist"+identifier+" .pb0").find(".field").length>0)
{$("#fieldlist"+identifier+" .pb0").find(".field").removeClass("ignorepb");try
{$("#fieldlist"+identifier+" .pb0").find(".field")[0].focus();}
catch(e){}}}},50);}});}});$.fbuilder.controls['fhtml']=function(){};$.extend($.fbuilder.controls['fhtml'].prototype,$.fbuilder.controls['ffields'].prototype,{ftype:"fhtml",fcontent:"",show:function()
{return'<div class="fields '+this.csslayout+' '+this.name+' cff-html-field" id="field'+this.form_identifier+'-'+this.index+'"><div id="'+this.name+'" class="dfield">'+$('<div/>').html(this.fcontent).html()+'</div><div class="clearer"></div></div>';}});$.fbuilder.controls['facceptance']=function(){};$.extend($.fbuilder.controls['facceptance'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Accept terms and conditions",ftype:"facceptance",value:"I accept",required:true,url:"",message:"",show:function()
{var me=this,dlg='',label=me.title;if(!/^\s*$/.test(me.url))
{label='<a href="'+$.fbuilder.htmlEncode($.trim(me.url))+'" target="_blank">'+label+'</a>';}
else if(!/^\s*$/.test(me.message))
{label='<a href="javascript:void(0);" class="cff-open-dlg">'+label+'</a>';dlg+='<div class="cff-dialog hide"><span class="cff-close-dlg"></span><div class="cff-dialog-content">'+me.message+'</div></div>'}
return'<div class="fields '+me.csslayout+' '+me.name+' cff-checkbox-field" id="field'+me.form_identifier+'-'+me.index+'"><div class="dfield">'+'<div class="one_column"><label for="'+me.name+'"><input name="'+me.name+'" id="'+me.name+'" class="field required" value="'+$.fbuilder.htmlEncode(me.value)+'" vt="'+$.fbuilder.htmlEncode((/^\s*$/.test(me.value))?me.title:me.value)+'" type="checkbox" /> <span>'+
$.fbuilder.htmlDecode(label)+''+((me.required)?'<span class="r">*</span>':'')+'</span></label></div>'+dlg+'<span class="uh"></span></div><div class="clearer"></div></div>';},after_show:function()
{$(document).on('click','.cff-open-dlg',function(){var dlg=$(this).closest('.fields').find('.cff-dialog'),w=dlg.data('width'),h=dlg.data('height');dlg.removeClass('hide');if('undefined'==typeof w)w=MIN($(this).closest('form').width(),$(window).width(),dlg.width());if('undefined'==typeof h)h=MIN($(this).closest('form').height(),$(window).height(),dlg.height());dlg.data('width',w);dlg.data('height',h);dlg.css({'width':w+'px','height':h+'px','margin-top':(-1*h/2)+'px','margin-left':(-1*w/2)+'px'});});$(document).on('click','.cff-close-dlg',function(){$(this).closest('.cff-dialog').addClass('hide');});},val:function(raw)
{raw=raw||false;var e=$('[id="'+this.name+'"]:checked:not(.ignore)');if(e.length)
{var t=$.fbuilder.parseValStr(e[0].value,raw);if(!$.isNumeric(t))t=t.replace(/^"/,'').replace(/"$/,'');}
return(t)?(($.isNumeric(t))?t:'"'+t+'"'):0;}});$.fbuilder.controls['fCalculated']=function(){};$.extend($.fbuilder.controls['fCalculated'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Untitled",ftype:"fCalculated",predefined:"",required:false,size:"medium",eq:"",suffix:"",prefix:"",decimalsymbol:".",groupingsymbol:"",dependencies:[{'rule':'','complex':false,'fields':['']}],readonly:true,hidefield:false,show:function()
{return'<div class="fields '+this.csslayout+' '+this.name+' cff-calculated-field" id="field'+this.form_identifier+'-'+this.index+'" style="'+((this.hidefield)?'padding:0;margin:0;border:0;opacity:0;width:0;height:0;overflow:hidden;':'')+'"><label for="'+this.name+'">'+this.title+''+((this.required)?'<span class="r">*</span>':'')+'</label><div class="dfield"><input id="'+this.name+'" name="'+this.name+'" '+((this.readonly)?' readonly ':'')+' class="codepeoplecalculatedfield field '+this.size+((this.required)?" required":"")+'" type="'+((this.hidefield)?'hidden':'text')+'" value="'+this.predefined+'"/>'+((!this.hidefield)?'<span class="uh">'+this.userhelp+'</span>':'')+'</div><div class="clearer"></div></div>';},after_show:function()
{var me=this,configuration={"suffix":me.suffix,"prefix":me.prefix,"groupingsymbol":me.groupingsymbol,"decimalsymbol":me.decimalsymbol},dependencies=[];$.each(me.dependencies,function(i,d)
{d.rule=d.rule.replace(/^\s+/,'').replace(/\s+$/,'');if(d.rule!=''&&d.fields.length){var fields=[];$.each(d.fields,function(j,f){if(f!='')
{fields.push(f);}});if(fields.length){dependencies.push({'rule':d.rule,'fields':fields});}}});me.dependencies=dependencies;var eq=me.eq;eq=eq.replace(/\n/g,' ').replace(/fieldname(\d+)/g,"fieldname$1"+me.form_identifier).replace(/form_identifier/g,'\''+this['form_identifier']+'\'').replace(/;\s*\)/g,')').replace(/;\s*$/,'');if(!/^\s*$/.test(eq))
{$.fbuilder.calculator.addEquation(me.name,eq,configuration,dependencies,me.form_identifier);}
var e=$('[id="'+me.name+'"]');e.bind('calcualtedfield_changed',{obj:me},function(evt){if($.fbuilder['calculator'].getDepList(evt.data.obj.name,evt.data.obj.val(),evt.data.obj.dependencies))
{$.fbuilder.showHideDep({'formIdentifier':evt.data.obj.form_identifier,'fieldIdentifier':evt.data.obj.name,'throwEvent':false});}});},showHideDep:function(toShow,toHide,hiddenByContainer)
{var me=this,result=[];if($.fbuilder['calculator'].getDepList(me.name,me.val(),me.dependencies))
{var item=$('#'+me.name),identifier=me.form_identifier,isHidden=(typeof toHide[me.name]!='undefined'||typeof hiddenByContainer[me.name]!='undefined'),d,n,dep,clearRef=function(id){if(typeof toShow[id]!='undefined')
{delete toShow[id]['ref'][me.name];if($.isEmptyObject(toShow[id]['ref']))
delete toShow[id];}},hideField=function(id){$('[id*="'+id+'"],.'+id).closest('.fields').hide();$('[id*="'+id+'"]:not(.ignore)').addClass('ignore');toHide[id]={};};try
{d=item.attr('dep');if(typeof d!='undefined'&&!/^\s*$/.test(d))d=d.split(',');else d=[];n=item.attr('notdep');if(typeof n!='undefined'&&!/^\s*$/.test(n))n=n.split(',');else n=[];if(isHidden)
{n=n.concat(d);d=[];}
for(i=0;i<d.length;i++)
{if(!/fieldname/i.test(d[i]))continue;dep=d[i]+identifier;delete toHide[dep];if(typeof toShow[dep]=='undefined')
toShow[dep]={'ref':{}};toShow[dep]['ref'][me.name]=1;if(!(dep in hiddenByContainer))
{$('[id*="'+dep+'"],.'+dep).closest('.fields').show();$('[id*="'+dep+'"].ignore').removeClass('ignore');}
if($.inArray(dep,result)==-1)result.push(dep);}
for(i=0;i<n.length;i++)
{if(!/fieldname/i.test(n[i]))continue;dep=n[i]+identifier;clearRef(dep);if(typeof toShow[dep]=='undefined'&&typeof toHide[dep]=='undefined')hideField(dep);if($.inArray(dep,result)==-1)result.push(dep);}}
catch(e){}}
return result;},val:function(raw)
{raw=raw||false;var e=$('[id="'+this.name+'"]:not(.ignore)');if(e.length)
{var v=e.val();if(raw)return $.fbuilder.parseValStr(v,raw);v=$.trim(v);v=v.replace(new RegExp($.fbuilder['escape_symbol'](this.prefix),'g'),'').replace(new RegExp($.fbuilder['escape_symbol'](this.suffix),'g'),'');return $.fbuilder.parseVal(v,this.groupingsymbol,this.decimalsymbol);}
return 0;}});$.fbuilder['extend_window']=function(prefix,obj)
{for(method in obj)
{window[prefix+method]=(function(m)
{return function()
{return m.obj[m.method_name].apply(m.obj,arguments);};})({"method_name":method,'obj':obj});}};$.fbuilder['calculator']=(function()
{var validators=[];if(typeof $.fbuilder['modules']!='undefined')
{var modules=$.fbuilder['modules'];for(var module in modules)
{if(typeof modules[module]['callback']!='undefined')
{modules[module]['callback']();}
if(typeof modules[module]['validator']!='undefined')
{validators.push(modules[module]['validator']);}}}
_validate_result=function(v)
{if(validators.length)
{var h=validators.length;while(h--)
{if(validators[h](v))
{return true;}}}
else
{return true;}
return false;};_calculate=function(eq,suffix,__ME__)
{var _match,field_regexp=new RegExp('(fieldname\\d+'+suffix+')(_[cr]b\\d+)?(\\|r)?([\\D\\b])','i'),__ME__=(__ME__)?$.fbuilder['forms'][suffix].getItem(__ME__).val():'';window['getField']=$.fbuilder['forms'][suffix].getItem;$.fbuilder['currentFormId']=$.fbuilder['forms'][suffix].formId;eq='('+eq+')';while(_match=field_regexp.exec(eq))
{var field=$.fbuilder['forms'][suffix].getItem(_match[1]),v='';if(field)
{v=field.val((_match[3])?true:false);if(typeof v=='object'&&typeof window.JSON!='undefined')v=JSON.stringify(v);else if($.isNumeric(v))v='('+v+')';}
eq=eq.replace(_match[0],v+''+_match[4]);}
try
{var r=eval(eq.replace(/^\(/,'').replace(/\)$/,'').replace(/\b__ME__\b/g,__ME__));return(typeof r!='undefined'&&_validate_result(r))?r:false;}
catch(e)
{return false;}};_checkValueThrowingEquation=function(t)
{if(typeof t.attr('data-timeout')!='undefined')clearTimeout(t.attr('data-timeout'));if(typeof t.attr('data-previousvalue')=='undefined')t.attr('data-previousvalue',t.val());else
{if(t.val()==t.attr('data-previousvalue'))
{t.removeAttr('data-timeout');obj.Calculate(t[0]);return;}
t.attr('data-previousvalue',t.val());}
t.attr('data-timeout',setTimeout(_checkValueThrowingEquation,500,t));};var CalcFieldClss=function(){};CalcFieldClss.prototype={processing_queue:false,queued_equations:{},addEquation:function(calculated_field,equation,configuration,dependencies,form_identifier)
{var equation_result=$('[id="'+calculated_field+'"]');if(equation_result.length)
{var form=equation_result[0].form,equationObj,field,regexp=new RegExp('(fieldname\\d+)_'),match;if(typeof form.equations=='undefined')form['equations']=[];var i,j=-1,h=form.equations.length;for(i=0;i<h;i++)
{if(form.equations[i].result==calculated_field)break;if(form.equations[i].equation.match(calculated_field)){j=i;break;}}
if(i==h||j!=-1)
{equationObj={'result':calculated_field,'equation':equation,'conf':configuration,'dep':dependencies,'identifier':form_identifier};form.equations.splice(i,0,equationObj);while(match=regexp.exec(equation))
{field=$.fbuilder['forms'][form_identifier].getItem(match[1]+form_identifier);if(field)
{if(typeof field.usedInEquations=='undefined')field.usedInEquations=[];field.usedInEquations.push(equationObj);}
equation=equation.replace(new RegExp(match[0],'g'),'');}}}},enqueueEquation:function(form_identifier,equations)
{if(typeof this.queued_equations[form_identifier]=='undefined')
this.queued_equations[form_identifier]=[];var queue=this.queued_equations[form_identifier],f;for(var i=0,h=equations.length;i<h;i++)
{f=-1;for(var j=0,k=queue.length;j<k;j++)
{if(queue[j].result==equations[i].result)break;if(queue[j].equation.match(equations[i].result)){f=j;break;}}
if(j==k||f!=-1)
{queue.splice(j,0,equations[i]);}}},getDepList:function(calculated_field,value,dependencies)
{var list=[],list_h=[];if(value!==false&&dependencies.length)
{for(var i=0,h=dependencies.length;i<h;i++)
{try
{var rule=eval(dependencies[i].rule.replace(/value/gi,value));$.each(dependencies[i].fields,function(j,e)
{if(e!='')
{if(rule)
{var k=$.inArray(e,list_h);if(k!=-1)list_h.splice(k,1);if($.inArray(e,list)==-1)list.push(e);}
else
{if($.inArray(e,list)==-1)list_h.push(e);}}});}
catch(e)
{continue;}}}
$('[id="'+calculated_field+'"]').attr('dep',list.join(',')).attr('notdep',list_h.join(','));return list.length||list_h.length;},defaultCalc:function(form_identifier,recalculate)
{var form=$(form_identifier),fSec=form_identifier.match(/_\d+$/)[0],dep=false;if(form.length)
{if(typeof form[0].equations!='undefined')
{this.queued_equations[fSec]=form[0].equations.slice(0);this.processQueue(fSec);}
$(form).trigger('cpcff_default_calc');}},Calculate:function(field)
{if(field.id==undefined)return;var id=field.id.replace(/_[cr]b\d+$/i,''),fSec=id.match(/(_\d+)?_\d+$/),item,me=this;if(fSec)
{fSec=(typeof fSec[1]!='undefined')?fSec[1]:fSec[0];item=$.fbuilder['forms'][fSec].getItem(id);if(item&&typeof item['usedInEquations']!='undefined')
{me.enqueueEquation(fSec,item.usedInEquations);me.processQueue(fSec);}}},processQueue:function(fSec)
{if(this.processing_queue)return;this.processing_queue=true;if(typeof this.queued_equations[fSec]!='undefined')
{var queue=this.queued_equations[fSec],eq_obj;while(queue.length)
{eq_obj=queue.shift();$.fbuilder['currentEq']=eq_obj;var field=$('[id="'+eq_obj.result+'"]'),result=_calculate(eq_obj.equation,eq_obj.identifier,eq_obj.result),bk=field.data('bk');field.val((result!==false)?this.format(result,eq_obj.conf):'');if(bk!=field.val())
{field.trigger('calcualtedfield_changed');field.change();}
field.data('bk',field.val());}}
this.processing_queue=false;},format:function(value,config)
{if(!/^\s*$/.test(value))
{if($.isNumeric(value)&&!/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)/.test(value))
{var symbol=(value<0)?'-':'',parts=value.toString().replace("-","").split("."),counter=0,str='';if(config.groupingsymbol)
{for(var i=parts[0].length-1;i>=0;i--){counter++;str=parts[0][i]+str;if(counter%3==0&&i!=0)str=config.groupingsymbol+str;}
parts[0]=str;}
value=symbol+parts.join(config.decimalsymbol);}
if(config.prefix)
{value=config.prefix+value;}
if(config.suffix)
{value+=config.suffix;}}
return value;},unformat:function(field)
{var escape_symbol=$.fbuilder.escape_symbol;var eq=field[0].form.equations,v=field.val();for(var i=0,h=eq.length;i<h;i++)
{if(eq[i].result==field[0].id)
{var c=eq[i].conf;if(c.prefix&&!/^\s*$/.test(c.prefix))
{v=v.replace(new RegExp("^"+escape_symbol(c.prefix)),'');}
if(c.suffix&&!/^\s*$/.test(c.suffix))
{v=v.replace(new RegExp(escape_symbol(c.suffix)+"$"),'');}
if(!/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)/.test(v))
{if(c.groupingsymbol&&!/^\s*$/.test(c.groupingsymbol))
{v=v.replace(new RegExp(escape_symbol(c.groupingsymbol),'g'),'');}
if(c.decimalsymbol&&!/^\s*$/.test(c.decimalsymbol))
{v=v.replace(new RegExp(escape_symbol(c.decimalsymbol),'g'),'.');}}}}
return v;}};var obj=new CalcFieldClss();$(document).on('keyup change blur','[id="fbuilder"] :input',function(evt)
{var t=$(evt.target),f=t.closest('form'),evalequations=f.attr('data-evalequations'),evalequationsevent=f.attr('data-evalequationsevent');if(typeof evalequations!='undefined'&&evalequations*1==0&&!(t.hasClass('codepeoplecalculatedfield')&&evt.type=='change'))
{return;}
if(evt.type=='keyup')
{if('undefined'!=typeof evalequationsevent&&evalequationsevent*1==1)
{return;}
if(evt.keyCode&&(evt.keyCode>=33&&evt.keyCode<=40))return;_checkValueThrowingEquation(t);}
else
{if(t.hasClass('depItem')||(t.prop('tagName')=='INPUT'&&t.attr('type').toLowerCase()=='text'&&evt.type!='change'))
{return;}
obj.Calculate(t[0]);}});$(document).bind('showHideDepEvent',function(evt,form_identifier)
{var fId='#'+form_identifier,evalequations=$(fId).attr('data-evalequations');if(typeof evalequations=='undefined'||evalequations*1==1)obj.defaultCalc(fId);});return obj;})();try{!function(a){function f(a,b){if(!(a.originalEvent.touches.length>1)){a.preventDefault();var c=a.originalEvent.changedTouches[0],d=document.createEvent("MouseEvents");d.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),a.target.dispatchEvent(d)}}if(a.support.touch="ontouchend"in document,a.support.touch){var e,b=a.ui.mouse.prototype,c=b._mouseInit,d=b._mouseDestroy;b._touchStart=function(a){var b=this;!e&&b._mouseCapture(a.originalEvent.changedTouches[0])&&(e=!0,b._touchMoved=!1,f(a,"mouseover"),f(a,"mousemove"),f(a,"mousedown"))},b._touchMove=function(a){e&&(this._touchMoved=!0,f(a,"mousemove"))},b._touchEnd=function(a){e&&(f(a,"mouseup"),f(a,"mouseout"),this._touchMoved||f(a,"click"),e=!1)},b._mouseInit=function(){var b=this;b.element.bind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),c.call(b)},b._mouseDestroy=function(){var b=this;b.element.unbind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),d.call(b)}}}(jQuery);}catch(err){}if(typeof $.fn['fbuilder_serializeObject']=='undefined')
{$.fn.fbuilder_serializeObject=function()
{var o={},a=this.serializeArray();$.each(a,function(){if(/^fieldname\d+_\d+(\[\])?$/.test(this.name))this.name=this.name.match(/fieldname\d+/)[0];else return;if(o[this.name]){if(!o[this.name].push){o[this.name]=[o[this.name]];}
o[this.name].push(this.value||'');}else{o[this.name]=this.value||'';}});return o;};}
$.fn.fbuilder_localstorage=function(){var form=this,id=form.attr('id'),sq=(typeof id=='undefined')?1:id.replace(/[^\d]/g,''),localStore_obj,fields;if(sq=='')sq=1;localStore_obj=new $.fbuilder_localstorage(form,true);$(document).on('change','#'+id+' *',function(evt){if(typeof this['id']!='undefined'&&/^fieldname\d+_\d+$/i.test(this.id)&&typeof this['value']!='undefined')
{localStore_obj.set_fields();}});form.on('submit',function(){localStore_obj.clear_fields();});fields=localStore_obj.get_fields();if(!$.isEmptyObject(fields))
{if(typeof cpcff_default=='undefined')cpcff_default={};if(typeof cpcff_default[sq]=='undefined')cpcff_default[sq]={};cpcff_default[sq]=$.extend(cpcff_default[sq],fields);}
return this;}
$.fbuilder_localstorage=function(form,debug){this.form=form;this.id=form.attr('id')+'_'+form.find('[name="cp_calculatedfieldsf_id"]').val();this.debug=(typeof debug!='undefined'&&debug)?true:false;};$.fbuilder_localstorage.prototype=(function(){var is_available;function _log(mssg)
{if(typeof console!='undefined')console.log(mssg);};return{is_available:function(){if(typeof is_available!='undefined')return is_available;try{var storage=window['localStorage'],x='__storage_test__';storage.setItem(x,x);storage.removeItem(x);is_available=true;return true;}
catch(e){if(this.debug)_log('localStorage object is not available');is_available=false;return e instanceof DOMException&&(e.code===22||e.code===1014||e.name==='QuotaExceededError'||e.name==='NS_ERROR_DOM_QUOTA_REACHED')&&storage.length!==0;}},get_fields:function(){try{if(typeof this.fields=='undefined')this.fields=JSON.parse(localStorage.getItem(this.id));return this.fields;}catch(err){_log('Error reading the fields.');_log(err);}},set_fields:function(){try{this.fields=this.form.fbuilder_serializeObject();localStorage.setItem(this.id,JSON.stringify(this.fields));}catch(err){_log('Error saving the fields.');_log(err);}},clear_fields:function(){try{localStorage.removeItem(this.id);}catch(err){_log('Error deleting the fields.');_log(err);}}};})();var fcount=1;var fnum="_"+fcount;while(typeof window["cp_calculatedfieldsf_fbuilder_config"+fnum]!='undefined'||fcount<10)
{try{var cp_calculatedfieldsf_fbuilder_config=window["cp_calculatedfieldsf_fbuilder_config"+fnum];var f=$("#fbuilder"+fnum).fbuilder((typeof cp_calculatedfieldsf_fbuilder_config.obj=='string')?$.parseJSON(cp_calculatedfieldsf_fbuilder_config.obj):cp_calculatedfieldsf_fbuilder_config.obj);$("#cp_calculatedfieldsf_pform"+fnum).validate({ignore:".ignore,.ignorepb",errorElement:"div",errorPlacement:function(e,element)
{var _parent=element.closest('.dfield'),_uh=_parent.find('span.uh:visible');if(_uh.length)
e.appendTo(_uh);else
e.insertAfter(_parent);e.addClass('message').css('position','absolute');}});f.fBuild.loadData("form_structure"+fnum);}catch(e){}
fcount++;fnum="_"+fcount;}})(fbuilderjQuery);fbuilderjQuery.fbuilderGeneratorFlag=1;};fbuilderjQuery(fbuilderjQuery.fbuilderjQueryGenerator);fbuilderjQuery(window).on('load',fbuilderjQuery.fbuilderjQueryGenerator);