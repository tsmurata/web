//ファイルの更新日を取得
function getUpdate(fileName) {
	var obj = createRequest(); //リクエスト
	document.write("hai");
	document.write(fileName);
	if (obj) {
		//通信実行
		obj.open("get",fileName);
		obj.onreadystatechange = function() {
			//通信完了
			if (obj.readyState == 4 && obj.status == 200) {
				//読込後の処理
				var date = new Date(obj.getResponseHeader("last-modified"));
				document.getElementById("view").innerHTML = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes();
				document.write(”!!”,date);
			}
		}
		obj.send(null);
	}
}

//非同期通信オブジェクトの生成
function createRequest() {
	try {
		return new XMLHttpRequest();
	} catch (e) {
		try {
			return new ActiveXObject("Microsoft.XMLHTTP");
		} catch (e) {
			return null;
		}
	}
	return null;
}

function test(moji) {
	document.write("abc");
	return null;
}
