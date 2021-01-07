import React from "react";
import styled from 'styled-components';

export const iconTypes = {
    googleIcon: 'GOOGLE_ICON',
}

// const iconSrc = {
//     GOOGLE_ICON: require(),
// }
//
// const circleStyles = css({
//
// });

const iconStyle = styled.div`
    width: 50px;
    height: 24px;
    marginRight: "1em";
    borderRadius: "50%";
    backgroundColor: "#f7f7f9";
    display: "flex-start";
    justifyContent: "flex-start";
`;

export default function Icon({ type }) {
    return (
         <div>
            <img src={process.env.PUBLIC_URL + 'googlelogo.svg'} />
        </div>
    )
};
