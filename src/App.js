import './App.css';
import  QRCode  from 'qrcode';
import { useState } from 'react';
import Liveqr from './Components/Liveqr';
import Input from './Components/Input';
function App() {
  const [qrval, setQrval] = useState("")
  const [qrUrl,setQrUrl] = useState("")
  const [amount, setAmount] = useState(0)
  const handleQr = ()=>{
    QRCode.toDataURL(qrval,{
      width:900,
      margin:3,
    },(err,url)=>{
      if (err){
        return console.log(err)
      }
      setQrUrl(url)
    })
  }
  const handleChange = (e)=>{
    // var payload = {
    //   "customer": {
    //     "email" : "sample@getintellisoft.com",
    //     "phonenumber": "08157948955",
    //     "name": "WIS Pro",
    //   },
    //   "tx_ref": "wis_pro_12345",
    //   "redirect_url": "",
    //   "currency": "NGN",
    //   "amount": parseFloat(e.target.value)
    // }
    fetch(`https://payload-x.com/createpayment.php?amount=${e.target.value}`, {
      method: "GET",
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setQrval(data.link)
      setAmount(e.target.value)
    handleQr()
    })
    
  }
  return (
    <div className="App">
      {
        qrval === "" ?
        <></>
        :
        <>
          <Liveqr qrval={qrval}/>
          <h2><b>Total Charge: NGN {amount}</b></h2>
        </>
        
      }
      
      <Input handleChange={handleChange}/>
      <a href={qrUrl} download={`${qrval}.png`}>download</a>
    </div>
  );
}

export default App;
