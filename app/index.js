/**
 * Created by admin on 2018/2/27.
 */
import React from 'react';
import { render } from 'react-dom';
import Root from './root';
import { AppContainer } from 'react-hot-loader';    //热更新

render(
    <AppContainer>
        <Root />
    </AppContainer>,
    document.getElementById('root')
);

if(module.hot) {
    module.hot.accept('./root', ()=>{
        const NewRoot = require('./root').default;
        render(
            <AppContainer>
                <NewRoot/>
            </AppContainer>,
            document.getElementById('root')
        )
    })
}



// module.hot.accept();  //热更新
console.log("---", React.version);