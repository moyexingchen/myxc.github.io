//获取当前年份
var getCurrYear = function() {
	 const nowDate = new Date();
	 const currYear = nowDate.getFullYear();
	 return currYear;
 }
 $(function(){
	  //加载年份
	  var currYear = getCurrYear()
	  var copyrightText = currYear===2024?'2024':'2024-'+currYear
	  $("#copyright_year").text(copyrightText)
 });
