import { useState, useEffect } from "react";

export default function RoleWriter(props) {
    const [curRole, setCurRole] = useState(0);
    const [curRoleText, setCurRoleText] = useState('');
    const [curIndex, setCurIndex] = useState(0);

    function changeRole() {
        setCurRole(prevCurRole => curRole + 1);
    }

    function addOneCharacter(text) {
        setCurRoleText(prevRoleText => prevRoleText + text[curIndex]);
        setCurIndex(prevCurIndex => prevCurIndex + 1);
    }

    function removeOneCharacter() {
        setCurRoleText(prevRoleText => prevRoleText.slice(0, -1));
    }

    function toNextRole() {
        changeRole();
        setCurRoleText('');
        setCurIndex(0);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            const text = props.roles[curRole % props.roles.length];
            const textEnded = !text[curIndex];
            if(textEnded) {
                if(curRoleText) {
                    if(curIndex === curRoleText.length) {
                        setTimeout(() => removeOneCharacter(), 2000);
                    } else {
                        removeOneCharacter();
                    }
                } else {
                    toNextRole();
                }
            } else {
                addOneCharacter(text);
            }
        }, !props.roles[curRole % props.roles.length][curIndex] && curRoleText? 100 : 250)

        return () => {
            clearTimeout(timer);
        }
    })

    return (
        <h1 className="role">{ curRoleText }</h1>
    )
}