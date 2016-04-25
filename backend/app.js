var express = require('express');
var request = require('request');
app = express();


// 這個number變數是訂單變數
var number = "adsf23fadse23we234";
var testurl = "http://62647842.ngrok.io/e"

// 產生檢查碼的表單
var formData = {
  MerchantID: "2000132",
  MerchantTradeNo: number,
  // 每次在執行這個程式時都要更改MerchantTradeNo
  MerchantTradeDate: "2016/04/21 16:18:02",
  PaymentType: "aio",
  TotalAmount: "1",
  TradeDesc: "1",
  ItemName: "1",
  ReturnURL: testurl,
  ChoosePayment: "Credit"
};


request.post({
  url: 'https://payment-stage.allpay.com.tw/AioHelper/GenCheckMacValue',
  formData: formData
}, function optionalCallback(err, httpResponse, body) {
  // body 這個變數是檢查碼

  if (err) {
    return console.error('upload failed:', err);
  }

  // 產出訂單的表單
  var formData2 = {
    MerchantID: "2000132",
    MerchantTradeNo: number,
    // 每次在執行這個程式時都要更改MerchantTradeNo
    MerchantTradeDate: "2016/04/21 16:18:02",
    PaymentType: "aio",
    TotalAmount: "1",
    TradeDesc: "1",
    ItemName: "1",
    ReturnURL: testurl,
    ChoosePayment: "Credit",
    CheckMacValue: body
  };

  app.get('/', function(req, res) {
    request.post({
      url: 'https://payment-stage.allpay.com.tw/Cashier/AioCheckOut/V2',
      formData: formData2
    }, function optionalCallback(err, httpResponse, body2) {
      if (err) {
        return console.error('upload failed:', err);
      }
      // console.log(httpResponse);

      var text = "https://payment-stage.allpay.com.tw/Cashier/AioCheckOut/V2";
      res.send(body2);

    });

  });




});

//
app.post('/e', function(req, res) {
  console.log(req.body);
  // debugger;
});






app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});





// https://graph.facebook.com/me?fields=posts&access_token= 填token
