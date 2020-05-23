import React, {Component} from 'react';
import { Form, Button } from 'react-bootstrap' ;

class Upload extends Component{
    render(){
        return(

            <div>
                <Form>
                    <div className="center-upload">
                    
                        <Form.File 
                            id="custom-file"
                            label="Upload Dataset"
                            custom
                            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" 
                        />
                        
                        
                        <div className="upload-text">
                            Upload will only accept <strong>.xls</strong>, <strong>.xlsx </strong>and <strong>.csv</strong> files
                        </div>

                        <div className="center-upload-button">
                        <Button variant="primary">Analyse and Predict</Button>{' '}
                        </div>
                  
                    </div>
                </Form> 

            </div>
        )
    }
}
export default Upload;