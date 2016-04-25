var express = require('express');
var request = require('request');

app = express();

// 產生檢查碼的表單
var formData = {
  MerchantID: "2000132",
  MerchantTradeNo: "12rfadf2qfasfd",
  MerchantTradeDate: "2016/04/21 16:18:02",
  PaymentType: "aio",
  TotalAmount: "1",
  TradeDesc: "1",
  ItemName: "1",
  ReturnURL: "http://73a638ba.ngrok.io/e",
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
    MerchantTradeNo: "12rfadf2qfasfd",
    MerchantTradeDate: "2016/04/21 16:18:02",
    PaymentType: "aio",
    TotalAmount: "1",
    TradeDesc: "1",
    ItemName: "1",
    ReturnURL: "http://73a638ba.ngrok.io/e",
    ChoosePayment: "Credit",
    CheckMacValue: body
  };

  request.post({
    url: 'https://payment-stage.allpay.com.tw/Cashier/AioCheckOut/V2',
    formData: formData2
  }, function optionalCallback(err, httpResponse, body2) {
    if (err) {
      return console.error('upload failed:', err);
    }
    // console.log(httpResponse);

    console.log( body2);
  });



});

//










app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});





// https://graph.facebook.com/me?fields=posts&access_token= 填token
