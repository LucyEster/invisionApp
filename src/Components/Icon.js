import React from "react";
import styled from 'styled-components';

export const iconTypes = {
    googleIcon: 'GOOGLE_ICON',
}

export default function Icon({ type }) {
    return (
         <div>
            <img src={process.env.PUBLIC_URL + 'googlelogo.svg'} />
        </div>
    )
};
