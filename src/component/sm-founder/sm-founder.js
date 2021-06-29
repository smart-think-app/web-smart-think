import { React } from 'react';
import './sm-founder.css'
import imageFounder from './founder.jpg'
function SmFounder() {
    return (
        <div className="sm-founder-body">
            <div className="sm-founder-title">Founder</div>
            <div className="w3-row">
                <div className="w3-col m6 w3-hide-small">
                    <img src={imageFounder} className=" w3-image" alt="Table Setting"/>
                </div>
                <div className="w3-col m6 w3-padding-large">
                    <div>
                        <h1 className="w3-center sm-founder-name">Trần Quốc Huy</h1>
                        <br/>
                        <h4 className="w3-center sm-founder-description">Having 2 years experience in building
                        and deploying many system base on Microservices, Kubernetes and over 1 years experience in researching 
                        Data Science </h4>
                        <br/>
                        <h4 className="w3-center sm-founder-description">"Dữ liệu không chỉ là để lưu trữ hay tính toán, nó còn là công cụ để chúng ta hiểu người dùng và
                        tạo ra nhu cầu ,sản phẩm từ họ. "</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SmFounder