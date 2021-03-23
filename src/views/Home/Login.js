import React, { useState } from 'react';
import { Password } from 'primereact/password';
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext'
import { Card} from 'react-bootstrap'
import { Title } from '@material-ui/icons';
import { Button } from 'bootstrap';
import { Panel } from 'primereact/panel';
import '../estilos.css'
export default function Login() {
    const [value3, setValue3] = useState(null);
    const footer = (
        <>
            <Divider></Divider>
            <p className="p-mt-2">Sugerencias</p>
            <ul className="p-pl-2 p-ml-2 p-mt-0">
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
            </ul>
        </>
    );
    const cabezaCard= (
        <>
                <Title>Inicio de Session</Title>
                <img alt="Card" src="showcase/demo/images/usercard.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
                
        </>
    );
    const pieCard = (
        <span>
            <Button label="Save" icon="pi pi-check"></Button>
            <Button label="Cancel" icon="pi pi-times" className="p-button-secondary p-ml-2" />
        </span>
    );
    const loginAnteriorSinUsuo =(
        <div class="card position-absolute top-50 start-50 translate-middle" style={{width: '30rem'}}>
        <cabezaCard></cabezaCard>
        <div class="card-body">
        <h5 class="card-title">LOGIN SISTEMA VENTAS</h5>
        <span className="p-float-label">
                <InputText label="Ingrese Usuario" id="usuario" className="form-control" />
                <label htmlFor="usuario">Ingrese Usuario</label>
                </span>
                <br />
                <span className="p-float-label">
                <Password className="form-control" value={value3} onChange={(e) => setValue3(e.target.value)} toggleMask footer={footer} />
                <label htmlFor="password">Ingrese Password</label>
                </span>
        <a href="#" class="btn btn-primary">Login</a>
        </div>
        </div>
    );
    return (
        <Panel>
        <div class="login-wrap">
	<div class="login-html">
		<input id="tab-1" type="radio" name="tab" class="sign-in" checked /><label for="tab-1" class="tab" >Sign In</label>
		<input id="tab-2" type="radio" name="tab" class="for-pwd" /><label for="tab-2" class="tab" >Forgot Password</label>
		<div class="login-form">
			<div class="sign-in-htm">
				<div class="group">
					<label for="user" class="label">Username or Email</label>
					<input id="user" type="text" class="input" />
				</div>
				<div class="group">
					<label for="pass" class="label">Password</label>
					<input id="pass" type="password" class="input" data-type="password"/>
				</div>
				<div class="group">
					<input type="submit" class="button" value="Sign In" />
				</div>
				<div class="hr"></div>
			</div>
			<div class="for-pwd-htm">
				<div class="group">
					<label for="user" class="label">Username or Email</label>
					<input id="user" type="text" class="input" />
				</div>
				<div class="group">
					<input type="submit" class="button" value="Reset Password" />
				</div>
				<div class="hr"></div>
			</div>
		</div>
	</div>
</div>
        </Panel>
    )
}

