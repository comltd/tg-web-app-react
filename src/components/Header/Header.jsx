import React from 'react';


const Header = () => {
    const tg = window.Telegram.WebApp;
    
      const OnClose = () => {
    tg.close()

}
    return (
        <div className={'header'}>
            <Button onClick = {onClose}>Убрать</Button>
            <span className={'username'}>
                {tg.initDataUnsafe?.user?.username}
            </span>
        </div>
    );
};

export default Button;
