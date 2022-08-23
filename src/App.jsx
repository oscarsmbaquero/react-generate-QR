
import './App.css';
import QRCode from "qrcode";
import { useState } from 'react';

function App() {

  const [url, setUrl] = useState('');
  const [qr, setQr] = useState('');

  console.log(qr);
  const generateCode =(e)=>{
    e.preventDefault();

    QRCode.toDataURL(url,{
      width: 400,
      margin:2,
      color:{
        darkcolor:'#EEEEEEFF'
      }
    },(err,url)=>{
      if(err){
        return console.log(err);
      }
      setQr(url)
    
    })
  }
  return (
    <div className="App">
    <header className='header'>
      <h3>Convierte tu url en QR</h3>
      <form onSubmit={generateCode}>
        <input
          type='text'
          placeholder='Ingresa la url'
          value={url}
          onChange={(e)=> setUrl(e.target.value)}
        />
        <br/>
        <button type='submit'>Generar Código</button>
      </form>
      {qr && <div>
        <br/>
            <img src={qr} alt='imagen qr'/>
        <br/>
        <a href={qr} download='codeQR.png' style={{color:'white'}}>Descargar</a>
      </div>}
    </header>
    </div>
  );
}

export default App;
