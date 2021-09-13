import React,{component} from 'react';
import Button from '@material-ui/core/Button';


class CaptureCode extends React.Component {
    constructor(props) {
        super(props);
        this.scan = this.scan.bind(this);
    }
    
   
    scan = () => {
        window.ScanditCamScan.scan('scanner-container')
        .then(resp => { 
            console.log(JSON.stringify(resp)); 
            document.getElementById('scanner-result').innerHTML=JSON.stringify(resp);
            })
        .catch(resp =>  { 
            console.log(JSON.stringify(resp)); 
            document.getElementById('scanner-result').innerHTML=JSON.stringify(resp);
            });
    }   

    render() {
       return (
           <div>
            
            <div id='scanner-container'></div>
            <div id='scanner-result'></div>
            <Button variant="contained" color="green" onClick={ () => this.scan() }>Capture</Button>
           </div>
        );
       }
 }
 
 export default CaptureCode;