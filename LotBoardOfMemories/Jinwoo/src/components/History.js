import React from 'react'
import styled from 'styled-components';

const History = ({choiced,prize}) => {

    function WhatIsPrize(i){
        let whatIsPrize;
        if(prize[1].includes(i)){
            whatIsPrize = "--> ★1등★";
        }
        else if(prize[2].includes(i)){
            whatIsPrize = "--> 2등";
        }
        else if(prize[3].includes(i)){
            whatIsPrize = "--> 3등";
        }
        else if(prize[4].includes(i)){
            whatIsPrize = "--> 4등";
        }
        else if(prize[5].includes(i)){
            whatIsPrize = "--> 5등";
        }
        else{
            whatIsPrize = "--> 꽝";
        }
        return whatIsPrize;
    }
    

    return (
        <HistoryContainer>
            {choiced.map((choice, index) =>
                <span key={index}>{choice}번 {WhatIsPrize(choice)}<br/></span>
            )}
        </HistoryContainer>
    )
}

export default History

const HistoryContainer = styled.div`
    font-size: 16px;
    position: absolute;
    right: 0px;
    width: 250px;
    height: 75vh;
    text-align: left;
    border: 1px solid #999999;
    font-size: 26px;
    overflow: scroll;
`;
