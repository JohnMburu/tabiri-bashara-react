import React, {Component} from 'react';
import { Form } from 'react-bootstrap' ;

class Upload extends Component{
    render(){
        return(

            <div>
                <div className="center-upload">
                    <Form>
                    <Form.File 
                        id="custom-file"
                        label="Upload Dataset"
                        custom
                        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" 
                    />
                    </Form>
                    <div className="upload-text">
                        Upload will only accept <strong>.xls</strong>, <strong>.xlsx </strong>and <strong>.csv</strong> files
                    </div>
                </div>

            </div>
        )
    }
}
export default Upload;