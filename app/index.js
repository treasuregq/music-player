/**
 * Created by admin on 2018/2/27.
 */
import React from 'react';
import { render } from 'react-dom';
import Hello from './components/hello';
import { AppContainer } from 'react-hot-loader';    //热更新

render(
    <AppContainer>
        <Hello />
    </AppContainer>,
    document.getElementById('root')
);

if(module.hot) {
    module.hot.accept('./components/hello', ()=>{
        const NewHello = require('./components/hello').default;
        render(
            <AppContainer>
                <NewHello/>
            </AppContainer>,
            document.getElementById('root')
        )
    })
}



// module.hot.accept();  //热更新
console.log("---", React.version);