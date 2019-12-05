import React, { ChangeEvent } from 'react';
import '../styles/ListItem.css';
import classNames from 'classnames';
import { observer } from 'mobx-react';

interface Props {
    title: string,
    checked: boolean,
    onChange: () => void
}

const ListItem = (props: Props) => {
    const { title, checked, onChange } = props;

    return (
        <div className="listItem">
            <div className={classNames("checkbox", {
                'checked': checked
            })} onClick={onChange}/>
            <h3>{title}</h3>
        </div>
    )
}

export default observer(ListItem);
