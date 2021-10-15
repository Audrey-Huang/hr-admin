import React,{Component} from "react";
import {Form} from "antd";

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return(
            <div class="form-wrap">
                <div class="form-header">
                    <h4 class="column">登录</h4>
                    <span>账号注册</span>
                </div>

            </div>
        )
    }
}
export default Login;